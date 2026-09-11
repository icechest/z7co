import React, { useState } from 'react';
import { RentalProperty } from '../types';
import { X, MapPin, Users, Bed, Bath, Trees, Star, CheckCircle, Shield, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface RentalDetailModalProps {
  property: RentalProperty;
  onClose: () => void;
  onBook: (property: RentalProperty, nights: number) => void;
}

export const RentalDetailModal: React.FC<RentalDetailModalProps> = ({
  property,
  onClose,
  onBook
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [nights, setNights] = useState(2);
  const [guests, setGuests] = useState(2);

  const baseTotal = property.pricePerNight * nights;
  const cleaningFee = 85;
  const serviceFee = Math.round(baseTotal * 0.08);
  const total = baseTotal + cleaningFee + serviceFee;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#F8F6F1] text-[#1F3B3D] w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-[#1F3B3D]/10 max-h-[92vh] flex flex-col">
        
        {/* Modal Sticky Header */}
        <div className="px-6 py-4 border-b border-[#1F3B3D]/10 flex items-center justify-between bg-[#F8F6F1]">
          <div className="flex items-center gap-3">
            <span className="bg-[#1F3B3D] text-[#F8F6F1] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              {property.category}
            </span>
            <span className="text-xs text-[#5B8266] font-medium flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {property.coordinates}
            </span>
          </div>

          <button
            onClick={onClose}
            id="close-rental-modal-btn"
            className="p-2 text-[#1F3B3D]/60 hover:text-[#1F3B3D] rounded-full hover:bg-[#E6ECE8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          
          {/* Gallery Showcase */}
          <div>
            <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#E6ECE8] mb-3 shadow-inner">
              <img
                src={property.gallery[activeImageIndex] || property.featuredImage}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail selector */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {property.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-[#D26B5B] shadow-md scale-105'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Title & Key Attributes */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#1F3B3D]/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{property.rating}</span>
                </div>
                <span className="text-xs text-[#1F3B3D]/50">•</span>
                <span className="text-xs text-[#1F3B3D]/70 font-medium">
                  {property.reviewsCount} verified stays
                </span>
                <span className="text-xs text-[#1F3B3D]/50">•</span>
                <span className="text-xs font-semibold text-[#5B8266]">
                  Elevation: {property.elevation}
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1F3B3D]">
                {property.title}
              </h2>
              <p className="text-base text-[#1F3B3D]/80 font-normal mt-1 max-w-2xl">
                {property.tagline}
              </p>
            </div>

            {/* Quick capacity tags */}
            <div className="flex flex-wrap items-center gap-4 bg-[#E6ECE8] p-4 rounded-2xl shrink-0">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1F3B3D]">
                <Users className="w-4 h-4 text-[#5B8266]" />
                <span>{property.capacity.guests} Guests</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1F3B3D]">
                <Bed className="w-4 h-4 text-[#5B8266]" />
                <span>{property.capacity.bedrooms} Bedroom ({property.capacity.beds} Beds)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1F3B3D]">
                <Bath className="w-4 h-4 text-[#5B8266]" />
                <span>{property.capacity.baths} Bath</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1F3B3D]">
                <Trees className="w-4 h-4 text-[#5B8266]" />
                <span>{property.acreage} Private Acres</span>
              </div>
            </div>
          </div>

          {/* Description & Reservation Panel Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left 2 Cols: Details */}
            <div className="lg:col-span-2 space-y-6">
              
              <div>
                <h3 className="font-display text-xl font-bold mb-3 text-[#1F3B3D]">
                  The Sanctuary Experience
                </h3>
                <p className="text-sm leading-relaxed text-[#1F3B3D]/85 font-light">
                  {property.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-[#5B8266] mb-3">
                  Outpost Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {property.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#1F3B3D] bg-white p-3 rounded-xl border border-[#1F3B3D]/5">
                      <Sparkles className="w-3.5 h-3.5 text-[#D26B5B] shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-[#5B8266] mb-3">
                  Comforts & Amenities
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-[#1F3B3D]/90">
                  {property.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 py-1">
                      <CheckCircle className="w-3.5 h-3.5 text-[#5B8266] shrink-0" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules & Check-In */}
              <div className="bg-[#E6ECE8]/60 p-4 rounded-2xl border border-[#1F3B3D]/10">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#1F3B3D] mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#5B8266]" />
                  Check-In & Wilderness Guidelines
                </h4>
                <div className="text-xs text-[#1F3B3D]/80 space-y-1 mb-3">
                  <div>• Check-In: {property.checkInTime} • Check-Out: {property.checkOutTime} (Contactless keypad access)</div>
                  {property.rules.map((rule, idx) => (
                    <div key={idx}>• {rule}</div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 1 Col: Live Price Calculator & Instant Reserve */}
            <div className="bg-white p-6 rounded-3xl border border-[#1F3B3D]/15 shadow-lg flex flex-col justify-between h-fit">
              
              <div>
                <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-[#1F3B3D]/10">
                  <div>
                    <span className="font-display text-3xl font-bold text-[#1F3B3D]">
                      ${property.pricePerNight}
                    </span>
                    <span className="text-xs text-[#1F3B3D]/60 font-normal"> / night</span>
                  </div>
                  <div className="text-xs font-semibold text-[#5B8266] bg-[#5B8266]/10 px-2 py-1 rounded">
                    Direct Booking Rate
                  </div>
                </div>

                {/* Duration Picker */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F3B3D]/70 mb-1">
                      Length of Stay (Nights)
                    </label>
                    <div className="flex items-center gap-2">
                      {[2, 3, 4, 7].map((n) => (
                        <button
                          key={n}
                          onClick={() => setNights(n)}
                          className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                            nights === n
                              ? 'bg-[#1F3B3D] text-white shadow-sm'
                              : 'bg-[#E6ECE8] text-[#1F3B3D] hover:bg-[#cbd8cf]'
                          }`}
                        >
                          {n} Nights
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#1F3B3D]/70 mb-1">
                      Party Size
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-[#E6ECE8] text-xs font-semibold p-2.5 rounded-xl border border-[#1F3B3D]/10 text-[#1F3B3D] focus:outline-none cursor-pointer"
                    >
                      {Array.from({ length: property.capacity.guests }, (_, i) => i + 1).map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="space-y-2 text-xs text-[#1F3B3D]/80 border-t border-[#1F3B3D]/10 pt-4 mb-6">
                  <div className="flex justify-between">
                    <span>${property.pricePerNight} × {nights} nights</span>
                    <span className="font-semibold text-[#1F3B3D]">${baseTotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Wilderness preparation & sanitization</span>
                    <span className="font-semibold text-[#1F3B3D]">${cleaningFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Starlink connectivity & forest maintenance</span>
                    <span className="font-semibold text-[#1F3B3D]">${serviceFee}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-[#1F3B3D] pt-2 border-t border-[#1F3B3D]/10">
                    <span>Estimated Total</span>
                    <span className="text-[#D26B5B] font-display text-lg">${total}</span>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onBook(property, nights)}
                  id="confirm-modal-reserve-btn"
                  className="w-full py-4 bg-[#D26B5B] hover:bg-[#b85444] text-white rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Proceed to Reservation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-center text-[#1F3B3D]/60 mt-2 font-medium">
                  Instant confirmation • No booking fees charged on preview
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
