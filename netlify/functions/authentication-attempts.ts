import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event, context) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Content-Type': 'application/json',
    'X-Copyright': '© 2025 Ervin Remus Radosavlevici',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  const attempts = [
    { id: 1, user: 'john.doe@company.com', method: 'Face', status: 'success', time: new Date().toLocaleTimeString(), ip: '192.168.1.100', confidence: 98.7, location: 'New York Office' },
    { id: 2, user: 'jane.smith@company.com', method: 'Signature', status: 'success', time: new Date().toLocaleTimeString(), ip: '192.168.1.101', confidence: 97.2, location: 'London Office' },
    { id: 3, user: 'bob.wilson@company.com', method: 'DNA', status: 'failed', time: new Date().toLocaleTimeString(), ip: '192.168.1.102', confidence: 45.3, location: 'Remote Access' },
    { id: 4, user: 'alice.brown@company.com', method: 'Face', status: 'success', time: new Date().toLocaleTimeString(), ip: '192.168.1.103', confidence: 99.1, location: 'Tokyo Office' },
    { id: 5, user: 'charlie.davis@company.com', method: 'Signature', status: 'success', time: new Date().toLocaleTimeString(), ip: '192.168.1.104', confidence: 96.8, location: 'Berlin Office' }
  ];

  return {
    statusCode: 200,
    headers,
    body: JSON.stringify(attempts)
  };
};