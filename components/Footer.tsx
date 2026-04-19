export default function Footer() {
  return (
    <footer className="bg-brand-green text-white pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="BackHome AIRBNB" className="h-12 w-12 rounded-full bg-white" />
              <div>
                <p className="font-bold text-lg leading-none">BackHome</p>
                <p className="text-green-300 text-xs tracking-widest uppercase mt-0.5">AIRBNB · BGC</p>
              </div>
            </div>
            <p className="text-green-200 text-sm leading-relaxed max-w-xs">
              Premium short-stay studios in the heart of Uptown Bonifacio Global City. Your home away from home.
            </p>
          </div>

          {/* Units */}
          <div>
            <p className="font-semibold text-brand-gold mb-4 text-sm uppercase tracking-wider">Our Units</p>
            <ul className="space-y-2.5 text-sm text-green-200">
              {['Spacious', 'Stylish', 'Modern', 'Tranquil', 'Rustic'].map((label) => (
                <li key={label}>
                  <a href="#units" className="hover:text-white transition-colors">
                    {label} · 1 Bedroom · Uptown BGC
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold text-brand-gold mb-4 text-sm uppercase tracking-wider">Get in Touch</p>
            <ul className="space-y-3 text-sm text-green-200">
              <li>
                <a
                  href="https://m.me/61587232237194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>💬</span> Message on Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61587232237194"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>📘</span> Facebook Page
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@backhomebgcvacationhomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>🎵</span> TikTok
                </a>
              </li>
              <li>
                <a
                  href="mailto:pua.properties@gmail.com"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span>✉️</span> pua.properties@gmail.com
                </a>
              </li>
              <li className="text-green-300 text-xs mt-2">Uptown Bonifacio, BGC · Taguig City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-green-400">
          <p>© {new Date().getFullYear()} BackHome AIRBNB. All rights reserved.</p>
          <p>backhomebnb.com</p>
        </div>
      </div>
    </footer>
  );
}
