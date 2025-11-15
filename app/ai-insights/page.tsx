'use client';

import { Navbar } from '@/components/navbar';
import { AIInsightsAnimatedObjects } from '@/components/ai-insights-animated-objects';
import { Footer } from '@/components/footer';
import { useState, useRef, useEffect } from 'react';
import { Camera, Upload, X, Loader2, AlertTriangle, TrendingUp, Brain, Zap, Target, BarChart3, Shield, Clock, Users, Database, Cpu, Thermometer, Droplets, Leaf, Sprout, CheckCircle, ArrowRight, Cloud, Sun, CloudRain, CloudSnow, Wind, Eye, Calendar, MapPin, Search, ExternalLink, Calculator, ChevronDown, ChevronUp, RefreshCw } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, ComposedChart } from 'recharts';

// Mock data simulating API responses
const mockDiagnosticData = {
  pests: [
    { 
      name: 'Early Blight', 
      confidence: 94.5, 
      severity: 'Medium', 
      spread: 'Localized',
      solution: {
        pesticides: ['Copper-based fungicide', 'Chlorothalonil', 'Mancozeb'],
        organic: ['Neem oil spray', 'Baking soda solution', 'Garlic extract'],
        prevention: ['Crop rotation', 'Proper spacing', 'Remove infected leaves'],
        timing: 'Apply within 48 hours',
        frequency: 'Every 7-10 days'
      }
    },
    { 
      name: 'Powdery Mildew', 
      confidence: 87.2, 
      severity: 'Low', 
      spread: 'Isolated',
      solution: {
        pesticides: ['Sulfur dust', 'Myclobutanil', 'Propiconazole'],
        organic: ['Milk spray', 'Baking soda solution', 'Apple cider vinegar'],
        prevention: ['Reduce humidity', 'Improve air circulation', 'Morning watering'],
        timing: 'Apply immediately',
        frequency: 'Weekly until controlled'
      }
    },
    { 
      name: 'Root Rot', 
      confidence: 76.8, 
      severity: 'High', 
      spread: 'Spreading',
      solution: {
        pesticides: ['Mefenoxam', 'Fosetyl-Al', 'Azoxystrobin'],
        organic: ['Trichoderma harzianum', 'Cinnamon powder', 'Hydrogen peroxide'],
        prevention: ['Improve drainage', 'Avoid overwatering', 'Sterilize soil'],
        timing: 'Apply as soon as detected',
        frequency: 'Every 5-7 days'
      }
    }
  ],
  recommendations: [
    'Apply fungicide within 48 hours',
    'Reduce irrigation frequency',
    'Improve air circulation',
    'Remove infected leaves immediately'
  ]
};

const mockEnvironmentalData = {
  soil: {
    moisture: 65,
    temperature: 25,
    humidity: 68,
    npk: { nitrogen: 75, phosphorus: 45, potassium: 82 },
    healthScore: 88
  },
  yield: {
    predicted: 3150,
    actual: 2920,
    risk: 'Low'
  },
  weather: {
    temperature: 28,
    rainfall: 45,
    humidity: 65,
    trend: 'stable'
  }
};

const mockCropRecommendations = [
  { name: 'Tomatoes', seasonMatch: 'Rabi', envScore: 91, recommendation: 'Optimal' },
  { name: 'Corn', seasonMatch: 'Rabi', envScore: 86, recommendation: 'Recommended' },
  { name: 'Wheat', seasonMatch: 'Rabi', envScore: 78, recommendation: 'Good Fit' },
  { name: 'Soybeans', seasonMatch: 'Rabi', envScore: 87, recommendation: 'Recommended' },
  { name: 'Potatoes', seasonMatch: 'Rabi', envScore: 68, recommendation: 'Moderate' }
];

