'use client';

import { Navbar } from '@/components/navbar';
import { DashboardAnimatedObjects } from '@/components/dashboard-animated-objects';
import { Footer } from '@/components/footer';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ScatterChart, Scatter, ComposedChart, Legend } from 'recharts';
import { Droplets, Thermometer, Wind, AlertCircle, TrendingUp, Cloud, Zap, Sun, CloudRain, Sprout, Trees, Circle, Filter, Leaf, Recycle, Gauge, Clock, Calendar, Users, Settings, BarChart3, Activity, Shield, Battery, Wifi, Cpu, Database, Camera, MapPin, Navigation, Satellite, Moon } from 'lucide-react';
import { useState } from 'react';

// All your original data sets
const sensorData = [
  { time: '00:00', moisture: 65, pH: 7.2, temp: 22, humidity: 72, light: 10, co2: 420 },
  { time: '02:00', moisture: 64, pH: 7.1, temp: 21, humidity: 74, light: 8, co2: 425 },
  { time: '04:00', moisture: 62, pH: 7.1, temp: 18, humidity: 78, light: 8, co2: 430 },
  { time: '06:00', moisture: 60, pH: 7.0, temp: 19, humidity: 76, light: 45, co2: 435 },
  { time: '08:00', moisture: 58, pH: 7.0, temp: 24, humidity: 65, light: 85, co2: 440 },
  { time: '10:00', moisture: 56, pH: 7.0, temp: 26, humidity: 60, light: 92, co2: 445 },
  { time: '12:00', moisture: 55, pH: 7.1, temp: 28, humidity: 58, light: 95, co2: 450 },
  { time: '14:00', moisture: 57, pH: 7.1, temp: 27, humidity: 59, light: 88, co2: 445 },
  { time: '16:00', moisture: 60, pH: 7.2, temp: 26, humidity: 62, light: 75, co2: 440 },
  { time: '18:00', moisture: 63, pH: 7.2, temp: 24, humidity: 68, light: 40, co2: 435 },
  { time: '20:00', moisture: 68, pH: 7.1, temp: 24, humidity: 75, light: 25, co2: 430 },
  { time: '22:00', moisture: 66, pH: 7.2, temp: 23, humidity: 73, light: 12, co2: 425 },
];

const cropHealthData = [
  { day: 'Mon', health: 85, growth: 12, pests: 2, diseases: 1, stress: 3 },
  { day: 'Tue', health: 87, growth: 14, pests: 1, diseases: 0, stress: 2 },
  { day: 'Wed', health: 86, growth: 13, pests: 3, diseases: 1, stress: 4 },
  { day: 'Thu', health: 89, growth: 16, pests: 1, diseases: 0, stress: 1 },
  { day: 'Fri', health: 91, growth: 18, pests: 0, diseases: 0, stress: 0 },
  { day: 'Sat', health: 90, growth: 17, pests: 1, diseases: 0, stress: 1 },
  { day: 'Sun', health: 92, growth: 19, pests: 0, diseases: 0, stress: 0 },
];

const weeklyData = [
  { week: 'Week 1', yield: 2200, optimal: 2500, water: 450, energy: 380, cost: 1850 },
  { week: 'Week 2', yield: 2400, optimal: 2500, water: 420, energy: 395, cost: 1920 },
  { week: 'Week 3', yield: 2600, optimal: 2500, water: 480, energy: 410, cost: 1980 },
  { week: 'Week 4', yield: 2800, optimal: 2500, water: 460, energy: 425, cost: 2050 },
  { week: 'Week 5', yield: 3000, optimal: 2500, water: 440, energy: 435, cost: 2100 },
  { week: 'Week 6', yield: 3200, optimal: 2500, water: 430, energy: 440, cost: 2150 },
];

const fieldData = [
  { name: 'Field A', value: 35, crop: 'Wheat', health: 88, yield: 3200, area: 450 },
  { name: 'Field B', value: 30, crop: 'Corn', health: 92, yield: 2800, area: 380 },
  { name: 'Field C', value: 25, crop: 'Soybean', health: 85, yield: 2400, area: 320 },
  { name: 'Field D', value: 10, crop: 'Vegetables', health: 95, yield: 1800, area: 150 },
];

const resourceData = [
  { name: 'Water', usage: 75, capacity: 100, trend: -5 },
  { name: 'Energy', usage: 60, capacity: 100, trend: -3 },
  { name: 'Fertilizer', usage: 45, capacity: 100, trend: +2 },
  { name: 'Labor', usage: 80, capacity: 100, trend: +8 },
  { name: 'Equipment', usage: 65, capacity: 100, trend: -1 },
];

const weatherForecast = [
  { day: 'Today', condition: 'Sunny', high: 28, low: 18, precipitation: 10, wind: 12, humidity: 65 },
  { day: 'Tomorrow', condition: 'Partly Cloudy', high: 26, low: 19, precipitation: 20, wind: 15, humidity: 70 },
  { day: 'Wed', condition: 'Cloudy', high: 24, low: 17, precipitation: 40, wind: 18, humidity: 75 },
  { day: 'Thu', condition: 'Light Rain', high: 22, low: 16, precipitation: 70, wind: 20, humidity: 85 },
  { day: 'Fri', condition: 'Rain', high: 20, low: 15, precipitation: 90, wind: 22, humidity: 90 },
  { day: 'Sat', condition: 'Cloudy', high: 23, low: 16, precipitation: 30, wind: 16, humidity: 75 },
  { day: 'Sun', condition: 'Sunny', high: 25, low: 17, precipitation: 10, wind: 14, humidity: 65 },
];

