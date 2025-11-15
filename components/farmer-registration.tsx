'use client';

import { useState } from 'react';
import { User, MapPin, Phone, Mail, Shield, Check } from 'lucide-react';

export const FarmerRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    farmName: '',
    location: '',
    phone: '',
    email: '',
    products: '',
    experience: '',
    certification: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Farmer registration:', formData);
  };

  return (
    <div className="glass p-8 rounded-2xl space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold">Register as Farmer</h3>
        <p className="text-foreground/70">Join our platform to sell your fresh produce</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold">Full Name</label>
            <div className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg">
              <User size={20} className="text-foreground/50" />
              <input
                type="text"
                placeholder="Enter your name"
                className="flex-1 bg-transparent outline-none"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold">Farm Name</label>
            <input
              type="text"
              placeholder="Enter farm name"
              className="w-full px-3 py-2 border border-border rounded-lg bg-transparent outline-none"
              value={formData.farmName}
              onChange={(e) => setFormData({...formData, farmName: e.target.value})}
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
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
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
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
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
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold">Products You Grow</label>
          <textarea
            placeholder="List the vegetables and fruits you grow..."
            className="w-full px-3 py-2 border border-border rounded-lg bg-transparent outline-none min-h-[80px]"
            value={formData.products}
            onChange={(e) => setFormData({...formData, products: e.target.value})}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold">Farming Experience</label>
            <select 
              className="w-full px-3 py-2 border border-border rounded-lg bg-transparent outline-none"
              value={formData.experience}
              onChange={(e) => setFormData({...formData, experience: e.target.value})}
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
                value={formData.certification}
                onChange={(e) => setFormData({...formData, certification: e.target.value})}
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
  );
};