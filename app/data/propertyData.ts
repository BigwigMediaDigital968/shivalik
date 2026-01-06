/* ================= PROPERTY TYPES ================= */

export type PropertyPurpose = "buy" | "rent" | "lease";

export type PropertyType = "apartment" | "villa" | "builder-floor" | "plot";

/* ================= PROPERTY INTERFACE ================= */

export interface Property {
  id: number;
  slug: string;

  title: string;
  description: string;

  purpose: PropertyPurpose;
  type: PropertyType;

  location: {
    city: string;
    area: string;
    address: string;
    latitude?: number;
    longitude?: number;
  };

  price: number; // in INR
  priceLabel: string; // e.g. "₹1.85 Cr", "₹45,000 / month"

  areaSqft: number;
  bedrooms?: number;
  bathrooms?: number;
  balconies?: number;
  parking?: number;

  images: string[]; // gallery
  coverImage: string;

  highlights: string[];
  features: string[];
  amenities: string[];

  nearby: {
    schools?: string[];
    hospitals?: string[];
    malls?: string[];
    metro?: string[];
    highways?: string[];
  };

  possessionStatus: "ready-to-move" | "under-construction";
  furnishing: "unfurnished" | "semi-furnished" | "fully-furnished";

  builder?: string;
  yearBuilt?: number;

  createdAt: string;
}

/* ================= PROPERTY DATA ================= */

