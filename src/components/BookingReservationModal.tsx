import React, { useState } from 'react';
import { RentalProperty, Adventure, QuickEscapePackage } from '../types';
import { PROPERTIES, ADVENTURES } from '../data/mockData';
import { X, Calendar, Users, CheckCircle2, Sparkles, MapPin, ArrowRight, ShieldCheck, Clock, Key } from 'lucide-react';

interface BookingReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProperty?: RentalProperty | null;
  initialAdventure?: Adventure | null;
  initialPackage?: QuickEscapePackage | null;
}

export const BookingReservationModal: React.FC<BookingReservationModalProps> = ({
  isOpen,
  onClose,
  initialProperty,
  initialAdventure,
  initialPackage
}) => {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>(
    initialProperty?.id || PROPERTIES[0].id
  );
  const [selectedAdventureId, setSelectedAdventureId] = useState<string>(
    initialAdventure?.id || ''
  );
  const [nights, setNights] = useState<number>(2);
  const [guests, setGuests] = useState<number>(2);
  const [checkInDate, setCheckInDate] = useState<string>(
    new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0]
  );
  const [saunaPrep, setSaunaPrep] = useState<boolean>(true);
  const [provisionsPack, setProvisionsPack] = useState<boolean>(true);
  
  // Guest contact info
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [reservationCode, setReservationCode] = useState<string>('');

  if (!isOpen) return null;

  const currentProperty = PROPERTIES.find((p) => p.id === selectedPropertyId) || PROPERTIES[0];
  const currentAdventure = ADVENTURES.find((a) => a.id === selectedAdventureId);

  // Pricing math
  const staySubtotal = currentProperty.pricePerNight * nights;
  const adventureTotal = currentAdventure ? currentAdventure.price * guests : 0;
  const addonsTotal = (saunaPrep ? 45 : 0) + (provisionsPack ? 60 : 0);
  const grandTotal = staySubtotal + adventureTotal + addonsTotal + 85; // $85 cleaning

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'Z7-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setReservationCode(code);
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#F8F6F1] text-[#1F3B3D] w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#1F3B3D]/10 max-h-[92vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-[#1F3B3D]/10 flex items-center justify-between bg-[#F8F6F1]">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-xl text-[#1F3B3D]">
              Z7CO. Reservation Portal
            </span>
            <span className="text-xs bg-[#E6ECE8] text-[#5B8266] font-bold px-2 py-0.5 rounded-full">
              Direct Booking
            </span>
          </div>

          <button
            onClick={onClose}
            id="close-booking-modal-btn"
            className="p-2 text-[#1F3B3D]/60 hover:text-[#1F3B3D] rounded-full hover:bg-[#E6ECE8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {confirmed ? (
            <div className="py-8 text-center space-y-6 max-w-xl mx-auto">
              <div className="w-20 h-20 bg-[#5B8266]/20 text-[#5B8266] rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-widest text-[#5B8266]">
                  Reservation Confirmed
                </span>
                <h3 className="font-display text-3xl font-bold text-[#1F3B3D] mt-1">
                  Your Wilderness Retreat is Locked
                </h3>
                <p className="text-xs sm:text-sm text-[#1F3B3D]/70 mt-2 font-light">
                  A full welcome itinerary and turn-by-turn mountain coordinates have been dispatched to <span className="font-semibold text-[#1F3B3D]">{email || 'your email'}</span>.
                </p>
              </div>

              {/* Booking Confirmation Card */}
              <div className="bg-[#E6ECE8] p-6 rounded-2xl border border-[#1F3B3D]/10 text-left space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-[#1F3B3D]/10">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#5B8266]">
                    Confirmation Code
                  </span>
                  <span className="font-mono text-base font-bold text-[#D26B5B] bg-white px-3 py-1 rounded-lg shadow-sm">
                    {reservationCode}
                  </span>
                </div>

                <div className="text-xs space-y-1 text-[#1F3B3D]/80">
                  <div className="font-bold text-sm text-[#1F3B3D]">{currentProperty.title}</div>
                  <div>Location: {currentProperty.location} ({currentProperty.coordinates})</div>
                  <div>Check-In Date: {checkInDate} • Duration: {nights} Nights</div>
                  <div>Guests: {guests} Persons • Keyless Keypad Access</div>
                  {currentAdventure && (
                    <div className="text-[#5B8266] font-semibold pt-1">
                      Included Outing: {currentAdventure.title}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#1F3B3D]/10 flex items-center gap-2 text-xs text-[#5B8266] font-medium">
                  <Key className="w-4 h-4 text-[#D26B5B]" />
                  <span>Keypad PIN will activate 2 hours before check-in time ({currentProperty.checkInTime}).</span>
                </div>
              </div>

              <div className="flex gap-3 justify-center pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-[#1F3B3D] text-white rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#D26B5B] transition-colors"
                >
                  Done & Return to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleConfirmReservation} className="space-y-8">
              
              {/* Step 1: Select Retreat */}
              <div className="space-y-3">
                <div className="text-xs uppercase font-bold tracking-wider text-[#5B8266] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>01 • Select Your Wilderness Sanctuary</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PROPERTIES.slice(0, 3).map((prop) => (
                    <div
                      key={prop.id}
                      onClick={() => setSelectedPropertyId(prop.id)}
                      className={`p-3 rounded-2xl border cursor-pointer transition-all flex gap-3 items-center ${
                        selectedPropertyId === prop.id
                          ? 'border-[#D26B5B] bg-white shadow-md'
                          : 'border-[#1F3B3D]/10 bg-[#E6ECE8]/50 hover:bg-[#E6ECE8]'
                      }`}
                    >
                      <img
                        src={prop.featuredImage}
                        alt={prop.title}
                        className="w-14 h-14 rounded-xl object-cover shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-[#1F3B3D] truncate">{prop.title}</div>
                        <div className="text-[11px] text-[#5B8266] font-semibold">${prop.pricePerNight}/night</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Dates, Nights, and Guests */}
              <div className="space-y-3">
                <div className="text-xs uppercase font-bold tracking-wider text-[#5B8266] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>02 • Timing & Traveling Party</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-[#1F3B3D]/70 mb-1">
                      Check-In Date
                    </label>
                    <input
                      type="date"
                      required
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                      className="w-full bg-[#E6ECE8] text-xs p-2.5 rounded-xl border border-[#1F3B3D]/10 font-medium text-[#1F3B3D] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-[#1F3B3D]/70 mb-1">
                      Duration
                    </label>
                    <select
                      value={nights}
                      onChange={(e) => setNights(Number(e.target.value))}
                      className="w-full bg-[#E6ECE8] text-xs p-2.5 rounded-xl border border-[#1F3B3D]/10 font-medium text-[#1F3B3D] focus:outline-none cursor-pointer"
                    >
                      <option value={2}>2 Nights (Weekend Reset)</option>
                      <option value={3}>3 Nights (Long Weekend)</option>
                      <option value={4}>4 Nights (Midweek Recharge)</option>
                      <option value={7}>7 Nights (Full Wilderness Residency)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-[#1F3B3D]/70 mb-1">
                      Party Size
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-[#E6ECE8] text-xs p-2.5 rounded-xl border border-[#1F3B3D]/10 font-medium text-[#1F3B3D] focus:outline-none cursor-pointer"
                    >
                      <option value={1}>1 Guest (Solo)</option>
                      <option value={2}>2 Guests (Couple)</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                      <option value={6}>6 Guests (Outpost Gathering)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Turnkey Add-ons for Zero-Planning */}
              <div className="space-y-3">
                <div className="text-xs uppercase font-bold tracking-wider text-[#5B8266] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>03 • Turnkey Arrival Services (Ready on Check-In)</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      saunaPrep
                        ? 'border-[#D26B5B] bg-white shadow-sm'
                        : 'border-[#1F3B3D]/10 bg-[#E6ECE8]/40'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={saunaPrep}
                      onChange={(e) => setSaunaPrep(e.target.checked)}
                      className="accent-[#D26B5B] mt-1"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#1F3B3D]">Pre-Stoked Cedar Sauna ($45)</div>
                      <div className="text-[11px] text-[#1F3B3D]/70 font-light">
                        Hearth firewood stacked and sauna pre-heated for your arrival.
                      </div>
                    </div>
                  </label>

                  <label
                    className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all ${
                      provisionsPack
                        ? 'border-[#D26B5B] bg-white shadow-sm'
                        : 'border-[#1F3B3D]/10 bg-[#E6ECE8]/40'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={provisionsPack}
                      onChange={(e) => setProvisionsPack(e.target.checked)}
                      className="accent-[#D26B5B] mt-1"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#1F3B3D]">Field Provisions Welcome Basket ($60)</div>
                      <div className="text-[11px] text-[#1F3B3D]/70 font-light">
                        Artisan mountain sourdough, oak-roasted coffee, and raw wildflower honey.
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Step 4: Guest Details */}
              <div className="space-y-3">
                <div className="text-xs uppercase font-bold tracking-wider text-[#5B8266] flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  <span>04 • Primary Guest Details</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-[#1F3B3D]/70 mb-1">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-[#E6ECE8] text-xs p-2.5 rounded-xl border border-[#1F3B3D]/10 text-[#1F3B3D] focus:outline-none"
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#E6ECE8] text-xs p-2.5 rounded-xl border border-[#1F3B3D]/10 text-[#1F3B3D] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-[#1F3B3D]/70 mb-1">
                      Mobile Phone (for Keypad SMS)
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#E6ECE8] text-xs p-2.5 rounded-xl border border-[#1F3B3D]/10 text-[#1F3B3D] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Price Breakdown and Submit */}
              <div className="bg-[#E6ECE8] p-5 rounded-2xl border border-[#1F3B3D]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-0.5 text-xs text-[#1F3B3D]/80">
                  <div className="font-semibold text-[#1F3B3D]">
                    {currentProperty.title} ({nights} Nights)
                  </div>
                  <div>
                    ${currentProperty.pricePerNight} × {nights} nights + sanitization & concierge services
                  </div>
                  <div className="text-[10px] text-[#5B8266] font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Free cancellation up to 72 hours prior to arrival</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 self-end sm:self-auto">
                  <div className="text-right">
                    <div className="text-[10px] uppercase font-bold text-[#5B8266]">Total Due</div>
                    <div className="font-display text-2xl font-bold text-[#D26B5B]">${grandTotal}</div>
                  </div>

                  <button
                    type="submit"
                    id="submit-reservation-btn"
                    className="bg-[#D26B5B] hover:bg-[#b85444] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center gap-2"
                  >
                    <span>Confirm Booking</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
