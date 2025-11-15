import { Cpu, Wifi, Brain, Database, Shield, Cloud } from 'lucide-react';

export function TechnologyStack() {
  const technologies = [
    {
      category: 'IoT & Sensors',
      icon: <Wifi className="w-8 h-8" />,
      items: [
        'Soil Moisture Sensors',
        'Weather Stations',
        'Crop Health Monitors',
        'Smart Irrigation Controllers',
        'Livestock Tracking',
        'Environmental Sensors'
      ],
      description: 'Real-time data collection from the field'
    },
    {
      category: 'AI & Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      items: [
        'Predictive Analytics',
        'Crop Disease Detection',
        'Yield Prediction Models',
        'Soil Health Analysis',
        'Market Price Forecasting',
        'Personalized Recommendations'
      ],
      description: 'Intelligent insights for better decisions'
    },
    {
      category: 'Data Infrastructure',
      icon: <Database className="w-8 h-8" />,
      items: [
        'Distributed Databases',
        'Real-time Data Processing',
        'Edge Computing',
        'Cloud Storage',
        'Data Analytics Pipeline',
        'API Integration'
      ],
      description: 'Scalable and reliable data management'
    },
    {
      category: 'Security & Blockchain',
      icon: <Shield className="w-8 h-8" />,
      items: [
        'Smart Contracts',
        'Digital Identity',
        'Secure Transactions',
        'Data Encryption',
        'Credit Scoring',
        'Transparent Ledger'
      ],
      description: 'Trust and security for all transactions'
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-950/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
          Advanced Technology Stack
        </h2>
        <p className="text-xl text-center text-foreground/70 mb-20 max-w-3xl mx-auto">
          Built on cutting-edge technologies to deliver reliable, scalable, and intelligent solutions for modern agriculture
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {technologies.map((tech, index) => (
            <div key={index} className="glass dark:glass-dark p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center text-white">
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{tech.category}</h3>
                  <p className="text-foreground/70">{tech.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {tech.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2 p-3 rounded-lg bg-white/50 dark:bg-white/10">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 glass dark:glass-dark p-8 rounded-2xl">
          <h3 className="text-3xl font-bold text-center mb-8">System Architecture</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                layer: 'Data Collection',
                features: ['IoT Sensors', 'Mobile Apps', 'Satellite Imagery', 'Weather Data'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                layer: 'Processing & Analysis',
                features: ['ML Models', 'Data Cleaning', 'Pattern Recognition', 'Predictive Analytics'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                layer: 'Application & Delivery',
                features: ['Mobile Dashboard', 'SMS Alerts', 'Voice Assistants', 'Community Platform'],
                color: 'from-green-500 to-emerald-500'
              }
            ].map((layer, index) => (
              <div key={index} className="text-center p-6">
                <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${layer.color} rounded-2xl flex items-center justify-center text-white text-2xl font-bold`}>
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold mb-4">{layer.layer}</h4>
                <ul className="space-y-2">
                  {layer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-foreground/70 text-sm">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}