'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-400/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-green-500/20 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 fade-up">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-600 via-green-500 to-emerald-400 bg-clip-text text-transparent leading-tight text-balance">
          Empowering Women Farmers with Digital Innovation
        </h1>
        
        <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto text-balance leading-relaxed">
          Revolutionizing agriculture through IoT sensors, machine learning, and inclusive financial solutions. 
          Join thousands of women farmers building sustainable futures.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link
            href="/dashboard"
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-green-500/40 transition-all duration-300 flex items-center gap-2 group"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-full hover:bg-accent/10 transition-all duration-300"
          >
            Our Mission
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-green-200/20">
          {[
            { number: '5,000+', label: 'Women Farmers' },
            { number: '50+', label: 'Villages' },
            { number: '35%', label: 'Yield Increase' },
            { number: '₹2Cr+', label: 'Loans Disbursed' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600">{stat.number}</div>
              <div className="text-sm text-foreground/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}