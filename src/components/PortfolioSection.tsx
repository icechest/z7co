import React, { useState } from 'react';
import { Trees, Landmark, TrendingUp, ShieldCheck, MapPin, ArrowRight, CheckCircle2, Calculator, Mail, Phone, User } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  // Landowner yield estimator state
  const [acres, setAcres] = useState(40);
  const [regionType, setRegionType] = useState('mountain');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    parcelLocation: '',
    message: ''
  });

  // Calculate estimated yield
  const baseRatePerUnit = regionType === 'mountain' ? 360 : regionType === 'waterfront' ? 420 : 280;
  const suggestedUnits = Math.min(Math.max(1, Math.floor(acres / 10)), 6);
  const occupancyRate = 0.72; // 72% average annual occupancy
  const grossAnnual = Math.round(suggestedUnits * baseRatePerUnit * 365 * occupancyRate);
  const netLandownerShare = Math.round(grossAnnual * 0.45); // 45% net yield to landowner

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <section id="portfolio-land" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#5B8266] mb-2">
          <Landmark className="w-3.5 h-3.5 text-[#5B8266]" />
          <span>Real Estate Portfolio & Conservation Holdings</span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1F3B3D] tracking-tight">
          Wilderness Land Portfolio
        </h2>
        <p className="text-base sm:text-lg text-[#1F3B3D]/70 mt-2 font-light leading-relaxed">
          Z7CO curates, designs, and stewards high-value natural landholdings. We partner with legacy landowners, family trusts, and conservation-focused investors to build low-impact architectural hospitality.
        </p>
      </div>

      {/* Portfolio Metrics Counter (3 Columns) */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-16">
        <div className="bg-[#E6ECE8] p-6 rounded-3xl border border-[#1F3B3D]/10">
          <div className="font-display text-4xl font-bold text-[#1F3B3D] mb-1">480+</div>
          <div className="text-xs uppercase tracking-wider font-bold text-[#5B8266]">
            Total Conserved Acres
          </div>
          <p className="text-[11px] text-[#1F3B3D]/70 mt-1">
            Protected watersheds, old-growth timber, and wildlife paths
          </p>
        </div>

        <div className="bg-[#E6ECE8] p-6 rounded-3xl border border-[#1F3B3D]/10">
          <div className="font-display text-4xl font-bold text-[#1F3B3D] mb-1">12</div>
          <div className="text-xs uppercase tracking-wider font-bold text-[#5B8266]">
            Active Outposts
          </div>
          <p className="text-[11px] text-[#1F3B3D]/70 mt-1">
            Turnkey architectural glass cabins & secluded safari structures
          </p>
        </div>

        <div className="bg-[#E6ECE8] p-6 rounded-3xl border border-[#1F3B3D]/10">
          <div className="font-display text-4xl font-bold text-[#D26B5B] mb-1">74.2%</div>
          <div className="text-xs uppercase tracking-wider font-bold text-[#5B8266]">
            Year-Round Occupancy
          </div>
          <p className="text-[11px] text-[#1F3B3D]/70 mt-1">
            Driven by high-earning, time-constrained professionals
          </p>
        </div>

        <div className="bg-[#E6ECE8] p-6 rounded-3xl border border-[#1F3B3D]/10">
          <div className="font-display text-4xl font-bold text-[#1F3B3D] mb-1">Zero</div>
          <div className="text-xs uppercase tracking-wider font-bold text-[#5B8266]">
            Permanent Grid Footprint
          </div>
          <p className="text-[11px] text-[#1F3B3D]/70 mt-1">
            Solar microgrids, graywater closed-loop systems, and timber footings
          </p>
        </div>
      </div>

      {/* 3 Core Development Models */}
      <div className="mb-20">
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1F3B3D] mb-8">
          Our Three Real Estate Models
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Model 1 */}
          <div className="bg-[#F8F6F1] p-8 rounded-3xl border border-[#1F3B3D]/10 hover:border-[#1F3B3D]/30 transition-all hover:shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1F3B3D] text-[#F8F6F1] flex items-center justify-center font-display font-bold text-lg mb-6">
                01
              </div>
              <h4 className="font-display text-2xl font-bold text-[#1F3B3D] mb-2">
                Z7CO Flagship Outposts
              </h4>
              <p className="text-xs sm:text-sm text-[#1F3B3D]/80 font-light leading-relaxed mb-6">
                Directly owned real estate parcels developed with custom glass architecture, wood-fired Nordic saunas, and private trail networks. Fully managed by our in-house wilderness concierge.
              </p>
              <ul className="space-y-2 text-xs text-[#1F3B3D]/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8266]" />
                  <span>100% turnkey operational control</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8266]" />
                  <span>High-spec architectural engineering</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8266]" />
                  <span>Permanent conservation easements</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#1F3B3D]/10 text-xs font-bold text-[#5B8266] uppercase tracking-wider">
              Status: Active In Portfolio
            </div>
          </div>

          {/* Model 2 */}
          <div className="bg-[#F8F6F1] p-8 rounded-3xl border border-[#1F3B3D]/10 hover:border-[#1F3B3D]/30 transition-all hover:shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#5B8266] text-white flex items-center justify-center font-display font-bold text-lg mb-6">
                02
              </div>
              <h4 className="font-display text-2xl font-bold text-[#1F3B3D] mb-2">
                Landowner Joint Ventures
              </h4>
              <p className="text-xs sm:text-sm text-[#1F3B3D]/80 font-light leading-relaxed mb-6">
                Do you own 20+ acres of scenic acreage? We finance, deliver, and operate off-grid architectural retreats on your property with zero capital expenditure required from you.
              </p>
              <ul className="space-y-2 text-xs text-[#1F3B3D]/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8266]" />
                  <span>Substantial passive annual revenue</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8266]" />
                  <span>Z7CO covers marketing, cleaning & insurance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8266]" />
                  <span>Retain 100% deed ownership of your land</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#1F3B3D]/10 text-xs font-bold text-[#D26B5B] uppercase tracking-wider">
              Status: Accepting Parcels
            </div>
          </div>

          {/* Model 3 */}
          <div className="bg-[#F8F6F1] p-8 rounded-3xl border border-[#1F3B3D]/10 hover:border-[#1F3B3D]/30 transition-all hover:shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#D26B5B] text-white flex items-center justify-center font-display font-bold text-lg mb-6">
                03
              </div>
              <h4 className="font-display text-2xl font-bold text-[#1F3B3D] mb-2">
                Co-Ownership Sanctuaries
              </h4>
              <p className="text-xs sm:text-sm text-[#1F3B3D]/80 font-light leading-relaxed mb-6">
                Fractional equity deeds for discerning buyers who want 45+ days of guaranteed private retreat time per year, while earning passive yield when not in residence.
              </p>
              <ul className="space-y-2 text-xs text-[#1F3B3D]/90">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8266]" />
                  <span>1/8th deeded real estate title</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8266]" />
                  <span>Full property management & concierge</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#5B8266]" />
                  <span>Appreciating natural asset backed by land</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-[#1F3B3D]/10 text-xs font-bold text-[#1F3B3D] uppercase tracking-wider">
              Status: Investor Round Open
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Landowner Yield Calculator & Inquiry Form */}
      <div className="bg-[#1F3B3D] text-[#F8F6F1] rounded-3xl p-8 sm:p-12 border border-[#2A4446] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Calculator */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B8266]/20 text-[#5B8266] text-xs font-bold uppercase tracking-wider mb-4">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Land Yield Estimator</span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Unlock the Value of Your Wilderness Parcel
            </h3>
            <p className="text-xs sm:text-sm text-[#E6ECE8]/80 font-light leading-relaxed mb-8">
              Adjust your acreage and topography to calculate how much annual revenue a low-impact Z7CO outpost could generate for your property.
            </p>

            <div className="space-y-6 bg-black/20 p-6 rounded-2xl border border-white/10">
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-[#E6ECE8] mb-2">
                  <span>Parcel Acreage</span>
                  <span className="text-[#D26B5B] font-mono text-sm">{acres} Acres</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={200}
                  step={5}
                  value={acres}
                  onChange={(e) => setAcres(Number(e.target.value))}
                  className="w-full accent-[#D26B5B] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-white/50 mt-1">
                  <span>10 Acres (Min)</span>
                  <span>100 Acres</span>
                  <span>200+ Acres</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#E6ECE8] mb-2">
                  Topography & Setting
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'mountain', label: 'Mountain Ridge' },
                    { id: 'waterfront', label: 'River / Lakefront' },
                    { id: 'forest', label: 'Pine Valley' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => setRegionType(t.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all ${
                        regionType === t.id
                          ? 'bg-[#D26B5B] text-white'
                          : 'bg-white/5 text-[#E6ECE8] hover:bg-white/10'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculated Results */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#5B8266]">
                    Low-Impact Cabins
                  </div>
                  <div className="font-display text-2xl font-bold text-white">
                    {suggestedUnits} Units
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-[#D26B5B]">
                    Est. Landowner Net / Yr
                  </div>
                  <div className="font-display text-3xl font-bold text-[#D26B5B]">
                    ${netLandownerShare.toLocaleString()}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Partner Form */}
          <div className="bg-[#F8F6F1] text-[#1F3B3D] p-6 sm:p-8 rounded-2xl shadow-lg border border-white/30">
            {inquirySubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-[#5B8266]/20 text-[#5B8266] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl font-bold text-[#1F3B3D]">
                  Land Inquiry Received
                </h4>
                <p className="text-xs text-[#1F3B3D]/80 max-w-sm mx-auto leading-relaxed">
                  Thank you, {formData.name || 'Partner'}. Our land acquisitions director will review satellite topography for your parcel and contact you within 2 business days.
                </p>
                <button
                  onClick={() => setInquirySubmitted(false)}
                  className="px-5 py-2.5 bg-[#1F3B3D] text-white rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <h4 className="font-display text-xl font-bold text-[#1F3B3D]">
                    Partner With Z7CO Land
                  </h4>
                  <p className="text-xs text-[#1F3B3D]/70 font-light mt-0.5">
                    Submit your property details for a confidential feasibility assessment.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-[#1F3B3D]/70 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#E6ECE8] text-xs p-2.5 rounded-xl border border-[#1F3B3D]/10 text-[#1F3B3D] focus:outline-none focus:border-[#D26B5B]"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-[#1F3B3D]/70 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#E6ECE8] text-xs p-2.5 rounded-xl border border-[#1F3B3D]/10 text-[#1F3B3D] focus:outline-none focus:border-[#D26B5B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-[#1F3B3D]/70 mb-1">
                    Parcel Location or County / State
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Mono County, CA or Sullivan County, NY"
                    value={formData.parcelLocation}
                    onChange={(e) => setFormData({ ...formData, parcelLocation: e.target.value })}
                    className="w-full bg-[#E6ECE8] text-xs p-2.5 rounded-xl border border-[#1F3B3D]/10 text-[#1F3B3D] focus:outline-none focus:border-[#D26B5B]"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-[#1F3B3D]/70 mb-1">
                    Parcel Details (Acreage, road access, views)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the natural features, water access, and existing trails..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#E6ECE8] text-xs p-2.5 rounded-xl border border-[#1F3B3D]/10 text-[#1F3B3D] focus:outline-none focus:border-[#D26B5B]"
                  />
                </div>

                <button
                  type="submit"
                  id="submit-land-inquiry-btn"
                  className="w-full py-3.5 bg-[#D26B5B] hover:bg-[#b85444] text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Request Feasibility Study</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </section>
  );
};
