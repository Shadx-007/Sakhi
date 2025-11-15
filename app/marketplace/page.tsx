'use client';

import { Navbar } from '@/components/navbar';
import { MarketplaceAnimatedObjects } from '@/components/marketplace-animated-objects';
import { Footer } from '@/components/footer';
import { ShoppingCart, Star, Filter, Search, Plus, MapPin, Clock, Truck, Shield, User, Mail, Phone, Check } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { marketplaceProducts } from '@/components/marketplace-products';
import {
  FeaturedCategories,
  SeasonalOffers,
  TopBrands,
  FarmerTestimonials,
  FarmingTips,
  BulkOrderSection,
  MonthlyDeals
} from '@/components/marketplace-sections';

// Vegetable and Fruit Products Data
const farmerProducts = [
  {
    id: 101, name: 'Organic Tomatoes', price: 45, unit: 'kg', category: 'Vegetables', quality: 'Organic',
    farmer: 'Green Valley Farms', location: 'Nashik, Maharashtra', rating: 4.9, reviews: 234, image: '🍅',
    stock: 150, harvestDate: '2024-01-15', delivery: true, certification: ['Organic', 'FSSAI']
  },
  {
    id: 102, name: 'Fresh Cauliflower', price: 30, unit: 'kg', category: 'Vegetables', quality: 'Grade A',
    farmer: 'Singh Farms', location: 'Punjab', rating: 4.7, reviews: 167, image: '🥦',
    stock: 200, harvestDate: '2024-01-14', delivery: true, certification: ['FSSAI']
  },
  {
    id: 103, name: 'Premium Potatoes', price: 25, unit: 'kg', category: 'Vegetables', quality: 'Premium',
    farmer: 'Himalayan Growers', location: 'Himachal Pradesh', rating: 4.8, reviews: 289, image: '🥔',
    stock: 500, harvestDate: '2024-01-12', delivery: true, certification: ['FSSAI', 'Quality Certified']
  },
  {
    id: 104, name: 'Organic Spinach', price: 40, unit: 'kg', category: 'Vegetables', quality: 'Organic',
    farmer: 'Organic Harvest', location: 'Bengaluru, Karnataka', rating: 4.9, reviews: 178, image: '🍃',
    stock: 80, harvestDate: '2024-01-15', delivery: true, certification: ['Organic', 'FSSAI', 'No Pesticides']
  },
  {
    id: 201, name: 'Alphonso Mangoes', price: 120, unit: 'kg', category: 'Fruits', quality: 'Premium',
    farmer: 'Konkan Mango Farms', location: 'Ratnagiri, Maharashtra', rating: 4.9, reviews: 456, image: '🥭',
    stock: 100, harvestDate: '2024-01-10', delivery: true, certification: ['GI Tag', 'Premium Quality']
  },
  {
    id: 202, name: 'Nagpur Oranges', price: 60, unit: 'kg', category: 'Fruits', quality: 'Grade A',
    farmer: 'Citrus Valley', location: 'Nagpur, Maharashtra', rating: 4.7, reviews: 289, image: '🍊',
    stock: 300, harvestDate: '2024-01-13', delivery: true, certification: ['GI Tag', 'FSSAI']
  },
  {
    id: 203, name: 'Fresh Bananas', price: 35, unit: 'dozen', category: 'Fruits', quality: 'Regular',
    farmer: 'Tropical Fruits Co.', location: 'Kerala', rating: 4.6, reviews: 167, image: '🍌',
    stock: 150, harvestDate: '2024-01-14', delivery: true, certification: ['FSSAI']
  },
  {
    id: 204, name: 'Organic Apples', price: 180, unit: 'kg', category: 'Fruits', quality: 'Organic',
    farmer: 'Himalayan Orchards', location: 'Kashmir', rating: 4.8, reviews: 234, image: '🍎',
    stock: 120, harvestDate: '2024-01-11', delivery: true, certification: ['Organic', 'FSSAI', 'No Chemicals']
  }
];

