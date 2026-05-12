import { useState } from 'react';

const FAQ_ITEMS = [
  {
    q: 'How does check-in work?',
    a: 'Self check-in via lockbox — your unique door code is sent on the morning of your check-in date. No need to coordinate with anyone.',
  },
  {
    q: 'Is parking available?',
    a: 'Yes, overnight parking is available for an additional fee. Message us before your stay to reserve a slot.',
  },
  {
    q: 'How flexible are check-in and check-out times?',
    a: 'Very flexible. Just let us know your estimated arrival time and we will make sure everything is ready for you.',
  },
  {
    q: 'When can we use the pool?',
    a: 'Pool access is available Tuesday to Friday. Full schedule details are shared upon booking.',
  },
  {
    q: 'What appliances are in the unit?',
    a: 'Every unit comes with a washer and dryer, fully equipped kitchen, Smart TV, and high-speed WiFi. Extra beds can be provided on request.',
  },
  {
    q: 'Can I request cleaning during my stay?',
    a: 'Yes, mid-stay cleaning is available on request for an additional fee. Just message us to arrange.',
  },
  {
    q: 'Is there a check-in lounge?',
    a: 'Our check-in lounge is available 24/7, so early arrivals and late check-outs are never a problem.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background image */}
      <img
        src="/images/IMG_1550.JPG"
        alt="BackHome BGC interior"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-3">Know Before You Go</p>
          <h2 className="text-3xl font-display font-bold text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-white/60 text-sm">Everything you need to know about your stay.</p>
        </div>

        <div className="space-y-2">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-white font-semibold text-sm">{item.q}</span>
                <svg
                  className={`w-4 h-4 text-white/60 shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <p className="px-5 pb-4 text-white/75 text-sm leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-white/60 text-sm mb-4">Still have questions?</p>
          <a
            href="https://m.me/61587232237194"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm"
          >
            💬 Message Us on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
