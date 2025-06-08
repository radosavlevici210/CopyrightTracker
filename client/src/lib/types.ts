export interface RealTimeData {
  totalUsers: number;
  activeUsers: number;
  todayAuthentications: number;
  successRate: number;
  securityAlerts: number;
  systemLoad: number;
  apiLatency: number;
  databaseConnections: number;
  totalSessions: number;
  bandwidthUsage: number;
  threatLevel: string;
  complianceScore: number;
  neuralStatus: string;
}

export interface AuthenticationAttempt {
  id: number;
  user: string;
  method: 'Face' | 'Signature' | 'DNA';
  status: 'success' | 'failed';
  time: string;
  ip: string;
  confidence: number;
  location: string;
}

export interface SystemComponent {
  component: string;
  status: 'healthy' | 'warning' | 'error' | 'protected';
  uptime: string;
  responseTime: string;
  load: number;
}

export interface BiometricMethod {
  name: string;
  value: number;
  color: string;
  accuracy: number;
  speed: number;
}

export interface User {
  id: number;
  name: string;
  email: string;
  department: string;
  level: string;
  status: 'Active' | 'Suspended' | 'Inactive';
  lastAccess: string;
  enrolledMethods: string[];
  trustScore: number;
}

export interface ThreatDetection {
  type: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  count: number;
  blocked: number;
  source: 'Internal' | 'External';
  timestamp: string;
}

export interface ComplianceData {
  framework: string;
  score: number;
  status: 'Compliant' | 'Non-Compliant' | 'Pending';
  lastAudit: string;
  nextAudit: string;
}

export interface NeuralAIPolicy {
  title: string;
  content: string;
  version: string;
  lastUpdated: string;
  status: 'Active' | 'Draft' | 'Deprecated';
}
