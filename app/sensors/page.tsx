'use client';

import { Navbar } from '@/components/navbar';
import { DashboardAnimatedObjects } from '@/components/dashboard-animated-objects';
import { Footer } from '@/components/footer';
import { Droplets, Thermometer, Wind, Zap, Activity, AlertTriangle, Settings, Power, Battery, Wifi, Signal, RefreshCw, Download, Upload, Calendar, Clock, MapPin, Gauge, Database, Cpu, Satellite, BarChart3, Shield, Eye, RotateCcw, Wrench, Tool, CheckCircle, XCircle, AlertCircle, Info, Sun, CloudRain, Cloud, Trees, Sprout, Recycle, Leaf, ArrowRight, Play, Pause, StopCircle, History, Filter, Search, Plus, Minus, Edit, Trash2, Save, UploadCloud, DownloadCloud, WifiOff, BatteryWarning, Phone, Mail } from 'lucide-react';

export default function Sensors() {
  const sensors = [
    {
      id: 'SM-001',
      name: 'Soil Moisture Sensor',
      field: 'Field A - North Section',
      reading: '65.2%',
      optimal: '60-70%',
      icon: <Droplets className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      status: 'Active',
      battery: '87%',
      signal: 'Strong',
      lastUpdate: '2 minutes ago',
      firmware: 'v2.1.4',
      accuracy: '98.5%',
      installDate: '2024-01-15',
      nextCalibration: '2024-04-15',
      type: 'Capacitive',
      range: '0-100% VWC',
      resolution: '0.1%',
      manufacturer: 'AgriTech Solutions',
      model: 'ATS-M300',
      commProtocol: 'LoRaWAN',
      updateInterval: '5 minutes',
      dataPoints: '45,230'
    },
    {
      id: 'TS-002',
      name: 'Temperature Sensor',
      field: 'Field A - North Section',
      reading: '26.4°C',
      optimal: '20-30°C',
      icon: <Thermometer className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      status: 'Active',
      battery: '92%',
      signal: 'Strong',
      lastUpdate: '1 minute ago',
      firmware: 'v1.8.2',
      accuracy: '99.1%',
      installDate: '2024-01-20',
      nextCalibration: '2024-04-20',
      type: 'Digital Thermistor',
      range: '-40°C to 85°C',
      resolution: '0.1°C',
      manufacturer: 'ClimateSense Inc',
      model: 'CS-T450',
      commProtocol: 'WiFi',
      updateInterval: '2 minutes',
      dataPoints: '89,450'
    },
    {
      id: 'PH-003',
      name: 'pH Level Sensor',
      field: 'Field B - South Section',
      reading: '7.2',
      optimal: '6.5-7.5',
      icon: <Wind className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      status: 'Active',
      battery: '78%',
      signal: 'Strong',
      lastUpdate: '3 minutes ago',
      firmware: 'v3.0.1',
      accuracy: '97.8%',
      installDate: '2024-02-10',
      nextCalibration: '2024-05-10',
      type: 'Electrochemical',
      range: '0-14 pH',
      resolution: '0.01 pH',
      manufacturer: 'HydroLabs',
      model: 'HL-PH200',
      commProtocol: 'LoRaWAN',
      updateInterval: '10 minutes',
      dataPoints: '23,780'
    },
    {
      id: 'HS-004',
      name: 'Humidity Sensor',
      field: 'Field B - South Section',
      reading: '71.8%',
      optimal: '60-80%',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      status: 'Active',
      battery: '85%',
      signal: 'Strong',
      lastUpdate: '2 minutes ago',
      firmware: 'v2.5.3',
      accuracy: '98.2%',
      installDate: '2024-01-25',
      nextCalibration: '2024-04-25',
      type: 'Capacitive Polymer',
      range: '0-100% RH',
      resolution: '0.1% RH',
      manufacturer: 'AtmosTech',
      model: 'AT-H150',
      commProtocol: 'Bluetooth',
      updateInterval: '5 minutes',
      dataPoints: '56,890'
    },
    {
      id: 'NS-005',
      name: 'Nitrogen Level Sensor',
      field: 'Field A - North Section',
      reading: '65 ppm',
      optimal: '60-80 ppm',
      icon: <Activity className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      status: 'Active',
      battery: '81%',
      signal: 'Strong',
      lastUpdate: '15 minutes ago',
      firmware: 'v4.2.0',
      accuracy: '96.5%',
      installDate: '2024-03-05',
      nextCalibration: '2024-06-05',
      type: 'Optical Spectroscopy',
      range: '0-200 ppm',
      resolution: '1 ppm',
      manufacturer: 'NutriSense',
      model: 'NS-N500',
      commProtocol: 'LoRaWAN',
      updateInterval: '15 minutes',
      dataPoints: '12,340'
    },
    {
      id: 'PS-006',
      name: 'Phosphorus Sensor',
      field: 'Field B - South Section',
      reading: '45 ppm',
      optimal: '40-60 ppm',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      status: 'Active',
      battery: '88%',
      signal: 'Strong',
      lastUpdate: '15 minutes ago',
      firmware: 'v4.1.8',
      accuracy: '95.8%',
      installDate: '2024-03-12',
      nextCalibration: '2024-06-12',
      type: 'Ion-Selective Electrode',
      range: '0-100 ppm',
      resolution: '0.5 ppm',
      manufacturer: 'SoilLabs',
      model: 'SL-P300',
      commProtocol: 'WiFi',
      updateInterval: '15 minutes',
      dataPoints: '10,560'
    },
    {
      id: 'LS-007',
      name: 'Light Intensity Sensor',
      field: 'Field C - East Section',
      reading: '85000 lux',
      optimal: '50000-100000 lux',
      icon: <Sun className="w-8 h-8" />,
      color: 'from-yellow-500 to-amber-500',
      status: 'Active',
      battery: '94%',
      signal: 'Medium',
      lastUpdate: '1 minute ago',
      firmware: 'v1.2.3',
      accuracy: '98.9%',
      installDate: '2024-02-28',
      nextCalibration: '2024-05-28',
      type: 'Photodiode Array',
      range: '0-200000 lux',
      resolution: '100 lux',
      manufacturer: 'SolarMetrics',
      model: 'SM-L250',
      commProtocol: 'LoRaWAN',
      updateInterval: '1 minute',
      dataPoints: '120,450'
    },
    {
      id: 'WS-008',
      name: 'Wind Speed Sensor',
      field: 'Field C - East Section',
      reading: '12.5 km/h',
      optimal: '5-25 km/h',
      icon: <Wind className="w-8 h-8" />,
      color: 'from-gray-500 to-gray-700',
      status: 'Active',
      battery: '76%',
      signal: 'Medium',
      lastUpdate: '30 seconds ago',
      firmware: 'v2.0.5',
      accuracy: '97.2%',
      installDate: '2024-02-15',
      nextCalibration: '2024-05-15',
      type: 'Ultrasonic Anemometer',
      range: '0-150 km/h',
      resolution: '0.1 km/h',
      manufacturer: 'WeatherTech Pro',
      model: 'WT-W100',
      commProtocol: 'WiFi',
      updateInterval: '30 seconds',
      dataPoints: '178,230'
    }
  ];

  const sensorGroups = [
    {
      name: 'Field A - North Section',
      count: '3 Sensors',
      status: 'Optimal',
      area: '50 hectares',
      crop: 'Wheat',
      sensors: ['SM-001', 'TS-002', 'NS-005']
    },
    {
      name: 'Field B - South Section',
      count: '3 Sensors',
      status: 'Optimal',
      area: '45 hectares',
      crop: 'Corn',
      sensors: ['PH-003', 'HS-004', 'PS-006']
    },
    {
      name: 'Field C - East Section',
      count: '2 Sensors',
      status: 'Good',
      area: '30 hectares',
      crop: 'Soybean',
      sensors: ['LS-007', 'WS-008']
    },
    {
      name: 'Field D - West Section',
      count: '0 Sensors',
      status: 'Needs Setup',
      area: '35 hectares',
      crop: 'Vegetables',
      sensors: []
    }
  ];

  const maintenanceSchedule = [
    {
      task: 'Replace Batteries',
      sensors: 'pH Sensor (PH-003)',
      dueDate: '2024-04-10',
      priority: 'High',
      status: 'Pending',
      estimatedDuration: '30 minutes',
      toolsRequired: ['Battery CR2032', 'Screwdriver']
    },
    {
      task: 'Calibrate Moisture Sensors',
      sensors: 'All soil moisture sensors',
      dueDate: '2024-04-15',
      priority: 'Medium',
      status: 'Scheduled',
      estimatedDuration: '2 hours',
      toolsRequired: ['Calibration Kit', 'Multimeter']
    },
    {
      task: 'Firmware Update',
      sensors: 'All sensors v2.x',
      dueDate: '2024-04-20',
      priority: 'Medium',
      status: 'Scheduled',
      estimatedDuration: '1 hour',
      toolsRequired: ['Update Tool', 'Laptop']
    },
    {
      task: 'Signal Strength Check',
      sensors: 'Field C sensors',
      dueDate: '2024-04-05',
      priority: 'Low',
      status: 'Completed',
      estimatedDuration: '45 minutes',
      toolsRequired: ['Signal Analyzer']
    }
  ];

  const sensorHealthMetrics = [
    { metric: 'Overall System Health', value: '98%', status: 'Excellent', trend: '+2%' },
    { metric: 'Data Accuracy', value: '97.8%', status: 'Good', trend: '+1.5%' },
    { metric: 'Uptime This Month', value: '99.95%', status: 'Excellent', trend: '+0.1%' },
    { metric: 'Battery Health', value: '85.2%', status: 'Good', trend: '-3%' },
    { metric: 'Signal Quality', value: '94.7%', status: 'Good', trend: '+2.3%' },
    { metric: 'Data Completeness', value: '99.2%', status: 'Excellent', trend: '+0.8%' }
  ];

  return (
    <main className="min-h-screen bg-background dark:bg-background pt-20">
      <Navbar />
      <DashboardAnimatedObjects />

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">

          {/* Header Section */}
          <section className="text-center space-y-6">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              IoT Sensor Network
            </h1>
            <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              Comprehensive monitoring and management of your agricultural sensor ecosystem. 
              Real-time data, advanced analytics, and proactive maintenance.
            </p>
            <div className="flex justify-center gap-6 pt-6">
              <div className="flex items-center gap-3 text-sm bg-green-900/50 text-green-300 px-4 py-2 rounded-full border border-green-700/50">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                {sensors.length} Active Sensors
              </div>
              <div className="flex items-center gap-3 text-sm bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full border border-blue-700/50">
                <Database className="w-4 h-4" />
                512K+ Data Points
              </div>
              <div className="flex items-center gap-3 text-sm bg-purple-900/50 text-purple-300 px-4 py-2 rounded-full border border-purple-700/50">
                <Clock className="w-4 h-4" />
                99.95% Uptime
              </div>
            </div>
          </section>

          {/* System Health Overview */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">System Health Overview</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sensorHealthMetrics.map((metric, index) => (
                <div key={index} className="glass dark:glass-dark border border-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">{metric.metric}</h3>
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                      metric.status === 'Excellent' ? 'bg-green-900/50 text-green-300 border border-green-700/50' :
                      'bg-blue-900/50 text-blue-300 border border-blue-700/50'
                    }`}>
                      {metric.status}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                    <span className={`text-sm font-semibold ${
                      metric.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {metric.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Field Groups Overview */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Field Groups & Sensor Distribution</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sensorGroups.map((group, index) => (
                <div key={index} className="glass dark:glass-dark border border-border rounded-2xl p-6 hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">{group.name}</h3>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      group.status === 'Optimal' ? 'bg-green-900/50 text-green-300 border border-green-700/50' :
                      group.status === 'Good' ? 'bg-blue-900/50 text-blue-300 border border-blue-700/50' :
                      'bg-yellow-900/50 text-yellow-300 border border-yellow-700/50'
                    }`}>
                      {group.status}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">Sensors:</span>
                      <span className="text-foreground font-semibold">{group.count}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">Area:</span>
                      <span className="text-foreground font-semibold">{group.area}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">Crop:</span>
                      <span className="text-foreground font-semibold">{group.crop}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Main Sensor Grid */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">All Connected Sensors</h2>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg transition-colors duration-300">
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>
                <button className="flex items-center gap-2 border border-accent text-accent hover:bg-accent/10 px-4 py-2 rounded-lg transition-colors duration-300">
                  <Download className="w-4 h-4" />
                  Export Data
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {sensors.map((sensor, i) => (
                <div key={i} className="glass dark:glass-dark border border-border rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 group">
                  {/* Sensor Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${sensor.color} rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                      {sensor.icon}
                    </div>
                    <div className="text-right space-y-2">
                      <span className="text-xs font-semibold bg-green-900/50 text-green-300 px-3 py-1 rounded-full border border-green-700/50">
                        {sensor.status}
                      </span>
                      <p className="text-xs text-foreground/50">{sensor.id}</p>
                    </div>
                  </div>

                  {/* Sensor Info */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">{sensor.name}</h3>
                  <p className="text-foreground/70 text-sm mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {sensor.field}
                  </p>

                  {/* Reading */}
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-foreground mb-1">{sensor.reading}</p>
                    <p className="text-foreground/50 text-sm">Optimal: {sensor.optimal}</p>
                  </div>

                  {/* Technical Details */}
                  <div className="space-y-4 pt-6 border-t border-border">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Battery className="w-4 h-4 text-foreground/70" />
                        <span className="text-foreground/70">Battery:</span>
                        <span className="text-foreground font-semibold ml-auto">{sensor.battery}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wifi className="w-4 h-4 text-foreground/70" />
                        <span className="text-foreground/70">Signal:</span>
                        <span className="text-foreground font-semibold ml-auto">{sensor.signal}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-foreground/70" />
                        <span className="text-foreground/70">Updated:</span>
                        <span className="text-foreground font-semibold ml-auto">{sensor.lastUpdate}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-foreground/70" />
                        <span className="text-foreground/70">Firmware:</span>
                        <span className="text-foreground font-semibold ml-auto">{sensor.firmware}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-foreground/70" />
                        <span className="text-foreground/70">Accuracy:</span>
                        <span className="text-foreground font-semibold ml-auto">{sensor.accuracy}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-foreground/70" />
                        <span className="text-foreground/70">Data Points:</span>
                        <span className="text-foreground font-semibold ml-auto">{sensor.dataPoints}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-6 mt-6 border-t border-border">
                    <button className="flex-1 bg-secondary hover:bg-secondary/80 text-foreground py-2 px-3 rounded-lg text-sm transition-colors duration-300 flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      Details
                    </button>
                    <button className="flex-1 bg-secondary hover:bg-secondary/80 text-foreground py-2 px-3 rounded-lg text-sm transition-colors duration-300 flex items-center justify-center gap-2">
                      <Settings className="w-4 h-4" />
                      Configure
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Advanced Sensor Analytics */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Advanced Sensor Analytics</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Performance Metrics */}
              <div className="glass dark:glass-dark border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Performance Metrics</h3>
                <div className="space-y-6">
                  {[
                    { metric: 'Data Transmission Rate', value: '98.7%', trend: '+1.2%' },
                    { metric: 'Sensor Response Time', value: '0.8s', trend: '-0.2s' },
                    { metric: 'Data Quality Index', value: '96.4%', trend: '+0.8%' },
                    { metric: 'Network Latency', value: '120ms', trend: '-15ms' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-foreground/70">{item.metric}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-foreground font-semibold">{item.value}</span>
                        <span className={`text-xs font-semibold ${
                          item.trend.startsWith('+') || (item.trend.endsWith('s') && !item.trend.startsWith('-')) ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {item.trend}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Communication Statistics */}
              <div className="glass dark:glass-dark border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Communication Statistics</h3>
                <div className="space-y-6">
                  {[
                    { protocol: 'LoRaWAN', devices: '4', dataRate: '85.2%' },
                    { protocol: 'WiFi', devices: '3', dataRate: '98.1%' },
                    { protocol: 'Bluetooth', devices: '1', dataRate: '92.3%' },
                    { protocol: 'Cellular', devices: '0', dataRate: '0%' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <span className="text-foreground font-semibold">{item.protocol}</span>
                        <span className="text-foreground/50 text-sm ml-2">({item.devices} devices)</span>
                      </div>
                      <span className="text-green-400 font-semibold">{item.dataRate}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Maintenance & Management */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Wrench className="w-8 h-8 text-yellow-500" />
              Maintenance & Management
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Maintenance Schedule */}
              <div className="glass dark:glass-dark border border-border rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-foreground">Maintenance Schedule</h3>
                  <Calendar className="w-6 h-6 text-foreground/70" />
                </div>
                <div className="space-y-4">
                  {maintenanceSchedule.map((item, i) => (
                    <div key={i} className={`p-4 rounded-lg border-l-4 ${
                      item.status === 'Completed' ? 'border-green-500 bg-green-900/20' :
                      item.status === 'Scheduled' ? 'border-blue-500 bg-blue-900/20' :
                      'border-yellow-500 bg-yellow-900/20'
                    }`}>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-foreground">{item.task}</p>
                          <p className="text-sm text-foreground/70">{item.sensors}</p>
                        </div>
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${
                          item.priority === 'High' ? 'bg-red-900/50 text-red-300' :
                          item.priority === 'Medium' ? 'bg-yellow-900/50 text-yellow-300' :
                          'bg-blue-900/50 text-blue-300'
                        }`}>
                          {item.priority}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground/50">Due: {item.dueDate}</span>
                        <span className="text-foreground/50">{item.estimatedDuration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass dark:glass-dark border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <RefreshCw className="w-5 h-5" />, label: 'Sync All Sensors', color: 'bg-blue-500 hover:bg-blue-600' },
                    { icon: <DownloadCloud className="w-5 h-5" />, label: 'Backup Data', color: 'bg-green-500 hover:bg-green-600' },
                    { icon: <UploadCloud className="w-5 h-5" />, label: 'Update Firmware', color: 'bg-purple-500 hover:bg-purple-600' },
                    { icon: <RotateCcw className="w-5 h-5" />, label: 'Reboot System', color: 'bg-orange-500 hover:bg-orange-600' },
                    { icon: <BarChart3 className="w-5 h-5" />, label: 'Run Diagnostics', color: 'bg-cyan-500 hover:bg-cyan-600' },
                    { icon: <Shield className="w-5 h-5" />, label: 'Security Scan', color: 'bg-red-500 hover:bg-red-600' },
                  ].map((action, index) => (
                    <button key={index} className={`${action.color} text-white p-4 rounded-lg transition-colors duration-300 flex flex-col items-center gap-2`}>
                      {action.icon}
                      <span className="text-sm font-medium">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Sensor Specifications */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Detailed Sensor Specifications</h2>
            <div className="glass dark:glass-dark border border-border rounded-2xl p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 text-foreground/70 font-semibold">Sensor ID</th>
                      <th className="text-left py-4 px-4 text-foreground/70 font-semibold">Type</th>
                      <th className="text-left py-4 px-4 text-foreground/70 font-semibold">Range</th>
                      <th className="text-left py-4 px-4 text-foreground/70 font-semibold">Resolution</th>
                      <th className="text-left py-4 px-4 text-foreground/70 font-semibold">Manufacturer</th>
                      <th className="text-left py-4 px-4 text-foreground/70 font-semibold">Protocol</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sensors.map((sensor) => (
                      <tr key={sensor.id} className="border-b border-border/50 hover:bg-secondary/30 transition-colors duration-300">
                        <td className="py-4 px-4 text-foreground font-mono">{sensor.id}</td>
                        <td className="py-4 px-4 text-foreground/70">{sensor.type}</td>
                        <td className="py-4 px-4 text-foreground/70">{sensor.range}</td>
                        <td className="py-4 px-4 text-foreground/70">{sensor.resolution}</td>
                        <td className="py-4 px-4 text-foreground/70">{sensor.manufacturer}</td>
                        <td className="py-4 px-4 text-foreground/70">{sensor.commProtocol}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Troubleshooting & Support */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
              Troubleshooting & Support
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Common Issues */}
              <div className="glass dark:glass-dark border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Common Issues & Solutions</h3>
                <div className="space-y-6">
                  {[
                    {
                      issue: 'Sensor Offline',
                      symptoms: ['No data transmission', 'LED indicator off'],
                      solutions: ['Check power source', 'Verify network connection', 'Restart sensor'],
                      severity: 'High'
                    },
                    {
                      issue: 'Inaccurate Readings',
                      symptoms: ['Data outside expected range', 'Sudden spikes/drops'],
                      solutions: ['Calibrate sensor', 'Check for environmental factors', 'Verify placement'],
                      severity: 'Medium'
                    },
                    {
                      issue: 'Battery Drain',
                      symptoms: ['Rapid battery depletion', 'Frequent low battery alerts'],
                      solutions: ['Reduce update frequency', 'Check for firmware updates', 'Inspect for damage'],
                      severity: 'Medium'
                    },
                    {
                      issue: 'Weak Signal',
                      symptoms: ['Intermittent data', 'High latency'],
                      solutions: ['Reposition sensor', 'Add signal repeater', 'Check antenna connection'],
                      severity: 'Low'
                    }
                  ].map((item, index) => (
                    <div key={index} className="border border-border rounded-lg p-4 hover:border-yellow-500/50 transition-colors duration-300">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-foreground">{item.issue}</h4>
                        <span className={`text-xs font-semibold px-2 py-1 rounded ${
                          item.severity === 'High' ? 'bg-red-900/50 text-red-300' :
                          item.severity === 'Medium' ? 'bg-yellow-900/50 text-yellow-300' :
                          'bg-blue-900/50 text-blue-300'
                        }`}>
                          {item.severity}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm text-foreground/70">Symptoms: </span>
                          <span className="text-sm text-foreground/70">{item.symptoms.join(', ')}</span>
                        </div>
                        <div>
                          <span className="text-sm text-foreground/70">Solutions: </span>
                          <span className="text-sm text-foreground/70">{item.solutions.join(' • ')}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Support Resources */}
              <div className="space-y-8">
                {/* Documentation */}
                <div className="glass dark:glass-dark border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Documentation & Resources</h3>
                  <div className="space-y-3">
                    {[
                      { name: 'Sensor Installation Guide', type: 'PDF', size: '2.4 MB' },
                      { name: 'Troubleshooting Manual', type: 'PDF', size: '3.1 MB' },
                      { name: 'API Documentation', type: 'Web', size: 'Online' },
                      { name: 'Firmware Update Guide', type: 'Video', size: '15 min' },
                    ].map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors duration-300">
                        <div>
                          <p className="text-foreground font-medium">{doc.name}</p>
                          <p className="text-foreground/50 text-sm">{doc.type} • {doc.size}</p>
                        </div>
                        <Download className="w-5 h-5 text-foreground/50 hover:text-foreground transition-colors duration-300" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Support Contact */}
                <div className="glass dark:glass-dark border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Technical Support</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-foreground font-medium">+1 (555) 123-SENSOR</p>
                        <p className="text-foreground/50 text-sm">24/7 Technical Support</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <div>
                        <p className="text-foreground font-medium">support@sakhl-agri.com</p>
                        <p className="text-foreground/50 text-sm">Email Support</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-yellow-400" />
                      <div>
                        <p className="text-foreground font-medium">Response Time: Under 2 hours</p>
                        <p className="text-foreground/50 text-sm">Average Resolution Time</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* System Configuration */}
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Settings className="w-8 h-8 text-blue-500" />
              System Configuration
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Network Settings */}
              <div className="glass dark:glass-dark border border-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Network Settings</h3>
                <div className="space-y-4">
                  {[
                    { setting: 'Gateway IP', value: '192.168.1.100' },
                    { setting: 'Data Sync Interval', value: '5 minutes' },
                    { setting: 'Cloud Sync', value: 'Enabled' },
                    { setting: 'Local Storage', value: '256 GB' },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-foreground/70">{item.setting}</span>
                      <span className="text-foreground font-mono text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Management */}
              <div className="glass dark:glass-dark border border-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Data Management</h3>
                <div className="space-y-4">
                  {[
                    { setting: 'Retention Period', value: '2 years' },
                    { setting: 'Backup Frequency', value: 'Daily' },
                    { setting: 'Data Compression', value: 'Enabled' },
                    { setting: 'Export Format', value: 'CSV, JSON' },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-foreground/70">{item.setting}</span>
                      <span className="text-foreground font-mono text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Settings */}
              <div className="glass dark:glass-dark border border-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Security Settings</h3>
                <div className="space-y-4">
                  {[
                    { setting: 'Encryption', value: 'AES-256' },
                    { setting: 'Access Control', value: 'Role-based' },
                    { setting: 'Audit Logging', value: 'Enabled' },
                    { setting: 'API Security', value: 'OAuth 2.0' },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-foreground/70">{item.setting}</span>
                      <span className="text-foreground font-mono text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}