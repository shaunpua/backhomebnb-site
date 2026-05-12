export interface Unit {
  id: string;
  slug: string;
  tag: string;
  label: string;
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
    label: 'Spacious',
    name: 'One Bedroom | Spacious | BGC',
    fullName: 'BackHome BGC — Spacious One Bedroom in Uptown BGC',
    listingId: '1620439741705365914',
    airbnbUrl: 'https://www.airbnb.com/rooms/1620439741705365914',
    location: 'Uptown BGC, Taguig City',
    neighborhood: 'Uptown Bonifacio, BGC',
    shortDesc: 'Spacious studio with city views and full amenities in the heart of BGC.',
    description:
      'Settle into this thoughtfully designed studio at Uptown BGC. Perfect for solo travelers or couples, the unit features a fully equipped kitchen, high-speed WiFi, in-unit washer and dryer, and a comfortable work-from-anywhere setup — steps from Uptown Mall, Uptown Parade, and the best of BGC.',
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    basePrice: 2800,
    amenities: [
      'High-speed WiFi',
      'Air Conditioning',
      'Full Kitchen',
      'Washer & Dryer',
      'Smart TV',
      'Swimming Pool',
      'Concierge',
      '24/7 Security',
      'Paid Parking Available',
    ],
    highlights: [
      'City Views',
      'Steps from Uptown Mall',
      'Pool Access (Tue–Fri)',
      'Fast WiFi — work-friendly',
    ],
  },
  {
    id: 'our27a',
    slug: '27a-sw',
    tag: 'South Wing',
    label: 'Rustic',
    name: 'One Bedroom | Rustic | BGC',
    fullName: 'BackHome BGC — Rustic One Bedroom in Uptown BGC',
    listingId: '1620713886488161103',
    airbnbUrl: 'https://www.airbnb.com/rooms/1620713886488161103',
    location: 'Uptown BGC, Taguig City',
    neighborhood: 'Uptown Bonifacio, BGC',
    shortDesc: 'High-floor studio with panoramic BGC skyline views.',
    description:
      'Experience the full BGC skyline from this character-filled high-floor studio. Warm interiors, sweeping panoramic views, and everything you need for a comfortable short-term stay — walkable to Uptown Mall, Mitsukoshi BGC, and top dining in Bonifacio Global City.',
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    basePrice: 3200,
    amenities: [
      'High-speed WiFi',
      'Air Conditioning',
      'Full Kitchen',
      'Washer & Dryer',
      'Smart TV',
      'Swimming Pool',
      'Concierge',
      '24/7 Security',
      'Paid Parking Available',
    ],
    highlights: [
      'Panoramic BGC Views',
      'BGC Skyline at Night',
      'Steps from Uptown Mall',
      'Pool Access (Tue–Fri)',
    ],
  },
  {
    id: '10c1-sw-our',
    slug: '10c1-sw',
    tag: 'South Wing',
    label: 'Modern',
    name: 'One Bedroom | Modern | BGC',
    fullName: 'BackHome BGC — Modern One Bedroom in Uptown BGC',
    listingId: '1517430394200754768',
    airbnbUrl: 'https://www.airbnb.com/rooms/1517430394200754768',
    location: 'Uptown BGC, Taguig City',
    neighborhood: 'Uptown Bonifacio, BGC',
    shortDesc: 'Modern studio with premium finishes and city views in BGC.',
    description:
      'A modern, well-appointed studio at Uptown BGC. Designed for comfort and productivity, this unit features premium finishes, a fully equipped kitchen, and everything you need for a seamless short-term rental stay in the heart of Bonifacio Global City.',
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    basePrice: 2900,
    amenities: [
      'High-speed WiFi',
      'Air Conditioning',
      'Full Kitchen',
      'Washer & Dryer',
      'Smart TV',
      'Swimming Pool',
      'Concierge',
      '24/7 Security',
      'Paid Parking Available',
    ],
    highlights: [
      'City Views',
      'Steps from Uptown Mall',
      'Pool Access (Tue–Fri)',
      'Work-friendly setup',
    ],
  },
  {
    id: '11b-nw-our',
    slug: '11b-nw',
    tag: 'North Wing',
    label: 'Stylish',
    name: 'One Bedroom | Stylish | BGC',
    fullName: 'BackHome BGC — Stylish One Bedroom in Uptown BGC',
    listingId: '1448597918228438935',
    airbnbUrl: 'https://www.airbnb.com/rooms/1448597918228438935',
    location: 'Uptown BGC, Taguig City',
    neighborhood: 'Uptown Bonifacio, BGC',
    shortDesc: 'Stylish North Wing studio with garden and pool views in BGC.',
    description:
      'Step into this stylish studio in the quieter North Wing of Uptown BGC. Enjoy refreshing garden and pool views, a fully equipped kitchen, and a serene atmosphere — just minutes from the vibrant BGC dining and nightlife strip.',
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    basePrice: 2700,
    amenities: [
      'High-speed WiFi',
      'Air Conditioning',
      'Full Kitchen',
      'Washer & Dryer',
      'Smart TV',
      'Swimming Pool',
      'Concierge',
      '24/7 Security',
      'Paid Parking Available',
    ],
    highlights: [
      'Garden & Pool Views',
      'Quieter North Wing',
      'Steps from Uptown Mall',
      'Pool Access (Tue–Fri)',
    ],
  },
  {
    id: 'our22enw',
    slug: 'bgc-studio',
    tag: 'BGC Studio',
    label: 'Tranquil',
    name: 'One Bedroom | Tranquil | BGC',
    fullName: 'BackHome BGC — Tranquil One Bedroom in BGC',
    listingId: '1645705689778174939',
    airbnbUrl: 'https://www.airbnb.com/rooms/1645705689778174939',
    location: 'Bonifacio Global City, Taguig',
    neighborhood: 'BGC, Taguig City',
    shortDesc: 'Tranquil studio in the heart of Bonifacio Global City, BGC.',
    description:
      "A peaceful, well-designed studio in BGC. Featuring warm interiors, a fully equipped kitchen, high-speed WiFi, washer and dryer, and convenient access to BGC's best restaurants, Landers superstore, and Mitsukoshi BGC.",
    bedrooms: 0,
    bathrooms: 1,
    maxGuests: 2,
    basePrice: 2800,
    amenities: [
      'High-speed WiFi',
      'Air Conditioning',
      'Full Kitchen',
      'Washer & Dryer',
      'Smart TV',
      'Swimming Pool',
      'Concierge',
      '24/7 Security',
    ],
    highlights: [
      'Peaceful BGC Studio',
      'Fast WiFi — work-friendly',
      'Near Landers & Mitsukoshi',
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
