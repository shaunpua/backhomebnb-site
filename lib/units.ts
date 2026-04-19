export interface Unit {
  id: string;
  slug: string;
  tag: string;
  name: string;
  fullName: string;
  listingId: string;
  airbnbUrl: string;
  location: string;
  neighborhood: string;
  shortDesc: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  basePrice: number;
  amenities: string[];
  highlights: string[];
}

export const UNITS: Unit[] = [
  {
    id: 'our8x',
    slug: '8x-sw',
    tag: 'South Wing',
    name: 'Unit 8X · South Wing',
    fullName: 'Unit 8X South Wing — BackHome BGC',
    listingId: '1620439741705365914',
    airbnbUrl: 'https://www.airbnb.com/rooms/1620439741705365914',
    location: 'Uptown BGC, Taguig City',
    neighborhood: 'Uptown Bonifacio, BGC',
    shortDesc: 'Cozy studio on the 8th floor with city views and full amenities.',
    description:
      'Settle into this thoughtfully designed studio at Uptown BGC. Perfect for solo travelers or couples, the unit features a fully equipped kitchen, high-speed WiFi, and a comfortable work-from-anywhere setup — all just steps from the best dining and nightlife in the city.',
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    basePrice: 2800,
    amenities: [
      'High-speed WiFi',
      'Air Conditioning',
      'Full Kitchen',
      'In-unit Washer',
      'Smart TV',
      'Gym Access',
      'Swimming Pool',
      'Concierge',
      '24/7 Security',
      'Parking Available',
    ],
    highlights: [
      '8th Floor City View',
      'Walking distance to Uptown Mall',
      'Near BGC bus stops',
      'Fast WiFi — work-friendly',
    ],
  },
  {
    id: 'our27a',
    slug: '27a-sw',
    tag: 'South Wing',
    name: 'Unit 27A · South Wing',
    fullName: 'Unit 27A South Wing — BackHome BGC',
    listingId: '1620713886488161103',
    airbnbUrl: 'https://www.airbnb.com/rooms/1620713886488161103',
    location: 'Uptown BGC, Taguig City',
    neighborhood: 'Uptown Bonifacio, BGC',
    shortDesc: 'High-floor studio with panoramic BGC skyline views.',
    description:
      'Experience the full BGC skyline from this spacious high-floor studio on the 27th floor. Sweeping panoramic views await while you stay close to everything — Uptown Mall, top restaurants, and the iconic art installations of Bonifacio Global City.',
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    basePrice: 3200,
    amenities: [
      'High-speed WiFi',
      'Air Conditioning',
      'Full Kitchen',
      'In-unit Washer',
      'Smart TV',
      'Gym Access',
      'Swimming Pool',
      'Concierge',
      '24/7 Security',
      'Parking Available',
    ],
    highlights: [
      '27th Floor Panoramic Views',
      'BGC Skyline at Night',
      'Walking distance to Uptown Mall',
      'Fast WiFi — work-friendly',
    ],
  },
  {
    id: '10c1-sw-our',
    slug: '10c1-sw',
    tag: 'South Wing',
    name: 'Unit 10C1 · South Wing',
    fullName: 'Unit 10C1 South Wing — BackHome BGC',
    listingId: '1517430394200754768',
    airbnbUrl: 'https://www.airbnb.com/rooms/1517430394200754768',
    location: 'Uptown BGC, Taguig City',
    neighborhood: 'Uptown Bonifacio, BGC',
    shortDesc: 'Modern studio with premium finishes and city views.',
    description:
      'A modern, well-appointed studio at Uptown BGC. Designed for comfort and productivity, this unit features premium finishes, a fully equipped kitchen, and everything you need for a seamless short-term stay in the heart of BGC.',
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    basePrice: 2900,
    amenities: [
      'High-speed WiFi',
      'Air Conditioning',
      'Full Kitchen',
      'In-unit Washer',
      'Smart TV',
      'Gym Access',
      'Swimming Pool',
      'Concierge',
      '24/7 Security',
      'Parking Available',
    ],
    highlights: [
      '10th Floor City View',
      'Walking distance to Uptown Mall',
      'Near BGC bus stops',
      'Work-friendly setup',
    ],
  },
  {
    id: '11b-nw-our',
    slug: '11b-nw',
    tag: 'North Wing',
    name: 'Unit 11B · North Wing',
    fullName: 'Unit 11B North Wing — BackHome BGC',
    listingId: '1448597918228438935',
    airbnbUrl: 'https://www.airbnb.com/rooms/1448597918228438935',
    location: 'Uptown BGC, Taguig City',
    neighborhood: 'Uptown Bonifacio, BGC',
    shortDesc: 'Stylish North Wing studio with garden and pool views.',
    description:
      'Step into this stylish studio in the quieter North Wing of Uptown BGC. Enjoy refreshing garden and pool views, a fully equipped kitchen, and a serene atmosphere — while being just minutes from the vibrant BGC strip.',
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    basePrice: 2700,
    amenities: [
      'High-speed WiFi',
      'Air Conditioning',
      'Full Kitchen',
      'In-unit Washer',
      'Smart TV',
      'Gym Access',
      'Swimming Pool',
      'Concierge',
      '24/7 Security',
      'Parking Available',
    ],
    highlights: [
      'North Wing — Quieter Side',
      'Garden & Pool Views',
      'Walking distance to Uptown Mall',
      'Fast WiFi — work-friendly',
    ],
  },
  {
    id: 'our-new-unit',
    slug: 'bgc-studio',
    tag: 'BGC Studio',
    name: 'Studio · BGC',
    fullName: 'Studio Unit BGC — BackHome',
    listingId: '1645705689778174939',
    airbnbUrl: 'https://www.airbnb.com/rooms/1645705689778174939',
    location: 'Bonifacio Global City, Taguig',
    neighborhood: 'BGC, Taguig City',
    shortDesc: 'Bright and modern studio in the heart of Bonifacio Global City.',
    description:
      "A bright, well-designed studio in BGC. Featuring modern interiors, a fully equipped kitchen, high-speed WiFi, and convenient access to BGC's best restaurants, malls, and transit hubs.",
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    basePrice: 2800,
    amenities: [
      'High-speed WiFi',
      'Air Conditioning',
      'Full Kitchen',
      'In-unit Washer',
      'Smart TV',
      'Gym Access',
      'Swimming Pool',
      'Concierge',
      '24/7 Security',
    ],
    highlights: [
      'Modern BGC Studio',
      'Fast WiFi — work-friendly',
      'Near BGC dining & transit',
      'Full kitchen & laundry',
    ],
  },
];

export function getUnitBySlug(slug: string): Unit | undefined {
  return UNITS.find((u) => u.slug === slug);
}

export function getUnitById(id: string): Unit | undefined {
  return UNITS.find((u) => u.id === id);
}