const pestData = [
  { pest: 'Aphids', count: 12, risk: 'Low', trend: 'decreasing', treatment: 'Neem Oil' },
  { pest: 'Caterpillars', count: 5, risk: 'Very Low', trend: 'stable', treatment: 'BT Spray' },
  { pest: 'Mites', count: 8, risk: 'Low', trend: 'increasing', treatment: 'Sulfur Dust' },
  { pest: 'Beetles', count: 3, risk: 'Very Low', trend: 'stable', treatment: 'Pyrethrin' },
  { pest: 'Whiteflies', count: 15, risk: 'Medium', trend: 'increasing', treatment: 'Insecticidal Soap' },
];

const equipmentData = [
  { name: 'Irrigation System', status: 'Active', efficiency: 92, lastMaintenance: '2024-01-15', nextMaintenance: '2024-02-15' },
  { name: 'Monitoring Drones', status: 'Active', efficiency: 88, lastMaintenance: '2024-01-20', nextMaintenance: '2024-02-20' },
  { name: 'Soil Sensors', status: 'Active', efficiency: 96, lastMaintenance: '2024-01-10', nextMaintenance: '2024-03-10' },
  { name: 'Autonomous Tractors', status: 'Maintenance', efficiency: 75, lastMaintenance: '2024-01-25', nextMaintenance: '2024-02-05' },
  { name: 'Harvesting Robots', status: 'Active', efficiency: 89, lastMaintenance: '2024-01-18', nextMaintenance: '2024-02-18' },
];

const soilNutritionData = [
  { nutrient: 'Nitrogen', value: 75, optimal: 80, unit: 'ppm' },
  { nutrient: 'Phosphorus', value: 65, optimal: 70, unit: 'ppm' },
  { nutrient: 'Potassium', value: 82, optimal: 80, unit: 'ppm' },
  { nutrient: 'Calcium', value: 70, optimal: 75, unit: 'ppm' },
  { nutrient: 'Magnesium', value: 78, optimal: 75, unit: 'ppm' },
  { nutrient: 'Sulfur', value: 72, optimal: 70, unit: 'ppm' },
];

const financialData = [
  { month: 'Jan', revenue: 45000, cost: 32000, profit: 13000 },
  { month: 'Feb', revenue: 48000, cost: 33500, profit: 14500 },
  { month: 'Mar', revenue: 52000, cost: 35000, profit: 17000 },
  { month: 'Apr', revenue: 55000, cost: 36500, profit: 18500 },
  { month: 'May', revenue: 58000, cost: 38000, profit: 20000 },
  { month: 'Jun', revenue: 62000, cost: 39500, profit: 22500 },
];

const irrigationSchedule = [
  { zone: 'A1', crop: 'Wheat', duration: '45 min', frequency: '2x daily', status: 'Completed' },
  { zone: 'B2', crop: 'Corn', duration: '30 min', frequency: '1x daily', status: 'In Progress' },
  { zone: 'C3', crop: 'Soybean', duration: '25 min', frequency: '1x daily', status: 'Scheduled' },
  { zone: 'D4', crop: 'Vegetables', duration: '15 min', frequency: '3x daily', status: 'Scheduled' },
];

