const LISTINGS = [
  {
    id: '1620439741705365914',
    label: 'Spacious',
    stars: 5.0,
    wing: 'South Wing',
    floor: '8th Floor',
    photo: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1620439741705365914/original/0a72b208-e74b-4a0a-a841-268c234452ca.png?im_w=720',
    subtitle: 'Studio · South Wing · 8th Floor',
    beds: '1 queen bed',
  },
  {
    id: '1620713886488161103',
    label: 'Stylish',
    stars: 5.0,
    wing: 'South Wing',
    floor: '27th Floor',
    photo: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1620713886488161103/original/39e0c7bc-c506-4833-8866-6f5c61a79c44.jpeg?im_w=720',
    subtitle: 'Studio · South Wing · 27th Floor',
    beds: 'Panoramic city views',
  },
  {
    id: '1517430394200754768',
    label: 'Modern',
    stars: 4.96,
    wing: 'South Wing',
    floor: '10th Floor',
    photo: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1517430394200754768/original/1b86410c-d994-4d51-a025-93e08fa5842c.jpeg?im_w=720',
    subtitle: 'Studio · South Wing · 10th Floor',
    beds: '2 beds · 1 bath',
  },
  {
    id: '1448597918228438935',
    label: 'Tranquil',
    stars: 5.0,
    wing: 'North Wing',
    floor: '11th Floor',
    photo: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1448597918228438935/original/2fa5d23a-9ab0-4b25-9f36-9ba1e7cc675c.jpeg?im_w=720',
    subtitle: 'Studio · North Wing · 11th Floor',
    beds: 'Garden & pool views',
  },
  {
    id: '1645705689778174939',
    label: 'Rustic',
    stars: 5.0,
    wing: 'BGC',
    floor: 'Uptown',
    photo: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1645705689778174939/original/e3e9b00b-c3c4-42b6-982f-cccd6e39309d.jpeg?im_w=720',
    subtitle: 'Studio · Uptown BGC',
    beds: '1 double bed',
  },
];

export default function AirbnbUnits() {
  return (
    <section id="units" className="py-12 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-title">Browse Our Listings</h2>
          <p className="text-gray-400 text-sm">All units are in Uptown BGC · Taguig City</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {LISTINGS.map((listing) => (
            <a
              key={listing.id}
              href={`https://www.airbnb.com/rooms/${listing.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl overflow-hidden bg-white hover:shadow-md transition-shadow duration-300"
            >
              {/* Photo */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src={listing.photo}
                  alt={listing.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* 1 Bedroom tag */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
                  1 Bedroom
                </span>
              </div>

              {/* Info — Airbnb style */}
              <div className="px-1 pt-3 pb-2">
                <div className="flex items-start justify-between gap-2 mb-0.5">
                  <p className="font-semibold text-gray-900 text-sm leading-snug">
                    Studio in BGC, Taguig
                  </p>
                  <div className="flex items-center gap-0.5 shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-brand-gold fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                    <span className="text-xs font-semibold text-gray-800">{listing.stars.toFixed(2)}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs">{listing.label} · {listing.subtitle.split('·').slice(1).join('·').trim()}</p>
                <p className="text-gray-500 text-xs mb-2.5">{listing.beds}</p>
                <div className="flex justify-end">
                  <span className="flex items-center gap-1 bg-[#FF5A5F] text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 16.292c-.43 1.017-1.26 1.708-2.25 1.708-.646 0-1.229-.258-1.688-.646l-1.624-1.408-1.624 1.408c-.459.388-1.042.646-1.688.646-.99 0-1.82-.691-2.25-1.708-.646-1.53.344-3.585 2.854-6.012.43-.43.885-.86 1.378-1.29l1.33-1.117 1.33 1.117c.494.43.948.86 1.378 1.29 2.51 2.427 3.5 4.482 2.854 6.012z"/>
                    </svg>
                    View on Airbnb
                  </span>
                </div>
              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  );
}
