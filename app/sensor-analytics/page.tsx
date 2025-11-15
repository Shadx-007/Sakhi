'use client';

import { Navbar } from '@/components/navbar';
import { DashboardAnimatedObjects } from '@/components/dashboard-animated-objects';
import { Footer } from '@/components/footer';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ComposedChart } from 'recharts';
import { Droplets, Thermometer, Wind, Zap, Activity, Database, TrendingUp, AlertTriangle, Download, Filter, Calendar, Clock, BarChart3, Cpu, Wifi, Battery } from 'lucide-react';

const performanceData = [
  { month: 'Jan', uptime: 99.2, accuracy: 97.5, dataPoints: 45000 },
  { month: 'Feb', uptime: 99.5, accuracy: 98.1, dataPoints: 52000 },
  { month: 'Mar', uptime: 99.8, accuracy: 98.7, dataPoints: 61000 },
  { month: 'Apr', uptime: 99.9, accuracy: 99.1, dataPoints: 68000 },
  { month: 'May', uptime: 99.7, accuracy: 98.9, dataPoints: 72000 },
  { month: 'Jun', uptime: 99.95, accuracy: 99.3, dataPoints: 79000 },
];

const sensorTypeData = [
  { name: 'Soil Moisture', value: 35, color: '#3b82f6' },
  { name: 'Temperature', value: 25, color: '#ef4444' },
  { name: 'pH Sensors', value: 15, color: '#10b981' },
  { name: 'Humidity', value: 12, color: '#06b6d4' },
  { name: 'Nutrient', value: 8, color: '#8b5cf6' },
  { name: 'Other', value: 5, color: '#64748b' },
];

const networkStats = [
  { protocol: 'LoRaWAN', devices: 4, successRate: 95.2, dataVolume: '45.2 GB' },
  { protocol: 'WiFi', devices: 3, successRate: 98.7, dataVolume: '28.7 GB' },
  { protocol: 'Bluetooth', devices: 1, successRate: 92.3, dataVolume: '5.1 GB' },
];

export default function SensorAnalytics() {
  return (
    <main className="min-h-screen bg-black pt-20">
      <Navbar />
      <DashboardAnimatedObjects />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          
          {/* Header */}
          <section className="text-center space-y-6">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Sensor Analytics
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive analytics and performance insights from your IoT sensor network. 
              Monitor trends, optimize performance, and make data-driven decisions.
            </p>
            <div className="flex justify-center gap-6 pt-6">
              <div className="flex items-center gap-3 text-sm bg-green-900/50 text-green-300 px-4 py-2 rounded-full border border-green-700/50">
                <Database className="w-4 h-4" />
                512K+ Data Points Analyzed
              </div>
              <div className="flex items-center gap-3 text-sm bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full border border-blue-700/50">
                <TrendingUp className="w-4 h-4" />
                99.8% System Accuracy
              </div>
              <div className="flex items-center gap-3 text-sm bg-purple-900/50 text-purple-300 px-4 py-2 rounded-full border border-purple-700/50">
                <Clock className="w-4 h-4" />
                Real-time Monitoring
              </div>
            </div>
          </section>

          {/* Performance Overview */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8">Performance Overview</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Uptime & Accuracy Trends</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.95)', 
                        border: '1px solid #10b981',
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                    />
                    <Bar dataKey="dataPoints" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Data Points" />
                    <Line type="monotone" dataKey="uptime" stroke="#10b981" strokeWidth={3} dot={{ r: 6 }} name="Uptime %" />
                    <Line type="monotone" dataKey="accuracy" stroke="#f59e0b" strokeWidth={3} dot={{ r: 6 }} name="Accuracy %" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Sensor Type Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={sensorTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {sensorTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.95)', 
                        border: '1px solid #10b981',
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </section>

          {/* Network Analytics */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-8">Network Analytics</h2>
            <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                {networkStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{stat.protocol}</div>
                    <div className="text-gray-400 mb-4">{stat.devices} devices</div>
                    <div className="text-green-400 text-2xl font-bold mb-1">{stat.successRate}%</div>
                    <div className="text-gray-500 text-sm">Success Rate</div>
                    <div className="text-blue-400 text-lg font-semibold mt-2">{stat.dataVolume}</div>
                    <div className="text-gray-500 text-sm">Data Volume</div>
                  </div>
                ))}
              </div>
              
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={networkStats}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="protocol" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.95)', 
                      border: '1px solid #10b981',
                      borderRadius: '8px',
                      color: 'white'
                    }} 
                  />
                  <Bar dataKey="successRate" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Additional comprehensive analytics sections would continue... */}

        </div>
      </div>

      <Footer />
    </main>
  );
}