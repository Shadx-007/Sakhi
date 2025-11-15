'use client';

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BookOpen, Play, Users, MessageSquare, TrendingUp, Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const communityGrowthData = [
  { month: 'Jan', members: 1200, active: 800 },
  { month: 'Feb', members: 1450, active: 950 },
  { month: 'Mar', members: 1800, active: 1200 },
  { month: 'Apr', members: 2100, active: 1450 },
  { month: 'May', members: 2500, active: 1800 },
  { month: 'Jun', members: 3100, active: 2200 },
];

export default function FarmersHub() {
  return (
    <main className="min-h-screen bg-background pt-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
              Farmers Hub
            </h1>
            <p className="text-foreground/70">Training, guides, and resources for women farmers</p>
          </div>

          {/* Learning Guides Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Learning Guides</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Soil Management',
                  description: 'Complete guide to soil health and fertility management',
                  slides: 45,
                  format: 'PPT'
                },
                {
                  title: 'Crop Rotation',
                  description: 'Optimize your crop cycles for better yield',
                  slides: 32,
                  format: 'PPT'
                },
                {
                  title: 'Water Conservation',
                  description: 'Efficient water management techniques',
                  slides: 28,
                  format: 'PPT'
                },
                {
                  title: 'Pest Management',
                  description: 'Natural and chemical pest control methods',
                  slides: 38,
                  format: 'PPT'
                },
                {
                  title: 'Organic Farming',
                  description: 'Transition to organic farming practices',
                  slides: 52,
                  format: 'PPT'
                },
                {
                  title: 'Market Access',
                  description: 'Connecting your produce to better markets',
                  slides: 35,
                  format: 'PPT'
                },
              ].map((guide, i) => (
                <div key={i} className="glass p-6 rounded-2xl space-y-4 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{guide.title}</h3>
                  <p className="text-sm text-foreground/70">{guide.description}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <span className="text-sm text-foreground/60">{guide.slides} slides • {guide.format}</span>
                    <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold hover:bg-green-600 transition-colors">
                      <Download size={16} />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Guides Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Video Tutorials</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Soil Testing Basics',
                  duration: '15:30',
                  instructor: 'Dr. Rajesh Patel',
                  level: 'Beginner'
                },
                {
                  title: 'Smart Irrigation Setup',
                  duration: '22:15',
                  instructor: 'Deepa Verma',
                  level: 'Intermediate'
                },
                {
                  title: 'Organic Pest Control',
                  duration: '18:45',
                  instructor: 'Ramaben Singh',
                  level: 'Beginner'
                },
                {
                  title: 'Crop Monitoring',
                  duration: '25:20',
                  instructor: 'Deepa Verma',
                  level: 'Advanced'
                },
                {
                  title: 'Market Preparation',
                  duration: '20:10',
                  instructor: 'Dr. Rajesh Patel',
                  level: 'Intermediate'
                },
                {
                  title: 'Sustainable Practices',
                  duration: '28:35',
                  instructor: 'Ramaben Singh',
                  level: 'Intermediate'
                },
              ].map((video, i) => (
                <div key={i} className="glass p-6 rounded-2xl space-y-4 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center text-white">
                    <Play className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{video.title}</h3>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <p>Instructor: {video.instructor}</p>
                    <p>Duration: {video.duration}</p>
                    <p>Level: {video.level}</p>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors">
                    Watch Video
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Community Growth Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Community Growth</h2>
            <div className="glass p-8 rounded-2xl">
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={communityGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                  <XAxis dataKey="month" stroke="currentColor" />
                  <YAxis stroke="currentColor" />
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #10b981', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="members" stroke="#10b981" strokeWidth={3} dot={{ r: 6 }} />
                  <Line type="monotone" dataKey="active" stroke="#60a5fa" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Community Discussion Section */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Community Discussion</h2>
            <div className="glass p-8 rounded-2xl">
              <div className="space-y-4">
                {[
                  { 
                    topic: 'Best practices for monsoon farming', 
                    replies: 45, 
                    views: 1200, 
                    helpful: 89,
                    lastActive: '2 hours ago'
                  },
                  { 
                    topic: 'Managing pest attacks naturally', 
                    replies: 38, 
                    views: 980, 
                    helpful: 76,
                    lastActive: '5 hours ago'
                  },
                  { 
                    topic: 'Maximizing yield with limited water', 
                    replies: 52, 
                    views: 1450, 
                    helpful: 94,
                    lastActive: '1 day ago'
                  },
                  { 
                    topic: 'Soil nutrition for vegetable crops', 
                    replies: 29, 
                    views: 760, 
                    helpful: 82,
                    lastActive: '2 days ago'
                  },
                  { 
                    topic: 'Organic certification process', 
                    replies: 41, 
                    views: 1100, 
                    helpful: 88,
                    lastActive: '3 days ago'
                  },
                ].map((thread, i) => (
                  <div key={i} className="p-4 border border-border rounded-lg hover:bg-secondary/30 transition-all cursor-pointer">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground hover:text-green-600 transition-colors">{thread.topic}</h4>
                        <div className="flex gap-4 text-sm text-foreground/60 mt-2">
                          <span>💬 {thread.replies} replies</span>
                          <span>👁️ {thread.views} views</span>
                          <span>👍 {thread.helpful}% helpful</span>
                          <span>🕒 {thread.lastActive}</span>
                        </div>
                      </div>
                      <MessageSquare className="w-5 h-5 text-green-600 flex-shrink-0" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <button className="w-full px-6 py-3 border-2 border-green-500 text-green-600 rounded-full font-semibold hover:bg-green-50 transition-colors">
                  View All Discussions
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {[
              { label: 'Active Community Members', value: '3,100+', icon: <Users className="w-8 h-8" /> },
              { label: 'Learning Guides', value: '50+', icon: <BookOpen className="w-8 h-8" /> },
              { label: 'Video Tutorials', value: '35+', icon: <Play className="w-8 h-8" /> },
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center text-white mx-auto">
                  {stat.icon}
                </div>
                <p className="text-sm text-foreground/70">{stat.label}</p>
                <p className="text-2xl font-bold text-green-600">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}