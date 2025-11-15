'use client';

import { Navbar } from '@/components/navbar';
import { LanguageSelector } from '@/components/language-selector';
import { AnimatedTree3D } from '@/components/animated-tree-3d';
import { MiddleSectionObjects } from '@/components/middle-section-objects';
import { useLanguage } from '@/contexts/language-context';
import { translations } from '@/lib/translations';
import { useState } from 'react';
import Link from 'next/link';

export default function Signup() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-background pt-20 relative overflow-hidden">
      <Navbar />
      <MiddleSectionObjects />
      
      <div className="max-w-md mx-auto px-4 py-12 relative z-10">
        <div className="mb-6 flex justify-center">
          <LanguageSelector />
        </div>

        <div className="glass p-8 rounded-2xl space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">{t.join_sakhi}</h1>
            <p className="text-foreground/70">{t.signup_desc}</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium mb-2">{t.full_name}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.email}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.password}</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.confirm_password}</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 bg-background"
              />
            </div>

            <button className="w-full py-2 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/40 transition-all duration-300">
              {t.create_account}
            </button>
          </form>

          <div className="text-center text-sm">
            <p className="text-foreground/70">
              {t.have_account}{' '}
              <Link href="/login" className="text-accent font-semibold hover:underline">
                {t.login_link}
              </Link>
            </p>
          </div>
        </div>
      </div>

      <AnimatedTree3D />
    </main>
  );
}
