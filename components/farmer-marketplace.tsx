'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FarmerMarketplace } from '@/components/farmer-marketplace';
import { Search, Filter, Truck, Shield, Star, Clock } from 'lucide-react';

export default function FarmersMarket() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
              Farmer's Fresh Market
            </h1>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Connect directly with local farmers. Get the freshest vegetables and fruits delivered from farm to your doorstep.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto glass p-4 rounded-2xl flex items-center gap-4">
              <div className="flex-1 flex items-center gap-2 px-4 bg-secondary/30 rounded-lg">
                <Search className="text-foreground/50" size={20} />
                <input 
                  type="text" 
                  placeholder="Search vegetables, fruits, or farmers..." 
                  className="flex-1 py-3 bg-transparent outline-none"
                />
              </div>
              <button className="flex items-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-secondary transition-all">
                <Filter size={20} />
                Filters
              </button>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-4 gap-6 pt-8">
              {[
                { icon: Clock, text: 'Harvested Today' },
                { icon: Truck, text: 'Free Delivery' },
                { icon: Shield, text: 'Quality Certified' },
                { icon: Star, text: 'Farmer Verified' },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 glass p-4 rounded-2xl">
                  <feature.icon className="text-green-500" size={24} />
                  <span className="font-semibold">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Marketplace Component */}
          <FarmerMarketplace />

          {/* Seasonal Section */}
          <div className="glass p-8 rounded-2xl bg-gradient-to-r from-orange-500/10 to-yellow-500/10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Seasonal Specials</h2>
              <p className="text-foreground/70">Fresh picks for this season</p>
              <div className="grid md:grid-cols-4 gap-6 mt-6">
                {[
                  { name: 'Winter Vegetables', items: 'Carrot, Cauliflower, Spinach', icon: '🥕' },
                  { name: 'Tropical Fruits', items: 'Mango, Banana, Pineapple', icon: '🥭' },
                  { name: 'Leafy Greens', items: 'Coriander, Mint, Lettuce', icon: '🌿' },
                  { name: 'Organic Special', items: 'Chemical-free produce', icon: '🍃' },
                ].map((seasonal, i) => (
                  <div key={i} className="text-center space-y-3 p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50">
                    <div className="text-4xl">{seasonal.icon}</div>
                    <h3 className="font-semibold">{seasonal.name}</h3>
                    <p className="text-sm text-foreground/70">{seasonal.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Browse Fresh Produce',
                  description: 'Explore vegetables and fruits from verified local farmers',
                  icon: '🛒'
                },
                {
                  step: '02',
                  title: 'Place Your Order',
                  description: 'Select items and quantity. Choose delivery or pickup',
                  icon: '📱'
                },
                {
                  step: '03',
                  title: 'Fresh Delivery',
                  description: 'Get farm-fresh produce delivered to your doorstep',
                  icon: '🚚'
                }
              ].map((step, i) => (
                <div key={i} className="text-center space-y-4 p-6 glass rounded-2xl">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-orange-500 mx-auto flex items-center justify-center text-white text-2xl font-bold">
                    {step.step}
                  </div>
                  <div className="text-4xl">{step.icon}</div>
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}