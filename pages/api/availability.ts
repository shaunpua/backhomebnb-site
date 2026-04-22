import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import { UNITS } from '../../lib/units';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!,
);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { unit_id, check_in, check_out } = req.body as {
    unit_id?: string;
    check_in?: string;
    check_out?: string;
  };

  if (!check_in || !check_out || check_in >= check_out) {
    return res.status(400).json({ error: 'Valid check_in and check_out required' });
  }

  const targetUnits = unit_id ? UNITS.filter((u) => u.id === unit_id) : UNITS;

  const results = await Promise.all(
    targetUnits.map(async (unit) => {
      const { data, error } = await supabase
        .from('airbnb_bookings')
        .select('reservation_id')
        .eq('property_id', unit.id)
        .neq('status', 'cancelled')   // includes: upcoming, in_progress, complete, blocked
        .lt('check_in', check_out)
        .gt('check_out', check_in)
        .limit(1);

      const available = !error && (data?.length ?? 0) === 0;
      const bookUrl = `${unit.airbnbUrl}?check_in=${check_in}&check_out=${check_out}`;

      return {
        id: unit.id,
        slug: unit.slug,
        tag: unit.tag,
        name: unit.name,
        basePrice: unit.basePrice,
        available,
        airbnbUrl: available ? bookUrl : unit.airbnbUrl,
      };
    }),
  );

  res.status(200).json({ check_in, check_out, results });
}