const farmerCategories = ['All', 'Vegetables', 'Fruits', 'Organic', 'Premium'];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFarmerCategory, setSelectedFarmerCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);
  const [farmerFormData, setFarmerFormData] = useState({
    name: '', farmName: '', location: '', phone: '', email: '', 
    products: '', experience: '', certification: ''
  });

  const categories = ['All', 'Equipment', 'Supplies', 'Seeds', 'Livestock', 'Tools', 'Protective Gear', 'Irrigation', 'Storage', 'Organic'];

  const addToCart = (product: typeof marketplaceProducts[0]) => {
    setCartCount(cartCount + 1);
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { count: cartCount + 1 } }));
  };

  const addVegetableToCart = (item: typeof farmerProducts[0]) => {
    setCartCount(cartCount + 1);
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: { count: cartCount + 1 } }));
  };

  const filteredProducts = selectedCategory === 'All' ? marketplaceProducts : marketplaceProducts.filter(p => p.category === selectedCategory);
  
  const filteredFarmerProducts = selectedFarmerCategory === 'All' 
    ? farmerProducts 
    : farmerProducts.filter(item => {
        if (selectedFarmerCategory === 'Organic') return item.quality === 'Organic';
        if (selectedFarmerCategory === 'Premium') return item.quality === 'Premium';
        return item.category === selectedFarmerCategory;
      });

  const handleFarmerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Farmer registration:', farmerFormData);
  };

  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />

      <MarketplaceAnimatedObjects />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {/* Header Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent text-center">
                Agricultural Marketplace
              </h1>
              <p className="text-foreground/70 text-center text-lg max-w-2xl mx-auto">
                Discover over 10,000 farming products from trusted sellers worldwide. Everything you need for modern agriculture in one place.
              </p>
            </div>

            {/* Search and Filter Bar */}
            <div className="glass p-6 rounded-2xl flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex items-center gap-2 px-4 bg-secondary/30 dark:bg-secondary/20 rounded-lg">
                <Search className="text-foreground/50" size={20} />
                <input type="text" placeholder="Search products, brands, or categories..." className="flex-1 py-2 bg-transparent outline-none" />
              </div>
              <button className="flex items-center gap-2 px-6 py-2 border border-border rounded-lg hover:bg-secondary transition-all">
                <Filter size={20} />
                Filters
              </button>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/40'
                      : 'glass hover:bg-secondary hover:shadow-lg'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Monthly Deals Section */}
          <MonthlyDeals />

          {/* Featured Categories */}
          <FeaturedCategories />

          {/* Seasonal Offers */}
          <SeasonalOffers />

          {/* Products Grid Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">
                {selectedCategory === 'All' ? 'All Products' : selectedCategory}
                <span className="text-lg text-foreground/70 ml-4">({filteredProducts.length} products)</span>
              </h2>
              <select className="glass px-4 py-2 rounded-lg border border-border">
                <option>Sort by: Popular</option>
                <option>Sort by: Price Low to High</option>
                <option>Sort by: Price High to Low</option>
                <option>Sort by: Rating</option>
                <option>Sort by: Newest</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <div key={product.id} className="glass p-6 rounded-2xl hover:shadow-xl hover:shadow-accent/20 transition-all group border border-border/50">
                  <div className="h-32 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/20 dark:to-green-800/20 rounded-lg mb-4 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2 text-lg">{product.name}</h3>
                  <p className="text-xs text-foreground/60 mb-3 uppercase tracking-wide font-semibold">{product.category}</p>
                  
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

                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <span className="text-2xl font-bold text-accent">${product.price}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="p-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:scale-110 hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Brands Section */}
          <TopBrands />

          {/* Bulk Order Section */}
          <BulkOrderSection />

          {/* Farmer Testimonials */}
          <FarmerTestimonials />

          {/* Farming Tips */}
          <FarmingTips />

          {/* Fresh Vegetables & Fruits Marketplace */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
                Fresh Produce Marketplace
              </h2>
              <p className="text-foreground/70 text-lg">
                Buy directly from farmers. Fresh from farm to your table.
              </p>
            </div>

            {/* Farmer Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              {farmerCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedFarmerCategory(cat)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    selectedFarmerCategory === cat
                      ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white shadow-lg shadow-green-500/40'
                      : 'glass hover:bg-secondary hover:shadow-lg'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Vegetables & Fruits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredFarmerProducts.map(item => (
                <div key={item.id} className="glass p-6 rounded-2xl hover:shadow-xl hover:shadow-green-500/20 transition-all group border border-border/50">
                  <div className="h-32 bg-gradient-to-br from-green-100 to-orange-100 dark:from-green-900/20 dark:to-orange-900/20 rounded-lg mb-4 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                    {item.image}
                  </div>

                  {/* Quality Badge */}
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                    item.quality === 'Organic' ? 'bg-green-100 text-green-700' :
                    item.quality === 'Premium' ? 'bg-yellow-100 text-yellow-700' :
                    item.quality === 'Grade A' ? 'bg-blue-100 text-blue-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {item.quality}
                  </div>

                  {/* Product Info */}
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{item.name}</h3>
                  
                  {/* Farmer & Location */}
                  <div className="flex items-center gap-2 text-sm text-foreground/70 mb-3">
                    <MapPin size={14} />
                    <span>{item.farmer}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(item.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-foreground/30'}
                      />
                    ))}
                    <span className="text-xs text-foreground/60 ml-1">({item.reviews})</span>
                  </div>

                  {/* Harvest Info */}
                  <div className="flex items-center gap-4 text-xs text-foreground/70 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>Harvested: {new Date(item.harvestDate).toLocaleDateString()}</span>
                    </div>
                    <div className={`flex items-center gap-1 ${item.stock < 50 ? 'text-red-500' : 'text-green-500'}`}>
                      <span>Stock: {item.stock} {item.unit}</span>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.certification.map((cert, i) => (
                      <span key={i} className="px-2 py-1 bg-secondary text-xs rounded-md">
                        {cert}
                      </span>
                    ))}
                    {item.delivery && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md flex items-center gap-1">
                        <Truck size={10} />
                        Delivery
                      </span>
                    )}
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div>
                      <span className="text-2xl font-bold text-accent">₹{item.price}</span>
                      <span className="text-foreground/70 text-sm ml-1">/{item.unit}</span>
                    </div>
                    <button
                      onClick={() => addVegetableToCart(item)}
                      className="p-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:scale-110 hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Farmer Registration Section */}
          <div className="glass p-8 rounded-2xl space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">Register as Farmer</h3>
              <p className="text-foreground/70">Join our platform to sell your fresh produce</p>
            </div>

            <form onSubmit={handleFarmerSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Full Name</label>
                  <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg">
                    <User size={20} className="text-foreground/50" />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="flex-1 bg-transparent outline-none"
                      value={farmerFormData.name}
                      onChange={(e) => setFarmerFormData({...farmerFormData, name: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Farm Name</label>
                  <input
                    type="text"
                    placeholder="Enter farm name"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-transparent outline-none"
                    value={farmerFormData.farmName}
                    onChange={(e) => setFarmerFormData({...farmerFormData, farmName: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Location</label>
                <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg">
                  <MapPin size={20} className="text-foreground/50" />
                  <input
                    type="text"
                    placeholder="Enter your location"
                    className="flex-1 bg-transparent outline-none"
                    value={farmerFormData.location}
                    onChange={(e) => setFarmerFormData({...farmerFormData, location: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Phone Number</label>
                  <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg">
                    <Phone size={20} className="text-foreground/50" />
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="flex-1 bg-transparent outline-none"
                      value={farmerFormData.phone}
                      onChange={(e) => setFarmerFormData({...farmerFormData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Email</label>
                  <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg">
                    <Mail size={20} className="text-foreground/50" />
                    <input
                      type="email"
                      placeholder="Enter email address"
                      className="flex-1 bg-transparent outline-none"
                      value={farmerFormData.email}
                      onChange={(e) => setFarmerFormData({...farmerFormData, email: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold">Products You Grow</label>
                <textarea
                  placeholder="List the vegetables and fruits you grow..."
                  className="w-full px-3 py-2 border border-border rounded-lg bg-transparent outline-none min-h-[80px]"
                  value={farmerFormData.products}
                  onChange={(e) => setFarmerFormData({...farmerFormData, products: e.target.value})}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Farming Experience</label>
                  <select 
                    className="w-full px-3 py-2 border border-border rounded-lg bg-transparent outline-none"
                    value={farmerFormData.experience}
                    onChange={(e) => setFarmerFormData({...farmerFormData, experience: e.target.value})}
                  >
                    <option value="">Select experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold">Certifications</label>
                  <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg">
                    <Shield size={20} className="text-foreground/50" />
                    <input
                      type="text"
                      placeholder="Organic, FSSAI, etc."
                      className="flex-1 bg-transparent outline-none"
                      value={farmerFormData.certification}
                      onChange={(e) => setFarmerFormData({...farmerFormData, certification: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-green-500 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/40 transition-all flex items-center justify-center gap-2"
              >
                <Check size={20} />
                Register as Farmer
              </button>
            </form>
          </div>

          {/* Additional Products Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">New Arrivals</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketplaceProducts.slice(80, 88).map(product => (
                <div key={product.id} className="glass p-6 rounded-2xl hover:shadow-xl hover:shadow-accent/20 transition-all group border border-border/50">
                  <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg mb-4 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2 text-lg">{product.name}</h3>
                  <p className="text-xs text-foreground/60 mb-3 uppercase tracking-wide font-semibold">{product.category}</p>
                  
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

                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <span className="text-2xl font-bold text-accent">${product.price}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="p-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:scale-110 hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Products Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Premium Collection</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketplaceProducts.filter(p => p.price > 200).slice(0, 8).map(product => (
                <div key={product.id} className="glass p-6 rounded-2xl hover:shadow-xl hover:shadow-accent/20 transition-all group border-2 border-yellow-400/30">
                  <div className="h-32 bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-yellow-900/20 dark:to-yellow-800/20 rounded-lg mb-4 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2 text-lg">{product.name}</h3>
                  <p className="text-xs text-foreground/60 mb-3 uppercase tracking-wide font-semibold">{product.category}</p>
                  
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

                  <div className="flex items-center justify-between pt-3 border-t border-yellow-400/30">
                    <span className="text-2xl font-bold text-yellow-600">${product.price}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="p-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-lg hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/40 transition-all duration-300"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Budget Products Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Budget Friendly</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {marketplaceProducts.filter(p => p.price < 20).slice(0, 8).map(product => (
                <div key={product.id} className="glass p-6 rounded-2xl hover:shadow-xl hover:shadow-accent/20 transition-all group border border-border/50">
                  <div className="h-32 bg-gradient-to-br from-green-100 to-green-50 dark:from-green-900/20 dark:to-green-800/20 rounded-lg mb-4 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2 text-lg">{product.name}</h3>
                  <p className="text-xs text-foreground/60 mb-3 uppercase tracking-wide font-semibold">{product.category}</p>
                  
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

                  <div className="flex items-center justify-between pt-3 border-t border-border/50">
                    <span className="text-2xl font-bold text-green-600">${product.price}</span>
                    <button
                      onClick={() => addToCart(product)}
                      className="p-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:scale-110 hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300"
                    >
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="text-center space-y-6 py-12">
            <h2 className="text-4xl font-bold">Ready to Transform Your Farming?</h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Join thousands of successful farmers who trust our marketplace for their agricultural needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/cart" className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-green-500/40 transition-all text-lg">
                View Cart ({cartCount} items)
              </Link>
              <button className="px-8 py-4 glass border border-border rounded-full font-semibold hover:shadow-2xl transition-all text-lg">
                Contact Sales Expert
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}