// New Weather Forecasting Data
const mockWeatherData = {
  current: {
    temperature: 28,
    feelsLike: 30,
    humidity: 65,
    windSpeed: 12,
    pressure: 1013,
    uvIndex: 6,
    condition: 'Partly Cloudy',
    icon: 'partly-cloudy',
    precipitation: 10,
    visibility: 16
  },
  hourly: [
    { time: 'Now', temp: 28, condition: 'partly-cloudy', precipitation: 10 },
    { time: '13:00', temp: 29, condition: 'sunny', precipitation: 5 },
    { time: '14:00', temp: 30, condition: 'sunny', precipitation: 5 },
    { time: '15:00', temp: 31, condition: 'sunny', precipitation: 0 },
    { time: '16:00', temp: 30, condition: 'partly-cloudy', precipitation: 0 },
    { time: '17:00', temp: 29, condition: 'partly-cloudy', precipitation: 0 },
    { time: '18:00', temp: 27, condition: 'cloudy', precipitation: 20 },
    { time: '19:00', temp: 26, condition: 'rain', precipitation: 60 }
  ],
  daily: [
    { day: 'Today', high: 31, low: 24, condition: 'partly-cloudy', precipitation: 20, humidity: 65 },
    { day: 'Wed', high: 29, low: 23, condition: 'rain', precipitation: 80, humidity: 85 },
    { day: 'Thu', high: 27, low: 22, condition: 'rain', precipitation: 70, humidity: 80 },
    { day: 'Fri', high: 28, low: 23, condition: 'cloudy', precipitation: 30, humidity: 70 },
    { day: 'Sat', high: 30, low: 24, condition: 'partly-cloudy', precipitation: 10, humidity: 60 },
    { day: 'Sun', high: 31, low: 25, condition: 'sunny', precipitation: 0, humidity: 55 },
    { day: 'Mon', high: 32, low: 25, condition: 'sunny', precipitation: 0, humidity: 50 }
  ],
  alerts: [
    { type: 'rain', severity: 'moderate', message: 'Heavy rainfall expected Wednesday-Thursday', impact: 'Potential irrigation savings' },
    { type: 'wind', severity: 'low', message: 'Moderate winds expected Friday', impact: 'Good for pollination' }
  ],
  agriculturalIndices: {
    droughtIndex: 0.2,
    growthIndex: 0.8,
    pestRisk: 0.3,
    diseaseRisk: 0.4,
    irrigationNeed: 0.6
  }
};

const weatherIcons = {
  'sunny': Sun,
  'partly-cloudy': Cloud,
  'cloudy': Cloud,
  'rain': CloudRain,
  'snow': CloudSnow
};

