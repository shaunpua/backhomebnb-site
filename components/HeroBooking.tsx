import { useState } from 'react';
import { UNITS } from '../lib/units';

interface Result {
  id: string;
  slug: string;
  tag: string;
  name: string;
  basePrice: number;
  available: boolean;
  airbnbUrl: string;
}

function todayStr() {
  return new Date().toISOString().split('T')[0];
}
function tomorrowStr() {
  return new Date(Date.now() + 86400000).toISOString().split('T')[0];
}

export default function HeroBooking() {
  const [unitId, setUnitId] = useState('');
  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(tomorrowStr);
  const [results, setResults] = useState<Result[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const nights =
    checkIn && checkOut && checkIn < checkOut
      ? Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000)
      : 0;

  async function check() {
    if (!checkIn || !checkOut || checkIn >= checkOut) {
      setError('Please select a valid date range.');
      return;
    }
    setError('');
    setLoading(true);
    setResults(null);
    try {
      const res = await fetch('/api/availability', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ unit_id: unitId || undefined, check_in: checkIn, check_out: checkOut }),
      });
      const data = await res.json();
      setResults(data.results);
    } catch {
      setError('Could not check availability — please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full relative">
      {/* Booking bar */}
      <div className="bg-white rounded-2xl shadow-2xl px-3 py-3 md:px-6 md:py-5">
        <div className="grid grid-cols-2 md:flex md:flex-row gap-2 md:gap-3 md:items-end">
          {/* Unit — full width on mobile */}
          <div className="col-span-2 md:flex-1 md:min-w-0">
            <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
              Unit
            </label>
            <select
              value={unitId}
              onChange={(e) => { setUnitId(e.target.value); setResults(null); }}
              className="w-full border border-gray-200 rounded-lg px-2.5 py-2 text-xs text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green/30 h-9"
            >
              <option value="">Any Available Unit</option>
              {UNITS.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.tag} · {u.name.split('·')[1]?.trim()}
                </option>
              ))}
            </select>
          </div>

          {/* Check-in */}
          <div className="md:flex-1 md:min-w-0">
            <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              min={todayStr()}
              onChange={(e) => { setCheckIn(e.target.value); setResults(null); }}
              className="w-full border border-gray-200 rounded-lg px-2.5 py-2 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green/30 h-9"
            />
          </div>

          {/* Check-out */}
          <div className="md:flex-1 md:min-w-0">
            <label className="block text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1">
              Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              min={checkIn || todayStr()}
              onChange={(e) => { setCheckOut(e.target.value); setResults(null); }}
              className="w-full border border-gray-200 rounded-lg px-2.5 py-2 text-xs text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-green/30 h-9"
            />
          </div>

          {/* Button */}
          <button
            onClick={check}
            disabled={loading}
            className="col-span-2 md:col-auto w-full md:w-auto bg-brand-green text-white font-bold px-5 py-2 rounded-lg hover:bg-brand-green-mid transition-colors disabled:opacity-50 text-xs shrink-0 h-9"
          >
            {loading ? 'Checking…' : 'Check Availability'}
          </button>
        </div>

        {error && <p className="text-red-500 text-xs mt-2 ml-1">{error}</p>}
      </div>

      {/* Results — floats below the form, does not push page content */}
      {results && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 bg-white rounded-2xl shadow-2xl px-5 py-4 space-y-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
              {nights} night{nights !== 1 ? 's' : ''} · {results.filter(r => r.available).length} available
            </span>
            <button
              onClick={() => setResults(null)}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1 -mr-1 rounded-full hover:bg-gray-100"
              aria-label="Close results"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {results.map((r) => (
            <div key={r.id} className={`flex items-center justify-between gap-3 py-2 border-b border-gray-50 last:border-0 ${!r.available ? 'opacity-75' : ''}`}>
              <div className="min-w-0">
                <span className="font-semibold text-sm text-gray-900 block truncate">{r.name}</span>
                {r.available ? (
                  <span className="text-xs text-green-600">Available for these dates</span>
                ) : (
                  <span className="text-xs text-gray-400">Not available for these dates</span>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {r.available ? (
                  <a
                    href={r.airbnbUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-green text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-brand-green-mid transition-colors whitespace-nowrap"
                  >
                    Book →
                  </a>
                ) : (
                  <>
                    <a
                      href={r.airbnbUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-brand-green border border-brand-green px-3 py-1.5 rounded-lg hover:bg-brand-green hover:text-white transition-colors whitespace-nowrap"
                    >
                      Check dates →
                    </a>
                    <a
                      href="https://m.me/61587232237194"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap"
                    >
                      💬 Message Us
                    </a>
                  </>
                )}
              </div>
            </div>
          ))}
          {results.some((r) => !r.available) && results.some((r) => r.available) && (
            <p className="text-xs text-gray-400 border-t border-gray-50 pt-2">
              {results.filter((r) => !r.available).map((r) => r.tag).join(', ')} not available for these dates.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
