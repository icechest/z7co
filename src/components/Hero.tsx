import React, { useState } from 'react';
import { ArrowRight, Compass, ShieldCheck, Sparkles, MapPin, Calendar, Users, Trees } from 'lucide-react';

interface HeroProps {
  onExploreStays: () => void;
  onExploreAdventures: () => void;
  onOpenQuickMatcher: () => void;
  onFilterChange: (filters: { destination: string; guests: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreStays,
  onExploreAdventures,
  onOpenQuickMatcher,
  onFilterChange
}) => {
  const [selectedDestination, setSelectedDestination] = useState('all');
  const [selectedGuests, setSelectedGuests] = useState('2');

  const handleSearch = () => {
    onFilterChange({
      destination: selectedDestination,
      guests: selectedGuests
    });
    onExploreStays();
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#1F3B3D]">
      {/* Background Image with Dark Vignette & Organic Tone */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=85&w=2200"
          alt="Majestic pine mountain wilderness"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.62] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F3B3D] via-[#1F3B3D]/40 to-black/30" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#E6ECE8] text-xs uppercase tracking-widest font-semibold mb-6">
            <Trees className="w-3.5 h-3.5 text-[#5B8266]" />
            <span>Modern Outdoor Brand & Escapes Base</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#F8F6F1] font-bold leading-[1.05] tracking-tight mb-6">
            Built for the <br />
            <span className="italic font-light text-[#D26B5B]">Unplanned.</span>
          </h1>

          <p className="text-lg sm:text-2xl text-[#E6ECE8]/90 font-light leading-relaxed max-w-2xl mb-10">
            You don’t have weeks to plan a sanctuary retreat. We curate architectural glass pavilions, cliffside lookout cabins, and seasonal adventures—ready when you need to disappear into nature.
          </p>

          {/* Direct Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onExploreStays}
              id="hero-explore-stays-btn"
              className="bg-[#D26B5B] hover:bg-[#b85444] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:translate-y-[-1px] flex items-center justify-center gap-2 group"
            >
              <span>Explore Stays & Camps</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenQuickMatcher}
              id="hero-quick-matcher-btn"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-[#F8F6F1] px-7 py-4 rounded-full font-semibold text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#D26B5B]" />
              <span>3-Click Escape Matcher</span>
            </button>

            <button
              onClick={onExploreAdventures}
              id="hero-seasonal-guides-btn"
              className="text-[#E6ECE8] hover:text-white px-5 py-4 font-semibold text-sm tracking-wider uppercase underline underline-offset-8 decoration-white/40 hover:decoration-white transition-all text-center sm:text-left"
            >
              Seasonal Guides &rarr;
            </button>
          </div>
        </div>

        {/* Quick Search & Filter Outpost Bar */}
        <div className="mt-6 bg-[#F8F6F1]/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/40 max-w-4xl">
          <div className="text-xs uppercase tracking-widest font-bold text-[#5B8266] mb-3 flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#D26B5B]" />
            <span>Fast Getaway Discovery</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
            {/* Outpost Location */}
            <div className="bg-[#E6ECE8]/60 p-3 rounded-xl border border-[#1F3B3D]/10">
              <label className="block text-[10px] uppercase font-bold tracking-wider text-[#1F3B3D]/70 mb-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#5B8266]" />
                Wilderness Outpost
              </label>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                id="hero-select-destination"
                className="w-full bg-transparent text-sm font-semibold text-[#1F3B3D] focus:outline-none cursor-pointer"
              >
                <option value="all">All Outposts & Regions</option>
                <option value="Pine Barrens Sanctuary">Pine Barrens (Glass Sanctuary)</option>
                <option value="Black Ridge Escarpment">Black Ridge (Granite Cliffside)</option>
                <option value="Hemlock Creek Valley">Hemlock Creek (Safari Riverside)</option>
                <option value="Sentinel Saddle">Sentinel Saddle (High Alpine)</option>
                <option value="Clearwater River Bend">Clearwater Bend (Cedar Riverfront)</option>
              </select>
            </div>

            {/* Capacity / Party */}
            <div className="bg-[#E6ECE8]/60 p-3 rounded-xl border border-[#1F3B3D]/10">
              <label className="block text-[10px] uppercase font-bold tracking-wider text-[#1F3B3D]/70 mb-1 flex items-center gap-1">
                <Users className="w-3 h-3 text-[#5B8266]" />
                Who Is Escaping?
              </label>
              <select
                value={selectedGuests}
                onChange={(e) => setSelectedGuests(e.target.value)}
                id="hero-select-guests"
                className="w-full bg-transparent text-sm font-semibold text-[#1F3B3D] focus:outline-none cursor-pointer"
              >
                <option value="1">Solo Retreat (1 Guest)</option>
                <option value="2">Couple's Reset (2 Guests)</option>
                <option value="4">Small Group / Family (3-4 Guests)</option>
                <option value="6">Full Outpost Gathering (5+ Guests)</option>
              </select>
            </div>

            {/* Find Button */}
            <div>
              <button
                onClick={handleSearch}
                id="hero-find-escapes-action"
                className="w-full bg-[#1F3B3D] hover:bg-[#D26B5B] text-[#F8F6F1] py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Brand Ethos Strip */}
      <div className="relative z-10 border-t border-white/10 bg-[#172627]/80 backdrop-blur-sm py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-[#E6ECE8]/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#5B8266]" />
            <span>Zero Planning Overhead — Turnkey Arrival</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D26B5B]" />
            <span>High-Speed Starlink WiFi Available at All Stays</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5B8266]" />
            <span>Wood-Fired Saunas & Hot Cedar Soaking</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D26B5B]" />
            <span>Pre-Stocked Field Provisions</span>
          </div>
        </div>
      </div>
    </section>
  );
};
