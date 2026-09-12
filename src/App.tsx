/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickEscapeFinder } from './components/QuickEscapeFinder';
import { RentalsSection } from './components/RentalsSection';
import { AdventuresSection } from './components/AdventuresSection';
import { ShopSection } from './components/ShopSection';
import { PortfolioSection } from './components/PortfolioSection';
import { RentalDetailModal } from './components/RentalDetailModal';
import { BookingReservationModal } from './components/BookingReservationModal';
import { CartDrawer } from './components/CartDrawer';
import { GitDeploymentModal } from './components/GitDeploymentModal';
import { Footer } from './components/Footer';

import {
  PROPERTIES,
  ADVENTURES,
  PRODUCTS,
  QUICK_PACKAGES
} from './data/mockData';
import {
  RentalProperty,
  Adventure,
  Product,
  CartItem,
  QuickEscapePackage,
  Season
} from './types';
import { Sparkles, Compass, ShieldCheck, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  
  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { product: PRODUCTS[3], quantity: 1 } // Initial provision in bag: Sierra Sourdough & Hearth Butter
  ]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  // Modals state
  const [selectedProperty, setSelectedProperty] = useState<RentalProperty | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState<boolean>(false);
  const [gitModalOpen, setGitModalOpen] = useState<boolean>(false);
  const [quickMatcherOpen, setQuickMatcherOpen] = useState<boolean>(false);

  // Active targets for booking
  const [bookingProperty, setBookingProperty] = useState<RentalProperty | null>(null);
  const [bookingAdventure, setBookingAdventure] = useState<Adventure | null>(null);
  const [bookingPackage, setBookingPackage] = useState<QuickEscapePackage | null>(null);

  // Total items in cart
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Cart Handlers
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveCartItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Booking Flow Triggers
  const handleStartPropertyBooking = (property: RentalProperty, nights?: number) => {
    setBookingProperty(property);
    setBookingAdventure(null);
    setBookingPackage(null);
    setSelectedProperty(null);
    setBookingModalOpen(true);
  };

  const handleStartAdventureBooking = (adventure: Adventure) => {
    setBookingAdventure(adventure);
    setBookingProperty(PROPERTIES[0]);
    setBookingPackage(null);
    setBookingModalOpen(true);
  };

  const handleStartPackageBooking = (pkg: QuickEscapePackage) => {
    setBookingPackage(pkg);
    setBookingProperty(pkg.property);
    setBookingAdventure(pkg.adventure);
    setQuickMatcherOpen(false);
    setBookingModalOpen(true);
  };

  const handleGeneralBooking = () => {
    setBookingProperty(PROPERTIES[0]);
    setBookingAdventure(null);
    setBookingPackage(null);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8F6F1] text-[#1F3B3D] font-body flex flex-col selection:bg-[#D26B5B] selection:text-white">
      {/* Brand Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartCount}
        openCart={() => setIsCartOpen(true)}
        openQuickMatcher={() => setQuickMatcherOpen(true)}
        openBooking={handleGeneralBooking}
        openGitModal={() => setGitModalOpen(true)}
      />

      {/* Main View Switching */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            {/* Editorial Hero */}
            <Hero
              onExploreStays={() => {
                setActiveTab('rentals');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreAdventures={() => {
                setActiveTab('adventures');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onOpenQuickMatcher={() => setQuickMatcherOpen(true)}
              onFilterChange={() => {
                setActiveTab('rentals');
              }}
            />

            {/* Zero-Time Quick Matcher Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
              <QuickEscapeFinder
                onSelectProperty={(prop) => setSelectedProperty(prop)}
                onSelectAdventure={(adv) => handleStartAdventureBooking(adv)}
                onBookPackage={(pkg) => handleStartPackageBooking(pkg)}
              />
            </div>

            {/* Curated Stays Preview */}
            <div className="border-t border-[#1F3B3D]/10">
              <RentalsSection
                properties={PROPERTIES}
                onSelectProperty={(prop) => setSelectedProperty(prop)}
                onBookProperty={(prop) => handleStartPropertyBooking(prop)}
              />
            </div>

            {/* Seasonal Adventure Hub Preview */}
            <div className="border-t border-[#1F3B3D]/10 bg-[#E6ECE8]/40">
              <AdventuresSection
                adventures={ADVENTURES}
                onBookAdventure={(adv) => handleStartAdventureBooking(adv)}
              />
            </div>

            {/* Provisions Shop Preview */}
            <div className="border-t border-[#1F3B3D]/10">
              <ShopSection
                products={PRODUCTS}
                onAddToCart={handleAddToCart}
              />
            </div>

            {/* Real Estate & Land Trust Preview */}
            <div className="border-t border-[#1F3B3D]/10 bg-[#E6ECE8]/30">
              <PortfolioSection />
            </div>
          </div>
        )}

        {/* Dedicated Stays & Campsites Page */}
        {activeTab === 'rentals' && (
          <div className="pt-6">
            <RentalsSection
              properties={PROPERTIES}
              onSelectProperty={(prop) => setSelectedProperty(prop)}
              onBookProperty={(prop) => handleStartPropertyBooking(prop)}
            />
          </div>
        )}

        {/* Dedicated Seasonal Adventures Page (Spring, Summer, Fall, Winter) */}
        {activeTab === 'adventures' && (
          <div className="pt-6">
            <AdventuresSection
              adventures={ADVENTURES}
              onBookAdventure={(adv) => handleStartAdventureBooking(adv)}
            />
          </div>
        )}

        {/* Dedicated Items for Sale / Provisions Page */}
        {activeTab === 'shop' && (
          <div className="pt-6">
            <ShopSection
              products={PRODUCTS}
              onAddToCart={handleAddToCart}
            />
          </div>
        )}

        {/* Dedicated Real Estate Portfolio Page */}
        {activeTab === 'portfolio' && (
          <div className="pt-6">
            <PortfolioSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavClick={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        openGitModal={() => setGitModalOpen(true)}
        openQuickMatcher={() => setQuickMatcherOpen(true)}
      />

      {/* Rental Property Detail Modal */}
      {selectedProperty && (
        <RentalDetailModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
          onBook={(prop, nights) => handleStartPropertyBooking(prop, nights)}
        />
      )}

      {/* Quick Escape Matcher Popup Modal (if opened via header button) */}
      {quickMatcherOpen && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setQuickMatcherOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Zero-Time Escape Matcher"
        >
          <div
            className="w-full max-w-5xl my-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <QuickEscapeFinder
              onSelectProperty={(prop) => {
                setQuickMatcherOpen(false);
                setSelectedProperty(prop);
              }}
              onSelectAdventure={(adv) => {
                setQuickMatcherOpen(false);
                handleStartAdventureBooking(adv);
              }}
              onBookPackage={(pkg) => {
                setQuickMatcherOpen(false);
                handleStartPackageBooking(pkg);
              }}
              onClose={() => setQuickMatcherOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Booking & Reservation Portal Modal */}
      <BookingReservationModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialProperty={bookingProperty}
        initialAdventure={bookingAdventure}
        initialPackage={bookingPackage}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      {/* Git & Cloudflare Pages Modal */}
      <GitDeploymentModal
        isOpen={gitModalOpen}
        onClose={() => setGitModalOpen(false)}
      />
    </div>
  );
}
