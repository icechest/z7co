import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Clock, Car, X } from 'lucide-react';
import { QuickEscapePackage, RentalProperty, Adventure } from '../types';
import { QUICK_PACKAGES } from '../data/mockData';

interface QuickEscapeFinderProps {
  onSelectProperty: (property: RentalProperty) => void;
  onSelectAdventure: (adventure: Adventure) => void;
  onBookPackage: (pkg: QuickEscapePackage) => void;
  onClose?: () => void;
}

export const QuickEscapeFinder: React.FC<QuickEscapeFinderProps> = ({
  onSelectProperty,
  onSelectAdventure,
  onBookPackage,
  onClose
}) => {
  const [vibe, setVibe] = useState<string>('solitude');
  const [drive, setDrive] = useState<string>('90min');
  const [party, setParty] = useState<string>('couple');

  // Allow closing with Escape key
  React.useEffect(() => {
    if (!onClose) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Dynamically compute matched package
  const getMatchedPackage = (): QuickEscapePackage => {
    if (vibe === 'active') {
      return QUICK_PACKAGES[1]; // High Summit
    }
    if (vibe === 'water') {
      return QUICK_PACKAGES[2]; // Creek Acoustic
    }
    return QUICK_PACKAGES[0]; // Forest Reconnect
  };

  const matched = getMatchedPackage();

  const vibeOptions = [
    { id: 'solitude', label: 'Unplugged Solitude & Glass Stay' },
    { id: 'active', label: 'High Ridge Hike & Summit Climb' },
    { id: 'water', label: 'Running Creek & Acoustic Reset' }
  ];

  const driveOptions = [
    { id: '90min', label: '< 90 Min (Fast Escape)' },
    { id: '2hr', label: '< 2 Hours (Scenic Cruise)' },
    { id: 'deep', label: '3+ Hours (Deep Backcountry)' }
  ];

  const partyOptions = [
    { id: 'solo', label: 'Solo Traveler (Deep Focus)' },
    { id: 'couple', label: 'Couple (Romance & Slow Living)' },
    { id: 'friends', label: 'Small Crew (Bonfire & Cabin)' }
  ];

  return (
    <div
      className={`bg-[#1F3B3D] text-[#F8F6F1] border border-[#2A4446] shadow-2xl relative overflow-hidden flex flex-col justify-between ${
        onClose
          ? 'rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 gap-3 sm:gap-4'
          : 'rounded-3xl p-6 sm:p-8 lg:p-10 gap-6'
      }`}
    >
      {/* Subtle organic ambient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#5B8266]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Row */}
      {onClose ? (
        <div className="flex items-center justify-between pb-2.5 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D26B5B]/20 border border-[#D26B5B]/40 text-[#D26B5B] text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>Zero-Time Escape Matcher</span>
            </div>
            <span className="text-white/30 hidden sm:inline">•</span>
            <span className="text-xs text-[#E6ECE8]/75 hidden sm:inline font-light">
              Turnkey 3-Click Trip Engine
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-[#E6ECE8]/50 hidden sm:inline">Esc to close</span>
            <button
              onClick={onClose}
              id="close-quick-escape-top-btn"
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F6F1] hover:text-white transition-all text-xs flex items-center gap-1"
              title="Close (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-2xl shrink-0">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D26B5B]/20 border border-[#D26B5B]/40 text-[#D26B5B] text-xs font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Zero-Friction Escape Engine</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F8F6F1] mb-1">
            No time to plan? We packaged everything in 3 clicks.
          </h2>
          <p className="text-xs sm:text-sm text-[#E6ECE8]/80 font-light">
            Tell us your tempo below. We match a turnkey cabin, guided wilderness outing, and welcome hearth kit.
          </p>
        </div>
      )}

      {/* 3 Steps Questionnaire (Compact Segmented Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 shrink-0">
        
        {/* Step 1: Vibe */}
        <div className="bg-black/25 backdrop-blur-sm p-3 rounded-xl border border-white/10 flex flex-col justify-between">
          <div className="text-[11px] uppercase font-bold text-[#5B8266] tracking-wider mb-1.5 flex items-center justify-between">
            <span>01 • Trip Goal</span>
            <span className="text-[10px] text-[#E6ECE8]/50 font-normal">Step 1 of 3</span>
          </div>
          <div className="grid grid-cols-1 gap-1">
            {vibeOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setVibe(opt.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all flex items-center justify-between ${
                  vibe === opt.id
                    ? 'bg-[#D26B5B] text-white font-semibold shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-[#E6ECE8]/90'
                }`}
              >
                <span className="truncate">{opt.label}</span>
                {vibe === opt.id && <CheckCircle2 className="w-3 h-3 shrink-0 ml-1" />}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Drive time */}
        <div className="bg-black/25 backdrop-blur-sm p-3 rounded-xl border border-white/10 flex flex-col justify-between">
          <div className="text-[11px] uppercase font-bold text-[#5B8266] tracking-wider mb-1.5 flex items-center justify-between">
            <span>02 • Travel Tolerance</span>
            <span className="text-[10px] text-[#E6ECE8]/50 font-normal">Step 2 of 3</span>
          </div>
          <div className="grid grid-cols-1 gap-1">
            {driveOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setDrive(opt.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all flex items-center justify-between ${
                  drive === opt.id
                    ? 'bg-[#D26B5B] text-white font-semibold shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-[#E6ECE8]/90'
                }`}
              >
                <span className="truncate">{opt.label}</span>
                {drive === opt.id && <CheckCircle2 className="w-3 h-3 shrink-0 ml-1" />}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Party */}
        <div className="bg-black/25 backdrop-blur-sm p-3 rounded-xl border border-white/10 flex flex-col justify-between">
          <div className="text-[11px] uppercase font-bold text-[#5B8266] tracking-wider mb-1.5 flex items-center justify-between">
            <span>03 • Traveling Party</span>
            <span className="text-[10px] text-[#E6ECE8]/50 font-normal">Step 3 of 3</span>
          </div>
          <div className="grid grid-cols-1 gap-1">
            {partyOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setParty(opt.id)}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all flex items-center justify-between ${
                  party === opt.id
                    ? 'bg-[#D26B5B] text-white font-semibold shadow-sm'
                    : 'bg-white/5 hover:bg-white/10 text-[#E6ECE8]/90'
                }`}
              >
                <span className="truncate">{opt.label}</span>
                {party === opt.id && <CheckCircle2 className="w-3 h-3 shrink-0 ml-1" />}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Matched Turnkey Package Card */}
      <div className="bg-[#F8F6F1] text-[#1F3B3D] rounded-xl sm:rounded-2xl p-3.5 sm:p-5 shadow-xl border border-white/40 flex flex-col gap-2.5 sm:gap-3 shrink-0">
        
        {/* Header & Pricing */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-[#1F3B3D]/10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-[#5B8266]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8266]" />
              <span>Recommended Turnkey Package</span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-[#1F3B3D] leading-tight">
              {matched.title}
            </h3>
            <p className="text-xs text-[#1F3B3D]/75 line-clamp-1">
              {matched.tagline}
            </p>
          </div>

          <div className="flex sm:flex-col items-baseline sm:items-end gap-1.5 shrink-0 bg-white/60 sm:bg-transparent p-2 sm:p-0 rounded-lg">
            <div className="text-[10px] uppercase tracking-wider text-[#5B8266] font-bold">All-Inclusive Bundle</div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-display font-bold text-[#D26B5B]">
                ${matched.packagePrice}
              </span>
              <span className="text-xs text-[#1F3B3D]/50 line-through">
                ${matched.packagePrice + matched.savings}
              </span>
              <span className="text-[10px] font-bold text-[#5B8266] bg-[#5B8266]/15 px-1.5 py-0.5 rounded">
                Save ${matched.savings}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Pillars of the Package (Stay, Adventure, Provisions) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-2.5 py-1 sm:py-2 border-b border-[#1F3B3D]/10">
          
          {/* Pillar 1: The Stay */}
          <div
            className="flex items-center gap-2.5 p-2 bg-white rounded-xl border border-[#1F3B3D]/10 hover:border-[#D26B5B]/50 transition-all cursor-pointer group"
            onClick={() => onSelectProperty(matched.property)}
          >
            <img
              src={matched.property.featuredImage}
              alt={matched.property.title}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg object-cover shrink-0 group-hover:scale-105 transition-transform"
            />
            <div className="min-w-0 flex-1">
              <div className="text-[10px] uppercase tracking-wider font-bold text-[#5B8266]">
                Included Stay (2 Nights)
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectProperty(matched.property);
                }}
                className="text-left font-display font-bold text-xs text-[#1F3B3D] group-hover:text-[#D26B5B] transition-colors truncate block w-full"
              >
                {matched.property.title}
              </button>
              <div className="text-[11px] text-[#1F3B3D]/70 flex items-center gap-1 mt-0.5 truncate">
                <Car className="w-3 h-3 text-[#5B8266] shrink-0" />
                <span className="truncate">{matched.driveTime}</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: The Adventure */}
          <div
            className="flex items-center gap-2.5 p-2 bg-white rounded-xl border border-[#1F3B3D]/10 hover:border-[#D26B5B]/50 transition-all cursor-pointer group"
            onClick={() => onSelectAdventure(matched.adventure)}
          >
            <img
              src={matched.adventure.featuredImage}
              alt={matched.adventure.title}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg object-cover shrink-0 group-hover:scale-105 transition-transform"
              referrerPolicy="no-referrer"
            />
            <div className="min-w-0 flex-1">
              <div className="text-[10px] uppercase tracking-wider font-bold text-[#5B8266]">
                Curated Guided Outing
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectAdventure(matched.adventure);
                }}
                className="text-left font-display font-bold text-xs text-[#1F3B3D] group-hover:text-[#D26B5B] transition-colors truncate block w-full"
              >
                {matched.adventure.title}
              </button>
              <div className="text-[11px] text-[#1F3B3D]/70 flex items-center gap-1 mt-0.5 truncate">
                <Clock className="w-3 h-3 text-[#5B8266] shrink-0" />
                <span className="truncate">{matched.adventure.duration} • Gear provided</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Welcome Provisions */}
          <div className="flex items-center gap-2.5 p-2 bg-white rounded-xl border border-[#1F3B3D]/10">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#E6ECE8] flex flex-col items-center justify-center p-1 text-center shrink-0">
              <Sparkles className="w-4 h-4 text-[#D26B5B] mb-0.5" />
              <span className="text-[8px] font-bold text-[#1F3B3D] uppercase tracking-tighter">Hearth</span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] uppercase tracking-wider font-bold text-[#5B8266]">
                Hearth Provisions
              </div>
              <div className="font-display font-bold text-xs text-[#1F3B3D] truncate">
                {matched.provisionPack.map(p => p.name).join(' & ')}
              </div>
              <div className="text-[11px] text-[#1F3B3D]/70 truncate mt-0.5">
                Pre-stocked in kitchen & hearth
              </div>
            </div>
          </div>

        </div>

        {/* CTA Footer */}
        <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="text-[11px] text-[#1F3B3D]/70 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8266] shrink-0" />
            <span>Digital check-in codes sent via SMS • Free cancellation up to 72 hrs</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => onSelectProperty(matched.property)}
              className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-[#1F3B3D] hover:text-[#D26B5B] transition-colors"
            >
              Inspect Stay
            </button>
            <button
              onClick={() => onBookPackage(matched)}
              id="reserve-quick-package-btn"
              className="bg-[#D26B5B] hover:bg-[#b85444] text-white px-5 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5"
            >
              <span>Instant Reserve (${matched.packagePrice})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
