'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  Leaf, 
  TrendingUp, 
  Shield, 
  Heart, 
  Clock, 
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Sprout,
  Droplets,
  Thermometer,
  Zap,
  Cloud,
  Database,
  Cpu,
  Satellite,
  BarChart3,
  Lightbulb,
  Rocket,
  Gem,
  Eye,
  HandHeart,
  Recycle,
  Trees,
  Flower2,
  Sun,
  Wind
} from 'lucide-react';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Agricultural Scientist',
      bio: 'PhD in Agricultural Technology with 15+ years in precision farming research. Former lead researcher at International Agri-Tech Institute.',
      expertise: ['Soil Science', 'Crop Optimization', 'Sustainable Farming'],
      image: '/team/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Technology',
      bio: 'Former Google AI engineer with passion for sustainable agriculture. Built scalable IoT systems for farming applications.',
      expertise: ['AI/ML', 'IoT Systems', 'Data Analytics'],
      image: '/team/michael-rodriguez.jpg'
    },
    {
      name: 'Dr. Aisha Patel',
      role: 'Environmental Director',
      bio: 'Environmental scientist focused on sustainable farming practices. Published author on climate-resilient agriculture.',
      expertise: ['Sustainability', 'Climate Science', 'Water Management'],
      image: '/team/aisha-patel.jpg'
    },
    {
      name: 'James Thompson',
      role: 'Operations Director',
      bio: '20+ years in agricultural operations management. Expert in supply chain optimization and farm efficiency.',
      expertise: ['Operations', 'Supply Chain', 'Efficiency'],
      image: '/team/james-thompson.jpg'
    },
    {
      name: 'Elena Petrova',
      role: 'Data Science Lead',
      bio: 'Data scientist specializing in predictive analytics for crop yield and disease prevention.',
      expertise: ['Predictive Analytics', 'Machine Learning', 'Statistics'],
      image: '/team/elena-petrova.jpg'
    },
    {
      name: 'David Kim',
      role: 'Hardware Engineering Lead',
      bio: 'Engineer with background in robotics and sensor technology. Designed our proprietary monitoring systems.',
      expertise: ['Robotics', 'Sensor Technology', 'Hardware Design'],
      image: '/team/david-kim.jpg'
    }
  ];

  const milestones = [
    { year: '2018', event: 'Company Founded', description: 'Started with vision to revolutionize farming through technology' },
    { year: '2019', event: 'First Prototype', description: 'Developed initial IoT sensor network for soil monitoring' },
    { year: '2020', event: 'Series A Funding', description: 'Raised $15M to expand research and development' },
    { year: '2021', event: 'Commercial Launch', description: 'Deployed first commercial farming solutions' },
    { year: '2022', event: 'Global Expansion', description: 'Expanded operations to 15 countries worldwide' },
    { year: '2023', event: 'AI Integration', description: 'Launched AI-powered predictive analytics platform' },
    { year: '2024', event: 'Sustainability Award', description: 'Recognized for environmental impact and innovation' }
  ];

  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustainability First',
      description: 'We prioritize environmental stewardship in every decision, ensuring our solutions contribute to long-term planetary health.'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation Driven',
      description: 'Continuous research and development push the boundaries of whats possible in agricultural technology.'
    },
    {
      icon: <HandHeart className="w-8 h-8" />,
      title: 'Farmer Centric',
      description: 'Our solutions are designed with real farmers needs in mind, ensuring practical, usable technology.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Data Integrity',
      description: 'We maintain the highest standards of data accuracy, security, and transparency in all our operations.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'We believe in making advanced farming technology accessible to agricultural communities worldwide.'
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: 'Continuous Improvement',
      description: 'We constantly evolve our technology and practices based on real-world feedback and scientific advancements.'
    }
  ];

  const technologies = [
    {
      category: 'IoT & Sensors',
      items: [
        'Advanced Soil Moisture Sensors',
        'Multi-spectral Imaging Drones',
        'Weather Station Networks',
        'Crop Health Monitoring Cameras',
        'Automated Irrigation Controllers'
      ]
    },
    {
      category: 'AI & Machine Learning',
      items: [
        'Predictive Yield Analytics',
        'Disease Detection Algorithms',
        'Pest Infestation Prediction',
        'Optimal Harvest Timing',
        'Automated Crop Recommendations'
      ]
    },
    {
      category: 'Data Analytics',
      items: [
        'Real-time Environmental Monitoring',
        'Historical Trend Analysis',
        'Comparative Field Performance',
        'Resource Optimization Algorithms',
        'Climate Impact Modeling'
      ]
    },
    {
      category: 'Sustainability Tools',
      items: [
        'Water Usage Optimization',
        'Carbon Footprint Tracking',
        'Soil Health Assessment',
        'Biodiversity Monitoring',
        'Sustainable Practice Recommendations'
      ]
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', description: 'Quality Management System Certified' },
    { name: 'ISO 14001:2015', description: 'Environmental Management System' },
    { name: 'B Corp Certified', description: 'Meeting highest social and environmental standards' },
    { name: 'USDA Organic Compatible', description: 'Approved for organic farming operations' },
    { name: 'Climate Neutral Certified', description: 'Carbon neutral operations since 2022' },
    { name: 'Data Security Certified', description: 'Enterprise-grade data protection' }
  ];

  const partnerships = [
    { name: 'World Food Programme', type: 'Global Hunger Relief' },
    { name: 'MIT Agricultural Lab', type: 'Research Collaboration' },
    { name: 'USDA', type: 'Government Partnership' },
    { name: 'The Nature Conservancy', type: 'Environmental Conservation' },
    { name: 'Farmers Association International', type: 'Industry Collaboration' },
    { name: 'United Nations FAO', type: 'Sustainable Development' }
  ];

  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900/20 via-background to-emerald-900/10 dark:from-green-900/20 dark:via-background dark:to-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              About Sakhl-Agri
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Pioneering the future of sustainable agriculture through cutting-edge technology, 
              data-driven insights, and unwavering commitment to environmental stewardship.
            </p>
            <div className="flex justify-center gap-6 pt-8">
              <div className="flex items-center gap-3 text-sm bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 px-4 py-2 rounded-full border border-green-200 dark:border-green-700/50">
                <Users className="w-4 h-4" />
                50+ Team Members
              </div>
              <div className="flex items-center gap-3 text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-700/50">
                <Globe className="w-4 h-4" />
                25+ Countries
              </div>
              <div className="flex items-center gap-3 text-sm bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-300 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-700/50">
                <Award className="w-4 h-4" />
                15 Industry Awards
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Target className="w-12 h-12 text-green-400" />
                <h2 className="text-4xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To revolutionize global agriculture by making precision farming accessible, affordable, 
                and sustainable for farmers worldwide. We believe that technology should serve humanity 
                and the planet, creating a future where food production harmonizes with nature rather 
                than exploits it.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-muted-foreground">Democratize advanced farming technology</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-muted-foreground">Reduce agricultural environmental impact by 50%</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-muted-foreground">Increase global food production efficiency</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-muted-foreground">Empower farmers with data-driven decisions</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Eye className="w-12 h-12 text-emerald-400" />
                <h2 className="text-4xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a world where every farm, regardless of size or location, operates at peak 
                efficiency while regenerating the environment. A future where technology and tradition 
                work hand-in-hand to create abundant, sustainable food systems that nourish both people 
                and the planet for generations to come.
              </p>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 border border-green-200 dark:border-green-700/30">
                <p className="text-green-800 dark:text-green-300 text-lg font-semibold italic">
                  "By 2030, we aim to transform 1 million farms worldwide into models of 
                  sustainable, technology-enabled agriculture."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a university research project to a global leader in agricultural technology
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-green-500 to-emerald-500 h-full"></div>
            
            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-card backdrop-blur-lg border border-border rounded-2xl p-6 hover:border-green-500/30 transition-all duration-300">
                      <div className="text-green-400 text-2xl font-bold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.event}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every technology we develop
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card backdrop-blur-lg border border-border rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300 group">
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge solutions powering the future of sustainable agriculture
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-card backdrop-blur-lg border border-border rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">{tech.category}</h3>
                <div className="space-y-4">
                  {tech.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Impact Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              { icon: <Database className="w-8 h-8" />, value: '15TB+', label: 'Data Processed Daily' },
              { icon: <Cpu className="w-8 h-8" />, value: '98.5%', label: 'Prediction Accuracy' },
              { icon: <Satellite className="w-8 h-8" />, value: '500K+', label: 'Acres Monitored' },
              { icon: <BarChart3 className="w-8 h-8" />, value: '2.1M+', label: 'Data Points Analyzed' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-green-400 mb-4 mx-auto">{stat.icon}</div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              World-class experts driving innovation in agricultural technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card backdrop-blur-lg border border-border rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300 group">
                <div className="text-center">
                  {/* Placeholder for team member image */}
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-green-400 mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full inline-block mr-2">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
            {[
              { value: '15+', label: 'Years Average Experience' },
              { value: '12', label: 'PhD Holders' },
              { value: '25+', label: 'Countries Represented' },
              { value: '50+', label: 'Research Papers Published' },
            ].map((stat, index) => (
              <div key={index} className="bg-card backdrop-blur-lg border border-border rounded-2xl p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Certifications & Awards</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognition for our commitment to quality, innovation, and sustainability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-card backdrop-blur-lg border border-border rounded-2xl p-6 text-center hover:border-green-500/30 transition-all duration-300">
                <Award className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h3>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </div>
            ))}
          </div>

          {/* Awards Showcase */}
          <div className="mt-16 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-700/30">
            <div className="text-center">
              <Gem className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">2024 Global Sustainability Award</h3>
              <p className="text-foreground text-lg mb-6">
                Recognized for outstanding contribution to sustainable agriculture and environmental conservation
              </p>
              <div className="flex justify-center gap-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Global Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming agriculture across continents and communities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Trees className="w-8 h-8" />, value: '1.2M', label: 'Acres Under Management' },
              { icon: <Droplets className="w-8 h-8" />, value: '3.5B', label: 'Liters of Water Saved' },
              { icon: <Flower2 className="w-8 h-8" />, value: '45%', label: 'Yield Improvement' },
            ].map((impact, index) => (
              <div key={index} className="text-center bg-card backdrop-blur-lg border border-border rounded-2xl p-8">
                <div className="text-green-400 mb-4 mx-auto">{impact.icon}</div>
                <div className="text-4xl font-bold text-foreground mb-2">{impact.value}</div>
                <div className="text-muted-foreground text-lg">{impact.label}</div>
              </div>
            ))}
          </div>

          {/* Environmental Impact */}
          <div className="bg-card backdrop-blur-lg border border-border rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Environmental Impact Metrics</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { metric: 'Carbon Emissions Reduced', value: '28,500 tons', icon: <Wind className="w-6 h-6" /> },
                { metric: 'Chemical Usage Reduced', value: '62%', icon: <Recycle className="w-6 h-6" /> },
                { metric: 'Soil Health Improved', value: '+35%', icon: <Sprout className="w-6 h-6" /> },
                { metric: 'Biodiversity Increased', value: '+28%', icon: <Trees className="w-6 h-6" /> },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-green-400 mb-2 mx-auto">{item.icon}</div>
                  <div className="text-lg font-semibold text-foreground">{item.value}</div>
                  <div className="text-muted-foreground text-sm">{item.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Strategic Partnerships</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Collaborating with global leaders to drive agricultural innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-card backdrop-blur-lg border border-border rounded-2xl p-6 text-center hover:border-green-500/30 transition-all duration-300">
                <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">{partner.name}</h3>
                <p className="text-muted-foreground text-sm">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:via-background dark:to-emerald-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Rocket className="w-16 h-16 text-green-400 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-foreground mb-6">Join Our Mission</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Be part of the agricultural revolution. Whether you're a farmer, researcher, 
            or technology enthusiast, there's a place for you in our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
              Contact Us <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-green-500 text-green-500 hover:bg-green-500/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
              View Careers <Users className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">Get In Touch</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Have questions about our technology or want to learn how Sakhl-Agri can transform your farming operations? 
                Our team is here to help you every step of the way.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Mail className="w-6 h-6" />, detail: 'contact@sakhl-agri.com', label: 'Email' },
                  { icon: <Phone className="w-6 h-6" />, detail: '+1 (555) 123-AGR1', label: 'Phone' },
                  { icon: <MapPin className="w-6 h-6" />, detail: '123 Innovation Drive, Tech Valley, CA 94025', label: 'Headquarters' },
                  { icon: <Clock className="w-6 h-6" />, detail: '24/7 Support Available', label: 'Support' },
                ].map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-green-400">{contact.icon}</div>
                    <div>
                      <div className="text-foreground font-semibold">{contact.detail}</div>
                      <div className="text-muted-foreground text-sm">{contact.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card backdrop-blur-lg border border-border rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Quick Facts</h3>
              <div className="space-y-4">
                {[
                  { label: 'Founded', value: '2018' },
                  { label: 'Team Size', value: '50+' },
                  { label: 'Countries Served', value: '25+' },
                  { label: 'Farms Transformed', value: '5,000+' },
                  { label: 'Data Points Analyzed', value: '2.1M daily' },
                ].map((fact, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-border pb-2">
                    <span className="text-muted-foreground">{fact.label}</span>
                    <span className="text-green-400 font-semibold">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}