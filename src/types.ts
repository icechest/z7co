export type Season = 'Spring' | 'Summer' | 'Fall' | 'Winter';

export type PropertyCategory = 'Glass House' | 'Nordic Cabin' | 'Wild Campsite' | 'Geodesic Dome' | 'A-Frame' | 'Estate';

export interface RentalProperty {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: PropertyCategory;
  pricePerNight: number;
  location: string;
  coordinates: string;
  capacity: {
    guests: number;
    bedrooms: number;
    beds: number;
    baths: number;
  };
  acreage: number;
  featuredImage: string;
  gallery: string[];
  amenities: string[];
  highlights: string[];
  featured: boolean;
  elevation: string;
  checkInTime: string;
  checkOutTime: string;
  rating: number;
  reviewsCount: number;
  rules: string[];
}

export type AdventureDifficulty = 'Easy' | 'Moderate' | 'Challenging' | 'Expert';

export interface Adventure {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  season: Season;
  duration: string;
  difficulty: AdventureDifficulty;
  price: number;
  featuredImage: string;
  gallery: string[];
  description: string;
  itinerary: { time: string; activity: string }[];
  gearProvided: string[];
  bringAlong: string[];
  groupSizeLimit: number;
  elevationGain?: string;
  bestMonths: string;
  guide: {
    name: string;
    role: string;
    avatar: string;
  };
}

export type ProductCategory = 'Gear' | 'Apparel' | 'Local Provisions';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  image: string;
  inStock: boolean;
  specs: string[];
  weight?: string;
  origin?: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BookingDetails {
  propertyId?: string;
  propertyTitle?: string;
  adventureId?: string;
  adventureTitle?: string;
  startDate: string;
  endDate?: string;
  guests: number;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests?: string;
  totalEstimate: number;
}

export interface QuickEscapePackage {
  id: string;
  title: string;
  tagline: string;
  season: Season;
  driveTime: string;
  suitableFor: string;
  property: RentalProperty;
  adventure: Adventure;
  provisionPack: Product[];
  packagePrice: number;
  savings: number;
}