const COLORS = ['#10b981', '#f59e0b', '#ef4444', '#3b82f6', '#8b5cf6', '#ec4899'];

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Theme configuration - NO BACKGROUND COLORS HERE
  const getThemeClasses = (isDark: boolean) => ({
    card: isDark 
      ? 'bg-gray-800/50 backdrop-blur-lg border border-gray-700/50' 
      : 'bg-white/80 backdrop-blur-lg border border-gray-200/50',
    text: {
      primary: isDark ? 'text-white' : 'text-gray-900',
      secondary: isDark ? 'text-gray-300' : 'text-gray-700',
      muted: isDark ? 'text-gray-400' : 'text-gray-600',
    },
    hover: isDark 
      ? 'hover:border-green-500/30' 
      : 'hover:border-green-400/50'
  });

  const theme = getThemeClasses(darkMode);

  return (
    <div className="min-h-screen">
      <main className="min-h-screen pt-20 relative">
        <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
        
        {/* Theme Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className={`fixed top-24 right-8 z-50 p-3 rounded-full backdrop-blur-lg border transition-all duration-300 shadow-lg hover:scale-110 ${
            darkMode 
              ? 'bg-gray-800/50 border-gray-700/50 text-yellow-400 hover:bg-gray-700/50' 
              : 'bg-white/80 border-gray-300/50 text-gray-700 hover:bg-white'
          }`}
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>

        {/* Animated Background - NO extra background colors */}
        <DashboardAnimatedObjects darkMode={darkMode} />
        
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="space-y-12">
            {/* Header Section */}
            <section className="text-center space-y-6">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Sakhl-Agri Intelligence
              </h1>
              <p className={`text-xl ${theme.text.secondary} max-w-4xl mx-auto leading-relaxed`}>
                Advanced precision agriculture platform with real-time IoT monitoring, 
                AI-powered insights, and comprehensive farm management solutions.
              </p>
              <div className="flex justify-center gap-6 pt-6">
                <div className={`flex items-center gap-3 text-sm px-4 py-2 rounded-full ${
                  darkMode 
                    ? 'bg-green-900/50 text-green-300 border border-green-700/50' 
                    : 'bg-green-100 text-green-700 border border-green-200'
                }`}>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  48 Systems Operational
                </div>
                <div className={`flex items-center gap-3 text-sm px-4 py-2 rounded-full ${
                  darkMode 
                    ? 'bg-blue-900/50 text-blue-300 border border-blue-700/50' 
                    : 'bg-blue-100 text-blue-700 border border-blue-200'
                }`}>
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  126 Sensors Active
                </div>
                <div className={`flex items-center gap-3 text-sm px-4 py-2 rounded-full ${
                  darkMode 
                    ? 'bg-purple-900/50 text-purple-300 border border-purple-700/50' 
                    : 'bg-purple-100 text-purple-700 border border-purple-200'
                }`}>
                  <Clock className="w-4 h-4" />
                  Last Updated: Just now
                </div>
              </div>
            </section>

            {/* Executive Summary */}
            <section className="grid xl:grid-cols-4 gap-8">
              {[
                {
                  label: 'Total Farm Area',
                  value: '1,250 ha',
                  change: '+5.2%',
                  icon: <MapPin className="w-8 h-8" />,
                  description: 'Active cultivation',
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  label: 'Current Production',
                  value: '28.5K kg',
                  change: '+12.8%',
                  icon: <Activity className="w-8 h-8" />,
                  description: 'This month yield',
                  color: 'from-emerald-500 to-green-500'
                },
                {
                  label: 'Water Efficiency',
                  value: '87.5%',
                  change: '+3.1%',
                  icon: <Droplets className="w-8 h-8" />,
                  description: 'Optimized usage',
                  color: 'from-cyan-500 to-blue-500'
                },
                {
                  label: 'Revenue Growth',
                  value: '24.3%',
                  change: '+8.7%',
                  icon: <TrendingUp className="w-8 h-8" />,
                  description: 'Quarterly increase',
                  color: 'from-purple-500 to-pink-500'
                },
              ].map((metric, i) => (
                <div key={i} className={`${theme.card} rounded-2xl p-8 space-y-6 transition-all duration-300 ${theme.hover} hover:shadow-2xl ${darkMode ? 'hover:shadow-green-500/10' : 'hover:shadow-green-500/5'}`}>
                  <div className="flex items-center justify-between">
                    <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                      {metric.icon}
                    </div>
                    <span className={`text-sm font-bold px-4 py-2 rounded-full ${
                      metric.change.startsWith('+') 
                        ? darkMode 
                          ? 'bg-green-900/50 text-green-300 border border-green-700/50' 
                          : 'bg-green-100 text-green-700 border border-green-200'
                        : darkMode
                          ? 'bg-red-900/50 text-red-300 border border-red-700/50'
                          : 'bg-red-100 text-red-700 border border-red-200'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className={`${theme.text.muted} text-lg font-medium`}>{metric.label}</p>
                    <p className={`text-3xl font-bold ${theme.text.primary}`}>{metric.value}</p>
                    <p className={`${darkMode ? 'text-gray-500' : 'text-gray-600'} text-sm`}>{metric.description}</p>
                  </div>
                </div>
              ))}
            </section>

            {/* Real-time Environmental Monitoring */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className={`text-3xl font-bold ${theme.text.primary}`}>Environmental Monitoring</h2>
                <div className={`flex items-center gap-4 ${theme.text.muted}`}>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">Live Data</span>
                  </div>
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">Updated every 30s</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-6 gap-6">
                {[
                  {
                    label: 'Soil Moisture',
                    value: '65.2%',
                    icon: <Droplets className="w-6 h-6" />,
                    status: 'Optimal',
                    trend: 'stable',
                    color: 'from-blue-500 to-cyan-500',
                    unit: 'VWC'
                  },
                  {
                    label: 'Temperature',
                    value: '26.4°C',
                    icon: <Thermometer className="w-6 h-6" />,
                    status: 'Ideal',
                    trend: 'rising',
                    color: 'from-orange-500 to-red-500',
                    unit: 'Ambient'
                  },
                  {
                    label: 'Humidity',
                    value: '71.8%',
                    icon: <Cloud className="w-6 h-6" />,
                    status: 'Good',
                    trend: 'stable',
                    color: 'from-cyan-500 to-blue-500',
                    unit: 'RH'
                  },
                  {
                    label: 'pH Level',
                    value: '7.2',
                    icon: <Filter className="w-6 h-6" />,
                    status: 'Normal',
                    trend: 'stable',
                    color: 'from-green-500 to-emerald-500',
                    unit: 'Scale'
                  },
                  {
                    label: 'Light Intensity',
                    value: '85.3%',
                    icon: <Sun className="w-6 h-6" />,
                    status: 'High',
                    trend: 'peak',
                    color: 'from-yellow-500 to-amber-500',
                    unit: 'PAR'
                  },
                  {
                    label: 'CO2 Levels',
                    value: '442 ppm',
                    icon: <Circle className="w-6 h-6" />,
                    status: 'Normal',
                    trend: 'stable',
                    color: 'from-gray-500 to-gray-700',
                    unit: 'PPM'
                  },
                ].map((sensor, i) => (
                  <div key={i} className={`${theme.card} rounded-xl p-6 space-y-4 transition-all duration-300 group ${theme.hover}`}>
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 bg-gradient-to-br ${sensor.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        {sensor.icon}
                      </div>
                      <div className="text-right">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${
                          darkMode 
                            ? 'bg-green-900/50 text-green-300 border-green-700/50' 
                            : 'bg-green-100 text-green-700 border-green-200'
                        }`}>
                          {sensor.status}
                        </span>
                        <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-600'} mt-1 capitalize`}>{sensor.trend}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className={`${theme.text.muted} text-sm font-medium`}>{sensor.label}</p>
                      <div className="flex items-baseline gap-2">
                        <p className={`text-2xl font-bold ${theme.text.primary}`}>{sensor.value}</p>
                        <p className={`${darkMode ? 'text-gray-500' : 'text-gray-600'} text-xs`}>{sensor.unit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Advanced Analytics Dashboard */}
            <section className="grid xl:grid-cols-2 gap-8">
              {/* Multi-sensor Comprehensive Analysis */}
              <div className={`${theme.card} rounded-2xl p-8`}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className={`text-2xl font-bold ${theme.text.primary}`}>Multi-Sensor Comprehensive Analysis</h2>
                  <Settings className={`w-5 h-5 ${theme.text.muted}`} />
                </div>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={sensorData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                    <XAxis dataKey="time" stroke={darkMode ? "#9CA3AF" : "#6b7280"} />
                    <YAxis stroke={darkMode ? "#9CA3AF" : "#6b7280"} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
                        border: '1px solid #10b981',
                        borderRadius: '8px',
                        color: darkMode ? 'white' : 'black'
                      }} 
                    />
                    <Legend />
                    <Area type="monotone" dataKey="moisture" fill="url(#colorMoisture)" stroke="#10b981" strokeWidth={2} fillOpacity={0.3} name="Soil Moisture" />
                    <Line type="monotone" dataKey="temp" stroke="#f59e0b" strokeWidth={2} dot={false} name="Temperature" />
                    <Line type="monotone" dataKey="humidity" stroke="#3b82f6" strokeWidth={2} dot={false} name="Humidity" />
                    <defs>
                      <linearGradient id="colorMoisture" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              {/* Soil Nutrition Radar Analysis */}
              <div className={`${theme.card} rounded-2xl p-8`}>
                <h2 className={`text-2xl font-bold ${theme.text.primary} mb-8`}>Soil Nutrition Comprehensive Analysis</h2>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart data={soilNutritionData}>
                    <PolarGrid stroke={darkMode ? "#374151" : "#e5e7eb"} />
                    <PolarAngleAxis dataKey="nutrient" stroke={darkMode ? "#9CA3AF" : "#6b7280"} />
                    <PolarRadiusAxis stroke={darkMode ? "#9CA3AF" : "#6b7280"} />
                    <Radar name="Current Levels" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                    <Radar name="Optimal Levels" dataKey="optimal" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
                        border: '1px solid #10b981',
                        borderRadius: '8px',
                        color: darkMode ? 'white' : 'black'
                      }} 
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </section>

            {/* Continue with all other sections... */}
            {/* Crop Health & Field Management */}
            <section className="grid xl:grid-cols-2 gap-8">
              {/* Crop Health Detailed Metrics */}
              <div className={`${theme.card} rounded-2xl p-8`}>
                <h2 className={`text-2xl font-bold ${theme.text.primary} mb-8`}>Crop Health Detailed Metrics</h2>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={cropHealthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                    <XAxis dataKey="day" stroke={darkMode ? "#9CA3AF" : "#6b7280"} />
                    <YAxis stroke={darkMode ? "#9CA3AF" : "#6b7280"} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
                        border: '1px solid #10b981',
                        borderRadius: '8px',
                        color: darkMode ? 'white' : 'black'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="health" fill="#10b981" radius={[4, 4, 0, 0]} name="Health Index" />
                    <Bar dataKey="growth" fill="#f59e0b" radius={[4, 4, 0, 0]} name="Growth Rate" />
                    <Bar dataKey="pests" fill="#ef4444" radius={[4, 4, 0, 0]} name="Pest Count" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Field Distribution & Performance */}
              <div className={`${theme.card} rounded-2xl p-8`}>
                <h2 className={`text-2xl font-bold ${theme.text.primary} mb-8`}>Field Distribution & Performance</h2>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={fieldData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={120}
                      innerRadius={60}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {fieldData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
                        border: '1px solid #10b981',
                        borderRadius: '8px',
                        color: darkMode ? 'white' : 'black'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {fieldData.map((field, index) => (
                    <div key={index} className={`${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'} rounded-lg p-4`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[index] }}></div>
                        <span className={`font-semibold ${theme.text.primary}`}>{field.name}</span>
                      </div>
                      <div className={`text-sm ${theme.text.secondary} space-y-1`}>
                        <div>Crop: {field.crop}</div>
                        <div>Health: {field.health}%</div>
                        <div>Yield: {field.yield} kg</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Resource Management & Optimization */}
            <section>
              <h2 className={`text-3xl font-bold ${theme.text.primary} mb-8`}>Resource Management & Optimization</h2>
              <div className="grid xl:grid-cols-2 gap-8">
                {/* Resource Utilization */}
                <div className={`${theme.card} rounded-2xl p-8`}>
                  <h3 className={`text-xl font-bold ${theme.text.primary} mb-6`}>Resource Utilization Analytics</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={resourceData}>
                      <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                      <XAxis dataKey="name" stroke={darkMode ? "#9CA3AF" : "#6b7280"} />
                      <YAxis stroke={darkMode ? "#9CA3AF" : "#6b7280"} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
                          border: '1px solid #10b981',
                          borderRadius: '8px',
                          color: darkMode ? 'white' : 'black'
                        }} 
                      />
                      <Bar dataKey="usage" fill="#10b981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Equipment Monitoring Dashboard */}
                <div className="space-y-6">
                  <h3 className={`text-xl font-bold ${theme.text.primary}`}>Equipment Monitoring Dashboard</h3>
                  {equipmentData.map((equipment, index) => (
                    <div key={index} className={`${theme.card} rounded-xl p-6 transition-all duration-300 ${theme.hover}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            equipment.status === 'Active' 
                              ? darkMode 
                                ? 'bg-green-900/50 text-green-400 border border-green-700/50' 
                                : 'bg-green-100 text-green-600 border border-green-200'
                              : darkMode
                                ? 'bg-yellow-900/50 text-yellow-400 border border-yellow-700/50'
                                : 'bg-yellow-100 text-yellow-600 border border-yellow-200'
                          }`}>
                            {equipment.status === 'Active' ? <Gauge className="w-6 h-6" /> : <Settings className="w-6 h-6" />}
                          </div>
                          <div>
                            <p className={`font-semibold ${theme.text.primary}`}>{equipment.name}</p>
                            <p className={`text-sm ${
                              equipment.status === 'Active' 
                                ? darkMode ? 'text-green-400' : 'text-green-600'
                                : darkMode ? 'text-yellow-400' : 'text-yellow-600'
                            }`}>
                              {equipment.status}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-2xl font-bold ${theme.text.primary}`}>{equipment.efficiency}%</p>
                          <p className={`text-sm ${theme.text.muted}`}>Efficiency</p>
                          <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-600'} mt-1`}>Next: {equipment.nextMaintenance}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Weather Intelligence & Forecasting */}
            <section>
              <h2 className={`text-3xl font-bold ${theme.text.primary} mb-8`}>Weather Intelligence & Forecasting</h2>
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Current Weather Conditions */}
                <div className={`${theme.card} rounded-2xl p-6 lg:col-span-1`}>
                  <div className="flex items-center gap-4 mb-6">
                    <Sun className="w-10 h-10 text-yellow-400" />
                    <div>
                      <p className={`${theme.text.muted} text-sm`}>Current</p>
                      <p className={`text-xl font-bold ${theme.text.primary}`}>Sunny, 26°C</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className={`flex justify-between ${theme.text.secondary}`}>
                      <span>Humidity</span>
                      <span className="font-semibold">72%</span>
                    </div>
                    <div className={`flex justify-between ${theme.text.secondary}`}>
                      <span>Wind Speed</span>
                      <span className="font-semibold">12 km/h</span>
                    </div>
                    <div className={`flex justify-between ${theme.text.secondary}`}>
                      <span>UV Index</span>
                      <span className="font-semibold">Moderate</span>
                    </div>
                    <div className={`flex justify-between ${theme.text.secondary}`}>
                      <span>Pressure</span>
                      <span className="font-semibold">1013 hPa</span>
                    </div>
                  </div>
                </div>

                {/* 7-Day Extended Forecast */}
                <div className={`${theme.card} rounded-2xl p-6 lg:col-span-3`}>
                  <h3 className={`text-lg font-bold ${theme.text.primary} mb-6`}>7-Day Extended Forecast</h3>
                  <div className="grid grid-cols-7 gap-2">
                    {weatherForecast.map((day, index) => (
                      <div key={index} className={`text-center ${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'} rounded-lg p-3 ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200'} transition-colors duration-300`}>
                        <p className={`font-semibold ${theme.text.primary} mb-2`}>{day.day}</p>
                        <div className="text-2xl mb-2 text-yellow-400">
                          {day.condition.includes('Rain') ? <CloudRain /> : 
                           day.condition.includes('Cloud') ? <Cloud /> : <Sun />}
                        </div>
                        <div className="space-y-1">
                          <p className={`font-semibold ${theme.text.primary}`}>{day.high}°</p>
                          <p className={`${theme.text.muted} text-sm`}>{day.low}°</p>
                          <p className="text-blue-400 text-sm">{day.precipitation}%</p>
                          <p className={`${darkMode ? 'text-gray-500' : 'text-gray-600'} text-xs`}>{day.wind} km/h</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Pest & Disease Management */}
            <section className="grid xl:grid-cols-2 gap-8">
              {/* Pest Monitoring Center */}
              <div className={`${theme.card} rounded-2xl p-8`}>
                <h2 className={`text-2xl font-bold ${theme.text.primary} mb-6`}>Pest Monitoring Center</h2>
                <div className="space-y-4">
                  {pestData.map((pest, index) => (
                    <div key={index} className={`${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'} rounded-xl p-4 ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200'} transition-colors duration-300`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`font-semibold ${theme.text.primary} text-lg`}>{pest.pest}</p>
                          <p className={`${theme.text.muted} text-sm`}>Detected: {pest.count} | Trend: {pest.trend}</p>
                          <p className={`${darkMode ? 'text-gray-500' : 'text-gray-600'} text-xs mt-1`}>Treatment: {pest.treatment}</p>
                        </div>
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          pest.risk === 'Low' 
                            ? darkMode 
                              ? 'bg-green-900/50 text-green-300 border border-green-700/50' 
                              : 'bg-green-100 text-green-700 border border-green-200'
                            : pest.risk === 'Very Low' 
                              ? darkMode
                                ? 'bg-blue-900/50 text-blue-300 border border-blue-700/50'
                                : 'bg-blue-100 text-blue-700 border border-blue-200'
                              : darkMode
                                ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-700/50'
                                : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                        }`}>
                          {pest.risk} Risk
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Yield Optimization Analytics */}
              <div className={`${theme.card} rounded-2xl p-8`}>
                <h2 className={`text-2xl font-bold ${theme.text.primary} mb-6`}>Yield Optimization Analytics</h2>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                    <XAxis dataKey="week" stroke={darkMode ? "#9CA3AF" : "#6b7280"} />
                    <YAxis stroke={darkMode ? "#9CA3AF" : "#6b7280"} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
                        border: '1px solid #10b981',
                        borderRadius: '8px',
                        color: darkMode ? 'white' : 'black'
                      }} 
                    />
                    <Line type="monotone" dataKey="yield" stroke="#10b981" strokeWidth={3} dot={{ r: 6 }} name="Actual Yield" />
                    <Line type="monotone" dataKey="optimal" stroke="#60a5fa" strokeWidth={2} strokeDasharray="5 5" name="Optimal Yield" />
                    <Line type="monotone" dataKey="cost" stroke="#f59e0b" strokeWidth={2} dot={{ r: 4 }} name="Production Cost" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </section>

            {/* Advanced Alerts & AI Recommendations */}
            <section className="grid xl:grid-cols-2 gap-8">
              <div className={`${theme.card} rounded-2xl p-8`}>
                <div className="flex items-center gap-3 mb-8">
                  <AlertCircle className="w-8 h-8 text-yellow-500" />
                  <h2 className={`text-2xl font-bold ${theme.text.primary}`}>Smart Alerts & AI Recommendations</h2>
                </div>
                <div className="space-y-6">
                  {[
                    { 
                      type: 'irrigation', 
                      priority: 'high',
                      title: 'Irrigation Adjustment Needed',
                      message: 'Field B requires reduced watering by 15% based on soil moisture trends and weather forecast',
                      action: 'Adjust Schedule',
                      icon: <Droplets className="w-6 h-6" />,
                      time: '2 hours ago'
                    },
                    { 
                      type: 'nutrition', 
                      priority: 'medium',
                      title: 'Nutrient Balance Alert',
                      message: 'Nitrogen levels trending below optimal range. Consider supplemental fertilization in next 48 hours',
                      action: 'Review Plan',
                      icon: <Filter className="w-6 h-6" />,
                      time: '5 hours ago'
                    },
                    { 
                      type: 'pest', 
                      priority: 'low',
                      title: 'Preventive Pest Control',
                      message: 'Favorable conditions for aphid development detected in Field C. Recommend preventive treatment',
                      action: 'Monitor Closely',
                      icon: <Sprout className="w-6 h-6" />,
                      time: '1 day ago'
                    },
                  ].map((alert, i) => (
                    <div key={i} className={`p-6 rounded-xl border-l-4 ${
                      alert.priority === 'high' 
                        ? darkMode 
                          ? 'border-red-500 bg-red-900/20' 
                          : 'border-red-500 bg-red-100/50'
                        : alert.priority === 'medium' 
                          ? darkMode
                            ? 'border-yellow-500 bg-yellow-900/20'
                            : 'border-yellow-500 bg-yellow-100/50'
                          : darkMode
                            ? 'border-green-500 bg-green-900/20'
                            : 'border-green-500 bg-green-100/50'
                    } hover:scale-105 transition-transform duration-300`}>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${
                          alert.priority === 'high' 
                            ? darkMode 
                              ? 'bg-red-500/20 text-red-400' 
                              : 'bg-red-100 text-red-600'
                            : alert.priority === 'medium' 
                              ? darkMode
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-yellow-100 text-yellow-600'
                              : darkMode
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-green-100 text-green-600'
                        }`}>
                          {alert.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className={`font-bold ${theme.text.primary} text-lg`}>{alert.title}</h4>
                            <span className={`${theme.text.muted} text-sm`}>{alert.time}</span>
                          </div>
                          <p className={`${theme.text.secondary} mb-4 leading-relaxed`}>{alert.message}</p>
                          <button className={`px-6 py-2 rounded-lg font-semibold text-sm ${
                            alert.priority === 'high' 
                              ? 'bg-red-500 hover:bg-red-600 text-white' 
                              : alert.priority === 'medium' 
                                ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                                : 'bg-green-500 hover:bg-green-600 text-white'
                          } transition-colors duration-300`}>
                            {alert.action}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Performance Analytics Dashboard */}
              <div className={`${theme.card} rounded-2xl p-8`}>
                <h2 className={`text-2xl font-bold ${theme.text.primary} mb-8`}>Performance Analytics Dashboard</h2>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    { label: 'Sensor Uptime', value: '99.8%', trend: '+0.2%', icon: '📡', color: 'from-green-500 to-emerald-500' },
                    { label: 'Data Accuracy', value: '98.5%', trend: '+1.1%', icon: '✓', color: 'from-blue-500 to-cyan-500' },
                    { label: 'Alerts Accuracy', value: '94.2%', trend: '+2.3%', icon: '🔔', color: 'from-purple-500 to-pink-500' },
                    { label: 'Yield Prediction', value: '96.8%', trend: '+3.5%', icon: '📊', color: 'from-orange-500 to-red-500' },
                  ].map((metric, i) => (
                    <div key={i} className={`${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'} rounded-xl p-6 text-center space-y-3 ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200'} transition-colors duration-300`}>
                      <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center text-white text-xl mx-auto`}>
                        {metric.icon}
                      </div>
                      <p className={`${theme.text.muted} text-sm font-medium`}>{metric.label}</p>
                      <p className={`text-2xl font-bold ${theme.text.primary}`}>{metric.value}</p>
                      <p className="text-green-400 text-sm font-semibold">{metric.trend}</p>
                    </div>
                  ))}
                </div>
                
                {/* Additional Performance Metrics */}
                <div className={`grid grid-cols-3 gap-4 pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  {[
                    { label: 'Water Saved', value: '12,500L', icon: <Droplets className="w-5 h-5" />, change: '+8%' },
                    { label: 'Energy Saved', value: '450kWh', icon: <Zap className="w-5 h-5" />, change: '+5%' },
                    { label: 'Yield Increased', value: '+15.2%', icon: <TrendingUp className="w-5 h-5" />, change: '+3.1%' },
                  ].map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="flex justify-center mb-2 text-green-400">
                        {metric.icon}
                      </div>
                      <p className={`text-xs ${theme.text.muted} mb-1`}>{metric.label}</p>
                      <p className={`font-bold ${theme.text.primary} text-lg`}>{metric.value}</p>
                      <p className="text-green-400 text-xs font-semibold">{metric.change}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Financial Analytics & ROI */}
            <section>
              <h2 className={`text-3xl font-bold ${theme.text.primary} mb-8`}>Financial Analytics & ROI Tracking</h2>
              <div className={`${theme.card} rounded-2xl p-8`}>
                <ResponsiveContainer width="100%" height={400}>
                  <ComposedChart data={financialData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#e5e7eb"} />
                    <XAxis dataKey="month" stroke={darkMode ? "#9CA3AF" : "#6b7280"} />
                    <YAxis stroke={darkMode ? "#9CA3AF" : "#6b7280"} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: darkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
                        border: '1px solid #10b981',
                        borderRadius: '8px',
                        color: darkMode ? 'white' : 'black'
                      }} 
                    />
                    <Legend />
                    <Bar dataKey="revenue" fill="#10b981" radius={[4, 4, 0, 0]} name="Revenue" />
                    <Bar dataKey="cost" fill="#ef4444" radius={[4, 4, 0, 0]} name="Cost" />
                    <Line type="monotone" dataKey="profit" stroke="#f59e0b" strokeWidth={3} dot={{ r: 6 }} name="Profit" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </section>

            {/* Irrigation Management */}
            <section>
              <h2 className={`text-3xl font-bold ${theme.text.primary} mb-8`}>Smart Irrigation Management</h2>
              <div className={`${theme.card} rounded-2xl p-8`}>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {irrigationSchedule.map((schedule, index) => (
                    <div key={index} className={`${darkMode ? 'bg-gray-700/30' : 'bg-gray-100'} rounded-xl p-6 ${darkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-200'} transition-colors duration-300`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className={`font-bold ${theme.text.primary} text-lg`}>{schedule.zone}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          schedule.status === 'Completed' 
                            ? darkMode 
                              ? 'bg-green-900/50 text-green-300 border border-green-700/50' 
                              : 'bg-green-100 text-green-700 border border-green-200'
                            : schedule.status === 'In Progress' 
                              ? darkMode
                                ? 'bg-blue-900/50 text-blue-300 border border-blue-700/50'
                                : 'bg-blue-100 text-blue-700 border border-blue-200'
                              : darkMode
                                ? 'bg-gray-700 text-gray-300 border border-gray-600'
                                : 'bg-gray-200 text-gray-700 border border-gray-300'
                        }`}>
                          {schedule.status}
                        </span>
                      </div>
                      <div className={`space-y-2 text-sm ${theme.text.secondary}`}>
                        <div className="flex justify-between">
                          <span>Crop:</span>
                          <span className="font-semibold">{schedule.crop}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span className="font-semibold">{schedule.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Frequency:</span>
                          <span className="font-semibold">{schedule.frequency}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Sustainability & Environmental Impact */}
            <section>
              <h2 className={`text-3xl font-bold ${theme.text.primary} mb-8`}>Sustainability & Environmental Impact</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    label: 'Carbon Footprint Reduction',
                    value: '28.5 tons',
                    description: 'CO2 equivalent saved this month through optimized operations',
                    icon: <Leaf className="w-8 h-8" />,
                    color: 'from-green-500 to-emerald-500',
                    impact: 'High'
                  },
                  {
                    label: 'Water Conservation',
                    value: '35.2%',
                    description: 'More efficient usage compared to traditional farming methods',
                    icon: <Droplets className="w-8 h-8" />,
                    color: 'from-blue-500 to-cyan-500',
                    impact: 'Medium'
                  },
                  {
                    label: 'Soil Health Improvement',
                    value: '+22.8%',
                    description: 'Increase in organic matter and soil biodiversity',
                    icon: <Recycle className="w-8 h-8" />,
                    color: 'from-emerald-500 to-green-500',
                    impact: 'High'
                  },
                ].map((metric, i) => (
                  <div key={i} className={`${theme.card} rounded-2xl p-8 text-center space-y-6 transition-all duration-300 ${theme.hover}`}>
                    <div className={`w-20 h-20 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center text-white mx-auto shadow-lg`}>
                      {metric.icon}
                    </div>
                    <div className="space-y-3">
                      <p className={`text-lg font-bold ${theme.text.primary}`}>{metric.value}</p>
                      <p className={`${theme.text.muted} font-medium`}>{metric.label}</p>
                      <p className={`${darkMode ? 'text-gray-500' : 'text-gray-600'} text-sm leading-relaxed`}>{metric.description}</p>
                      <div className={`inline-flex px-4 py-2 rounded-full text-sm font-semibold ${
                        metric.impact === 'High' 
                          ? darkMode 
                            ? 'bg-green-900/50 text-green-300 border border-green-700/50' 
                            : 'bg-green-100 text-green-700 border border-green-200'
                          : darkMode
                            ? 'bg-blue-900/50 text-blue-300 border border-blue-700/50'
                            : 'bg-blue-100 text-blue-700 border border-blue-200'
                      }`}>
                        {metric.impact} Impact
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Advanced Technology Stack */}
            <section>
              <h2 className={`text-3xl font-bold ${theme.text.primary} mb-8`}>Advanced Technology Stack</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'IoT Sensors', count: '126', status: 'Active', icon: <Activity className="w-8 h-8" /> },
                  { name: 'AI Algorithms', count: '18', status: 'Running', icon: <Cpu className="w-8 h-8" /> },
                  { name: 'Satellite Imaging', count: '24/7', status: 'Monitoring', icon: <Satellite className="w-8 h-8" /> },
                  { name: 'Data Analytics', count: '98.5%', status: 'Accuracy', icon: <BarChart3 className="w-8 h-8" /> },
                ].map((tech, i) => (
                  <div key={i} className={`${theme.card} rounded-xl p-6 text-center space-y-4 transition-all duration-300 hover:border-purple-500/30`}>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white mx-auto">
                      {tech.icon}
                    </div>
                    <div>
                      <p className={`font-bold ${theme.text.primary} text-lg`}>{tech.name}</p>
                      <p className="text-2xl font-bold text-purple-400">{tech.count}</p>
                      <p className={`${theme.text.muted} text-sm`}>{tech.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* System Health & Security */}
            <section>
              <h2 className={`text-3xl font-bold ${theme.text.primary} mb-8`}>System Health & Security</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { metric: 'Network Uptime', value: '99.95%', status: 'Excellent', icon: <Wifi className="w-6 h-6" /> },
                  { metric: 'Data Security', value: '100%', status: 'Secure', icon: <Shield className="w-6 h-6" /> },
                  { metric: 'Backup Systems', value: 'Active', status: 'Running', icon: <Database className="w-6 h-6" /> },
                  { metric: 'Power Backup', value: '48h', status: 'Ready', icon: <Battery className="w-6 h-6" /> },
                ].map((system, i) => (
                  <div key={i} className={`${theme.card} rounded-xl p-6`}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white">
                        {system.icon}
                      </div>
                      <div>
                        <p className={`${theme.text.muted} text-sm`}>{system.metric}</p>
                        <p className={`text-xl font-bold ${theme.text.primary}`}>{system.value}</p>
                        <p className="text-green-400 text-sm font-semibold">{system.status}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <Footer darkMode={darkMode} />
      </main>
    </div>
  );
}