import React, { useState } from 'react';
import { Product, ProductCategory } from '../types';
import { ShoppingBag, Check, Sparkles, Package, ArrowRight, X, ShieldCheck } from 'lucide-react';

interface ShopSectionProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({
  products,
  onAddToCart
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const categories: (ProductCategory | 'All')[] = ['All', 'Gear', 'Apparel', 'Local Provisions'];

  const filteredProducts = products.filter((prod) => {
    if (selectedCategory === 'All') return true;
    return prod.category === selectedCategory;
  });

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedNotice(product.name);
    setTimeout(() => {
      setAddedNotice(null);
    }, 2500);
  };

  return (
    <section id="shop-catalog" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      
      {/* Toast Notice when item added */}
      {addedNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#1F3B3D] text-[#F8F6F1] px-5 py-3.5 rounded-2xl shadow-2xl border border-[#2A4446] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="w-7 h-7 rounded-full bg-[#5B8266] flex items-center justify-center text-white">
            <Check className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Added to Field Bag</div>
            <div className="text-[11px] text-[#E6ECE8]/80">{addedNotice}</div>
          </div>
        </div>
      )}

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-[#5B8266] mb-2">
            <Package className="w-3.5 h-3.5 text-[#5B8266]" />
            <span>Field Goods & Outpost Provisions</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1F3B3D] tracking-tight">
            Provisions Outpost
          </h2>
          <p className="text-base sm:text-lg text-[#1F3B3D]/70 max-w-2xl mt-2 font-light">
            Essential tools, wool garments, and small-batch foods crafted to accompany your time outside. Delivered to your doorstep or waiting at your rental cabin upon check-in.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`shop-category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-[#1F3B3D] text-[#F8F6F1] shadow-sm'
                  : 'bg-[#E6ECE8] text-[#1F3B3D]/80 hover:bg-[#cbd8cf] hover:text-[#1F3B3D]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Category Atmosphere Banners (3 Visual Cards) */}
      {selectedCategory === 'All' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div
            onClick={() => setSelectedCategory('Gear')}
            className="group relative h-48 rounded-3xl overflow-hidden cursor-pointer shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1516534775068-ba3e84529ec1?auto=format&fit=crop&q=80&w=800"
              alt="Wilderness Gear"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#5B8266]">Category 01</span>
              <h3 className="font-display text-2xl font-bold">Heirloom Gear</h3>
              <p className="text-xs text-[#E6ECE8]/80 font-light mt-1">Waxed canvas, titanium, and cast brass lanterns</p>
            </div>
          </div>

          <div
            onClick={() => setSelectedCategory('Apparel')}
            className="group relative h-48 rounded-3xl overflow-hidden cursor-pointer shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=800"
              alt="Outdoor Apparel"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#D26B5B]">Category 02</span>
              <h3 className="font-display text-2xl font-bold">Natural Wool Apparel</h3>
              <p className="text-xs text-[#E6ECE8]/80 font-light mt-1">Superfine merino base layers & waxed weather smocks</p>
            </div>
          </div>

          <div
            onClick={() => setSelectedCategory('Local Provisions')}
            className="group relative h-48 rounded-3xl overflow-hidden cursor-pointer shadow-md"
          >
            <img
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800"
              alt="Local Provisions"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#5B8266]">Category 03</span>
              <h3 className="font-display text-2xl font-bold">Hearth Provisions</h3>
              <p className="text-xs text-[#E6ECE8]/80 font-light mt-1">Oak-roasted coffee beans, raw mountain honey & botanical tonic</p>
            </div>
          </div>

        </div>
      )}

      {/* Product Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-[#F8F6F1] rounded-3xl overflow-hidden border border-[#1F3B3D]/10 hover:border-[#1F3B3D]/30 transition-all hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Image & Badges */}
              <div className="relative aspect-square overflow-hidden bg-[#E6ECE8]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                
                <div className="absolute top-4 left-4">
                  <span className="bg-[#172627]/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                {product.featured && (
                  <div className="absolute top-4 right-4 bg-[#D26B5B] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5" />
                    Essential
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#5B8266] mb-1">
                  {product.origin || 'Z7CO Authentic Outpost'}
                </div>

                <h3
                  onClick={() => setQuickViewProduct(product)}
                  className="font-display text-xl font-bold text-[#1F3B3D] group-hover:text-[#D26B5B] transition-colors cursor-pointer mb-2 leading-snug"
                >
                  {product.name}
                </h3>

                <p className="text-xs text-[#1F3B3D]/70 line-clamp-2 mb-4 font-light leading-relaxed">
                  {product.description}
                </p>

                {/* Specs bullets */}
                <div className="space-y-1 mb-4">
                  {product.specs.slice(0, 2).map((spec, i) => (
                    <div key={i} className="text-[11px] text-[#1F3B3D]/80 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B8266]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer: Price & Add to Bag */}
            <div className="p-6 pt-0 flex items-center justify-between border-t border-[#1F3B3D]/5 pt-4">
              <div>
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#5B8266]">
                  Retail Price
                </div>
                <div className="font-display text-2xl font-bold text-[#1F3B3D]">
                  ${product.price}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuickViewProduct(product)}
                  className="px-3 py-2.5 rounded-xl border border-[#1F3B3D]/20 text-xs font-bold uppercase tracking-wider text-[#1F3B3D] hover:bg-[#E6ECE8] transition-all"
                >
                  Specs
                </button>
                <button
                  onClick={() => handleAdd(product)}
                  id={`add-to-bag-${product.id}`}
                  className="bg-[#1F3B3D] hover:bg-[#D26B5B] text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Bag</span>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Quick View Specs Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#F8F6F1] text-[#1F3B3D] w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-[#1F3B3D]/10">
            <div className="relative aspect-[16/9] bg-[#E6ECE8]">
              <img
                src={quickViewProduct.image}
                alt={quickViewProduct.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 p-2 text-white bg-black/50 hover:bg-black/80 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-[#5B8266]">
                  {quickViewProduct.category}
                </span>
                <span className="font-display text-2xl font-bold text-[#D26B5B]">
                  ${quickViewProduct.price}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                {quickViewProduct.name}
              </h3>

              <p className="text-sm text-[#1F3B3D]/80 font-light leading-relaxed">
                {quickViewProduct.description}
              </p>

              <div className="bg-[#E6ECE8] p-4 rounded-2xl space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#1F3B3D]">
                  Field Specifications & Materials:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1F3B3D]/85">
                  {quickViewProduct.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B8266]" />
                      <span>{spec}</span>
                    </div>
                  ))}
                  {quickViewProduct.weight && (
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B8266]" />
                      <span>Total Weight: {quickViewProduct.weight}</span>
                    </div>
                  )}
                  {quickViewProduct.origin && (
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5B8266]" />
                      <span>Provenance: {quickViewProduct.origin}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  onClick={() => setQuickViewProduct(null)}
                  className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#1F3B3D]/70"
                >
                  Back
                </button>
                <button
                  onClick={() => {
                    handleAdd(quickViewProduct);
                    setQuickViewProduct(null);
                  }}
                  className="bg-[#D26B5B] hover:bg-[#b85444] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Field Bag — ${quickViewProduct.price}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
