import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from 'recharts';
import { 
  Shield, Users, Activity, Lock, AlertTriangle, CheckCircle, XCircle, 
  Eye, FileSignature, Dna, Settings, Database, Server, Wifi, Cpu, 
  HardDrive, Network, Globe, UserPlus, UserMinus, Edit3, Search, 
  Filter, Download, Upload, Bell, Mail, Phone, MapPin, Calendar, 
  Clock, TrendingUp, TrendingDown, BarChart3, PieChart as PieChartIcon, 
  Target, Zap, Brain, Fingerprint, Scan, Camera, Mic, Bluetooth, 
  Radio, Satellite, LayoutDashboard, MoreHorizontal 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import NeuralAIPolicy from "@/components/NeuralAIPolicy";
import { RealTimeData, AuthenticationAttempt, SystemComponent, BiometricMethod, User } from "@/lib/types";

const BiometricDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [realTimeData, setRealTimeData] = useState<RealTimeData>({
    totalUsers: 1247,
    activeUsers: 892,
    todayAuthentications: 3456,
    successRate: 94.2,
    securityAlerts: 3,
    systemLoad: 67.5,
    apiLatency: 145,
    databaseConnections: 23,
    totalSessions: 156,
    bandwidthUsage: 78.3,
    threatLevel: 'LOW',
    complianceScore: 98.7,
    neuralStatus: 'ACTIVE'
  });

  const [authenticationData, setAuthenticationData] = useState([
    { time: '00:00', successful: 45, failed: 3, total: 48, facial: 25, signature: 15, dna: 8 },
    { time: '02:00', successful: 32, failed: 2, total: 34, facial: 18, signature: 10, dna: 6 },
    { time: '04:00', successful: 23, failed: 1, total: 24, facial: 12, signature: 8, dna: 4 },
    { time: '06:00', successful: 89, failed: 4, total: 93, facial: 45, signature: 28, dna: 20 },
    { time: '08:00', successful: 287, failed: 12, total: 299, facial: 150, signature: 89, dna: 60 },
    { time: '10:00', successful: 356, failed: 18, total: 374, facial: 180, signature: 110, dna: 84 },
    { time: '12:00', successful: 445, failed: 18, total: 463, facial: 225, signature: 135, dna: 103 },
    { time: '14:00', successful: 398, failed: 16, total: 414, facial: 200, signature: 120, dna: 94 },
    { time: '16:00', successful: 389, failed: 15, total: 404, facial: 195, signature: 118, dna: 91 },
    { time: '18:00', successful: 278, failed: 11, total: 289, facial: 140, signature: 85, dna: 64 },
    { time: '20:00', successful: 156, failed: 7, total: 163, facial: 78, signature: 48, dna: 37 },
    { time: '22:00', successful: 89, failed: 3, total: 92, facial: 45, signature: 27, dna: 20 }
  ]);

  const [biometricMethods, setBiometricMethods] = useState<BiometricMethod[]>([
    { name: 'Facial Recognition', value: 45, color: '#3b82f6', accuracy: 99.2, speed: 1.2 },
    { name: 'Signature Verification', value: 30, color: '#10b981', accuracy: 97.8, speed: 2.1 },
    { name: 'DNA Analysis', value: 25, color: '#f59e0b', accuracy: 99.9, speed: 15.3 }
  ]);

  const [recentAttempts, setRecentAttempts] = useState<AuthenticationAttempt[]>([
    { id: 1, user: 'john.doe@company.com', method: 'Face', status: 'success', time: '14:23:45', ip: '192.168.1.100', confidence: 98.7, location: 'New York Office' },
    { id: 2, user: 'jane.smith@company.com', method: 'Signature', status: 'success', time: '14:22:12', ip: '192.168.1.101', confidence: 97.2, location: 'London Office' },
    { id: 3, user: 'bob.wilson@company.com', method: 'DNA', status: 'failed', time: '14:21:33', ip: '192.168.1.102', confidence: 45.3, location: 'Remote Access' },
    { id: 4, user: 'alice.brown@company.com', method: 'Face', status: 'success', time: '14:20:15', ip: '192.168.1.103', confidence: 99.1, location: 'Tokyo Office' },
    { id: 5, user: 'charlie.davis@company.com', method: 'Signature', status: 'success', time: '14:19:28', ip: '192.168.1.104', confidence: 96.8, location: 'Berlin Office' }
  ]);

  const [systemHealth, setSystemHealth] = useState<SystemComponent[]>([
    { component: 'Primary Database', status: 'healthy', uptime: '99.9%', responseTime: '12ms', load: 23 },
    { component: 'Face Recognition API', status: 'healthy', uptime: '99.7%', responseTime: '245ms', load: 67 },
    { component: 'Signature API', status: 'warning', uptime: '98.2%', responseTime: '156ms', load: 89 },
    { component: 'DNA Analysis API', status: 'healthy', uptime: '99.8%', responseTime: '189ms', load: 45 },
    { component: 'Redis Cache', status: 'healthy', uptime: '100%', responseTime: '3ms', load: 12 },
    { component: 'Load Balancer', status: 'healthy', uptime: '99.99%', responseTime: '8ms', load: 34 },
    { component: 'Authentication Server', status: 'healthy', uptime: '99.8%', responseTime: '45ms', load: 56 },
    { component: 'Neural AI Core', status: 'protected', uptime: '100%', responseTime: '5ms', load: 18 }
  ]);

  const [userManagement, setUserManagement] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john.doe@company.com', department: 'Engineering', level: 'Senior', status: 'Active', lastAccess: '2025-06-08 14:23', enrolledMethods: ['Face', 'Signature'], trustScore: 98 },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@company.com', department: 'HR', level: 'Manager', status: 'Active', lastAccess: '2025-06-08 14:22', enrolledMethods: ['Face', 'DNA'], trustScore: 96 },
    { id: 3, name: 'Bob Wilson', email: 'bob.wilson@company.com', department: 'Security', level: 'Admin', status: 'Suspended', lastAccess: '2025-06-08 09:15', enrolledMethods: ['Face', 'Signature', 'DNA'], trustScore: 75 },
    { id: 4, name: 'Alice Brown', email: 'alice.brown@company.com', department: 'Finance', level: 'Senior', status: 'Active', lastAccess: '2025-06-08 14:20', enrolledMethods: ['Signature'], trustScore: 94 },
    { id: 5, name: 'Charlie Davis', email: 'charlie.davis@company.com', department: 'Engineering', level: 'Junior', status: 'Active', lastAccess: '2025-06-08 14:19', enrolledMethods: ['Face'], trustScore: 89 }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        ...prev,
        todayAuthentications: prev.todayAuthentications + Math.floor(Math.random() * 3),
        successRate: 94.2 + (Math.random() - 0.5) * 2,
        systemLoad: 67.5 + (Math.random() - 0.5) * 10,
        apiLatency: 145 + Math.floor((Math.random() - 0.5) * 50),
        bandwidthUsage: 78.3 + (Math.random() - 0.5) * 15,
        activeUsers: 892 + Math.floor((Math.random() - 0.5) * 20)
      }));

      // Add new authentication attempt
      if (Math.random() > 0.7) {
        const methods = ['Face', 'Signature', 'DNA'];
        const locations = ['New York Office', 'London Office', 'Tokyo Office', 'Berlin Office', 'Remote Access'];
        const newAttempt: AuthenticationAttempt = {
          id: Date.now(),
          user: `user${Math.floor(Math.random() * 1000)}@company.com`,
          method: methods[Math.floor(Math.random() * methods.length)] as 'Face' | 'Signature' | 'DNA',
          status: Math.random() > 0.1 ? 'success' : 'failed',
          time: new Date().toLocaleTimeString(),
          ip: `192.168.1.${100 + Math.floor(Math.random() * 50)}`,
          confidence: Math.random() > 0.1 ? 85 + Math.random() * 15 : 30 + Math.random() * 40,
          location: locations[Math.floor(Math.random() * locations.length)]
        };
        
        setRecentAttempts(prev => [newAttempt, ...prev.slice(0, 4)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-500" />;
      case 'healthy':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'protected':
        return <Shield className="w-4 h-4 text-yellow-400" />;
      case 'Active':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Suspended':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <XCircle className="w-4 h-4 text-red-500" />;
    }
  };

  const getMethodIcon = (method: string) => {
    switch (method) {
      case 'Face':
        return <Eye className="w-4 h-4" />;
      case 'Signature':
        return <FileSignature className="w-4 h-4" />;
      case 'DNA':
        return <Dna className="w-4 h-4" />;
      default:
        return <Shield className="w-4 h-4" />;
    }
  };

  const getThreatColor = (level: string) => {
    switch (level) {
      case 'LOW':
        return 'text-green-400 bg-green-500/20';
      case 'MEDIUM':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'HIGH':
        return 'text-orange-400 bg-orange-500/20';
      case 'CRITICAL':
        return 'text-red-400 bg-red-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-800/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Neural AI Biometric Security</h1>
                <p className="text-slate-300 text-sm">Enterprise Protection Dashboard</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-yellow-400 font-semibold text-sm">© 2025 Ervin Remus Radosavlevici</div>
              <div className="text-slate-400 text-xs">2025-06-08 Production Build - FINAL & Legally Binding</div>
              <div className="text-xs text-slate-500">ervin210@sky.com | ervin210@icloud.com | radosavlevici.ervin@gmail.com</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 bg-slate-800/50 backdrop-blur">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="users" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Users
            </TabsTrigger>
            <TabsTrigger value="system" className="flex items-center gap-2">
              <Server className="w-4 h-4" />
              System Health
            </TabsTrigger>
            <TabsTrigger value="neural-ai" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Neural AI Policy
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Real-time Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-xs font-medium">Total Users</p>
                      <p className="text-xl font-bold text-white">{realTimeData.totalUsers.toLocaleString()}</p>
                    </div>
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-xs font-medium">Active Now</p>
                      <p className="text-xl font-bold text-green-400">{realTimeData.activeUsers.toLocaleString()}</p>
                    </div>
                    <Activity className="w-6 h-6 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-xs font-medium">Authentications</p>
                      <p className="text-xl font-bold text-blue-400">{realTimeData.todayAuthentications.toLocaleString()}</p>
                    </div>
                    <Lock className="w-6 h-6 text-blue-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-xs font-medium">Success Rate</p>
                      <p className="text-xl font-bold text-green-400">{realTimeData.successRate.toFixed(1)}%</p>
                    </div>
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-xs font-medium">Security Alerts</p>
                      <p className="text-xl font-bold text-red-400">{realTimeData.securityAlerts}</p>
                    </div>
                    <AlertTriangle className="w-6 h-6 text-red-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-400 text-xs font-medium">Neural AI Status</p>
                      <p className="text-xl font-bold text-yellow-400">{realTimeData.neuralStatus}</p>
                    </div>
                    <Brain className="w-6 h-6 text-yellow-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Authentication Timeline */}
              <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    Authentication Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={authenticationData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                        <XAxis dataKey="time" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1e293b', 
                            border: '1px solid #374151',
                            borderRadius: '8px',
                            color: '#fff'
                          }}
                        />
                        <Line type="monotone" dataKey="successful" stroke="#10b981" strokeWidth={3} />
                        <Line type="monotone" dataKey="failed" stroke="#ef4444" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Biometric Methods Distribution */}
              <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <PieChartIcon className="w-5 h-5 text-green-400" />
                    Biometric Methods Usage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={biometricMethods}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          dataKey="value"
                        >
                          {biometricMethods.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 space-y-2">
                    {biometricMethods.map((method, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: method.color }}
                          ></div>
                          <span className="text-slate-300 text-sm">{method.name}</span>
                        </div>
                        <span className="text-white font-medium">{method.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity and System Health */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Authentication Attempts */}
              <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Activity className="w-5 h-5 text-blue-400" />
                    Recent Authentication Attempts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentAttempts.map((attempt) => (
                      <div key={attempt.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(attempt.status)}
                          <div>
                            <p className="text-white text-sm font-medium">{attempt.user}</p>
                            <div className="flex items-center gap-2 text-slate-400 text-xs">
                              {getMethodIcon(attempt.method)}
                              <span>{attempt.method}</span>
                              <span>•</span>
                              <span>{attempt.ip}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-slate-300 text-sm">{attempt.time}</p>
                          <p className={`text-xs font-medium ${
                            attempt.status === 'success' ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {attempt.status.toUpperCase()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* System Health */}
              <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Shield className="w-5 h-5 text-green-400" />
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {systemHealth.map((component, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(component.status)}
                          <div>
                            <p className="text-white text-sm font-medium">{component.component}</p>
                            <p className="text-slate-400 text-xs">Uptime: {component.uptime}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-slate-300 text-sm">{component.responseTime}</p>
                          <p className={`text-xs font-medium ${
                            component.status === 'healthy' ? 'text-green-400' : 
                            component.status === 'warning' ? 'text-yellow-400' : 
                            component.status === 'protected' ? 'text-yellow-400' : 'text-red-400'
                          }`}>
                            {component.status.toUpperCase()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Authentication Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={authenticationData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                          <XAxis dataKey="time" stroke="#9ca3af" />
                          <YAxis stroke="#9ca3af" />
                          <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #374151', borderRadius: '8px', color: '#fff' }} />
                          <Bar dataKey="facial" fill="#3b82f6" />
                          <Bar dataKey="signature" fill="#10b981" />
                          <Bar dataKey="dna" fill="#f59e0b" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6">
                <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Security Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        <Progress value={realTimeData.complianceScore} className="w-24 h-24" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{Math.round(realTimeData.complianceScore)}</span>
                        </div>
                      </div>
                      <p className="text-green-400 font-semibold">Excellent Security</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-white">Threat Level</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Current Level</span>
                        <Badge className={getThreatColor(realTimeData.threatLevel)}>{realTimeData.threatLevel}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Blocked Today</span>
                        <span className="text-white font-semibold">15</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Neural AI Protection</span>
                        <Badge className="text-yellow-400 bg-yellow-500/20">ACTIVE</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white">User Management</CardTitle>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-slate-600">
                      <TableHead className="text-slate-400">User</TableHead>
                      <TableHead className="text-slate-400">Department</TableHead>
                      <TableHead className="text-slate-400">Methods</TableHead>
                      <TableHead className="text-slate-400">Trust Score</TableHead>
                      <TableHead className="text-slate-400">Status</TableHead>
                      <TableHead className="text-slate-400">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {userManagement.map((user) => (
                      <TableRow key={user.id} className="border-slate-700">
                        <TableCell>
                          <div>
                            <p className="text-white font-medium">{user.name}</p>
                            <p className="text-slate-400 text-sm">{user.email}</p>
                          </div>
                        </TableCell>
                        <TableCell className="text-slate-300">{user.department}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            {user.enrolledMethods.map((method) => (
                              <Badge 
                                key={method} 
                                variant="outline" 
                                className={`text-xs ${
                                  method === 'Face' ? 'border-blue-500 text-blue-400' :
                                  method === 'Signature' ? 'border-green-500 text-green-400' :
                                  'border-amber-500 text-amber-400'
                                }`}
                              >
                                {method}
                              </Badge>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${
                              user.trustScore >= 95 ? 'bg-green-500' :
                              user.trustScore >= 85 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}></div>
                            <span className="text-white font-medium">{user.trustScore}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={user.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* System Health Tab */}
          <TabsContent value="system" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">System Components</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {systemHealth.map((component, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                        <div className="flex items-center gap-3">
                          {component.component.includes('Database') && <Database className="w-5 h-5 text-blue-400" />}
                          {component.component.includes('API') && <Server className="w-5 h-5 text-green-400" />}
                          {component.component.includes('Neural AI') && <Brain className="w-5 h-5 text-yellow-400" />}
                          {!component.component.includes('Database') && !component.component.includes('API') && !component.component.includes('Neural AI') && <Server className="w-5 h-5 text-blue-400" />}
                          <div>
                            <p className="text-white font-medium">{component.component}</p>
                            <p className="text-slate-400 text-sm">Uptime: {component.uptime}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={
                            component.status === 'healthy' ? 'bg-green-500/20 text-green-400' :
                            component.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                            component.status === 'protected' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }>
                            {component.status.toUpperCase()}
                          </Badge>
                          <p className="text-slate-400 text-xs mt-1">{component.responseTime}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 backdrop-blur border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">CPU Usage</span>
                        <span className="text-white font-medium">23%</span>
                      </div>
                      <Progress value={23} className="h-2" />
                    </div>
                    <div className="p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">Memory Usage</span>
                        <span className="text-white font-medium">{Math.round(realTimeData.systemLoad)}%</span>
                      </div>
                      <Progress value={realTimeData.systemLoad} className="h-2" />
                    </div>
                    <div className="p-4 bg-slate-700/30 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-300">Network I/O</span>
                        <span className="text-white font-medium">{Math.round(realTimeData.bandwidthUsage)}%</span>
                      </div>
                      <Progress value={realTimeData.bandwidthUsage} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Neural AI Policy Tab */}
          <TabsContent value="neural-ai">
            <NeuralAIPolicy />
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 bg-slate-800/30 backdrop-blur-xl mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-slate-400 text-sm">Neural AI Biometric Security Dashboard</p>
              <p className="text-yellow-400 font-semibold text-sm">© 2025 Ervin Remus Radosavlevici - All Rights Reserved</p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-500 text-xs">Contact: ervin210@sky.com | ervin210@icloud.com | radosavlevici.ervin@gmail.com</p>
              <p className="text-slate-600 text-xs">Protected by Neural AI Universal Protection Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BiometricDashboard;
