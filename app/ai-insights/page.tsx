'use client';

import { Navbar } from '@/components/navbar';
import { AIInsightsAnimatedObjects } from '@/components/ai-insights-animated-objects';
import { Footer } from '@/components/footer';
import { useState, useRef } from 'react';
import { Camera, Upload, X, Loader2, Leaf, AlertTriangle, TrendingUp, Brain, Zap, Target, BarChart3, Shield, Clock, Users, Database, Cpu, Satellite, Cloud, Sun, Droplets, Thermometer, Wind, Sprout, Trees, Flower2, Recycle, CheckCircle, XCircle, Play, Pause, StopCircle, Download, Share2, BookOpen, Video, MessageCircle, Phone, Mail, MapPin, Calendar, Eye, Settings, Filter, Search, Plus, Minus, ArrowRight, ArrowLeft, Star, Heart, ThumbsUp, ThumbsDown, Award, Trophy, Crown, Gem, Sparkles, Rocket, Activity, RefreshCw } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ComposedChart, ScatterChart, Scatter, Legend } from 'recharts';

// Extensive data sets
const predictionData = [
  { week: 'Week 1', predicted: 85, actual: 82, optimal: 90 },
  { week: 'Week 2', predicted: 87, actual: 88, optimal: 90 },
  { week: 'Week 3', predicted: 89, actual: 87, optimal: 90 },
  { week: 'Week 4', predicted: 91, actual: 92, optimal: 90 },
  { week: 'Week 5', predicted: 93, actual: 95, optimal: 90 },
  { week: 'Week 6', predicted: 94, actual: 93, optimal: 90 },
  { week: 'Week 7', predicted: 96, actual: 94, optimal: 90 },
  { week: 'Week 8', predicted: 97, actual: 96, optimal: 90 },
];

const soilData = [
  { day: 'Mon', moisture: 65, ph: 6.8, nitrogen: 75, phosphorus: 45, potassium: 82 },
  { day: 'Tue', moisture: 68, ph: 6.9, nitrogen: 72, phosphorus: 48, potassium: 85 },
  { day: 'Wed', moisture: 72, ph: 7.0, nitrogen: 78, phosphorus: 52, potassium: 88 },
  { day: 'Thu', moisture: 70, ph: 6.9, nitrogen: 75, phosphorus: 50, potassium: 86 },
  { day: 'Fri', moisture: 75, ph: 7.1, nitrogen: 80, phosphorus: 55, potassium: 90 },
  { day: 'Sat', moisture: 78, ph: 7.0, nitrogen: 82, phosphorus: 58, potassium: 92 },
  { day: 'Sun', moisture: 80, ph: 6.95, nitrogen: 85, phosphorus: 60, potassium: 94 },
];

const cropHealthData = [
  { name: 'Excellent', value: 45, color: '#10b981' },
  { name: 'Good', value: 25, color: '#84cc16' },
  { name: 'Moderate', value: 15, color: '#f59e0b' },
  { name: 'At Risk', value: 10, color: '#ef4444' },
  { name: 'Critical', value: 5, color: '#dc2626' },
];

const diseasePatterns = [
  { disease: 'Early Blight', confidence: 94.5, severity: 'Medium', spread: 'Localized' },
  { disease: 'Powdery Mildew', confidence: 87.2, severity: 'Low', spread: 'Isolated' },
  { disease: 'Root Rot', confidence: 76.8, severity: 'High', spread: 'Spreading' },
  { disease: 'Leaf Spot', confidence: 82.1, severity: 'Medium', spread: 'Contained' },
];

const weatherImpactData = [
  { factor: 'Temperature', impact: 85, trend: 'positive' },
  { factor: 'Rainfall', impact: 72, trend: 'positive' },
  { factor: 'Humidity', impact: 68, trend: 'neutral' },
  { factor: 'Wind Speed', impact: 45, trend: 'negative' },
  { factor: 'Sunlight', impact: 91, trend: 'positive' },
  { factor: 'Soil Moisture', impact: 88, trend: 'positive' },
];

