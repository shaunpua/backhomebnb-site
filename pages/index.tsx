import Head from 'next/head';
import { useEffect, useState, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AirbnbUnits from '../components/AirbnbUnits';
import HeroBooking from '../components/HeroBooking';
import Testimonials from '../components/Testimonials';
import { UNITS } from '../lib/units';

const SLIDES = [
  {
    src: '/images/IMG_3592.PNG',
    headline: 'Your Home in the Heart of BGC',
    sub: 'Modern studios with city views · Uptown Bonifacio Global City',
  },
  {
    src: '/images/AFO08136.jpeg',
    headline: 'Premium Stays, Thoughtfully Designed',
    sub: 'Full kitchen · In-unit washer · High-speed WiFi',
  },
  {
    src: '/images/IMG_1307.JPG',
    headline: 'Wake Up to the BGC Skyline',
    sub: 'From the 8th to the 27th floor · South & North Wings',
  },
];

const FEATURES = [
  { icon: '🏙️', title: 'Prime Location', desc: "Steps from Uptown Mall, top restaurants, and BGC's iconic art scene. Everything you need is walkable." },
  { icon: '🏠', title: 'Full Home Comforts', desc: 'Equipped kitchen, in-unit washer, Smart TV, and fast WiFi. Live like a local, not a hotel guest.' },
  { icon: '🔒', title: 'Secure & Hosted', desc: "24/7 building security, concierge, gym and pool access. We're available throughout your stay." },
];

const NEARBY = [
  { label: 'Uptown Mall', dist: '5 min walk' },
  { label: 'BGC Bus Terminal', dist: '10 min walk' },
  { label: 'McKinley Hill', dist: '15 min' },
  { label: 'Makati CBD', dist: '20 min' },
  { label: 'NAIA Airport', dist: '30 min via SLEX' },
];

const LD_JSON = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'BackHome AIRBNB',
  description: 'Premium short-stay studio apartments in Uptown BGC, Taguig City, Metro Manila.',
  url: 'https://backhomebnb.com',
  telephone: '+639175726782',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Uptown Bonifacio',
    addressLocality: 'Taguig City',
    addressRegion: 'Metro Manila',
    addressCountry: 'PH',
  },
  priceRange: '₱₱',
};

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const advance = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(advance, 5000);
    return () => clearInterval(timer);
  }, [paused, advance]);

  function handleTouchStart(e: React.TouchEvent) {
    setTouchStartX(e.touches[0].clientX);
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (touchStartX === null) return;
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      setCurrent((prev) =>
        delta > 0 ? (prev + 1) % SLIDES.length : (prev - 1 + SLIDES.length) % SLIDES.length
      );
      setPaused(true);
      setTimeout(() => setPaused(false), 8000);
    }
    setTouchStartX(null);
  }

  return (
    <>
      <Head>
        <title>BackHome AIRBNB — Premium Short Stays in BGC Taguig</title>
        <meta name="description" content="Book premium studio apartments in Uptown Bonifacio Global City (BGC). City views, high-speed WiFi, full kitchen. Check availability and book on Airbnb." />
        <meta name="keywords" content="BGC Airbnb, Uptown BGC studio, short term rental Taguig, Bonifacio Global City accommodation, BGC condo for rent" />
        <meta property="og:title" content="BackHome AIRBNB — Premium Short Stays in BGC" />
        <meta property="og:description" content="Premium studio apartments in the heart of Uptown BGC. Your home away from home." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://backhomebnb.com" />
        <link rel="canonical" href="https://backhomebnb.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD_JSON) }} />
      </Head>

      {/* Transparent header over hero */}
      <Header transparent />

      <main>
        {/* ── Hero Carousel ─────────────────────────────────────── */}
        {/*
          Layout contract:
          - section: fixed height, NO overflow-hidden (so the booking bar can bleed below)
          - .slides-clip: absolute inset-0, overflow-hidden — this clips the images only
          - .booking-bar: absolute bottom-0, translate-y-1/2 — floats half-in, half-out
          - Because the section has no overflow-hidden, the booking bar is NOT clipped

          Height: fixed 500px desktop / 420px mobile — NOT full viewport.
          object-cover crops images to fill the frame (industry standard for property sites).
        */}
        {/*
          Ideal carousel height ratio: 50-60% of viewport height.
          clamp(420px, 58vh, 700px) = adapts from small phone → large desktop without
          ever being so tall it dominates or so short it looks like a banner.
          On 1080p: 58vh = ~626px. On 900px screen: ~522px. On 667px phone: ~387px.
        */}
        <section
          className="relative min-h-[320px] md:min-h-[420px]"
          style={{ height: 'clamp(320px, 58vh, 700px)', touchAction: 'pan-y' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Image slides — clipped to section bounds, not overflowing */}
          <div className="absolute inset-0 overflow-hidden">
            {SLIDES.map((slide, i) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
                aria-hidden={i !== current}
              >
                <img
                  src={slide.src}
                  alt={slide.headline}
                  className="w-full h-full object-cover object-center"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
            ))}
            {/* Gradient: dark top for nav readability → light middle → heavy dark at bottom for text + card contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />
          </div>

          {/* Hero text — in top 55% of carousel, clear of booking form */}
          <div className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center justify-center text-white text-center px-4" style={{ height: '58%' }}>
            <img src="/logo.svg" alt="BackHome" className="h-14 w-14 md:h-16 md:w-16 rounded-full mb-3 shadow-lg" />
            <p className="text-brand-gold font-semibold tracking-widest text-[10px] uppercase mb-2">
              Uptown Bonifacio Global City · Taguig
            </p>
            <h1
              className="text-2xl md:text-4xl font-display font-bold mb-1.5 max-w-xl leading-tight"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}
            >
              {SLIDES[current].headline}
            </h1>
            <p
              className="text-white/90 text-xs md:text-sm font-medium"
              style={{ textShadow: '0 1px 6px rgba(0,0,0,0.7)' }}
            >
              {SLIDES[current].sub}
            </p>
          </div>

          {/* Slide dots — between text and form */}
          <div className="absolute top-[58%] left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setPaused(true); setTimeout(() => setPaused(false), 8000); }}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'bg-white w-6 h-2' : 'bg-white/40 w-2 h-2 hover:bg-white/70'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next arrows — desktop only */}
          {[
            { dir: -1, label: 'Previous', pos: 'left-4' },
            { dir: 1,  label: 'Next',     pos: 'right-4' },
          ].map(({ dir, label, pos }) => (
            <button
              key={label}
              onClick={() => {
                setCurrent((prev) => (prev + dir + SLIDES.length) % SLIDES.length);
                setPaused(true);
                setTimeout(() => setPaused(false), 8000);
              }}
              className={`absolute top-1/3 -translate-y-1/2 ${pos} z-10 bg-white/10 hover:bg-white/25 border border-white/20 text-white p-2 rounded-full transition-all backdrop-blur-sm hidden md:flex items-center justify-center`}
              aria-label={label}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d={dir === -1 ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
              </svg>
            </button>
          ))}

          {/* Booking bar — desktop only, floats in lower carousel */}
          <div
            className="hidden md:block absolute top-[74%] left-0 right-0 z-20 px-6 -translate-y-1/2"
          >
            <div className="max-w-2xl mx-auto">
              <HeroBooking />
            </div>
          </div>
        </section>


        {/* Mobile availability form — shown below carousel on small screens */}
        <div id="availability" className="md:hidden bg-brand-cream px-4 pt-4 pb-2">
          <HeroBooking />
        </div>

        {/* ── Airbnb Listings ────────────────────────────────────── */}
        <div id="units">
          <AirbnbUnits />
        </div>

        {/* ── Testimonials ───────────────────────────────────────── */}
        <Testimonials />

        {/* ── Why BackHome ────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Why Stay with BackHome</h2>
              <p className="text-gray-400 text-sm">More than a room — a real home experience</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {FEATURES.map((f) => (
                <div key={f.title} className="bg-brand-cream rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">{f.icon}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Location ────────────────────────────────────────────── */}
        <section id="location" className="py-20 px-4 bg-brand-cream">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-3">Where We Are</p>
                <h2 className="section-title">Uptown Bonifacio, BGC</h2>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Located in Uptown Bonifacio — one of BGC's most vibrant and walkable neighborhoods. Minutes from the best dining, nightlife, and shopping in Metro Manila.
                </p>
                <ul className="space-y-3">
                  {NEARBY.map((item) => (
                    <li key={item.label} className="flex items-center gap-3 text-sm">
                      <span className="text-brand-gold font-bold">→</span>
                      <span className="font-medium text-gray-700">{item.label}</span>
                      <span className="text-gray-400 text-xs">{item.dist}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-2xl overflow-hidden h-80 shadow-lg">
                <iframe
                  src="https://maps.google.com/maps?width=600&height=400&hl=en&q=8th+Avenue,+Taguig,+1630+Metro+Manila&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  title="BackHome BGC Location"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section className="relative py-24 px-4 text-white text-center overflow-hidden">
          <img
            src="/images/AFO08136.jpeg"
            alt="BackHome bedroom"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-green/80" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <img src="/logo.svg" alt="BackHome" className="h-16 w-16 mx-auto mb-5 rounded-full shadow-lg" />
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Book Your Stay?</h2>
            <p className="text-green-200 mb-8 text-sm leading-relaxed">
              Check availability above and book directly through Airbnb with your dates pre-filled. Have questions? Message us on WhatsApp — we reply fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#availability" className="btn-gold">
                Check Availability
              </a>
              <a
                href="https://wa.me/639175726782"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/15 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/25 transition-colors"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
