import Script from 'next/script';

const LISTINGS = [
  { id: '1620439741705365914', label: 'Spacious', stars: 5.0  },
  { id: '1620713886488161103', label: 'Stylish',  stars: 5.0  },
  { id: '1517430394200754768', label: 'Modern',   stars: 4.96 },
  { id: '1448597918228438935', label: 'Tranquil', stars: 5.0  },
  { id: '1645705689778174939', label: 'Rustic',   stars: 5.0  },
];

export default function AirbnbUnits() {
  return (
    <section id="units" className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title">Browse Our Listings</h2>
          <p className="text-gray-400 text-sm">All units are in Uptown BGC · Taguig City</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {LISTINGS.map((listing, i) => {
            const isLastOdd = i === LISTINGS.length - 1 && LISTINGS.length % 2 !== 0;
            return (
              <div
                key={listing.id}
                className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col bg-white border border-gray-100 ${isLastOdd ? 'sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full' : ''}`}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-3 pt-2.5 pb-1.5">
                  <div>
                    <span className="bg-brand-green/10 text-brand-green text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                      1 Bedroom
                    </span>
                    <p className="font-bold text-gray-900 text-xs mt-1">{listing.label}</p>
                    <p className="text-[9px] text-gray-400">Uptown · BGC</p>
                  </div>
                  <div className="flex items-center gap-0.5 shrink-0">
                    <span className="text-brand-gold text-xs">★</span>
                    <span className="text-xs font-semibold text-gray-700">{listing.stars.toFixed(2)}</span>
                  </div>
                </div>

                {/* Airbnb embed — fills card body */}
                <div className="airbnb-embed-wrapper">
                  <div
                    className="airbnb-embed-frame"
                    data-id={listing.id}
                    data-view="home"
                    data-hide-price="true"
                    style={{ width: '450px', height: '220px', margin: 0 }}
                  />
                </div>

                {/* Footer — small button right-aligned */}
                <div className="px-3 py-2 flex justify-end border-t border-gray-50">
                  <a
                    href={`https://www.airbnb.com/rooms/${listing.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 bg-[#FF5A5F] text-white text-[11px] font-bold px-3 py-1.5 rounded-lg hover:bg-[#e0484d] transition-colors"
                  >
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 16.292c-.43 1.017-1.26 1.708-2.25 1.708-.646 0-1.229-.258-1.688-.646l-1.624-1.408-1.624 1.408c-.459.388-1.042.646-1.688.646-.99 0-1.82-.691-2.25-1.708-.646-1.53.344-3.585 2.854-6.012.43-.43.885-.86 1.378-1.29l1.33-1.117 1.33 1.117c.494.43.948.86 1.378 1.29 2.51 2.427 3.5 4.482 2.854 6.012z"/>
                    </svg>
                    View on Airbnb
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Script src="https://www.airbnb.com/embeddable/airbnb_jssdk" strategy="lazyOnload" />
    </section>
  );
}