export default function AIInsights() {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [diagnosticData, setDiagnosticData] = useState<any>(null);
  const [environmentalData, setEnvironmentalData] = useState(mockEnvironmentalData);
  const [cropRecommendations, setCropRecommendations] = useState(mockCropRecommendations);
  const [weatherData, setWeatherData] = useState(mockWeatherData);
  const [activeTab, setActiveTab] = useState('diagnostics');
  const [selectedDisease, setSelectedDisease] = useState<any>(null);
  const [showSolutionModal, setShowSolutionModal] = useState(false);
  const [showFormula, setShowFormula] = useState(false);
  const [cropInputs, setCropInputs] = useState({
    moisture: '',
    temperature: '',
    humidity: '',
    season: 'Rabi'
  });
  const [calculatedScore, setCalculatedScore] = useState<number | null>(null);
  const cameraRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setEnvironmentalData(prev => ({
        ...prev,
        soil: {
          ...prev.soil,
          moisture: Math.floor(Math.random() * 20) + 60,
          temperature: Math.floor(Math.random() * 5) + 23
        }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      const video = document.createElement('video');
      video.srcObject = stream;
      video.play();

      setTimeout(() => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (context) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          context.drawImage(video, 0, 0);
          setCapturedImage(canvas.toDataURL('image/jpeg'));
          stream.getTracks().forEach(track => track.stop());
          processImage(canvas.toDataURL('image/jpeg'));
        }
      }, 1000);
    } catch (error) {
      console.error('Camera error:', error);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = event.target?.result as string;
        setCapturedImage(imageData);
        processImage(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = async (imageData: string) => {
    setIsProcessing(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setDiagnosticData(mockDiagnosticData);
    } catch (error) {
      console.error('Analysis error:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDiseaseClick = (disease: any) => {
    setSelectedDisease(disease);
    setShowSolutionModal(true);
  };

  const calculateCropScore = (moisture: number, temperature: number, humidity: number, season: string) => {
    const seasonBonus = season === 'Rabi' ? 10 : season === 'Kharif' ? 8 : 5;
    return Math.round((moisture * 0.40 + temperature * 0.35 + humidity * 0.25) * 100 + seasonBonus);
  };

  const handleInputChange = (field: string, value: string) => {
    setCropInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCalculateScore = () => {
    const moisture = parseFloat(cropInputs.moisture);
    const temperature = parseFloat(cropInputs.temperature);
    const humidity = parseFloat(cropInputs.humidity);

    if (isNaN(moisture) || isNaN(temperature) || isNaN(humidity)) {
      alert('Please enter valid numbers for all fields');
      return;
    }

    if (moisture < 0 || moisture > 100) {
      alert('Moisture must be between 0-100%');
      return;
    }

    if (temperature < 0 || temperature > 50) {
      alert('Temperature must be between 0-50°C');
      return;
    }

    if (humidity < 0 || humidity > 100) {
      alert('Humidity must be between 0-100%');
      return;
    }

    const score = calculateCropScore(moisture, temperature, humidity, cropInputs.season);
    setCalculatedScore(score);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'from-green-400 to-green-600';
    if (score >= 80) return 'from-blue-400 to-blue-600';
    if (score >= 70) return 'from-yellow-400 to-yellow-600';
    if (score >= 60) return 'from-orange-400 to-orange-600';
    return 'from-red-400 to-red-600';
  };

  const getScoreText = (score: number) => {
    if (score >= 90) return 'Excellent';
    if (score >= 80) return 'Very Good';
    if (score >= 70) return 'Good';
    if (score >= 60) return 'Fair';
    return 'Poor';
  };

  const WeatherIcon = ({ condition, size = 24 }: { condition: string; size?: number }) => {
    const IconComponent = weatherIcons[condition as keyof typeof weatherIcons] || Cloud;
    return <IconComponent size={size} />;
  };

  return (
    <main className="min-h-screen bg-background dark:bg-background pt-20">
      <Navbar />
      <AIInsightsAnimatedObjects />
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* SECTION 1: Hero Header */}
        <section className="mb-20 text-center space-y-8">
          <div className="space-y-6">
            <h1 className="text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              AI-Powered Agricultural Intelligence
            </h1>
            <p className="text-2xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
              Advanced machine learning, computer vision, and predictive analytics for modern precision agriculture.
            </p>
          </div>
          <div className="flex justify-center gap-6 pt-8">
            <div className="flex items-center gap-3 text-sm bg-green-900/50 text-green-300 px-4 py-2 rounded-full border border-green-700/50">
              <Brain className="w-4 h-4" />
              YOLOv8 Computer Vision
            </div>
            <div className="flex items-center gap-3 text-sm bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full border border-blue-700/50">
              <Zap className="w-4 h-4" />
              Real-time IoT Data
            </div>
            <div className="flex items-center gap-3 text-sm bg-purple-900/50 text-purple-300 px-4 py-2 rounded-full border border-purple-700/50">
              <Target className="w-4 h-4" />
              SmartCropAI Engine
            </div>
          </div>
        </section>

        {/* SECTION 2: Navigation Tabs */}
        <section className="mb-12">
          <div className="flex space-x-8 border-b border-border overflow-x-auto">
            {[
              { id: 'diagnostics', label: '🔍 Real-time Diagnostics', icon: Brain },
              { id: 'weather', label: '🌤️ AI Weather Forecast', icon: Cloud },
              { id: 'environmental', label: '🌡️ Environmental Assessment', icon: Thermometer },
              { id: 'recommendation', label: '🌱 Crop Recommendation', icon: Sprout }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-2 font-semibold border-b-2 transition-colors duration-300 flex items-center gap-3 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-accent text-accent'
                    : 'border-transparent text-foreground/70 hover:text-foreground'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 3: Diagnostics Tab */}
        {activeTab === 'diagnostics' && (
          <section className="space-y-12">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold">🔍 Real-time Crop Diagnostics (YOLOv8)</h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Utilizes computer vision to provide instant diagnosis of pests and diseases
              </p>
            </div>

            <div className="grid xl:grid-cols-2 gap-12">
              {/* Left Column - Image Analysis */}
              <div className="space-y-8">
                {/* Image Analysis Interface */}
                <div className="glass dark:glass-dark p-8 rounded-2xl space-y-6">
                  <h3 className="text-2xl font-semibold flex items-center gap-3">
                    <Camera className="w-6 h-6 text-accent" />
                    Camera Analysis Input
                  </h3>
                  {!capturedImage ? (
                    <div className="space-y-6">
                      <button
                        onClick={handleCamera}
                        className="w-full py-16 border-2 border-dashed border-accent rounded-xl hover:bg-accent/5 transition-all flex flex-col items-center justify-center gap-4 group"
                      >
                        <Camera className="w-16 h-16 text-accent group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-foreground/70 text-lg">Open Camera</span>
                        <span className="text-foreground/50">Point at your crop for instant analysis</span>
                      </button>
                      
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t border-border" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="bg-background dark:bg-background px-2 text-foreground/50">OR</span>
                        </div>
                      </div>

                      <button
                        onClick={() => fileRef.current?.click()}
                        className="w-full py-16 border-2 border-dashed border-accent rounded-xl hover:bg-accent/5 transition-all flex flex-col items-center justify-center gap-4 group"
                      >
                        <Upload className="w-16 h-16 text-accent group-hover:scale-110 transition-transform" />
                        <span className="font-semibold text-foreground/70 text-lg">Upload Image</span>
                        <span className="text-foreground/50">Select from your gallery</span>
                      </button>
                      <input
                        ref={fileRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="relative">
                        <img src={capturedImage || "/placeholder.svg"} alt="Captured" className="w-full rounded-lg object-cover h-64" />
                        <button
                          onClick={() => {
                            setCapturedImage(null);
                            setDiagnosticData(null);
                          }}
                          className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          setCapturedImage(null);
                          setDiagnosticData(null);
                        }}
                        className="w-full py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-all font-semibold"
                      >
                        Analyze Different Image
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - SmartCropAI Model & System Info */}
              <div className="space-y-8">
                {/* SmartCropAI Scoring Model */}
                <div className="glass dark:glass-dark p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <Calculator className="w-6 h-6 text-accent" />
                    SmartCropAI Scoring Model
                  </h3>
                  
                  {/* Input Parameters */}
                  <div className="space-y-4 mb-6">
                    <h4 className="text-lg font-semibold">Input Parameters</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/70">Soil Moisture (%)</label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          placeholder="0-100"
                          value={cropInputs.moisture}
                          onChange={(e) => handleInputChange('moisture', e.target.value)}
                          className="w-full p-3 bg-secondary/50 rounded-lg border border-border focus:border-accent focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/70">Temperature (°C)</label>
                        <input
                          type="number"
                          min="0"
                          max="50"
                          placeholder="0-50"
                          value={cropInputs.temperature}
                          onChange={(e) => handleInputChange('temperature', e.target.value)}
                          className="w-full p-3 bg-secondary/50 rounded-lg border border-border focus:border-accent focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/70">Humidity (%)</label>
                        <input
                          type="number"
                          min="0"
                          max="100"
                          placeholder="0-100"
                          value={cropInputs.humidity}
                          onChange={(e) => handleInputChange('humidity', e.target.value)}
                          className="w-full p-3 bg-secondary/50 rounded-lg border border-border focus:border-accent focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground/70">Season</label>
                        <select
                          value={cropInputs.season}
                          onChange={(e) => handleInputChange('season', e.target.value)}
                          className="w-full p-3 bg-secondary/50 rounded-lg border border-border focus:border-accent focus:outline-none transition-colors"
                        >
                          <option value="Rabi">Rabi</option>
                          <option value="Kharif">Kharif</option>
                          <option value="Zaid">Zaid</option>
                        </select>
                      </div>
                    </div>

                    <button
                      onClick={handleCalculateScore}
                      className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg transition-colors font-semibold mt-4"
                    >
                      Calculate Crop Score
                    </button>
                  </div>

                  {/* Output Score */}
                  {calculatedScore !== null && (
                    <div className={`text-center p-6 bg-gradient-to-br ${getScoreColor(calculatedScore)} rounded-lg mb-4`}>
                      <p className="text-sm text-white/90 mb-2">Crop Suitability Score</p>
                      <p className="text-4xl font-bold text-white">{calculatedScore}/100</p>
                      <p className="text-sm text-white/80 mt-2">
                        {getScoreText(calculatedScore)}
                      </p>
                    </div>
                  )}

                  {/* Expandable Formula Section */}
                  <div className="border-t border-border pt-4">
                    <button
                      onClick={() => setShowFormula(!showFormula)}
                      className="flex items-center justify-between w-full text-left text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors"
                    >
                      <span>View Scoring Formula</span>
                      {showFormula ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                    
                    {showFormula && (
                      <div className="mt-4 space-y-4 p-4 bg-secondary/50 rounded-lg">
                        <div>
                          <h5 className="font-semibold mb-2">Scoring Formula</h5>
                          <div className="bg-black/20 p-3 rounded font-mono text-sm">
                            <p>score = (moisture × 0.40 + </p>
                            <p>       temperature × 0.35 + </p>
                            <p>       humidity × 0.25) × 100 + season_bonus</p>
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold mb-2">Parameter Weights</h5>
                          <div className="space-y-2">
                            {[
                              { parameter: 'Soil Moisture', weight: '40%', importance: 'High' },
                              { parameter: 'Temperature', weight: '35%', importance: 'High' },
                              { parameter: 'Humidity', weight: '25%', importance: 'Medium' },
                              { parameter: 'Season Match', weight: 'Bonus +10', importance: 'Critical' }
                            ].map((item, index) => (
                              <div key={index} className="flex justify-between items-center text-sm">
                                <span className="font-medium">{item.parameter}</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-foreground/70">{item.weight}</span>
                                  <span className={`px-2 py-1 rounded-full text-xs ${
                                    item.importance === 'High' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
                                    item.importance === 'Critical' ? 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300' :
                                    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'
                                  }`}>
                                    {item.importance}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* YOLOv8 System Information */}
                <div className="glass dark:glass-dark p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-accent" />
                    YOLOv8 Diagnostics System
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                      <span className="font-semibold">Model Accuracy</span>
                      <span className="text-green-400 font-bold">96.8%</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                      <span className="font-semibold">Processing Speed</span>
                      <span className="text-blue-400 font-bold">0.8s</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                      <span className="font-semibold">Diseases Detected</span>
                      <span className="text-purple-400 font-bold">500+</span>
                    </div>
                  </div>
                </div>

                {/* Processing State */}
                {isProcessing && (
                  <div className="glass dark:glass-dark p-8 rounded-2xl text-center space-y-4">
                    <Loader2 className="w-12 h-12 text-accent animate-spin mx-auto" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">YOLOv8 Analysis in Progress</h3>
                      <p className="text-foreground/70">Processing image through computer vision models...</p>
                    </div>
                  </div>
                )}

                {/* Results Panel */}
                {diagnosticData && !isProcessing && (
                  <>
                    {/* Active Pest & Disease Alerts */}
                    <div className="glass dark:glass-dark p-8 rounded-2xl">
                      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                        <AlertTriangle className="w-6 h-6 text-yellow-400" />
                        Active Pest & Disease Alerts
                      </h3>
                      <div className="space-y-4">
                        {diagnosticData.pests.map((pest: any, index: number) => (
                          <div 
                            key={index} 
                            onClick={() => handleDiseaseClick(pest)}
                            className="p-4 border border-border rounded-lg hover:border-yellow-400/50 transition-colors duration-300 cursor-pointer hover:shadow-lg"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-semibold text-foreground">{pest.name}</span>
                              <span className="text-green-400 font-bold">{pest.confidence}%</span>
                            </div>
                            <div className="flex gap-6 text-sm text-foreground/70">
                              <span>Severity: 
                                <span className={`ml-1 font-semibold ${
                                  pest.severity === 'High' ? 'text-red-400' :
                                  pest.severity === 'Medium' ? 'text-yellow-400' : 'text-green-400'
                                }`}>
                                  {pest.severity}
                                </span>
                              </span>
                              <span>Spread: 
                                <span className={`ml-1 font-semibold ${
                                  pest.spread === 'Spreading' ? 'text-red-400' :
                                  pest.spread === 'Localized' ? 'text-yellow-400' : 'text-green-400'
                                }`}>
                                  {pest.spread}
                                </span>
                              </span>
                            </div>
                            <div className="mt-2 text-xs text-blue-400 flex items-center gap-1">
                              <ExternalLink className="w-3 h-3" />
                              Click for treatment solutions
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Action Plan */}
                    <div className="glass dark:glass-dark p-8 rounded-2xl">
                      <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-green-400" />
                        Recommended Action Plan
                      </h3>
                      <div className="space-y-3">
                        {diagnosticData.recommendations.map((rec: string, i: number) => (
                          <div key={i} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                              {i + 1}
                            </div>
                            <span className="text-foreground/70">{rec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4: Weather Forecasting Tab */}
        {activeTab === 'weather' && (
          <section className="space-y-12">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold">🌤️ AI Weather Forecasting</h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Advanced weather predictions with agricultural impact analysis
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {/* Current Weather */}
              <div className="glass dark:glass-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-accent" />
                  Current Conditions
                </h3>
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <WeatherIcon condition={weatherData.current.icon} size={64} />
                  </div>
                  <p className="text-4xl font-bold text-accent">{weatherData.current.temperature}°C</p>
                  <p className="text-foreground/70">{weatherData.current.condition}</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="text-center">
                      <Droplets className="w-6 h-6 text-blue-400 mx-auto mb-1" />
                      <p className="text-sm text-foreground/70">Humidity</p>
                      <p className="font-semibold">{weatherData.current.humidity}%</p>
                    </div>
                    <div className="text-center">
                      <Wind className="w-6 h-6 text-green-400 mx-auto mb-1" />
                      <p className="text-sm text-foreground/70">Wind</p>
                      <p className="font-semibold">{weatherData.current.windSpeed} km/h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agricultural Impact */}
              <div className="glass dark:glass-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6">Agricultural Impact</h3>
                <div className="space-y-4">
                  {Object.entries(weatherData.agriculturalIndices).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold capitalize">
                          {key.replace(/([A-Z])/g, ' $1').replace('Index', '')}
                        </span>
                        <span className="text-foreground/70">{Math.round(value * 100)}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            value > 0.7 ? 'bg-red-400' :
                            value > 0.4 ? 'bg-yellow-400' : 'bg-green-400'
                          }`}
                          style={{ width: `${value * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weather Alerts */}
              <div className="glass dark:glass-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-400" />
                  Weather Alerts
                </h3>
                <div className="space-y-4">
                  {weatherData.alerts.map((alert, index) => (
                    <div key={index} className="p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-yellow-400" />
                        <span className="font-semibold capitalize">{alert.type} Alert</span>
                      </div>
                      <p className="text-sm text-foreground/70 mb-2">{alert.message}</p>
                      <p className="text-xs text-green-400">Impact: {alert.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hourly Forecast */}
            <div className="glass dark:glass-dark p-8 rounded-2xl mb-8">
              <h3 className="text-2xl font-semibold mb-6">24-Hour Forecast</h3>
              <div className="flex overflow-x-auto space-x-6 pb-4">
                {weatherData.hourly.map((hour, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2 min-w-[80px]">
                    <span className="text-sm text-foreground/70">{hour.time}</span>
                    <WeatherIcon condition={hour.condition} size={32} />
                    <span className="font-semibold">{hour.temp}°</span>
                    <span className="text-xs text-blue-400">{hour.precipitation}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 7-Day Forecast */}
            <div className="glass dark:glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">7-Day Forecast</h3>
              <div className="space-y-4">
                {weatherData.daily.map((day, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <span className="font-semibold min-w-[60px]">{day.day}</span>
                      <WeatherIcon condition={day.condition} size={24} />
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-foreground/70">{day.low}°</span>
                      <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-red-400"
                          style={{ width: '70%' }}
                        />
                      </div>
                      <span className="font-semibold">{day.high}°</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-blue-400 text-sm">{day.precipitation}%</span>
                      <span className="text-foreground/70 text-sm">{day.humidity}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 5: Environmental Assessment Tab */}
        {activeTab === 'environmental' && (
          <section className="space-y-12">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold">🌡️ Environmental Prediction & Risk Assessment</h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Combines IoT sensor data with ML models to assess current crop health and future risks
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Soil Health NPK Panel */}
              <div className="glass dark:glass-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Leaf className="w-6 h-6 text-accent" />
                  Soil Health NPK Panel
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-secondary/50 rounded-lg">
                      <Droplets className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="text-sm text-foreground/70">Moisture</p>
                      <p className="text-2xl font-bold text-accent">{environmentalData.soil.moisture}%</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/50 rounded-lg">
                      <Thermometer className="w-8 h-8 text-red-400 mx-auto mb-2" />
                      <p className="text-sm text-foreground/70">Temperature</p>
                      <p className="text-2xl font-bold text-accent">{environmentalData.soil.temperature}°C</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Estimated NPK Levels</h4>
                    <div className="space-y-3">
                      {[
                        { nutrient: 'Nitrogen', value: environmentalData.soil.npk.nitrogen, color: 'from-green-400 to-green-600' },
                        { nutrient: 'Phosphorus', value: environmentalData.soil.npk.phosphorus, color: 'from-blue-400 to-blue-600' },
                        { nutrient: 'Potassium', value: environmentalData.soil.npk.potassium, color: 'from-purple-400 to-purple-600' }
                      ].map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-semibold">{item.nutrient}</span>
                            <span className="text-foreground/70">{item.value} ppm</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r ${item.color}`}
                              style={{ width: `${item.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center p-4 bg-gradient-to-br from-green-400 to-green-600 rounded-lg">
                    <p className="text-sm text-white/90">Soil Health Score</p>
                    <p className="text-3xl font-bold text-white">{environmentalData.soil.healthScore}/100</p>
                  </div>
                </div>
              </div>

              {/* Predictive Yield & Risk */}
              <div className="space-y-8">
                <div className="glass dark:glass-dark p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-6">Predictive Yield Risk</h3>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-secondary/50 rounded-lg">
                        <p className="text-sm text-foreground/70">Predicted Yield</p>
                        <p className="text-2xl font-bold text-green-400">{environmentalData.yield.predicted} kg/ha</p>
                      </div>
                      <div className="text-center p-4 bg-secondary/50 rounded-lg">
                        <p className="text-sm text-foreground/70">Actual Yield</p>
                        <p className="text-2xl font-bold text-blue-400">{environmentalData.yield.actual} kg/ha</p>
                      </div>
                    </div>
                    
                    <div className="text-center p-4 bg-secondary/50 rounded-lg">
                      <p className="text-sm text-foreground/70">Current Risk Factor</p>
                      <p className={`text-2xl font-bold ${
                        environmentalData.yield.risk === 'Low' ? 'text-green-400' :
                        environmentalData.yield.risk === 'Medium' ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {environmentalData.yield.risk}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Local Micro Weather Outlook */}
                <div className="glass dark:glass-dark p-8 rounded-2xl">
                  <h3 className="text-2xl font-semibold mb-6">Local Micro Weather Outlook</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-secondary/50 rounded-lg">
                      <Thermometer className="w-6 h-6 text-red-400 mx-auto mb-2" />
                      <p className="text-sm text-foreground/70">Temperature</p>
                      <p className="text-lg font-bold text-accent">{environmentalData.weather.temperature}°C</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/50 rounded-lg">
                      <Droplets className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <p className="text-sm text-foreground/70">Rainfall</p>
                      <p className="text-lg font-bold text-accent">{environmentalData.weather.rainfall}mm</p>
                    </div>
                    <div className="text-center p-4 bg-secondary/50 rounded-lg">
                      <Leaf className="w-6 h-6 text-green-400 mx-auto mb-2" />
                      <p className="text-sm text-foreground/70">Humidity</p>
                      <p className="text-lg font-bold text-accent">{environmentalData.weather.humidity}%</p>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                    <p className="text-sm text-yellow-400 text-center">
                      Fungal Risk: Low | Optimal Growing Conditions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 6: Crop Recommendation Tab */}
        {activeTab === 'recommendation' && (
          <section className="space-y-12">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold">🌱 Crop Suitability Engine (SmartCropAI)</h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Calculates the final score for crop viability based on provided environmental and seasonal parameters
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Input Conditions Display */}
              <div className="glass dark:glass-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6">Input Conditions</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Current Moisture', value: `${environmentalData.soil.moisture}%`, icon: Droplets },
                    { label: 'Current Temperature', value: `${environmentalData.soil.temperature}°C`, icon: Thermometer },
                    { label: 'Current Humidity', value: `${environmentalData.soil.humidity}%`, icon: Leaf },
                    { label: 'Current Season', value: 'November/Rabi', icon: Sprout }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-secondary/50 rounded-lg">
                      <item.icon className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-sm text-foreground/70">{item.label}</p>
                        <p className="font-semibold text-foreground">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Recommendation Table */}
              <div className="lg:col-span-2 glass dark:glass-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6">Top Crop Recommendations</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 text-foreground/60 font-semibold">Crop Name</th>
                        <th className="text-left py-4 px-4 text-foreground/60 font-semibold">Season Match</th>
                        <th className="text-left py-4 px-4 text-foreground/60 font-semibold">Environmental Score</th>
                        <th className="text-left py-4 px-4 text-foreground/60 font-semibold">Recommendation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cropRecommendations.map((crop, index) => (
                        <tr key={index} className="border-b border-border/50 hover:bg-secondary/30 transition-colors duration-300">
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                                crop.recommendation === 'Optimal' ? 'from-green-400 to-green-600' :
                                crop.recommendation === 'Recommended' ? 'from-blue-400 to-blue-600' :
                                'from-yellow-400 to-yellow-600'
                              } flex items-center justify-center text-white font-bold`}>
                                {crop.name.charAt(0)}
                              </div>
                              <span className="font-semibold text-foreground">{crop.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-foreground/70">{crop.seasonMatch}</span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-20 bg-secondary rounded-full h-2">
                                <div 
                                  className="h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600" 
                                  style={{ width: `${crop.envScore}%` }}
                                />
                              </div>
                              <span className="font-semibold text-foreground">{crop.envScore}/100</span>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              crop.recommendation === 'Optimal' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
                              crop.recommendation === 'Recommended' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' :
                              'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300'
                            }`}>
                              {crop.recommendation}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 7: System Architecture Info */}
        <section className="mt-20 glass dark:glass-dark p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-6">System Architecture</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-secondary/50 rounded-lg">
              <Database className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="font-semibold">Node.js Gateway</p>
              <p className="text-sm text-foreground/70">API Orchestration</p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg">
              <Cpu className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="font-semibold">YOLOv8 Microservice</p>
              <p className="text-sm text-foreground/70">Computer Vision</p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg">
              <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="font-semibold">ESP8266 IoT</p>
              <p className="text-sm text-foreground/70">Real-time Sensors</p>
            </div>
            <div className="p-4 bg-secondary/50 rounded-lg">
              <Brain className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="font-semibold">RandomForest ML</p>
              <p className="text-sm text-foreground/70">Predictive Analytics</p>
            </div>
          </div>
        </section>
      </div>

      {/* Disease Solution Modal */}
      {showSolutionModal && selectedDisease && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass dark:glass-dark rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-border">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-foreground">
                  Treatment for {selectedDisease.name}
                </h3>
                <button
                  onClick={() => setShowSolutionModal(false)}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-green-400 font-bold">{selectedDisease.confidence}% Confidence</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedDisease.severity === 'High' ? 'bg-red-100 text-red-800' :
                  selectedDisease.severity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {selectedDisease.severity} Severity
                </span>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Chemical Pesticides */}
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  Recommended Pesticides
                </h4>
                <div className="space-y-2">
                  {selectedDisease.solution.pesticides.map((pesticide: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-red-500/10 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-red-400 flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-foreground/80">{pesticide}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organic Solutions */}
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-green-400" />
                  Organic Alternatives
                </h4>
                <div className="space-y-2">
                  {selectedDisease.solution.organic.map((organic: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-green-500/10 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-green-400 flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-foreground/80">{organic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prevention Measures */}
              <div>
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-blue-400" />
                  Prevention Measures
                </h4>
                <div className="space-y-2">
                  {selectedDisease.solution.prevention.map((prevention: string, index: number) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-blue-400 flex items-center justify-center text-white text-xs font-bold">
                        {index + 1}
                      </div>
                      <span className="text-foreground/80">{prevention}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Application Guidelines */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <Clock className="w-5 h-5 text-purple-400 mb-2" />
                  <p className="text-sm text-foreground/70">Application Timing</p>
                  <p className="font-semibold">{selectedDisease.solution.timing}</p>
                </div>
                <div className="p-4 bg-secondary/50 rounded-lg">
                  <RefreshCw className="w-5 h-5 text-orange-400 mb-2" />
                  <p className="text-sm text-foreground/70">Frequency</p>
                  <p className="font-semibold">{selectedDisease.solution.frequency}</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-border">
              <button
                onClick={() => setShowSolutionModal(false)}
                className="w-full bg-accent hover:bg-accent/90 text-white py-3 rounded-lg transition-colors font-semibold"
              >
                Close Treatment Guide
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}