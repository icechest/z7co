import React, { useState, useMemo } from 'react';
import { RentalProperty } from '../types';
import { MapPin, Users, Bed, Bath, Sparkles, Filter, ArrowRight, Star, Trees } from 'lucide-react';

interface RentalsSectionProps {
  properties: RentalProperty[];
  onSelectProperty: (property: RentalProperty) => void;
  onBookProperty: (property: RentalProperty) => void;
  initialCategory?: string;
}

export const RentalsSection: React.FC<RentalsSectionProps> = ({
  properties,
  onSelectProperty,
  onBookProperty,
  initialCategory = 'All'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [guestFilter, setGuestFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['All', 'Glass House', 'Nordic Cabin', 'Wild Campsite', 'Geodesic Dome', 'A-Frame', 'Estate'];

  const filteredProperties = useMemo(() => {
    return properties
      .filter((prop) => {
        if (selectedCategory !== 'All' && prop.category !== selectedCategory) {
          return false;
        }
        if (guestFilter === '1-2' && prop.capacity.guests > 2) return false;
        if (guestFilter === '3-4' && (prop.capacity.guests < 3 || prop.capacity.guests > 4)) return false;
        if (guestFilter === '5+' && prop.capacity.guests < 5) return false;
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.pricePerNight - b.pricePerNight;
        if (sortBy === 'price-desc') return b.pricePerNight - a.pricePerNight;
        if (sortBy === 'rating') return b.rating - a.rating;
        // Default: featured first
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [properties, selectedCategory, guestFilter, sortBy]);

  return (
    <section id="rentals-catalog" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#5B8266] mb-2">
            <Trees className="w-3.5 h-3.5 text-[#5B8266]" />
            <span>Short Term Rentals & Campsites</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1F3B3D] tracking-tight">
            Curated Wilderness Retreats
          </h2>
          <p className="text-base sm:text-lg text-[#1F3B3D]/70 max-w-2xl mt-2 font-light">
            Architectural glass pavilions, cliffside timber cabins, and safari outposts. Every stay includes turnkey contactless access and pre-stocked hearth wood.
          </p>
        </div>

        {/* Quick Sorting */}
        <div className="flex items-center gap-3 self-start md:self-auto">
          <label className="text-xs uppercase tracking-wider font-bold text-[#1F3B3D]/60 whitespace-nowrap">
            Sort by:
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            id="rentals-sort-select"
            className="bg-[#E6ECE8] text-[#1F3B3D] text-xs font-semibold px-3 py-2 rounded-xl border border-[#1F3B3D]/10 focus:outline-none cursor-pointer"
          >
            <option value="featured">Featured First</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Guest Rating</option>
          </select>
        </div>
      </div>

      {/* Category Pills & Filters Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#1F3B3D]/10 mb-10">
        
        {/* Category horizontal scroll / wrap */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-cat-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#1F3B3D] text-[#F8F6F1] shadow-sm'
                  : 'bg-[#E6ECE8]/80 text-[#1F3B3D]/80 hover:bg-[#E6ECE8] hover:text-[#1F3B3D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Guest Size Quick Filter */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-xs font-bold text-[#5B8266] uppercase tracking-wider">
            Guests:
          </span>
          {['all', '1-2', '3-4', '5+'].map((val) => (
            <button
              key={val}
              id={`guest-filter-${val}`}
              onClick={() => setGuestFilter(val)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                guestFilter === val
                  ? 'bg-[#D26B5B] text-white'
                  : 'bg-[#E6ECE8]/60 text-[#1F3B3D]/70 hover:bg-[#E6ECE8]'
              }`}
            >
              {val === 'all' ? 'Any' : val}
            </button>
          ))}
        </div>

      </div>

      {/* Properties Grid */}
      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              className="group bg-[#F8F6F1] rounded-3xl overflow-hidden border border-[#1F3B3D]/10 hover:border-[#1F3B3D]/30 transition-all hover:shadow-xl flex flex-col justify-between"
            >
              {/* Image & Badges */}
              <div>
                <div className="relative aspect-[16/11] overflow-hidden bg-[#E6ECE8]">
                  <img
                    src={prop.featuredImage}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-[#172627]/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {prop.category}
                    </span>
                    {prop.featured && (
                      <span className="bg-[#D26B5B] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-2.5 h-2.5" />
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 bg-[#F8F6F1]/95 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-[#1F3B3D] flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{prop.rating}</span>
                    <span className="text-[10px] text-[#1F3B3D]/50 font-normal">({prop.reviewsCount})</span>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-[#1F3B3D]/90 backdrop-blur-sm text-[#E6ECE8] text-[11px] font-medium px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#D26B5B]" />
                    <span>{prop.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    onClick={() => onSelectProperty(prop)}
                    className="font-display text-2xl font-bold text-[#1F3B3D] group-hover:text-[#D26B5B] transition-colors cursor-pointer leading-tight mb-2"
                  >
                    {prop.title}
                  </h3>
                  
                  <p className="text-xs text-[#1F3B3D]/70 line-clamp-2 mb-4 font-normal">
                    {prop.tagline}
                  </p>

                  {/* Capacity specifications */}
                  <div className="flex items-center gap-4 text-xs text-[#1F3B3D]/80 py-3 border-y border-[#1F3B3D]/10 mb-4">
                    <span className="flex items-center gap-1 font-medium">
                      <Users className="w-3.5 h-3.5 text-[#5B8266]" />
                      Up to {prop.capacity.guests}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Bed className="w-3.5 h-3.5 text-[#5B8266]" />
                      {prop.capacity.bedrooms} Bed
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 font-medium">
                      <Bath className="w-3.5 h-3.5 text-[#5B8266]" />
                      {prop.capacity.baths} Bath
                    </span>
                  </div>

                  {/* Amenity tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {prop.amenities.slice(0, 3).map((amenity, idx) => (
                      <span
                        key={idx}
                        className="bg-[#E6ECE8] text-[#1F3B3D] text-[10px] font-semibold px-2 py-0.5 rounded"
                      >
                        {amenity}
                      </span>
                    ))}
                    {prop.amenities.length > 3 && (
                      <span className="text-[10px] text-[#5B8266] font-semibold self-center">
                        +{prop.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer: Price & CTA */}
              <div className="p-6 pt-0 flex items-center justify-between gap-4 mt-2">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#5B8266]">
                    Direct Rate
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-2xl font-bold text-[#1F3B3D]">
                      ${prop.pricePerNight}
                    </span>
                    <span className="text-xs text-[#1F3B3D]/60 font-normal">
                      / night
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectProperty(prop)}
                    id={`view-details-${prop.slug}`}
                    className="px-3.5 py-2.5 rounded-xl border border-[#1F3B3D]/20 text-xs font-bold uppercase tracking-wider text-[#1F3B3D] hover:bg-[#E6ECE8] transition-all"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onBookProperty(prop)}
                    id={`book-now-${prop.slug}`}
                    className="bg-[#1F3B3D] hover:bg-[#D26B5B] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-1"
                  >
                    <span>Reserve</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center bg-[#E6ECE8]/50 rounded-3xl border-2 border-dashed border-[#1F3B3D]/20 max-w-xl mx-auto">
          <p className="text-base text-[#1F3B3D]/80 font-medium mb-3">
            No properties match this specific filter combination.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setGuestFilter('all');
            }}
            className="bg-[#1F3B3D] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider"
          >
            Reset All Filters
          </button>
        </div>
      )}

    </section>
  );
};
