import React, { useState } from 'react';
import { Adventure, Season } from '../types';
import { Compass, Clock, Mountain, Users, ArrowRight, CheckCircle, Calendar, Sparkles, MapPin, X } from 'lucide-react';

interface AdventuresSectionProps {
  adventures: Adventure[];
  onBookAdventure: (adventure: Adventure) => void;
  initialSeason?: Season | 'All';
}

export const AdventuresSection: React.FC<AdventuresSectionProps> = ({
  adventures,
  onBookAdventure,
  initialSeason = 'All'
}) => {
  const [selectedSeason, setSelectedSeason] = useState<Season | 'All'>(initialSeason);
  const [selectedAdventure, setSelectedAdventure] = useState<Adventure | null>(null);

  const seasons: (Season | 'All')[] = ['All', 'Spring', 'Summer', 'Fall', 'Winter'];

  const filteredAdventures = adventures.filter((adv) => {
    if (selectedSeason === 'All') return true;
    return adv.season === selectedSeason;
  });

  const seasonalDescriptions: Record<Season, { headline: string; note: string; color: string }> = {
    Spring: {
      headline: 'The Great Mountain Thaw & Wildflower Awakening',
      note: 'Rushing class II–III river corridors, wild ramps, and emerging forest canopies. Ideal for refreshing high-water paddle expeditions and sensory foraging.',
      color: 'border-emerald-600/30 bg-emerald-500/10 text-emerald-900'
    },
    Summer: {
      headline: 'High Alpine Ridges & Glass-Calm Glacial Tarns',
      note: 'Long sunlit days, warm granite rock climbing, and secluded twilight paddleboarding followed by shoreline campfire culinary tastings.',
      color: 'border-amber-600/30 bg-amber-500/10 text-amber-950'
    },
    Fall: {
      headline: 'The Crimson Canopy & Crisp Heritage Harvest',
      note: 'Endless horizons of scarlet maples and burnished birch. Experience brisk singletrack rides, hardwood ridge treks, and antique cider pressing.',
      color: 'border-[#D26B5B]/30 bg-[#D26B5B]/10 text-[#541e17]'
    },
    Winter: {
      headline: 'Crystalline Nebulae & Wood-Fired Thermotherapy',
      note: 'Sub-zero atmospheric clarity, moonlight snowshoeing to computer-guided astronomy stations, and roaring cedar barrel saunas tucked beside frozen cascades.',
      color: 'border-cyan-700/30 bg-cyan-600/10 text-cyan-950'
    }
  };

  return (
    <section id="adventures-catalog" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#5B8266] mb-2">
            <Compass className="w-3.5 h-3.5 text-[#5B8266]" />
            <span>Seasonal Outdoor Expeditions</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1F3B3D] tracking-tight">
            Adventures by Season
          </h2>
          <p className="text-base sm:text-lg text-[#1F3B3D]/70 max-w-2xl mt-2 font-light">
            Nature never repeats the same month twice. Explore curated small-group expeditions with certified mountain and river guides—all technical gear supplied.
          </p>
        </div>

        {/* Season Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 bg-[#E6ECE8] p-1.5 rounded-2xl border border-[#1F3B3D]/10">
          {seasons.map((s) => (
            <button
              key={s}
              id={`season-tab-${s.toLowerCase()}`}
              onClick={() => setSelectedSeason(s)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedSeason === s
                  ? 'bg-[#1F3B3D] text-[#F8F6F1] shadow-sm'
                  : 'text-[#1F3B3D]/70 hover:text-[#1F3B3D] hover:bg-white/40'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Seasonal Advisory Banner (when specific season selected) */}
      {selectedSeason !== 'All' && (
        <div className={`p-6 rounded-2xl border mb-10 transition-all ${seasonalDescriptions[selectedSeason].color}`}>
          <div className="text-xs uppercase font-bold tracking-wider mb-1 opacity-75">
            {selectedSeason} Expedition Environment
          </div>
          <h3 className="font-display text-xl sm:text-2xl font-bold mb-2">
            {seasonalDescriptions[selectedSeason].headline}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed max-w-3xl opacity-90">
            {seasonalDescriptions[selectedSeason].note}
          </p>
        </div>
      )}

      {/* Adventures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredAdventures.map((adv) => {
          const seasonBadgeColors: Record<Season, string> = {
            Spring: 'bg-emerald-800 text-white',
            Summer: 'bg-amber-700 text-white',
            Fall: 'bg-[#D26B5B] text-white',
            Winter: 'bg-cyan-900 text-white'
          };

          return (
            <div
              key={adv.id}
              className="group bg-[#F8F6F1] rounded-3xl overflow-hidden border border-[#1F3B3D]/10 hover:border-[#1F3B3D]/30 transition-all hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E6ECE8]">
                  <img
                    src={adv.featuredImage}
                    alt={adv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${seasonBadgeColors[adv.season]}`}>
                      {adv.season}
                    </span>
                    <span className="bg-[#172627]/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {adv.difficulty}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 bg-[#1F3B3D]/90 backdrop-blur-sm text-[#E6ECE8] text-[11px] font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D26B5B]" />
                    <span>{adv.duration}</span>
                    <span>•</span>
                    <span>Max {adv.groupSizeLimit} Persons</span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="text-xs uppercase tracking-wider font-bold text-[#5B8266] mb-1">
                    Season Window: {adv.bestMonths}
                  </div>
                  
                  <h3
                    onClick={() => setSelectedAdventure(adv)}
                    className="font-display text-2xl font-bold text-[#1F3B3D] group-hover:text-[#D26B5B] transition-colors cursor-pointer mb-2 leading-tight"
                  >
                    {adv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#1F3B3D]/70 line-clamp-3 mb-6 font-light leading-relaxed">
                    {adv.description}
                  </p>

                  {/* Included gear list */}
                  <div className="bg-[#E6ECE8]/60 p-4 rounded-2xl border border-[#1F3B3D]/5 mb-6">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#5B8266] mb-2 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#D26B5B]" />
                      Included Technical Gear:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#1F3B3D]/90">
                      {adv.gearProvided.slice(0, 4).map((gear, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <CheckCircle className="w-3 h-3 text-[#5B8266] shrink-0" />
                          <span className="truncate">{gear}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Guide Info */}
                  <div className="flex items-center gap-3">
                    <img
                      src={adv.guide.avatar}
                      alt={adv.guide.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#1F3B3D]/20"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#1F3B3D]">{adv.guide.name}</div>
                      <div className="text-[10px] text-[#5B8266] font-medium">{adv.guide.role}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[#1F3B3D]/5 mt-4">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#5B8266]">
                    Per Adventurer
                  </div>
                  <div className="font-display text-2xl font-bold text-[#1F3B3D]">
                    ${adv.price}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedAdventure(adv)}
                    id={`view-adventure-itinerary-${adv.slug}`}
                    className="px-3.5 py-2.5 rounded-xl border border-[#1F3B3D]/20 text-xs font-bold uppercase tracking-wider text-[#1F3B3D] hover:bg-[#E6ECE8] transition-all"
                  >
                    Itinerary
                  </button>
                  <button
                    onClick={() => onBookAdventure(adv)}
                    id={`book-adventure-${adv.slug}`}
                    className="bg-[#1F3B3D] hover:bg-[#D26B5B] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5"
                  >
                    <span>Reserve Spot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Adventure Detail & Itinerary Modal */}
      {selectedAdventure && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#F8F6F1] text-[#1F3B3D] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#1F3B3D]/10 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[#1F3B3D]/10 flex items-center justify-between bg-[#F8F6F1]">
              <div className="flex items-center gap-3">
                <span className="bg-[#1F3B3D] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {selectedAdventure.season} Expedition
                </span>
                <span className="text-xs font-semibold text-[#5B8266]">
                  {selectedAdventure.difficulty} • {selectedAdventure.duration}
                </span>
              </div>
              <button
                onClick={() => setSelectedAdventure(null)}
                id="close-adventure-modal-btn"
                className="p-2 text-[#1F3B3D]/60 hover:text-[#1F3B3D] rounded-full hover:bg-[#E6ECE8] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h3 className="font-display text-3xl font-bold mb-2">
                  {selectedAdventure.title}
                </h3>
                <p className="text-sm text-[#1F3B3D]/80 font-light leading-relaxed">
                  {selectedAdventure.description}
                </p>
              </div>

              {/* Itinerary Timeline */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-widest text-[#5B8266] mb-4">
                  Step-by-Step Expedition Timeline
                </h4>
                <div className="space-y-4 border-l-2 border-[#D26B5B] pl-4 ml-2">
                  {selectedAdventure.itinerary.map((step, idx) => (
                    <div key={idx} className="relative">
                      <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-[#D26B5B]" />
                      <div className="text-xs font-mono font-bold text-[#D26B5B]">
                        {step.time}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-[#1F3B3D] mt-0.5">
                        {step.activity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gear Supplied vs Bring Along */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#1F3B3D]/10">
                <div className="bg-[#E6ECE8] p-4 rounded-2xl">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#5B8266] mb-2">
                    We Provide:
                  </div>
                  <ul className="text-xs space-y-1 text-[#1F3B3D]/90">
                    {selectedAdventure.gearProvided.map((g, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#5B8266]" />
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-[#1F3B3D]/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#D26B5B] mb-2">
                    You Should Bring:
                  </div>
                  <ul className="text-xs space-y-1 text-[#1F3B3D]/80">
                    {selectedAdventure.bringAlong.map((b, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D26B5B]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Guide Profile */}
              <div className="flex items-center justify-between bg-[#1F3B3D] text-[#F8F6F1] p-4 rounded-2xl">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedAdventure.guide.avatar}
                    alt={selectedAdventure.guide.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-sm font-bold">{selectedAdventure.guide.name}</div>
                    <div className="text-xs text-[#E6ECE8]/70">{selectedAdventure.guide.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#E6ECE8]/60">Cost</div>
                  <div className="text-xl font-display font-bold text-[#D26B5B]">
                    ${selectedAdventure.price} / person
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-[#1F3B3D]/10 bg-[#F8F6F1] flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedAdventure(null)}
                className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1F3B3D]/70 hover:text-[#1F3B3D]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const adv = selectedAdventure;
                  setSelectedAdventure(null);
                  onBookAdventure(adv);
                }}
                className="bg-[#D26B5B] hover:bg-[#b85444] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center gap-2"
              >
                <span>Reserve Expedition Spot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
