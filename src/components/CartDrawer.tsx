import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle2, Truck, Home } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [deliveryMode, setDeliveryMode] = useState<'shipping' | 'cabin'>('shipping');
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoMessage, setPromoMessage] = useState<string | null>(null);
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  if (!isOpen) return null;

  const rawSubtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(rawSubtotal * (discountPercent / 100));
  const discountedSubtotal = rawSubtotal - discountAmount;
  const shipping = deliveryMode === 'cabin' ? 0 : rawSubtotal > 150 ? 0 : 12;
  const total = discountedSubtotal + shipping;

  const applyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'NATURE10' || promoCode.trim().toUpperCase() === 'Z7CO') {
      setDiscountPercent(10);
      setPromoMessage('10% Wilderness discount applied!');
    } else {
      setPromoMessage('Invalid code. Try code "Z7CO" for 10% off.');
    }
  };

  const handleCheckout = () => {
    setCheckoutComplete(true);
  };

  const handleFinish = () => {
    onClearCart();
    setCheckoutComplete(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F8F6F1] text-[#1F3B3D] shadow-2xl flex flex-col justify-between border-l border-[#1F3B3D]/10">
          
          {/* Drawer Top */}
          <div className="p-6 border-b border-[#1F3B3D]/10 flex items-center justify-between bg-[#F8F6F1]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#D26B5B]" />
              <h3 className="font-display text-xl font-bold">Field Provision Bag</h3>
              <span className="text-xs bg-[#E6ECE8] text-[#1F3B3D] px-2 py-0.5 rounded-full font-bold">
                {items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>

            <button
              onClick={onClose}
              id="close-cart-drawer-btn"
              className="p-2 text-[#1F3B3D]/60 hover:text-[#1F3B3D] rounded-full hover:bg-[#E6ECE8] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            
            {checkoutComplete ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-[#5B8266]/20 text-[#5B8266] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-display text-2xl font-bold text-[#1F3B3D]">
                  Order Placed Successfully!
                </h4>
                <p className="text-xs text-[#1F3B3D]/70 max-w-xs mx-auto leading-relaxed">
                  {deliveryMode === 'cabin'
                    ? 'Your items will be safely placed inside your reserved cabin hearth before check-in.'
                    : 'Your field goods are being prepared for parcel dispatch with tracking sent via email.'}
                </p>
                <div className="bg-[#E6ECE8] p-4 rounded-2xl text-xs space-y-1 text-left">
                  <div className="font-bold text-[#1F3B3D]">Order #Z7-{Math.floor(100000 + Math.random() * 900000)}</div>
                  <div className="text-[#1F3B3D]/70">Billed: ${total}</div>
                  <div className="text-[#1F3B3D]/70">Fulfillment: {deliveryMode === 'cabin' ? 'At Cabin Outpost' : 'Standard Courier Delivery'}</div>
                </div>
                <button
                  onClick={handleFinish}
                  className="w-full py-3 bg-[#1F3B3D] text-white rounded-xl text-xs font-bold uppercase tracking-wider"
                >
                  Return to Outpost
                </button>
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <div className="w-16 h-16 bg-[#E6ECE8] rounded-full flex items-center justify-center mx-auto text-[#1F3B3D]/40">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-base font-display font-semibold text-[#1F3B3D]">
                  Your field bag is empty
                </p>
                <p className="text-xs text-[#1F3B3D]/60 max-w-xs mx-auto">
                  Explore our curated gear, merino layers, and hearth-roasted provisions.
                </p>
              </div>
            ) : (
              <>
                {/* Item List */}
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-4 p-3 bg-white rounded-2xl border border-[#1F3B3D]/5 items-center shadow-sm"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 rounded-xl object-cover shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] uppercase font-bold text-[#5B8266]">
                          {item.product.category}
                        </div>
                        <h5 className="font-display text-sm font-bold text-[#1F3B3D] truncate">
                          {item.product.name}
                        </h5>
                        <div className="text-xs font-semibold text-[#D26B5B] mt-0.5">
                          ${item.product.price} each
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            className="p-1 rounded-md bg-[#E6ECE8] hover:bg-[#cbd8cf] text-[#1F3B3D]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold px-1.5">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            className="p-1 rounded-md bg-[#E6ECE8] hover:bg-[#cbd8cf] text-[#1F3B3D]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="font-display text-sm font-bold text-[#1F3B3D]">
                          ${item.product.price * item.quantity}
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="mt-3 text-red-600/70 hover:text-red-700 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Option Toggle */}
                <div className="bg-[#E6ECE8] p-4 rounded-2xl space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#1F3B3D]">
                    Fulfillment Method:
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setDeliveryMode('shipping')}
                      className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                        deliveryMode === 'shipping'
                          ? 'bg-[#1F3B3D] text-white border-[#1F3B3D] shadow-sm'
                          : 'bg-white text-[#1F3B3D] border-[#1F3B3D]/10 hover:border-[#1F3B3D]/30'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold mb-0.5">
                        <Truck className="w-3.5 h-3.5" />
                        <span>Ship Home</span>
                      </div>
                      <div className="text-[10px] opacity-80">Standard 3-day mail</div>
                    </button>

                    <button
                      onClick={() => setDeliveryMode('cabin')}
                      className={`p-2.5 rounded-xl text-left border text-xs transition-all ${
                        deliveryMode === 'cabin'
                          ? 'bg-[#1F3B3D] text-white border-[#1F3B3D] shadow-sm'
                          : 'bg-white text-[#1F3B3D] border-[#1F3B3D]/10 hover:border-[#1F3B3D]/30'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold mb-0.5">
                        <Home className="w-3.5 h-3.5 text-[#D26B5B]" />
                        <span>Deliver to Cabin</span>
                      </div>
                      <div className="text-[10px] opacity-80">Waiting at check-in</div>
                    </button>
                  </div>
                </div>

                {/* Promo Code Input */}
                <form onSubmit={applyPromo} className="space-y-1">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (try 'Z7CO')"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-white border border-[#1F3B3D]/15 rounded-xl px-3 py-2 text-xs text-[#1F3B3D] focus:outline-none focus:border-[#D26B5B]"
                    />
                    <button
                      type="submit"
                      className="bg-[#1F3B3D] text-white px-3 py-2 rounded-xl text-xs font-semibold hover:bg-[#D26B5B] transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <div className="text-[11px] font-medium text-[#5B8266] pl-1">
                      {promoMessage}
                    </div>
                  )}
                </form>
              </>
            )}

          </div>

          {/* Drawer Footer & Checkout */}
          {!checkoutComplete && items.length > 0 && (
            <div className="p-6 border-t border-[#1F3B3D]/10 bg-[#F8F6F1] space-y-4">
              <div className="space-y-1.5 text-xs text-[#1F3B3D]/80">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#1F3B3D]">${rawSubtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#5B8266] font-semibold">
                    <span>Wilderness Promo ({discountPercent}%)</span>
                    <span>-${discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery ({deliveryMode === 'cabin' ? 'Cabin Concierge' : 'Courier'})</span>
                  <span className="font-semibold text-[#1F3B3D]">
                    {shipping === 0 ? 'FREE' : `$${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#1F3B3D] pt-2 border-t border-[#1F3B3D]/10">
                  <span>Estimated Total</span>
                  <span className="text-[#D26B5B] font-display text-xl">${total}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                id="checkout-bag-btn"
                className="w-full py-4 bg-[#D26B5B] hover:bg-[#b85444] text-white rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Complete Purchase</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
