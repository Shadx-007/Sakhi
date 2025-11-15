'use client';

import { useState } from 'react';
import { Quote, MapPin, Calendar, Crop } from 'lucide-react';

export function CommunityStories() {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      name: 'Priya Sharma',
      location: 'Nashik, Maharashtra',
      role: 'Organic Vegetable Farmer',
      duration: '2 years with Sakhi-Agri',
      crop: 'Tomatoes, Bell Peppers',
      image: '👩‍🌾',
      story: 'Before Sakhi-Agri, I struggled with unpredictable yields and market prices. Now, with real-time soil data and AI recommendations, my tomato yield increased by 65%. The microloan helped me invest in drip irrigation, saving 40% water.',
      achievements: ['65% Yield Increase', '40% Water Saved', '2x Income Growth'],
      before: '1.5 acres, manual farming',
      after: '3 acres, smart irrigation'
    },
    {
      name: 'Anita Patel',
      location: 'Anand, Gujarat',
      role: 'Dairy & Crop Farmer',
      duration: '18 months with Sakhi-Agri',
      crop: 'Cotton, Dairy',
      image: '👩‍🌾',
      story: 'The integration of crop and livestock management transformed my farm. AI-powered insights helped optimize feed and crop rotation. My income stabilized, and I could send my children to better schools.',
      achievements: ['Integrated Farming', 'Stable Income', 'Education Fund'],
      before: 'Separate operations',
      after: 'Integrated system'
    },
    {
      name: 'Maya Singh',
      location: 'Jharkhand',
      role: 'Traditional Rice Farmer',
      duration: '3 years with Sakhi-Agri',
      crop: 'Rice, Pulses',
      image: '👩‍🌾',
      story: 'As a tribal woman farmer, access to technology was limited. Sakhi-Agri\'s voice-based system in local language changed everything. My rice yield improved by 50%, and I became a community trainer.',
      achievements: ['50% Yield Boost', 'Community Leader', 'Local Trainer'],
      before: 'Traditional methods',
      after: 'Tech-enabled farming'
    },
    {
      name: 'Laxmi Devi',
      location: 'Rajasthan',
      role: 'Water Conservation Specialist',
      duration: '2.5 years with Sakhi-Agri',
      crop: 'Millets, Pulses',
      image: '👩‍🌾',
      story: 'In water-scarce Rajasthan, Sakhi-Agri\'s moisture sensors and weather predictions helped optimize water usage. We revived traditional millet farming, creating a sustainable model for arid regions.',
      achievements: ['Water Optimized', 'Millet Revival', 'Sustainable Model'],
      before: 'Water scarcity issues',
      after: 'Efficient water management'
    }
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
          Voices from Our Community
        </h2>
        <p className="text-xl text-center text-foreground/70 mb-20 max-w-3xl mx-auto">
          Real stories of transformation and empowerment from women farmers across India
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story Navigation */}
          <div className="space-y-6">
            {stories.map((story, index) => (
              <button
                key={index}
                onClick={() => setActiveStory(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  activeStory === index 
                    ? 'glass dark:glass-dark shadow-2xl shadow-green-500/20 border-2 border-green-200 dark:border-green-800' 
                    : 'bg-white/50 dark:bg-white/5 hover:bg-white/70 dark:hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-4xl">{story.image}</div>
                  <div>
                    <h3 className="font-bold text-lg">{story.name}</h3>
                    <div className="flex items-center gap-1 text-sm text-foreground/70">
                      <MapPin className="w-4 h-4" />
                      {story.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-foreground/70 mb-2">
                  <div className="flex items-center gap-1">
                    <Crop className="w-4 h-4" />
                    {story.crop}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {story.duration}
                  </div>
                </div>
                <p className="text-foreground/80 line-clamp-2">{story.story}</p>
              </button>
            ))}
          </div>

          {/* Active Story Detail */}
          <div className="glass dark:glass-dark p-8 rounded-2xl sticky top-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="text-6xl">{stories[activeStory].image}</div>
              <div>
                <h3 className="text-2xl font-bold">{stories[activeStory].name}</h3>
                <p className="text-accent font-semibold">{stories[activeStory].role}</p>
                <div className="flex items-center gap-2 text-sm text-foreground/70 mt-1">
                  <MapPin className="w-4 h-4" />
                  {stories[activeStory].location}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6 text-green-600">
              <Quote className="w-6 h-6" />
              <span className="text-sm font-semibold">SUCCESS STORY</span>
            </div>

            <blockquote className="text-lg text-foreground/80 leading-relaxed mb-8 italic">
              &ldquo;{stories[activeStory].story}&rdquo;
            </blockquote>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold mb-3 text-foreground/70">Before Sakhi-Agri</h4>
                <div className="p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-800">
                  <p className="text-sm text-foreground/80">{stories[activeStory].before}</p>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-foreground/70">After Sakhi-Agri</h4>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                  <p className="text-sm text-foreground/80">{stories[activeStory].after}</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3 text-foreground/70">Key Achievements</h4>
              <div className="flex flex-wrap gap-2">
                {stories[activeStory].achievements.map((achievement, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium"
                  >
                    {achievement}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold mb-8">Join Our Growing Community</h3>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '50+', label: 'Community Groups' },
              { number: '200+', label: 'Peer Trainers' },
              { number: '15+', label: 'Local Languages' },
              { number: '24/7', label: 'Support Available' },
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-2xl font-bold text-green-600">{item.number}</div>
                <div className="text-sm text-foreground/70 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}