export const propertyData: Property[] = [
  {
    id: 1,
    slug: "3-bhk-luxury-apartment-gurgaon",

    title: "3 BHK Luxury Apartment",
    description:
      "Spacious 3 BHK luxury apartment located in a prime residential society of Gurgaon, offering modern amenities, excellent connectivity, and premium lifestyle living.",

    purpose: "buy",
    type: "apartment",

    location: {
      city: "Gurgaon",
      area: "Sector 65",
      address: "Golf Course Extension Road, Gurgaon",
    },

    price: 18500000,
    priceLabel: "₹1.85 Cr",

    areaSqft: 1850,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    parking: 1,

    coverImage: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    ],

    highlights: [
      "Low density premium society",
      "Large balconies with open views",
      "Italian marble flooring",
      "24x7 power backup",
    ],

    features: [
      "Modular kitchen",
      "VRV air conditioning",
      "Video door phone",
      "Smart home automation",
    ],

    amenities: [
      "Swimming pool",
      "Clubhouse",
      "Gymnasium",
      "Children’s play area",
      "Jogging track",
      "24x7 security",
    ],

    nearby: {
      schools: ["DPS International", "St. Xavier’s High School"],
      hospitals: ["Medanta Hospital", "Artemis Hospital"],
      malls: ["M3M IFC", "South Point Mall"],
      metro: ["Sector 55–56 Metro Station"],
      highways: ["NH-48"],
    },

    possessionStatus: "ready-to-move",
    furnishing: "semi-furnished",

    builder: "ABC Developers",
    yearBuilt: 2022,

    createdAt: "2026-01-01",
  },

  {
    id: 2,
    slug: "4-bhk-independent-villa-golf-course-road",

    title: "4 BHK Independent Luxury Villa",
    description:
      "Ultra-luxury independent villa with private garden and premium finishes, located on Golf Course Road. Ideal for families seeking exclusivity and privacy.",

    purpose: "buy",
    type: "villa",

    location: {
      city: "Gurgaon",
      area: "Golf Course Road",
      address: "Near Rapid Metro, DLF Phase 5",
    },

    price: 52000000,
    priceLabel: "₹5.20 Cr",

    areaSqft: 4200,
    bedrooms: 4,
    bathrooms: 5,
    balconies: 3,
    parking: 3,

    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
    ],

    highlights: [
      "Independent villa with private lawn",
      "Premium luxury fittings",
      "Low traffic neighborhood",
      "High-end gated community",
    ],

    features: [
      "Private garden",
      "Servant room",
      "Home elevator provision",
      "Solar power support",
    ],

    amenities: [
      "Private garden",
      "CCTV surveillance",
      "Power backup",
      "Rainwater harvesting",
    ],

    nearby: {
      schools: ["The Heritage School", "Shiv Nadar School"],
      hospitals: ["Fortis Hospital", "Paras Hospital"],
      malls: ["DLF Mega Mall", "One Horizon Center"],
      metro: ["Phase 1 Metro Station"],
      highways: ["Golf Course Road"],
    },

    possessionStatus: "ready-to-move",
    furnishing: "fully-furnished",

    builder: "Luxury Estates Pvt Ltd",
    yearBuilt: 2021,

    createdAt: "2026-01-01",
  },
  {
    id: 3,
    slug: "3-bhk-luxury-apartment-gurgaon",

    title: "3 BHK Luxury Apartment",
    description:
      "Spacious 3 BHK luxury apartment located in a prime residential society of Gurgaon, offering modern amenities, excellent connectivity, and premium lifestyle living.",

    purpose: "rent",
    type: "apartment",

    location: {
      city: "Gurgaon",
      area: "Sector 65",
      address: "Golf Course Extension Road, Gurgaon",
    },

    price: 18500000,
    priceLabel: "₹1.85 Cr",

    areaSqft: 1850,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    parking: 1,

    coverImage: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    ],

    highlights: [
      "Low density premium society",
      "Large balconies with open views",
      "Italian marble flooring",
      "24x7 power backup",
    ],

    features: [
      "Modular kitchen",
      "VRV air conditioning",
      "Video door phone",
      "Smart home automation",
    ],

    amenities: [
      "Swimming pool",
      "Clubhouse",
      "Gymnasium",
      "Children’s play area",
      "Jogging track",
      "24x7 security",
    ],

    nearby: {
      schools: ["DPS International", "St. Xavier’s High School"],
      hospitals: ["Medanta Hospital", "Artemis Hospital"],
      malls: ["M3M IFC", "South Point Mall"],
      metro: ["Sector 55–56 Metro Station"],
      highways: ["NH-48"],
    },

    possessionStatus: "ready-to-move",
    furnishing: "semi-furnished",

    builder: "ABC Developers",
    yearBuilt: 2022,

    createdAt: "2026-01-01",
  },

  {
    id: 4,
    slug: "4-bhk-independent-villa-golf-course-road",

    title: "4 BHK Independent Luxury Villa",
    description:
      "Ultra-luxury independent villa with private garden and premium finishes, located on Golf Course Road. Ideal for families seeking exclusivity and privacy.",

    purpose: "lease",
    type: "villa",

    location: {
      city: "Gurgaon",
      area: "Golf Course Road",
      address: "Near Rapid Metro, DLF Phase 5",
    },

    price: 52000000,
    priceLabel: "₹5.20 Cr",

    areaSqft: 4200,
    bedrooms: 4,
    bathrooms: 5,
    balconies: 3,
    parking: 3,

    coverImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
    ],

    highlights: [
      "Independent villa with private lawn",
      "Premium luxury fittings",
      "Low traffic neighborhood",
      "High-end gated community",
    ],

    features: [
      "Private garden",
      "Servant room",
      "Home elevator provision",
      "Solar power support",
    ],

    amenities: [
      "Private garden",
      "CCTV surveillance",
      "Power backup",
      "Rainwater harvesting",
    ],

    nearby: {
      schools: ["The Heritage School", "Shiv Nadar School"],
      hospitals: ["Fortis Hospital", "Paras Hospital"],
      malls: ["DLF Mega Mall", "One Horizon Center"],
      metro: ["Phase 1 Metro Station"],
      highways: ["Golf Course Road"],
    },

    possessionStatus: "ready-to-move",
    furnishing: "fully-furnished",

    builder: "Luxury Estates Pvt Ltd",
    yearBuilt: 2021,

    createdAt: "2026-01-01",
  },
];
