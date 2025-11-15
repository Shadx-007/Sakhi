'use client';

import { Navbar } from '@/components/navbar';
import { HeroAnimatedObjects } from '@/components/hero-animated-objects';
import { Footer } from '@/components/footer';
import { useState, useEffect } from 'react';
import { 
  ArrowRight, Leaf, Smartphone, BarChart3, Zap, Users, TrendingUp, Check, 
  Shield, Cloud, Cpu, Wifi, Brain, Database, Target, Award, Clock, 
  MapPin, Calendar, Crop, Quote, Star, Heart, Gem, Sparkles, Rocket, 
  Telescope, Globe, Lock, Unlock, Coffee, Sun, Moon, CloudRain, 
  CloudSnow, Wind, BarChart as BarChartIcon
} from 'lucide-react';
import Link from 'next/link';
import { LineChart, Line, AreaChart, Area, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

// Mock data for charts
const yieldData = [
  { month: 'Jan', yield: 2400, target: 2210 },
  { month: 'Feb', yield: 1398, target: 2290 },
  { month: 'Mar', yield: 9800, target: 2000 },
  { month: 'Apr', yield: 3908, target: 2108 },
  { month: 'May', yield: 4800, target: 2280 },
  { month: 'Jun', yield: 3800, target: 2500 },
];

const regionData = [
  { region: 'North', value: 4000 },
  { region: 'South', value: 3000 },
  { region: 'East', value: 2000 },
  { region: 'West', value: 2780 },
];

const cropData = [
  { name: 'Rice', value: 35 },
  { name: 'Wheat', value: 25 },
  { name: 'Vegetables', value: 20 },
  { name: 'Fruits', value: 15 },
  { name: 'Pulses', value: 5 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const performanceData = [
  { subject: 'Yield', A: 120, B: 110, fullMark: 150 },
  { subject: 'Quality', A: 98, B: 130, fullMark: 150 },
  { subject: 'Profit', A: 86, B: 130, fullMark: 150 },
  { subject: 'Sustainability', A: 99, B: 100, fullMark: 150 },
  { subject: 'Efficiency', A: 85, B: 90, fullMark: 150 },
];

// Client-only particle system component
const ClientOnlyParticles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute inset-0 opacity-40 dark:opacity-20" />;
  }

  return (
    <div className="absolute inset-0 opacity-40 dark:opacity-20">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}
        />
      ))}
    </div>
  );
};

