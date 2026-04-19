import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Props {
  transparent?: boolean;
}

export default function Header({ transparent = false }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!transparent) return;
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [transparent]);

  const solid = !transparent || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-white border-b border-gray-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img
            src="/logo.svg"
            alt="BackHome AIRBNB"
            className={`h-9 w-9 rounded-full transition-all ${solid ? '' : 'ring-2 ring-white/30'}`}
          />
          <div className="leading-none">
            <span className={`font-bold text-sm block ${solid ? 'text-brand-green' : 'text-white'}`}>
              BackHome
            </span>
            <span className={`text-[9px] font-bold tracking-widest block uppercase ${solid ? 'text-brand-gold' : 'text-white/70'}`}>
              BGC Stays
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {(['/#units', '/#availability', '/#location'] as const).map((href, i) => (
            <Link
              key={href}
              href={href}
              className={`hover:text-brand-green transition-colors ${solid ? 'text-gray-600' : 'text-white/90 hover:text-white'}`}
            >
              {['Our Units', 'Availability', 'Location'][i]}
            </Link>
          ))}
          <a
            href="https://m.me/61587232237194"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg font-semibold transition-colors text-xs ${
              solid
                ? 'bg-brand-green text-white hover:bg-brand-green-mid'
                : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
            }`}
          >
            Message Us
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 ${solid ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 text-sm font-medium shadow-lg">
          {['/#units', '/#availability', '/#location'].map((href, i) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="block text-gray-700 hover:text-brand-green">
              {['Our Units', 'Availability', 'Location'][i]}
            </Link>
          ))}
          <a
            href="https://m.me/61587232237194"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-brand-green text-white text-center py-2.5 rounded-lg"
          >
            Message Us
          </a>
        </div>
      )}
    </header>
  );
}
