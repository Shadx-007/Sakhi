'use client';

import { Navbar } from '@/components/navbar';
import { DashboardAnimatedObjects } from '@/components/dashboard-animated-objects';
import { Footer } from '@/components/footer';
import { useParams } from 'next/navigation';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Droplets, Thermometer, Wind, Zap, Activity, Battery, Wifi, Calendar, Clock, MapPin, Gauge, Database, Cpu, Settings, Download, ArrowLeft, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

const sensorDataHistory = [
  { time: '00:00', value: 64, optimalMin: 60, optimalMax: 70 },
  { time: '02:00', value: 65, optimalMin: 60, optimalMax: 70 },
  { time: '04:00', value: 63, optimalMin: 60, optimalMax: 70 },
  { time: '06:00', value: 62, optimalMin: 60, optimalMax: 70 },
  { time: '08:00', value: 61, optimalMin: 60, optimalMax: 70 },
  { time: '10:00', value: 64, optimalMin: 60, optimalMax: 70 },
  { time: '12:00', value: 66, optimalMin: 60, optimalMax: 70 },
  { time: '14:00', value: 67, optimalMin: 60, optimalMax: 70 },
  { time: '16:00', value: 65, optimalMin: 60, optimalMax: 70 },
  { time: '18:00', value: 64, optimalMin: 60, optimalMax: 70 },
  { time: '20:00', value: 66, optimalMin: 60, optimalMax: 70 },
  { time: '22:00', value: 65, optimalMin: 60, optimalMax: 70 },
];

export default function SensorDetails() {
  const params = useParams();
  const sensorId = params.id as string;

  // Mock sensor data - in real app, fetch based on sensorId
  const sensor = {
    id: sensorId,
    name: 'Soil Moisture Sensor',
    field: 'Field A - North Section',
    reading: '65.2%',
    optimal: '60-70%',
    icon: <Droplets className="w-12 h-12" />,
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
  };

  const alerts = [
    { type: 'info', message: 'Sensor operating within optimal range', time: '2 hours ago' },
    { type: 'warning', message: 'Battery level below 90%', time: '1 day ago' },
    { type: 'success', message: 'Firmware updated successfully', time: '3 days ago' },
  ];

  return (
    <main className="min-h-screen bg-black pt-20">
      <Navbar />
      <DashboardAnimatedObjects />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300">
                <ArrowLeft className="w-5 h-5" />
                Back to Sensors
              </button>
              <div>
                <h1 className="text-4xl font-bold text-white">{sensor.name}</h1>
                <p className="text-gray-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {sensor.field} • ID: {sensor.id}
                </p>
              </div>
            </div>
            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300">
              <Download className="w-4 h-4" />
              Export Data
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Current Reading Card */}
              <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-20 h-20 bg-gradient-to-br ${sensor.color} rounded-2xl flex items-center justify-center text-white`}>
                      {sensor.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Current Reading</h2>
                      <p className="text-gray-400">Last updated: {sensor.lastUpdate}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold bg-green-900/50 text-green-300 px-3 py-1 rounded-full border border-green-700/50">
                    {sensor.status}
                  </span>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-2">{sensor.reading}</div>
                  <p className="text-gray-400">Optimal Range: {sensor.optimal}</p>
                </div>
              </div>

              {/* Historical Data Chart */}
              <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6">Historical Data (24 Hours)</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={sensorDataHistory}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.95)', 
                        border: '1px solid #10b981',
                        borderRadius: '8px',
                        color: 'white'
                      }} 
                    />
                    <Area type="monotone" dataKey="value" stroke="#10b981" fill="url(#colorValue)" />
                    <Line type="monotone" dataKey="optimalMin" stroke="#ef4444" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="optimalMax" stroke="#ef4444" strokeDasharray="5 5" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Recent Alerts */}
              <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  Recent Alerts & Events
                </h3>
                <div className="space-y-4">
                  {alerts.map((alert, index) => (
                    <div key={index} className={`p-4 rounded-lg border-l-4 ${
                      alert.type === 'info' ? 'border-blue-500 bg-blue-900/20' :
                      alert.type === 'warning' ? 'border-yellow-500 bg-yellow-900/20' :
                      'border-green-500 bg-green-900/20'
                    }`}>
                      <div className="flex items-center justify-between">
                        <p className="text-white">{alert.message}</p>
                        <span className="text-gray-400 text-sm">{alert.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Sensor Details */}
              <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Sensor Details</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Cpu className="w-4 h-4" />, label: 'Type', value: sensor.type },
                    { icon: <Gauge className="w-4 h-4" />, label: 'Range', value: sensor.range },
                    { icon: <Database className="w-4 h-4" />, label: 'Resolution', value: sensor.resolution },
                    { icon: <Settings className="w-4 h-4" />, label: 'Manufacturer', value: sensor.manufacturer },
                    { icon: <Wifi className="w-4 h-4" />, label: 'Model', value: sensor.model },
                    { icon: <Calendar className="w-4 h-4" />, label: 'Protocol', value: sensor.commProtocol },
                  ].map((detail, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-gray-400">{detail.icon}</div>
                        <span className="text-gray-400">{detail.label}</span>
                      </div>
                      <span className="text-white text-sm font-mono">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Indicators */}
              <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Status Indicators</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Battery className="w-4 h-4" />, label: 'Battery', value: sensor.battery, status: 'good' },
                    { icon: <Wifi className="w-4 h-4" />, label: 'Signal', value: sensor.signal, status: 'good' },
                    { icon: <Gauge className="w-4 h-4" />, label: 'Accuracy', value: sensor.accuracy, status: 'good' },
                    { icon: <Clock className="w-4 h-4" />, label: 'Uptime', value: '99.8%', status: 'good' },
                  ].map((status, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-gray-400">{status.icon}</div>
                        <span className="text-gray-400">{status.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-semibold">{status.value}</span>
                        <div className={`w-2 h-2 rounded-full ${
                          status.status === 'good' ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Maintenance Info */}
              <div className="bg-gray-900/80 backdrop-blur-lg border border-gray-800 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Maintenance</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Installed</span>
                    <span className="text-white">{sensor.installDate}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Next Calibration</span>
                    <span className="text-yellow-400">{sensor.nextCalibration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Firmware</span>
                    <span className="text-blue-400">{sensor.firmware}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Data Points</span>
                    <span className="text-green-400">{sensor.dataPoints}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}