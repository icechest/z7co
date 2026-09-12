import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Clock, Car, Compass, Calendar, X } from 'lucide-react';
import { QuickEscapePackage, RentalProperty, Adventure, Product } from '../types';
import { QUICK_PACKAGES, PROPERTIES, ADVENTURES, PRODUCTS } from '../data/mockData';

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
  const [step, setStep] = useState<number>(1);
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

  return (
    <div className="bg-[#1F3B3D] text-[#F8F6F1] rounded-3xl p-6 sm:p-10 border border-[#2A4446] shadow-2xl relative overflow-hidden max-h-[92vh] flex flex-col">
      {/* Top Banner with Close & Return Button when modal */}
      {onClose && (
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 shrink-0">
          <div className="flex items-center gap-2 text-xs text-[#E6ECE8]/70 font-mono">
            <span>ESC to close</span>
            <span>•</span>
            <span>Zero-Time Escape Matcher</span>
          </div>
          <button
            onClick={onClose}
            id="close-quick-escape-top-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F8F6F1] hover:text-white transition-all text-xs font-semibold"
            title="Return to main page"
          >
            <X className="w-4 h-4" />
            <span>Close / Return to Site</span>
          </button>
        </div>
      )}

      {/* Subtle organic background badge */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#5B8266]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Scrollable interior for long views or small viewports */}
      <div className="overflow-y-auto pr-1 space-y-8 flex-1">

      {/* Header */}
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D26B5B]/20 border border-[#D26B5B]/40 text-[#D26B5B] text-xs font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Zero-Friction Escape Engine</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F8F6F1] mb-2">
          No time to plan? We packaged everything.
        </h2>
        <p className="text-sm sm:text-base text-[#E6ECE8]/80 font-light">
          Tell us your ideal tempo in 3 clicks. We match a turnkey stay, seasonal outing, and welcome provisions waiting by the fire.
        </p>
      </div>

      {/* 3 Steps Questionnaire */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        
        {/* Step 1: Vibe */}
        <div className="bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
          <div className="text-xs uppercase font-bold text-[#5B8266] tracking-wider mb-2">
            01 • What is the goal?
          </div>
          <div className="space-y-2">
            {[
              { id: 'solitude', label: 'Unplugged Solitude & Glass Stay' },
              { id: 'active', label: 'High Ridge Hike & Sunset Climb' },
              { id: 'water', label: 'Running Creek & Acoustic Reset' }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setVibe(opt.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  vibe === opt.id
                    ? 'bg-[#D26B5B] text-white font-semibold shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-[#E6ECE8]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Drive time */}
        <div className="bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
          <div className="text-xs uppercase font-bold text-[#5B8266] tracking-wider mb-2">
            02 • Travel Tolerance
          </div>
          <div className="space-y-2">
            {[
              { id: '90min', label: 'Under 90 Minutes (Fast getaway)' },
              { id: '2hr', label: 'Up to 2 Hours (Scenic cruise)' },
              { id: 'deep', label: '3+ Hours (Deep backcountry)' }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setDrive(opt.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  drive === opt.id
                    ? 'bg-[#D26B5B] text-white font-semibold shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-[#E6ECE8]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Party */}
        <div className="bg-black/20 backdrop-blur-sm p-5 rounded-2xl border border-white/10">
          <div className="text-xs uppercase font-bold text-[#5B8266] tracking-wider mb-2">
            03 • Traveling Party
          </div>
          <div className="space-y-2">
            {[
              { id: 'solo', label: 'Solo Traveler (Deep focus)' },
              { id: 'couple', label: 'Couple (Romance & slow living)' },
              { id: 'friends', label: 'Small Crew (Gathering & bonfire)' }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setParty(opt.id)}
                className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  party === opt.id
                    ? 'bg-[#D26B5B] text-white font-semibold shadow-md'
                    : 'bg-white/5 hover:bg-white/10 text-[#E6ECE8]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Matched Turnkey Package Card */}
      <div className="bg-[#F8F6F1] text-[#1F3B3D] rounded-2xl p-6 sm:p-8 shadow-xl border border-white/40">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#1F3B3D]/10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#5B8266] mb-1">
              <CheckCircle2 className="w-4 h-4 text-[#5B8266]" />
              <span>Recommended Turnkey Package for You</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1F3B3D]">
              {matched.title}
            </h3>
            <p className="text-sm text-[#1F3B3D]/80 font-normal mt-1">
              {matched.tagline}
            </p>
          </div>

          <div className="flex items-baseline lg:flex-col lg:items-end gap-2 shrink-0">
            <div className="text-xs uppercase tracking-wider text-[#5B8266] font-bold">All-Inclusive Bundle</div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-bold text-[#D26B5B]">
                ${matched.packagePrice}
              </span>
              <span className="text-xs text-[#1F3B3D]/50 line-through">
                ${matched.packagePrice + matched.savings}
              </span>
            </div>
            <span className="text-[11px] font-semibold text-[#5B8266] bg-[#5B8266]/10 px-2 py-0.5 rounded">
              Save ${matched.savings} as bundled package
            </span>
          </div>
        </div>

        {/* 3 Pillars of the Package */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6 border-b border-[#1F3B3D]/10">
          
          {/* Pillar 1: The Stay */}
          <div className="flex gap-4 items-start">
            <img
              src={matched.property.featuredImage}
              alt={matched.property.title}
              className="w-20 h-20 rounded-xl object-cover shrink-0 cursor-pointer hover:opacity-90"
              onClick={() => onSelectProperty(matched.property)}
            />
            <div>
              <div className="text-[10px] uppercase tracking-wider font-bold text-[#5B8266]">
                Included Stay (2 Nights)
              </div>
              <button
                onClick={() => onSelectProperty(matched.property)}
                className="text-left font-display font-bold text-base text-[#1F3B3D] hover:text-[#D26B5B] transition-colors"
              >
                {matched.property.title}
              </button>
              <div className="text-xs text-[#1F3B3D]/70 mt-1 flex items-center gap-1">
                <Car className="w-3 h-3 text-[#5B8266]" />
                <span>{matched.driveTime}</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: The Adventure */}
          <div className="flex gap-4 items-start">
            <img
              src={matched.adventure.featuredImage}
              alt={matched.adventure.title}
              className="w-20 h-20 rounded-xl object-cover shrink-0 cursor-pointer hover:opacity-90"
              onClick={() => onSelectAdventure(matched.adventure)}
            />
            <div>
              <div className="text-[10px] uppercase tracking-wider font-bold text-[#5B8266]">
                Curated Guided Outing
              </div>
              <button
                onClick={() => onSelectAdventure(matched.adventure)}
                className="text-left font-display font-bold text-base text-[#1F3B3D] hover:text-[#D26B5B] transition-colors"
              >
                {matched.adventure.title}
              </button>
              <div className="text-xs text-[#1F3B3D]/70 mt-1 flex items-center gap-1">
                <Clock className="w-3 h-3 text-[#5B8266]" />
                <span>{matched.adventure.duration} • Gear provided</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Welcome Provisions */}
          <div className="flex gap-4 items-start">
            <div className="w-20 h-20 rounded-xl bg-[#E6ECE8] flex flex-col items-center justify-center p-2 text-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#D26B5B] mb-1" />
              <span className="text-[10px] font-bold text-[#1F3B3D]">Field Pack</span>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider font-bold text-[#5B8266]">
                Welcome Kit at Check-In
              </div>
              <div className="font-display font-bold text-base text-[#1F3B3D]">
                {matched.provisionPack.map(p => p.name).join(' & ')}
              </div>
              <div className="text-xs text-[#1F3B3D]/70 mt-1">
                Pre-stocked in your kitchen & hearth
              </div>
            </div>
          </div>

        </div>

        {/* CTA Footer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#1F3B3D]/80 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#5B8266]" />
            <span>Digital check-in codes sent via SMS. Free cancellation up to 72 hours before trip.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {onClose && (
              <button
                onClick={onClose}
                id="cancel-quick-escape-btn"
                className="flex-1 sm:flex-none text-xs font-bold uppercase tracking-wider text-[#1F3B3D]/70 hover:text-[#1F3B3D] px-4 py-3 border border-[#1F3B3D]/20 rounded-xl hover:bg-[#E6ECE8] transition-all"
              >
                Cancel / Return
              </button>
            )}
            <button
              onClick={() => onSelectProperty(matched.property)}
              className="flex-1 sm:flex-none text-xs font-bold uppercase tracking-wider text-[#1F3B3D] hover:text-[#D26B5B] px-4 py-3"
            >
              Inspect Stay Details
            </button>
            <button
              onClick={() => onBookPackage(matched)}
              id="reserve-quick-package-btn"
              className="flex-1 sm:flex-none bg-[#D26B5B] hover:bg-[#b85444] text-white px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
            >
              <span>Instant Reserve Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      </div>

    </div>
  );
};
