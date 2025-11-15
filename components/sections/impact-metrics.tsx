'use client';

import { useState, useEffect } from 'react';
import { Users, TrendingUp, DollarSign, Leaf, Clock, Award } from 'lucide-react';

export function ImpactMetrics() {
  const [counters, setCounters] = useState({
    farmers: 0,
    loans: 0,
    yield: 0,
    villages: 0,
    income: 0,
    training: 0
  });

  useEffect(() => {
    const targets = {
      farmers: 5237,
      loans: 1874,
      yield: 42,
      villages: 67,
      income: 156,
      training: 289
    };

    const duration = 3000;
    const steps = 60;
    const step = duration / steps;

    Object.keys(targets).forEach(key => {
      let current = 0;
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, step);

      return () => clearInterval(timer);
    });
  }, []);

  const metrics = [
    {
      icon: <Users className="w-8 h-8" />,
      value: counters.farmers,
      suffix: '+',
      label: 'Women Farmers Empowered',
      description: 'Across multiple states and communities'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      value: counters.loans,
      suffix: '+',
      label: 'Microloans Disbursed',
      description: 'Total loans provided to women farmers'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: counters.yield,
      suffix: '%',
      label: 'Average Yield Increase',
      description: 'Improvement in crop production'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      value: counters.villages,
      suffix: '+',
      label: 'Villages Covered',
      description: 'Rural communities impacted'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: counters.income,
      suffix: '%',
      label: 'Income Growth',
      description: 'Average increase in household income'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: counters.training,
      suffix: '+',
      label: 'Training Sessions',
      description: 'Digital literacy and skill development'
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-teal-500/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
          Measurable Impact
        </h2>
        <p className="text-xl text-center text-foreground/70 mb-20 max-w-3xl mx-auto">
          Transforming lives and communities through technology-enabled agricultural solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="glass dark:glass-dark p-8 rounded-2xl text-center hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                {metric.icon}
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">
                {metric.value}{metric.suffix}
              </div>
              <h3 className="text-xl font-semibold mb-2">{metric.label}</h3>
              <p className="text-foreground/70 text-sm">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">Regional Distribution</h3>
            <div className="space-y-4">
              {[
                { region: 'Northern States', farmers: 1842, progress: 'w-3/4' },
                { region: 'Southern States', farmers: 1567, progress: 'w-2/3' },
                { region: 'Eastern States', farmers: 892, progress: 'w-1/2' },
                { region: 'Western States', farmers: 936, progress: 'w-1/2' },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{item.region}</span>
                    <span className="text-green-600 font-semibold">{item.farmers} farmers</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 dark:bg-gray-700">
                    <div className={`bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full ${item.progress} transition-all duration-1000`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass dark:glass-dark p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">Success Indicators</h3>
            <div className="space-y-4">
              {[
                { indicator: 'Digital Literacy', progress: 85 },
                { indicator: 'Financial Inclusion', progress: 78 },
                { indicator: 'Market Access', progress: 72 },
                { indicator: 'Sustainable Practices', progress: 88 },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="font-medium">{item.indicator}</span>
                  <span className="text-green-600 font-bold">{item.progress}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}