// Client-only animated grid component
const ClientOnlyAnimatedGrid = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="border border-green-400/10" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 opacity-5">
      <div className="grid grid-cols-12 gap-4 h-full">
        {[...Array(144)].map((_, i) => (
          <div 
            key={i} 
            className="border border-green-400/10 animate-pulse" 
            style={{animationDelay: `${(i * 0.1) % 5}s`}} 
          />
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [animatedIcons, setAnimatedIcons] = useState<Array<{id: number, x: number, y: number, type: number}>>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    // Create floating animated icons
    const icons = [];
    for (let i = 0; i < 50; i++) {
      icons.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        type: Math.floor(Math.random() * 6)
      });
    }
    setAnimatedIcons(icons);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getIconComponent = (type: number) => {
    const icons = [Leaf, Coffee, Sun, CloudRain, Wind, Sparkles];
    const IconComponent = icons[type];
    return <IconComponent className="w-4 h-4" />;
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background dark:bg-background transition-colors">
      <Navbar />

      {/* Enhanced Progress bar */}
      <div className="fixed top-0 left-0 h-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 z-50 shadow-lg shadow-green-500/20" 
           style={{ width: `${scrollProgress * 100}%` }} />

      {/* Floating Animated Icons */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {animatedIcons.map((icon) => (
          <div
            key={icon.id}
            className="absolute text-green-400/20 animate-float"
            style={{
              left: `${icon.x}%`,
              top: `${icon.y}%`,
              animationDelay: `${(icon.id * 0.5) % 10}s`,
              animationDuration: `${15 + (icon.id % 10)}s`
            }}
          >
            {getIconComponent(icon.type)}
          </div>
        ))}
      </div>

      {/* SECTION 1: Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 -z-10">
          {/* Enhanced Animated Background */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-green-400/30 via-emerald-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-green-500/30 via-teal-500/20 to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-2xl animate-bounce animation-delay-1000" />
          <div className="absolute bottom-3/4 right-1/3 w-80 h-80 bg-gradient-to-bl from-teal-400/15 to-transparent rounded-full blur-2xl animate-pulse animation-delay-3000" />
          
          {/* Particle System - Client Only */}
          <ClientOnlyParticles />

          {/* Animated Grid - Client Only */}
          <ClientOnlyAnimatedGrid />
        </div>

        <HeroAnimatedObjects />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 fade-up">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Revolutionizing Agriculture Since 2020
              <Sparkles className="w-4 h-4" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 bg-clip-text text-transparent leading-tight text-balance">
              Empowering Women Farmers
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto text-balance leading-relaxed font-light">
              Using IoT sensors, machine learning, and digital finance to revolutionize agricultural practices and provide microloans to underserved farming communities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link
              href="/dashboard"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 flex items-center gap-2 group hover:scale-105 transform text-base"
            >
              <Rocket className="w-5 h-5" />
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border border-accent text-accent font-semibold rounded-xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 transform backdrop-blur-sm text-base"
            >
              Discover Our Mission
            </Link>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-green-200/20">
            {[
              { number: '5,000+', label: 'Women Farmers', icon: Users },
              { number: '50+', label: 'Villages', icon: MapPin },
              { number: '35%', label: 'Avg Yield Increase', icon: TrendingUp },
              { number: '₹2Cr+', label: 'Loans Disbursed', icon: Award },
            ].map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <div key={i} className="text-center group">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-lg font-bold text-green-600">{stat.number}</div>
                  <div className="text-xs text-foreground/70 mt-1 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: Enhanced Problem Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-green-500/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent text-balance">
              The Challenge We Address
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Women farmers face unique challenges that limit their potential and impact food security nationwide.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: 'Limited Access to Microloans',
                description: 'Women farmers struggle to access financial support due to lack of credit history and collateral, limiting their ability to invest in better equipment and seeds.',
                icon: '💰',
                stats: 'Only 15% access formal credit',
                impact: '₹15,000 Cr annual income gap'
              },
              {
                title: 'Inadequate Data Collection',
                description: 'Without real-time data, farmers cannot make informed decisions about crop health, soil conditions, and market demands, leading to suboptimal yields.',
                icon: '📊',
                stats: '85% rely on traditional methods',
                impact: '40% yield potential lost'
              },
              {
                title: 'Low Agricultural Productivity',
                description: 'Without modern tech guidance and resources, yields remain low and farmers face significant losses from pests, diseases, and climate changes.',
                icon: '🌾',
                stats: '2.5x productivity gap',
                impact: '60% untapped potential'
              },
            ].map((item, i) => (
              <div
                key={i}
                className="glass dark:glass-dark p-6 rounded-2xl hover:shadow-xl hover:shadow-accent/30 transition-all duration-500 group hover:-translate-y-2"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-green-600 bg-green-500/10 px-2 py-1 rounded-full w-fit">{item.stats}</div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
                  <div className="text-xs text-foreground/60 font-medium pt-2 border-t border-green-200/20">{item.impact}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Statistics */}
          <div className="glass dark:glass-dark p-8 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">The Economic Impact</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                { value: '₹15,000 Cr', label: 'Annual Income Gap', icon: TrendingUp },
                { value: '2.5x', label: 'Productivity Difference', icon: Target },
                { value: '60%', label: 'Untapped Potential', icon: Zap },
                { value: '8-10%', label: 'GDP Growth Opportunity', icon: BarChartIcon },
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <div key={i} className="p-4 group hover:scale-105 transition-transform">
                    <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-lg font-bold text-green-600 mb-1">{item.value}</div>
                    <div className="text-xs text-foreground/70 font-medium">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Enhanced How It Works Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/10 dark:to-emerald-950/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent text-balance">
              How Sakhi-Agri Works
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              A comprehensive four-step process that transforms traditional farming into smart, data-driven agriculture.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-1 bg-gradient-to-r from-green-400 to-green-600 transform -translate-y-1/2 z-0"></div>
            
            {[
              { 
                step: 1, 
                title: 'IoT Sensors Deployment', 
                desc: 'Advanced sensors collect real-time data on soil moisture, temperature, humidity, and crop health across the farm.',
                icon: '📡',
                features: ['Soil Sensors', 'Weather Stations', 'Crop Monitors']
              },
              { 
                step: 2, 
                title: 'ML Analysis & Insights', 
                desc: 'Advanced machine learning algorithms analyze patterns and provide actionable insights for optimal farming decisions.',
                icon: '🧠',
                features: ['Predictive Analytics', 'Disease Detection', 'Yield Prediction']
              },
              { 
                step: 3, 
                title: 'AI-Powered Guidance', 
                desc: 'Personalized recommendations delivered through mobile apps and voice assistants in local languages.',
                icon: '💡',
                features: ['Mobile Alerts', 'Voice Guidance', 'Best Practices']
              },
              { 
                step: 4, 
                title: 'Credit Scoring & Loans', 
                desc: 'Blockchain-based credit scoring enables access to microloans and financial services for women farmers.',
                icon: '🔐',
                features: ['Digital Identity', 'Smart Contracts', 'Instant Loans']
              },
            ].map((item, i) => (
              <div key={i} className="relative z-10">
                <div className="glass dark:glass-dark p-6 rounded-2xl text-center space-y-4 h-full transform hover:-translate-y-2 transition-all duration-500 group">
                  <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mx-auto glow-green shadow-lg shadow-green-500/30">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">{item.desc}</p>
                  <div className="space-y-1 pt-3">
                    {item.features.map((feature, j) => (
                      <div key={j} className="text-xs text-green-600 font-medium bg-green-500/10 px-2 py-1 rounded-full">
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 text-2xl text-green-500 animate-pulse z-20">→</div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Process Info */}
          <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold">Continuous Improvement Cycle</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Our system continuously learns and improves from farmer feedback and field data, creating a virtuous cycle of innovation and empowerment.
              </p>
              <div className="space-y-3">
                {[
                  'Real-time data collection and analysis',
                  'Personalized recommendation engine',
                  'Community knowledge sharing',
                  'Continuous model retraining',
                  'Adaptive learning algorithms'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass dark:glass-dark p-6 rounded-2xl">
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={performanceData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis />
                  <Radar name="Traditional" dataKey="B" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                  <Radar name="Sakhi-Agri" dataKey="A" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Enhanced Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-green-500/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent text-balance">
              Powerful Features
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive tools and technologies designed specifically for women farmers&apos; needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              {
                icon: <Smartphone className="w-8 h-8" />,
                title: 'Real-time Dashboard',
                description: 'Monitor soil moisture, pH, temperature, and humidity from your phone with intuitive visualizations.',
                features: ['Live Data Streams', 'Interactive Maps', 'Mobile First Design']
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: 'Crop Analytics',
                description: 'AI-powered predictions for crop health, yield optimization, and market price forecasting.',
                features: ['Predictive Models', 'Market Insights', 'Yield Forecasting']
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Smart Alerts',
                description: 'Instant notifications for critical soil conditions, weather changes, and pest outbreaks.',
                features: ['SMS Alerts', 'Push Notifications', 'Voice Messages']
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Community Hub',
                description: 'Connect with other farmers, share best practices, and access collective knowledge.',
                features: ['Peer Learning', 'Expert Sessions', 'Knowledge Base']
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: 'Credit Scoring',
                description: 'Build credit history through farming data and transaction history for better loan access.',
                features: ['Blockchain Ledger', 'Smart Contracts', 'Instant Approval']
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: 'Sustainability',
                description: 'Optimize resources, reduce environmental impact, and promote organic farming practices.',
                features: ['Water Management', 'Soil Health', 'Carbon Tracking']
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="glass dark:glass-dark p-6 rounded-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/20 rounded-xl flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-green-500/20">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-4 text-sm">{feature.description}</p>
                <div className="space-y-1">
                  {feature.features.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-green-600 font-medium">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold">Built for Rural Connectivity</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                Designed to work seamlessly in low-connectivity areas with offline capabilities and multiple language support.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: '15+', label: 'Local Languages' },
                  { value: 'Offline', label: 'Mode Available' },
                  { value: 'SMS', label: 'Based Alerts' },
                  { value: 'Voice', label: 'Commands' },
                ].map((item, i) => (
                  <div key={i} className="text-center p-3 bg-white/50 dark:bg-white/5 rounded-xl">
                    <div className="text-lg font-bold text-green-600">{item.value}</div>
                    <div className="text-xs text-foreground/70">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass dark:glass-dark p-6 rounded-2xl">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={cropData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {cropData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Enhanced Yield Analytics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-50 to-teal-50 dark:from-green-950/5 dark:to-teal-950/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent text-balance">
              Crop Yield Performance
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Data-driven insights showing significant improvements in agricultural productivity and efficiency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="glass dark:glass-dark p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4">Monthly Yield Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={yieldData}>
                  <defs>
                    <linearGradient id="colorYield" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorTarget" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                  <XAxis dataKey="month" stroke="currentColor" />
                  <YAxis stroke="currentColor" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                      border: '1px solid #10b981', 
                      borderRadius: '8px',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <Area type="monotone" dataKey="yield" stroke="#10b981" fillOpacity={1} fill="url(#colorYield)" name="Actual Yield" />
                  <Area type="monotone" dataKey="target" stroke="#60a5fa" fillOpacity={0.3} fill="url(#colorTarget)" name="Target Yield" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-6">
              <div className="glass dark:glass-dark p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  {[
                    { metric: 'Average Yield Increase', value: '35%', trend: '+8%' },
                    { metric: 'Water Usage Efficiency', value: '40%', trend: '+12%' },
                    { metric: 'Crop Quality Score', value: '88%', trend: '+15%' },
                    { metric: 'Farmer Satisfaction', value: '94%', trend: '+20%' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-white/50 dark:bg-white/5 rounded-xl">
                      <span className="font-medium text-foreground/80 text-sm">{item.metric}</span>
                      <div className="text-right">
                        <div className="text-base font-bold text-green-600">{item.value}</div>
                        <div className="text-xs text-green-500">{item.trend} improvement</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass dark:glass-dark p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-3">Success Factors</h3>
                <div className="space-y-2">
                  {[
                    'Real-time soil monitoring',
                    'AI-powered recommendations',
                    'Precision irrigation',
                    'Optimal fertilizer usage',
                    'Timely pest control'
                  ].map((factor, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-foreground/80 text-sm">{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Enhanced Regional Distribution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-green-500/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent text-balance">
              Community Reach by Region
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Expanding our impact across diverse agricultural regions and communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="glass dark:glass-dark p-6 rounded-2xl">
              <ResponsiveContainer width="100%" height={300}>
                <RechartsBarChart data={regionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                  <XAxis dataKey="region" stroke="currentColor" />
                  <YAxis stroke="currentColor" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                      border: '1px solid #10b981', 
                      borderRadius: '8px',
                      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                    }} 
                  />
                  <Bar dataKey="value" fill="#10b981" radius={[8, 8, 0, 0]} />
                </RechartsBarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-6">
              <div className="glass dark:glass-dark p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-4">Regional Impact</h3>
                <div className="space-y-3">
                  {[
                    { region: 'Northern States', farmers: 1842, progress: 75 },
                    { region: 'Southern States', farmers: 1567, progress: 65 },
                    { region: 'Eastern States', farmers: 892, progress: 45 },
                    { region: 'Western States', farmers: 936, progress: 50 },
                  ].map((item, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-medium">{item.region}</span>
                        <span className="text-green-600 font-semibold">{item.farmers} farmers</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                        <div 
                          className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="glass dark:glass-dark p-6 rounded-2xl">
                <h3 className="text-lg font-bold mb-3">Expansion Plans</h3>
                <div className="space-y-2">
                  {[
                    'North-East Region - 2024',
                    'Central India - 2025',
                    'Coastal Areas - 2026',
                    'Himalayan Region - 2027'
                  ].map((plan, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 bg-white/50 dark:bg-white/5 rounded-lg">
                      <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Target className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-foreground/80 text-sm font-medium">{plan}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Enhanced Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/10 dark:to-teal-950/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent text-balance">
              Built with Enterprise Technology
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Leveraging cutting-edge technologies to deliver reliable, scalable, and intelligent agricultural solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
            {[
              { name: 'IoT Sensors', icon: Wifi },
              { name: 'TensorFlow', icon: Brain },
              { name: 'Blockchain', icon: Shield },
              { name: 'React', icon: Cpu },
              { name: 'Next.js', icon: Zap },
              { name: 'PostgreSQL', icon: Database },
              { name: 'AWS', icon: Cloud },
              { name: 'ML Pipeline', icon: TrendingUp },
              { name: 'Edge Computing', icon: Cpu },
              { name: 'Kubernetes', icon: Cloud },
              { name: 'Apache Kafka', icon: Zap },
              { name: 'GraphQL', icon: Database },
            ].map((tech, i) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={i}
                  className="glass dark:glass-dark p-4 rounded-xl text-center hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group hover:-translate-y-1 hover:shadow-md hover:shadow-green-500/20"
                >
                  <IconComponent className="w-6 h-6 mx-auto mb-2 text-green-600 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold text-foreground/80 group-hover:text-accent transition-colors text-xs">{tech.name}</p>
                </div>
              );
            })}
          </div>

          {/* Technology Architecture */}
          <div className="glass dark:glass-dark p-8 rounded-2xl">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">System Architecture</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  layer: 'Data Collection',
                  icon: Wifi,
                  features: ['IoT Sensors', 'Mobile Apps', 'Satellite Imagery', 'Weather Data'],
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  layer: 'Processing & Analysis',
                  icon: Brain,
                  features: ['ML Models', 'Data Cleaning', 'Pattern Recognition', 'Predictive Analytics'],
                  color: 'from-purple-500 to-pink-500'
                },
                {
                  layer: 'Application & Delivery',
                  icon: Smartphone,
                  features: ['Mobile Dashboard', 'SMS Alerts', 'Voice Assistants', 'Community Platform'],
                  color: 'from-green-500 to-emerald-500'
                }
              ].map((layer, index) => {
                const IconComponent = layer.icon;
                return (
                  <div key={index} className="text-center p-4 group hover:scale-105 transition-transform">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${layer.color} rounded-2xl flex items-center justify-center text-white group-hover:rotate-12 transition-transform`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold mb-4">{layer.layer}</h4>
                    <ul className="space-y-2">
                      {layer.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-foreground/70 text-sm font-medium">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: Enhanced Impact Statistics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 via-green-600/10 to-emerald-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-green-500/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent text-balance">
              Our Growing Impact
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Transforming lives and communities through technology-enabled agricultural solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { 
                label: 'Farmers Impacted', 
                value: '5,000+', 
                icon: Users, 
                change: '+32% YoY',
                description: 'Active women farmers across India'
              },
              { 
                label: 'Microloans Issued', 
                value: '₹2Cr+', 
                icon: Award, 
                change: '+45% YoY',
                description: 'Total financial support provided'
              },
              { 
                label: 'Avg Yield Increase', 
                value: '35%', 
                icon: TrendingUp, 
                change: '+8% this quarter',
                description: 'Average improvement in productivity'
              },
              { 
                label: 'Communities Served', 
                value: '50+', 
                icon: MapPin, 
                change: '+12 new regions',
                description: 'Villages and rural communities'
              },
            ].map((stat, i) => {
              const IconComponent = stat.icon;
              return (
                <div key={i} className="glass dark:glass-dark p-6 rounded-2xl text-center space-y-3 hover:-translate-y-2 transition-all duration-500 group">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">{stat.value}</div>
                  <p className="text-foreground/70 font-semibold text-sm">{stat.label}</p>
                  <p className="text-green-500 font-bold text-xs">{stat.change}</p>
                  <p className="text-xs text-foreground/60">{stat.description}</p>
                </div>
              );
            })}
          </div>

          {/* Additional Impact Metrics */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass dark:glass-dark p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Digital Transformation</h3>
              <div className="space-y-4">
                {[
                  { metric: 'Digital Literacy', progress: 85 },
                  { metric: 'Financial Inclusion', progress: 78 },
                  { metric: 'Market Access', progress: 72 },
                  { metric: 'Sustainable Practices', progress: 88 },
                ].map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-medium">{item.metric}</span>
                      <span className="text-green-600 font-bold">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass dark:glass-dark p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Environmental Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '40%', label: 'Water Saved', icon: CloudRain },
                  { value: '25%', label: 'Fertilizer Reduction', icon: Leaf },
                  { value: '30%', label: 'Energy Efficiency', icon: Zap },
                  { value: '50%', label: 'Organic Farming', icon: Heart },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="text-center p-3 bg-white/50 dark:bg-white/5 rounded-xl">
                      <IconComponent className="w-6 h-6 mx-auto mb-1 text-green-600" />
                      <div className="text-lg font-bold text-green-600">{item.value}</div>
                      <div className="text-xs text-foreground/70">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Enhanced Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent text-balance">
              Voices from Our Community
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Real stories of transformation and empowerment from women farmers across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                name: 'Priya Sharma',
                role: 'Organic Farmer',
                location: 'Nashik, Maharashtra',
                story: 'Using Sakhi-Agri, I increased my tomato yield by 45% and finally qualified for a microloan to expand my operations! The real-time soil data transformed my farming practices.',
                avatar: '👩‍🌾',
                achievements: ['45% Yield Increase', 'Microloan Approved', '2x Income'],
                rating: 5
              },
              {
                name: 'Anita Patel',
                role: 'Rice Farmer',
                location: 'Anand, Gujarat',
                story: 'The real-time alerts saved my rice crop from disease during monsoon. Sakhi-Agri is a game-changer for small farmers like me. The community support is incredible.',
                avatar: '👩‍🌾',
                achievements: ['Disease Prevention', 'Water Optimization', 'Quality Improvement'],
                rating: 5
              },
              {
                name: 'Maya Singh',
                role: 'Vegetable Farmer',
                location: 'Jharkhand',
                story: 'Connected with buyers through the marketplace. My income doubled in just 6 months! The training programs helped me learn modern farming techniques.',
                avatar: '👩‍🌾',
                achievements: ['Market Access', 'Income Growth', 'Skill Development'],
                rating: 5
              },
            ].map((story, i) => (
              <div key={i} className="glass dark:glass-dark p-6 rounded-2xl space-y-4 hover:-translate-y-2 transition-all duration-500 group">
                <div className="flex items-center gap-3">
                  <div className="text-3xl transform group-hover:scale-110 transition-transform">{story.avatar}</div>
                  <div>
                    <p className="font-bold text-base">{story.name}</p>
                    <p className="text-accent font-semibold text-sm">{story.role}</p>
                    <p className="text-foreground/60 text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {story.location}
                    </p>
                  </div>
                </div>
                <p className="text-foreground/70 italic leading-relaxed text-sm">&ldquo;{story.story}&rdquo;</p>
                <div className="flex gap-1">
                  {[...Array(story.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1 pt-3">
                  {story.achievements.map((achievement, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Community Growth */}
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">Join Our Growing Community</h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { number: '50+', label: 'Community Groups' },
                { number: '200+', label: 'Peer Trainers' },
                { number: '15+', label: 'Local Languages' },
                { number: '24/7', label: 'Support Available' },
              ].map((item, index) => (
                <div key={index} className="text-center p-4 glass dark:glass-dark rounded-xl hover:-translate-y-1 transition-transform">
                  <div className="text-lg font-bold text-green-600">{item.number}</div>
                  <div className="text-xs text-foreground/70 mt-1 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: Enhanced Benefits List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-green-500/5"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent text-balance">
              Why Choose Sakhi-Agri
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive benefits designed specifically for women farmers&apos; success and empowerment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              { 
                title: 'Proven Track Record', 
                desc: 'Trusted by thousands of farmers across 50+ communities with documented success stories and measurable results.',
                icon: Award
              },
              { 
                title: '24/7 Support', 
                desc: 'Dedicated support team available round the clock in multiple local languages with quick response times.',
                icon: Clock
              },
              { 
                title: 'Easy to Use', 
                desc: 'No technical background needed. Simple, intuitive interface designed for rural users with multiple access options.',
                icon: Smartphone
              },
              { 
                title: 'Secure & Private', 
                desc: 'Your data is encrypted and protected with military-grade security and blockchain technology.',
                icon: Shield
              },
              { 
                title: 'Community Driven', 
                desc: 'Built with continuous feedback from women farmers, ensuring relevance and effectiveness.',
                icon: Users
              },
              { 
                title: 'Growing Marketplace', 
                desc: 'Connect directly with buyers, eliminate middlemen, and increase your income with fair pricing.',
                icon: TrendingUp
              },
            ].map((benefit, i) => {
              const IconComponent = benefit.icon;
              return (
                <div key={i} className="glass dark:glass-dark p-6 rounded-2xl flex gap-4 hover:-translate-y-2 transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Value Proposition */}
          <div className="glass dark:glass-dark p-8 rounded-2xl text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Comprehensive Value</h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto leading-relaxed text-sm">
              We provide end-to-end solutions that address every aspect of modern farming - from soil to sale, 
              technology to training, and individual growth to community development.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Technology Access',
                  description: 'Advanced tools made simple and accessible for every farmer',
                  value: 'Democratizing Innovation'
                },
                {
                  title: 'Financial Inclusion',
                  description: 'Building credit history and access to formal financial services',
                  value: 'Economic Empowerment'
                },
                {
                  title: 'Knowledge Sharing',
                  description: 'Community-driven learning and continuous skill development',
                  value: 'Collective Growth'
                }
              ].map((item, i) => (
                <div key={i} className="p-4">
                  <h4 className="text-sm font-bold text-green-600 mb-1">{item.value}</h4>
                  <p className="font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-foreground/70 text-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11: Enhanced Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/10 via-green-600/10 to-emerald-500/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-green-500/10"></div>
        <div className="max-w-4xl mx-auto glass dark:glass-dark p-8 rounded-2xl text-center space-y-6 relative">
          {/* Floating elements */}
          <div className="absolute top-6 left-6 text-4xl opacity-20 animate-bounce">🌱</div>
          <div className="absolute bottom-6 right-6 text-4xl opacity-20 animate-bounce animation-delay-1000">🚜</div>
          <div className="absolute top-1/2 left-12 text-2xl opacity-30 animate-pulse">💫</div>
          <div className="absolute top-1/2 right-12 text-2xl opacity-30 animate-pulse animation-delay-500">✨</div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-balance leading-tight">
            Ready to Transform Your Farming Journey?
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 leading-relaxed max-w-2xl mx-auto">
            Join thousands of women farmers already using Sakhi-Agri to improve yields, access credit, 
            and build prosperous futures. Start your journey today with personalized guidance and community support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/signup"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 flex items-center gap-2 justify-center group hover:scale-105 transform text-sm"
            >
              <Rocket className="w-5 h-5" />
              Start Your Transformation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/demo"
              className="px-8 py-4 border border-accent text-accent font-semibold rounded-xl hover:bg-accent/10 transition-all duration-300 hover:scale-105 transform backdrop-blur-sm text-sm"
            >
              Watch Demo
            </Link>
          </div>
          <p className="text-foreground/60 text-xs">
            No credit card required • Free training included • Community support
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}