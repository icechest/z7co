import React, { useState } from 'react';
import { ShoppingBag, Compass, Menu, X, Sparkles, MapPin, Globe, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  cartCount: number;
  openCart: () => void;
  openQuickMatcher: () => void;
  openBooking: () => void;
  openGitModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cartCount,
  openCart,
  openQuickMatcher,
  openBooking,
  openGitModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Overview' },
    { id: 'rentals', label: 'Stays & Camps' },
    { id: 'adventures', label: 'Adventures' },
    { id: 'shop', label: 'Provisions' },
    { id: 'portfolio', label: 'Real Estate' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner with Quick Status & Custom Domain Badge */}
      <div className="bg-[#172627] text-[#E6ECE8] text-xs py-2 px-4 border-b border-[#2A4446]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-[#5B8266]">
            <span className="inline-block w-2 h-2 rounded-full bg-[#5B8266] animate-pulse"></span>
            <span className="text-[#E6ECE8] font-medium tracking-wide">
              Fall & Winter Wilderness Stays Open for Reservation
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="hidden md:inline text-[#E6ECE8]/70">
              High Sierra & Pine Barrens Outposts
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={openGitModal}
              id="git-status-button"
              className="flex items-center gap-1.5 text-xs text-[#E6ECE8]/80 hover:text-white transition-colors underline decoration-[#D26B5B] underline-offset-4"
              title="Custom domain & deployment status"
            >
              <Globe className="w-3.5 h-3.5 text-[#D26B5B]" />
              <span className="font-mono">z7co.com</span>
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={openQuickMatcher}
              id="top-quick-matcher-link"
              className="flex items-center gap-1 text-[#D26B5B] hover:text-[#e07b6c] font-medium transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero-Time Escape Matcher</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#F8F6F1]/90 backdrop-blur-md border-b border-[#1F3B3D]/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('home')}
              id="brand-logo-btn"
              className="text-left group flex items-baseline gap-2"
            >
              <span className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1F3B3D] group-hover:text-[#D26B5B] transition-colors">
                Z7CO.
              </span>
              <span className="hidden sm:inline-block text-[10px] tracking-[0.2em] uppercase font-bold text-[#5B8266] border-l border-[#1F3B3D]/20 pl-2">
                Outpost & Stays
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative text-xs uppercase tracking-widest font-semibold py-2 transition-colors ${
                    isActive
                      ? 'text-[#D26B5B]'
                      : 'text-[#1F3B3D]/80 hover:text-[#1F3B3D]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D26B5B] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Primary CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Quick Trip Matcher Button */}
            <button
              onClick={openQuickMatcher}
              id="header-quick-escape-btn"
              className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#E6ECE8] text-[#1F3B3D] hover:bg-[#cbd8cf] transition-all border border-[#1F3B3D]/10"
              title="Match me with a ready-to-go getaway"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D26B5B]" />
              <span>Quick Escape</span>
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={openCart}
              id="header-cart-button"
              className="relative p-2.5 rounded-full text-[#1F3B3D] hover:bg-[#E6ECE8] transition-colors"
              aria-label="View shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D26B5B] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary Action: Book Now */}
            <button
              onClick={openBooking}
              id="header-book-now-btn"
              className="bg-[#1F3B3D] text-[#F8F6F1] px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase hover:bg-[#D26B5B] hover:shadow-md transition-all flex items-center gap-1.5"
            >
              <span>Book Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="lg:hidden p-2 text-[#1F3B3D] hover:bg-[#E6ECE8] rounded-lg transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F8F6F1] border-b border-[#1F3B3D]/15 px-6 py-5 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-sm uppercase tracking-widest font-semibold py-2.5 border-b border-[#1F3B3D]/5 flex items-center justify-between ${
                    activeTab === item.id ? 'text-[#D26B5B]' : 'text-[#1F3B3D]'
                  }`}
                >
                  <span>{item.label}</span>
                  {activeTab === item.id && <span className="w-2 h-2 rounded-full bg-[#D26B5B]"></span>}
                </button>
              ))}

              <div className="pt-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuickMatcher();
                  }}
                  id="mobile-quick-matcher-btn"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#E6ECE8] text-[#1F3B3D] rounded-xl text-xs uppercase font-bold tracking-wider"
                >
                  <Sparkles className="w-4 h-4 text-[#D26B5B]" />
                  Zero-Time Escape Matcher
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
