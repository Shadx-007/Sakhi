'use client';

import { Navbar } from '@/components/navbar';
import { MarketplaceAnimatedObjects } from '@/components/marketplace-animated-objects';
import { Footer } from '@/components/footer';
import { ShoppingCart, Star, Filter, Search } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);

  const products = [
    { id: 1, name: 'Premium Soil Sensor Kit', price: 149, category: 'Equipment', rating: 4.8, reviews: 245, image: '📡' },
    { id: 2, name: 'Organic Fertilizer (25kg)', price: 45, category: 'Supplies', rating: 4.6, reviews: 180, image: '🌱' },
    { id: 3, name: 'High-Yield Tomato Seeds', price: 8, category: 'Seeds', rating: 4.9, reviews: 320, image: '🌾' },
    { id: 4, name: 'Irrigation Drip System', price: 199, category: 'Equipment', rating: 4.7, reviews: 156, image: '💧' },
    { id: 5, name: 'Pest Control Spray', price: 25, category: 'Supplies', rating: 4.5, reviews: 92, image: '🧪' },
    { id: 6, name: 'Wheat Seeds (Premium)', price: 12, category: 'Seeds', rating: 4.8, reviews: 201, image: '🌾' },
    { id: 7, name: 'NPK Fertilizer Blend', price: 35, category: 'Supplies', rating: 4.7, reviews: 145, image: '🧫' },
    { id: 8, name: 'Temperature Sensor', price: 79, category: 'Equipment', rating: 4.9, reviews: 98, image: '🌡️' },
  ];

  const categories = ['All', 'Equipment', 'Supplies', 'Seeds'];

  const addToCart = (product: typeof products[0]) => {
    setCartCount(cartCount + 1);
    // Dispatch custom event to update navbar cart
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { count: cartCount + 1 } }));
  };

  const filteredProducts = selectedCategory === 'All' ? products : products.filter(p => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />

      <MarketplaceAnimatedObjects />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Marketplace
            </h1>
            <p className="text-foreground/70">Buy seeds, fertilizers, equipment, and more from trusted sellers</p>
          </div>

          {/* Search and Filter Bar */}
          <div className="glass p-6 rounded-2xl flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center gap-2 px-4 bg-secondary/30 dark:bg-secondary/20 rounded-lg">
              <Search className="text-foreground/50" size={20} />
              <input type="text" placeholder="Search products..." className="flex-1 py-2 bg-transparent outline-none" />
            </div>
            <button className="flex items-center gap-2 px-6 py-2 border border-border rounded-lg hover:bg-secondary transition-all">
              <Filter size={20} />
              Filters
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                    : 'glass hover:bg-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="glass p-6 rounded-2xl hover:shadow-lg hover:shadow-accent/20 transition-all group">
                <div className="h-32 bg-gradient-to-br from-green-100 to-green-50 rounded-lg mb-4 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
                  {product.image}
                </div>
                <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-foreground/60 mb-3">{product.category}</p>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-foreground/30'}
                    />
                  ))}
                  <span className="text-xs text-foreground/60 ml-1">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-2xl font-bold text-accent">${product.price}</span>
                  <button
                    onClick={() => addToCart(product)}
                    className="p-2 bg-accent text-white rounded-lg hover:scale-110 transition-transform"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Promotional Banner */}
          <div className="glass p-12 rounded-2xl gradient-to-r from-green-500/10 to-emerald-500/10 text-center space-y-4">
            <h2 className="text-2xl font-bold">Free Shipping on Orders Over $500</h2>
            <p className="text-foreground/70">Plus 5% discount on bulk orders. Use code: BULK5</p>
          </div>

          {/* Featured Sellers */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Featured Sellers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Green Valley Supplies', rating: 4.9, products: 120, badge: 'Verified' },
                { name: 'Organic Seeds Co.', rating: 4.8, products: 85, badge: 'Trusted' },
                { name: 'Tech Farming Solutions', rating: 4.7, products: 95, badge: 'Premium' },
              ].map((seller, i) => (
                <div key={i} className="glass p-6 rounded-2xl text-center space-y-4 hover:shadow-lg transition-all cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 mx-auto flex items-center justify-center text-white text-2xl font-bold">
                    {seller.name[0]}
                  </div>
                  <div>
                    <h3 className="font-semibold">{seller.name}</h3>
                    <p className="text-sm text-foreground/70">{seller.products} products</p>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full inline-block">
                    {seller.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Reviews Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Customer Reviews</h2>
            <div className="space-y-4">
              {[
                { customer: 'Priya Sharma', product: 'Soil Sensor Kit', rating: 5, review: 'Excellent quality and fast delivery! The sensor works perfectly.' },
                { customer: 'Anita Patel', product: 'Organic Fertilizer', rating: 5, review: 'Great product. My crops showed visible improvement in 2 weeks.' },
                { customer: 'Maya Singh', product: 'Tomato Seeds', rating: 4, review: 'Good germination rate and healthy plants. Highly recommended.' },
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{item.customer}</h4>
                      <p className="text-sm text-foreground/70">{item.product}</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className={i < item.rating ? 'fill-yellow-400 text-yellow-400' : 'text-foreground/30'} />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground/70">{item.review}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-4 pt-8">
            <p className="text-foreground/70">Ready to stock up? Start shopping now!</p>
            <Link href="/cart" className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-green-500/40 transition-all">
              View Cart ({cartCount} items)
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
