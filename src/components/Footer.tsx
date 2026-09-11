import React, { useState } from 'react';
import { ArrowUpRight, Compass, Shield, Trees, MapPin, Mail, CheckCircle2, GitBranch } from 'lucide-react';

interface FooterProps {
  onNavClick: (tab: string) => void;
  openGitModal: () => void;
  openQuickMatcher: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  openGitModal,
  openQuickMatcher
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#172627] text-[#E6ECE8] pt-16 sm:pt-20 pb-12 border-t border-[#2A4446]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Newsletter & Dispatch Banner */}
        <div className="bg-[#1F3B3D] rounded-3xl p-8 sm:p-12 mb-16 border border-[#2A4446] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#5B8266] bg-[#172627] px-3 py-1 rounded-full border border-[#2A4446]">
              The Seasonal Dispatch
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F8F6F1] mt-3">
              Unplanned Weekend Openings
            </h3>
            <p className="text-xs sm:text-sm text-[#E6ECE8]/75 font-light mt-1">
              Be the first to claim last-minute openings at our glass pavilions and receive seasonal weather reports for high mountain corridors.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-[#5B8266] bg-[#172627] px-5 py-3.5 rounded-2xl border border-[#2A4446]">
                <CheckCircle2 className="w-4 h-4" />
                <span>You are subscribed to the Z7CO Wilderness Dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#172627] border border-[#2A4446] text-[#F8F6F1] placeholder-[#E6ECE8]/40 px-4 py-3 rounded-xl text-xs focus:outline-none focus:border-[#D26B5B] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#D26B5B] hover:bg-[#b85444] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap"
                >
                  Join Dispatch
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-16 border-b border-[#2A4446]">
          
          {/* Brand Info Column */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold tracking-tight text-[#F8F6F1]">
                Z7CO.
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#5B8266]">
                Outpost & Stays
              </span>
            </div>
            <p className="text-xs text-[#E6ECE8]/70 leading-relaxed font-light max-w-sm">
              A modern outdoor and travel brand designed as an extensible platform for short term rentals, real estate portfolios, secluded campsites, and seasonal expeditions.
            </p>

            <div className="pt-2 flex flex-col gap-1.5 text-xs text-[#E6ECE8]/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D26B5B]" />
                <span>Operating across Sierra Crest & Eastern Pine Corridors</span>
              </div>
              <button
                onClick={openGitModal}
                className="flex items-center gap-2 text-left hover:text-white transition-colors text-xs font-mono text-[#D26B5B]"
              >
                <GitBranch className="w-3.5 h-3.5" />
                <span>Repo: icechest/z7co • Domain: z7co.com</span>
              </button>
            </div>
          </div>

          {/* Stays & Camps */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#5B8266]">
              Stays & Camps
            </div>
            <ul className="space-y-2 text-xs text-[#E6ECE8]/80">
              <li>
                <button onClick={() => onNavClick('rentals')} className="hover:text-white transition-colors">
                  Glass Pavilions
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('rentals')} className="hover:text-white transition-colors">
                  Granite Cliff Cabins
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('rentals')} className="hover:text-white transition-colors">
                  Wild Campsites
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('rentals')} className="hover:text-white transition-colors">
                  Geodesic Domes
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('rentals')} className="hover:text-white transition-colors">
                  Riverfront Lodges
                </button>
              </li>
            </ul>
          </div>

          {/* Seasonal Expeditions */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#5B8266]">
              Expeditions
            </div>
            <ul className="space-y-2 text-xs text-[#E6ECE8]/80">
              <li>
                <button onClick={() => onNavClick('adventures')} className="hover:text-white transition-colors">
                  Spring River Thaw
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('adventures')} className="hover:text-white transition-colors">
                  Summer Alpine Traverse
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('adventures')} className="hover:text-white transition-colors">
                  Fall Crimson Canopies
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('adventures')} className="hover:text-white transition-colors">
                  Winter Starry Snowshoe
                </button>
              </li>
              <li>
                <button onClick={openQuickMatcher} className="text-[#D26B5B] hover:underline transition-colors font-medium">
                  Zero-Time Matcher &rarr;
                </button>
              </li>
            </ul>
          </div>

          {/* Portfolio & Shop */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-widest text-[#5B8266]">
              Brand & Land
            </div>
            <ul className="space-y-2 text-xs text-[#E6ECE8]/80">
              <li>
                <button onClick={() => onNavClick('portfolio')} className="hover:text-white transition-colors">
                  Land Trust Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('portfolio')} className="hover:text-white transition-colors">
                  Landowner Estimator
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('shop')} className="hover:text-white transition-colors">
                  Field Gear & Provisions
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('shop')} className="hover:text-white transition-colors">
                  Merino Wool Apparel
                </button>
              </li>
              <li>
                <button onClick={openGitModal} className="hover:text-white transition-colors">
                  Cloudflare & GitHub Setup
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & technical specs */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#E6ECE8]/60">
          <div>
            &copy; {new Date().getFullYear()} Z7CO Holdings LLC. All rights reserved. Registered for z7co.com.
          </div>
          <div className="flex items-center gap-4">
            <span>Clean Architecture Base</span>
            <span>•</span>
            <span>Zero Planning Philosophy</span>
            <span>•</span>
            <button onClick={openGitModal} className="underline hover:text-white">
              icechest/z7co
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