const aiModels = [
  { name: 'DeepLeaf CNN', accuracy: 96.8, speed: '0.8s', type: 'Disease Detection' },
  { name: 'SoilNet V2', accuracy: 94.2, speed: '1.2s', type: 'Soil Analysis' },
  { name: 'YieldPredict Pro', accuracy: 92.5, speed: '2.1s', type: 'Yield Forecast' },
  { name: 'PestVision AI', accuracy: 89.7, speed: '1.5s', type: 'Pest Detection' },
  { name: 'ClimateAdapt ML', accuracy: 91.3, speed: '3.4s', type: 'Climate Impact' },
];

const historicalInsights = [
  { year: '2020', yield: 2200, accuracy: 85.2 },
  { year: '2021', yield: 2450, accuracy: 88.7 },
  { year: '2022', yield: 2680, accuracy: 91.4 },
  { year: '2023', yield: 2920, accuracy: 93.8 },
  { year: '2024', yield: 3150, accuracy: 95.2 },
];

export default function AIInsights() {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiResult, setAiResult] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('analysis');
  const [selectedDisease, setSelectedDisease] = useState<string | null>(null);
  const cameraRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

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
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setAiResult({
      classification: 'Tomato Plant - Early Blight',
      confidence: 94.5,
      suggestions: [
        'Apply fungicide within 48 hours',
        'Reduce irrigation frequency',
        'Improve air circulation',
        'Remove infected leaves immediately',
        'Monitor soil moisture levels',
        'Apply organic fungicide treatment',
      ],
      cropHealth: 'Moderate Risk',
      riskLevel: 'Medium',
      riskScore: 68,
      recommendations: [
        'Isolate affected plants from healthy ones',
        'Use sulfur-based fungicide treatment',
        'Increase spacing between plants',
        'Monitor weather conditions',
        'Apply neem oil as preventive measure',
        'Schedule soil nutrient testing',
      ],
      detailedAnalysis: {
        diseaseStage: 'Early',
        affectedArea: '15% of leaves',
        spreadRate: 'Moderate',
        treatmentUrgency: 'Within 48 hours',
        recoveryProbability: '85%',
        costEstimate: '$120-180'
      }
    });
    setIsProcessing(false);
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
              Transform your farming operations with cutting-edge AI technology.
            </p>
          </div>
          <div className="flex justify-center gap-6 pt-8">
            <div className="flex items-center gap-3 text-sm bg-green-900/50 text-green-300 px-4 py-2 rounded-full border border-green-700/50">
              <Brain className="w-4 h-4" />
              98.5% Prediction Accuracy
            </div>
            <div className="flex items-center gap-3 text-sm bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full border border-blue-700/50">
              <Zap className="w-4 h-4" />
              Real-time Analysis
            </div>
            <div className="flex items-center gap-3 text-sm bg-purple-900/50 text-purple-300 px-4 py-2 rounded-full border border-purple-700/50">
              <Shield className="w-4 h-4" />
              Enterprise Security
            </div>
          </div>
        </section>

        {/* SECTION 2: AI Analysis Dashboard */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">AI Analysis Dashboard</h2>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors duration-300">
                <Download className="w-4 h-4" />
                Export Report
              </button>
              <button className="flex items-center gap-2 border border-green-500 text-green-400 hover:bg-green-500/10 px-6 py-3 rounded-lg transition-colors duration-300">
                <Share2 className="w-4 h-4" />
                Share Insights
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Brain className="w-8 h-8" />, label: 'AI Models Active', value: '12', change: '+2' },
              { icon: <Database className="w-8 h-8" />, label: 'Data Processed', value: '2.4TB', change: '+15%' },
              { icon: <Target className="w-8 h-8" />, label: 'Prediction Accuracy', value: '96.8%', change: '+1.2%' },
            ].map((stat, index) => (
              <div key={index} className="glass dark:glass-dark p-8 rounded-2xl text-center space-y-4 hover:shadow-lg hover:shadow-accent/20 transition-all duration-300">
                <div className="text-green-400 mx-auto">{stat.icon}</div>
                <p className="text-foreground/70">{stat.label}</p>
                <p className="text-3xl font-bold text-accent">{stat.value}</p>
                <p className="text-green-400 text-sm font-semibold">{stat.change}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Image Analysis Interface */}
        <section className="mb-20 space-y-12">
          <h2 className="text-4xl font-bold">Intelligent Crop Analysis</h2>
          
          <div className="grid xl:grid-cols-2 gap-12">
            {/* Camera & Upload Section */}
            <div className="space-y-8">
              <div className="glass dark:glass-dark p-8 rounded-2xl space-y-6">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                  <Camera className="w-6 h-6 text-accent" />
                  Real-time Camera Analysis
                </h3>
                {!capturedImage ? (
                  <button
                    onClick={handleCamera}
                    className="w-full py-16 border-2 border-dashed border-accent rounded-xl hover:bg-accent/5 transition-all flex flex-col items-center justify-center gap-4 group"
                  >
                    <Camera className="w-16 h-16 text-accent group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-foreground/70 text-lg">Click to Open Camera</span>
                    <span className="text-foreground/50">Point at your crop for instant analysis</span>
                  </button>
                ) : (
                  <div className="space-y-6">
                    <div className="relative">
                      <img src={capturedImage || "/placeholder.svg"} alt="Captured" className="w-full rounded-lg object-cover h-64" />
                      <button
                        onClick={() => {
                          setCapturedImage(null);
                          setAiResult(null);
                        }}
                        className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        setCapturedImage(null);
                        setAiResult(null);
                      }}
                      className="w-full py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-all font-semibold"
                    >
                      Retake Photo
                    </button>
                  </div>
                )}
              </div>

              <div className="glass dark:glass-dark p-8 rounded-2xl space-y-6">
                <h3 className="text-2xl font-semibold flex items-center gap-3">
                  <Upload className="w-6 h-6 text-accent" />
                  Upload From Gallery
                </h3>
                {!capturedImage ? (
                  <>
                    <button
                      onClick={() => fileRef.current?.click()}
                      className="w-full py-16 border-2 border-dashed border-accent rounded-xl hover:bg-accent/5 transition-all flex flex-col items-center justify-center gap-4 group"
                    >
                      <Upload className="w-16 h-16 text-accent group-hover:scale-110 transition-transform" />
                      <span className="font-semibold text-foreground/70 text-lg">Browse Your Files</span>
                      <span className="text-foreground/50">Select high-quality crop images</span>
                    </button>
                    <input
                      ref={fileRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </>
                ) : (
                  <div className="space-y-6">
                    <div className="relative">
                      <img src={capturedImage || "/placeholder.svg"} alt="Uploaded" className="w-full rounded-lg object-cover h-64" />
                      <button
                        onClick={() => {
                          setCapturedImage(null);
                          setAiResult(null);
                        }}
                        className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => {
                        setCapturedImage(null);
                        setAiResult(null);
                      }}
                      className="w-full py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-all font-semibold"
                    >
                      Upload Different Image
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* AI Model Information */}
            <div className="space-y-8">
              <div className="glass dark:glass-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-accent" />
                  Active AI Models
                </h3>
                <div className="space-y-4">
                  {aiModels.map((model, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors duration-300">
                      <div>
                        <p className="font-semibold text-foreground">{model.name}</p>
                        <p className="text-sm text-foreground/70">{model.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-semibold">{model.accuracy}%</p>
                        <p className="text-sm text-foreground/70">{model.speed}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass dark:glass-dark p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-accent" />
                  Analysis Capabilities
                </h3>
                <div className="space-y-3">
                  {[
                    'Real-time disease detection',
                    'Nutrient deficiency analysis',
                    'Growth stage classification',
                    'Yield prediction modeling',
                    'Pest infestation alerts',
                    'Soil health assessment',
                    'Climate impact analysis',
                    'Irrigation optimization'
                  ].map((capability, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-foreground/70">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Processing State */}
        {isProcessing && (
          <section className="mb-20 glass dark:glass-dark p-16 rounded-2xl text-center space-y-8">
            <Loader2 className="w-16 h-16 text-accent animate-spin mx-auto" />
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Advanced AI Analysis in Progress</h3>
              <p className="text-foreground/70 text-lg">Our neural networks are processing your image with multiple AI models...</p>
              <div className="flex justify-center gap-4 text-sm text-foreground/50">
                <span>DeepLeaf CNN</span>
                <span>•</span>
                <span>SoilNet V2</span>
                <span>•</span>
                <span>YieldPredict Pro</span>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 5: Plant & Soil Quality Scoring System */}
        <section className="mb-20 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Plant & Soil Quality Scoring System</h2>
            <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
              Real-time sensor-based scoring for optimal planting decisions and soil health assessment
            </p>
          </div>

          {/* Sensor Status Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              { label: 'Active Sensors', value: '24', icon: <Activity className="w-6 h-6" />, status: 'Online' },
              { label: 'Data Accuracy', value: '98.5%', icon: <Target className="w-6 h-6" />, status: 'Excellent' },
              { label: 'Update Frequency', value: '5 min', icon: <RefreshCw className="w-6 h-6" />, status: 'Real-time' },
              { label: 'Coverage Area', value: '125 ha', icon: <MapPin className="w-6 h-6" />, status: 'Complete' },
            ].map((stat, index) => (
              <div key={index} className="glass dark:glass-dark p-6 rounded-2xl text-center space-y-3">
                <div className="text-accent mx-auto">{stat.icon}</div>
                <p className="text-sm text-foreground/70">{stat.label}</p>
                <p className="text-2xl font-bold text-accent">{stat.value}</p>
                <p className="text-green-400 text-sm font-semibold">{stat.status}</p>
              </div>
            ))}
          </div>

          {/* Plant Scoring Dashboard */}
          <div className="glass dark:glass-dark p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <Sprout className="w-6 h-6 text-accent" />
              Plant Suitability Scoring
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-foreground/60 font-semibold">Plant Type</th>
                    <th className="text-left py-4 px-4 text-foreground/60 font-semibold">Soil Score</th>
                    <th className="text-left py-4 px-4 text-foreground/60 font-semibold">Climate Match</th>
                    <th className="text-left py-4 px-4 text-foreground/60 font-semibold">Yield Potential</th>
                    <th className="text-left py-4 px-4 text-foreground/60 font-semibold">Overall Score</th>
                    <th className="text-left py-4 px-4 text-foreground/60 font-semibold">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      plant: 'Tomatoes',
                      soilScore: 92,
                      climate: 88,
                      yield: 95,
                      overall: 91,
                      status: 'Highly Recommended',
                      color: 'from-green-400 to-green-600'
                    },
                    {
                      plant: 'Corn',
                      soilScore: 85,
                      climate: 82,
                      yield: 90,
                      overall: 86,
                      status: 'Recommended',
                      color: 'from-blue-400 to-blue-600'
                    },
                    {
                      plant: 'Wheat',
                      soilScore: 78,
                      climate: 75,
                      yield: 82,
                      overall: 78,
                      status: 'Good Fit',
                      color: 'from-yellow-400 to-yellow-600'
                    },
                    {
                      plant: 'Soybeans',
                      soilScore: 88,
                      climate: 85,
                      yield: 87,
                      overall: 87,
                      status: 'Recommended',
                      color: 'from-blue-400 to-blue-600'
                    },
                    {
                      plant: 'Potatoes',
                      soilScore: 65,
                      climate: 72,
                      yield: 68,
                      overall: 68,
                      status: 'Moderate',
                      color: 'from-orange-400 to-orange-600'
                    },
                    {
                      plant: 'Carrots',
                      soilScore: 82,
                      climate: 78,
                      yield: 80,
                      overall: 80,
                      status: 'Good Fit',
                      color: 'from-yellow-400 to-yellow-600'
                    },
                  ].map((crop, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-secondary/30 transition-colors duration-300">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-br ${crop.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                            {crop.plant.charAt(0)}
                          </div>
                          <span className="font-semibold text-foreground">{crop.plant}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-secondary rounded-full h-2">
                            <div 
                              className="h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600" 
                              style={{ width: `${crop.soilScore}%` }}
                            />
                          </div>
                          <span className="font-semibold text-foreground">{crop.soilScore}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-secondary rounded-full h-2">
                            <div 
                              className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" 
                              style={{ width: `${crop.climate}%` }}
                            />
                          </div>
                          <span className="font-semibold text-foreground">{crop.climate}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 bg-secondary rounded-full h-2">
                            <div 
                              className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-purple-600" 
                              style={{ width: `${crop.yield}%` }}
                            />
                          </div>
                          <span className="font-semibold text-foreground">{crop.yield}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-20 h-8 rounded-lg bg-gradient-to-br ${crop.color} flex items-center justify-center text-white font-bold text-sm`}>
                            {crop.overall}/100
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          crop.status === 'Highly Recommended' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
                          crop.status === 'Recommended' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' :
                          crop.status === 'Good Fit' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' :
                          'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300'
                        }`}>
                          {crop.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Soil Quality Analysis */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass dark:glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <Droplets className="w-6 h-6 text-accent" />
                Soil Quality Metrics
              </h3>
              <div className="space-y-6">
                {[
                  { parameter: 'pH Level', value: 6.8, optimal: '6.5-7.0', status: 'Optimal', score: 92 },
                  { parameter: 'Nitrogen', value: '75 ppm', optimal: '70-80 ppm', status: 'Good', score: 88 },
                  { parameter: 'Phosphorus', value: '45 ppm', optimal: '40-50 ppm', status: 'Optimal', score: 95 },
                  { parameter: 'Potassium', value: '82 ppm', optimal: '80-90 ppm', status: 'Good', score: 85 },
                  { parameter: 'Organic Matter', value: '3.2%', optimal: '3-4%', status: 'Optimal', score: 90 },
                  { parameter: 'Moisture', value: '65%', optimal: '60-70%', status: 'Optimal', score: 94 },
                ].map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                    <div>
                      <p className="font-semibold text-foreground">{metric.parameter}</p>
                      <p className="text-sm text-foreground/70">Optimal: {metric.optimal}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-foreground">{metric.value}</p>
                      <p className={`text-sm font-semibold ${
                        metric.status === 'Optimal' ? 'text-green-400' : 'text-yellow-400'
                      }`}>
                        {metric.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass dark:glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-accent" />
                Soil Health Trends
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={soilData}>
                  <defs>
                    <linearGradient id="colorMoisture" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorNitrogen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                  <XAxis dataKey="day" stroke="currentColor" />
                  <YAxis stroke="currentColor" />
                  <Tooltip />
                  <Area type="monotone" dataKey="moisture" stroke="#3b82f6" fillOpacity={1} fill="url(#colorMoisture)" name="Moisture %" />
                  <Area type="monotone" dataKey="nitrogen" stroke="#10b981" fillOpacity={1} fill="url(#colorNitrogen)" name="Nitrogen ppm" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* SECTION 6: Comprehensive AI Results */}
        {aiResult && !isProcessing && (
          <section className="mb-20 space-y-16">
            {/* Result Overview Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="glass dark:glass-dark p-8 rounded-2xl space-y-4 border-2 border-green-500/20">
                <h3 className="text-sm font-semibold text-foreground/60 uppercase">AI Classification</h3>
                <p className="text-2xl font-bold">{aiResult.classification}</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm text-green-600 dark:text-green-400">{aiResult.confidence}% Confidence</span>
                </div>
              </div>

              <div className="glass dark:glass-dark p-8 rounded-2xl space-y-4 border-2 border-yellow-500/20">
                <h3 className="text-sm font-semibold text-foreground/60 uppercase">Health Status</h3>
                <p className="text-2xl font-bold">{aiResult.cropHealth}</p>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  <span className="text-sm text-yellow-600 dark:text-yellow-400">Risk Score: {aiResult.riskScore}/100</span>
                </div>
              </div>

              <div className="glass dark:glass-dark p-8 rounded-2xl space-y-4 border-2 border-blue-500/20">
                <h3 className="text-sm font-semibold text-foreground/60 uppercase">Action Plan</h3>
                <p className="text-2xl font-bold">{aiResult.suggestions.length} Steps</p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm text-blue-600 dark:text-blue-400">Recovery: {aiResult.detailedAnalysis.recoveryProbability}%</span>
                </div>
              </div>

              <div className="glass dark:glass-dark p-8 rounded-2xl space-y-4 border-2 border-purple-500/20">
                <h3 className="text-sm font-semibold text-foreground/60 uppercase">Cost Estimate</h3>
                <p className="text-2xl font-bold">{aiResult.detailedAnalysis.costEstimate}</p>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span className="text-sm text-purple-600 dark:text-purple-400">Urgency: {aiResult.detailedAnalysis.treatmentUrgency}</span>
                </div>
              </div>
            </div>

            {/* Detailed Analysis Tabs */}
            <div className="glass dark:glass-dark rounded-2xl overflow-hidden">
              <div className="border-b border-border">
                <div className="flex space-x-8 px-8">
                  {['analysis', 'treatment', 'prevention', 'monitoring'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`py-4 px-2 font-semibold border-b-2 transition-colors duration-300 ${
                        activeTab === tab
                          ? 'border-accent text-accent'
                          : 'border-transparent text-foreground/70 hover:text-foreground'
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-8">
                {activeTab === 'analysis' && (
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold">Detailed Disease Analysis</h4>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        {Object.entries(aiResult.detailedAnalysis).map(([key, value]) => (
                          <div key={key} className="flex justify-between items-center py-3 border-b border-border">
                            <span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                            <span className="text-accent font-semibold">{value as string}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <h5 className="font-semibold text-lg">Disease Progression</h5>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span>Current Stage</span>
                            <span className="text-yellow-400">Early</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '25%' }} />
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Spread Potential</span>
                            <span className="text-orange-400">Medium</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div className="bg-orange-400 h-2 rounded-full" style={{ width: '50%' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'treatment' && (
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold">Immediate Treatment Recommendations</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {aiResult.suggestions.map((suggestion: string, i: number) => (
                        <div key={i} className="glass dark:glass-dark p-6 rounded-xl flex gap-4 hover:-translate-y-1 transition-all group">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-lg group-hover:scale-110 transition-transform">
                            {i + 1}
                          </div>
                          <div>
                            <p className="text-foreground/70 leading-relaxed">{suggestion}</p>
                            <p className="text-sm text-foreground/50 mt-2">Priority: {i < 2 ? 'High' : 'Medium'}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'prevention' && (
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold">Long-term Prevention Strategy</h4>
                    <div className="space-y-4">
                      {aiResult.recommendations.map((rec: string, i: number) => (
                        <div key={i} className="glass dark:glass-dark p-6 rounded-xl border-l-4 border-accent space-y-2 hover:border-l-8 transition-all">
                          <p className="font-semibold text-foreground">{rec}</p>
                          <p className="text-sm text-foreground/70">Estimated impact: High • Timeframe: 1-2 weeks</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'monitoring' && (
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold">Monitoring & Follow-up</h4>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h5 className="font-semibold">Weekly Checkpoints</h5>
                        {[
                          'Day 3: Reassess disease progression',
                          'Day 7: Evaluate treatment effectiveness',
                          'Day 14: Full health assessment',
                          'Day 30: Preventive measures review'
                        ].map((checkpoint, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span className="text-foreground/70">{checkpoint}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-4">
                        <h5 className="font-semibold">Success Metrics</h5>
                        {[
                          'Disease spread halted',
                          'New growth observed',
                          'Leaf discoloration reduced',
                          'Overall plant vigor improved'
                        ].map((metric, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <Target className="w-4 h-4 text-green-400" />
                            <span className="text-foreground/70">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 7: Advanced Analytics Dashboard */}
        <section className="mb-20 space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold">Advanced Analytics Dashboard</h2>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-secondary rounded-lg text-foreground/70 hover:text-foreground transition-colors">
                Weekly
              </button>
              <button className="px-4 py-2 bg-accent text-white rounded-lg transition-colors">
                Monthly
              </button>
              <button className="px-4 py-2 bg-secondary rounded-lg text-foreground/70 hover:text-foreground transition-colors">
                Yearly
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Yield Prediction Chart */}
            <div className="glass dark:glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">AI Yield Predictions vs Actual</h3>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={predictionData}>
                  <defs>
                    <linearGradient id="colorPred" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                  <XAxis dataKey="week" stroke="currentColor" />
                  <YAxis stroke="currentColor" />
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #10b981', borderRadius: '8px' }} />
                  <Line type="monotone" dataKey="predicted" stroke="#10b981" strokeWidth={3} dot={{ r: 6 }} name="AI Predicted" />
                  <Line type="monotone" dataKey="actual" stroke="#60a5fa" strokeWidth={2} strokeDasharray="5 5" name="Actual Yield" />
                  <Line type="monotone" dataKey="optimal" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} name="Optimal Target" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Crop Health Distribution */}
            <div className="glass dark:glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Farm-wide Crop Health Distribution</h3>
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={cropHealthData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {cropHealthData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-4">
                  {cropHealthData.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: item.color }} />
                      <span className="font-semibold">{item.name}: {item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: Weather Impact Analysis */}
        <section className="mb-20 space-y-8">
          <h2 className="text-4xl font-bold">Weather Impact Analysis</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { label: 'Temperature Optimal', value: '28°C', status: 'Good', icon: '🌡️', impact: '+12% Yield' },
              { label: 'Rainfall This Week', value: '45mm', status: 'Adequate', icon: '🌧️', impact: 'Optimal' },
              { label: 'Humidity Level', value: '65%', status: 'Ideal', icon: '💧', impact: '+8% Growth' },
              { label: 'Wind Speed', value: '12 km/h', status: 'Moderate', icon: '💨', impact: 'Neutral' },
              { label: 'Sunlight Hours', value: '8.2h', status: 'Excellent', icon: '☀️', impact: '+15% Photosynthesis' },
              { label: 'Soil Temperature', value: '22°C', status: 'Optimal', icon: '🌱', impact: '+10% Germination' },
            ].map((item, i) => (
              <div key={i} className="glass dark:glass-dark p-8 rounded-2xl space-y-4 text-center hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl">{item.icon}</div>
                <p className="text-sm font-semibold text-foreground/60">{item.label}</p>
                <p className="text-3xl font-bold">{item.value}</p>
                <p className="text-green-600 dark:text-green-400 font-semibold">{item.status}</p>
                <p className="text-blue-600 dark:text-blue-400 text-sm">{item.impact}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 9: Disease Pattern Recognition */}
        <section className="mb-20 space-y-8">
          <h2 className="text-4xl font-bold">Disease Pattern Recognition</h2>
          <div className="glass dark:glass-dark p-8 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Detected Disease Patterns</h3>
                <div className="space-y-4">
                  {diseasePatterns.map((disease, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg hover:border-accent/50 transition-colors duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-foreground">{disease.disease}</span>
                        <span className="text-green-400 font-bold">{disease.confidence}%</span>
                      </div>
                      <div className="flex gap-4 text-sm text-foreground/70">
                        <span>Severity: {disease.severity}</span>
                        <span>Spread: {disease.spread}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Prevention Effectiveness</h3>
                <div className="space-y-6">
                  {[
                    { method: 'Crop Rotation', effectiveness: 92, cost: 'Low' },
                    { method: 'Organic Fungicides', effectiveness: 85, cost: 'Medium' },
                    { method: 'Soil Solarization', effectiveness: 78, cost: 'High' },
                    { method: 'Companion Planting', effectiveness: 88, cost: 'Low' },
                  ].map((method, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold">{method.method}</span>
                        <span className="text-green-400">{method.effectiveness}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600" 
                          style={{ width: `${method.effectiveness}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-foreground/50">
                        <span>Cost: {method.cost}</span>
                        <span>Recommended</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 10: Historical Performance */}
        <section className="mb-20 space-y-8">
          <h2 className="text-4xl font-bold">Historical AI Performance</h2>
          <div className="glass dark:glass-dark p-8 rounded-2xl">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={historicalInsights}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                <XAxis dataKey="year" stroke="currentColor" />
                <YAxis yAxisId="left" stroke="currentColor" />
                <YAxis yAxisId="right" orientation="right" stroke="currentColor" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #10b981', borderRadius: '8px' }} />
                <Bar yAxisId="left" dataKey="yield" fill="#10b981" radius={[4, 4, 0, 0]} name="Yield (kg/ha)" />
                <Line yAxisId="right" type="monotone" dataKey="accuracy" stroke="#3b82f6" strokeWidth={2} name="AI Accuracy %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* SECTION 11: AI Model Performance */}
        <section className="mb-20 space-y-8">
          <h2 className="text-4xl font-bold">AI Model Performance Metrics</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass dark:glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Model Accuracy Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={historicalInsights}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(16, 185, 129, 0.1)" />
                  <XAxis dataKey="year" stroke="currentColor" />
                  <YAxis stroke="currentColor" />
                  <Tooltip />
                  <Line type="monotone" dataKey="accuracy" stroke="#10b981" strokeWidth={3} dot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="glass dark:glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Processing Speed Analysis</h3>
              <div className="space-y-6">
                {aiModels.map((model, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-semibold">{model.name}</span>
                      <span className="text-blue-400">{model.speed}</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600" 
                        style={{ width: `${parseFloat(model.speed) * 50}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-foreground/50">
                      <span>Accuracy: {model.accuracy}%</span>
                      <span>{model.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 12: Resources & Learning */}
        <section className="mb-20 space-y-8">
          <h2 className="text-4xl font-bold">Agricultural Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Crop Disease Encyclopedia', 
                desc: 'Comprehensive guide to identify and treat 500+ crop diseases',
                icon: <BookOpen className="w-8 h-8" />,
                items: '500+ Diseases'
              },
              { 
                title: 'Soil Management Guide', 
                desc: 'Best practices for soil health improvement and maintenance',
                icon: <Recycle className="w-8 h-8" />,
                items: '25 Techniques'
              },
              { 
                title: 'Pest Control Strategies', 
                desc: 'Organic and chemical pest management solutions',
                icon: <Shield className="w-8 h-8" />,
                items: '100+ Solutions'
              },
              { 
                title: 'Irrigation Optimization', 
                desc: 'Smart water management for maximum yield efficiency',
                icon: <Droplets className="w-8 h-8" />,
                items: '15 Systems'
              },
            ].map((resource, i) => (
              <div key={i} className="glass dark:glass-dark p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <div className="text-accent mb-4 group-hover:scale-110 transition-transform">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{resource.title}</h3>
                <p className="text-foreground/70 mb-4">{resource.desc}</p>
                <p className="text-sm text-accent font-semibold">{resource.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 13: Support & Community */}
        <section className="mb-20 space-y-8">
          <h2 className="text-4xl font-bold">Expert Support & Community</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="glass dark:glass-dark p-8 rounded-2xl text-center space-y-4">
              <Phone className="w-12 h-12 text-green-400 mx-auto" />
              <h3 className="text-xl font-semibold">24/7 Expert Support</h3>
              <p className="text-foreground/70">Get immediate help from agricultural experts</p>
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-colors">
                Contact Support
              </button>
            </div>
            <div className="glass dark:glass-dark p-8 rounded-2xl text-center space-y-4">
              <Users className="w-12 h-12 text-blue-400 mx-auto" />
              <h3 className="text-xl font-semibold">Farmer Community</h3>
              <p className="text-foreground/70">Connect with 10,000+ farmers worldwide</p>
              <button className="w-full border border-blue-500 text-blue-400 hover:bg-blue-500/10 py-3 rounded-lg transition-colors">
                Join Community
              </button>
            </div>
            <div className="glass dark:glass-dark p-8 rounded-2xl text-center space-y-4">
              <Video className="w-12 h-12 text-purple-400 mx-auto" />
              <h3 className="text-xl font-semibold">Training Videos</h3>
              <p className="text-foreground/70">Learn from 100+ expert video tutorials</p>
              <button className="w-full border border-purple-500 text-purple-400 hover:bg-purple-500/10 py-3 rounded-lg transition-colors">
                Watch Tutorials
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}