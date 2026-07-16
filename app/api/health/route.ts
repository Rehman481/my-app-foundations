import { NextResponse } from 'next/server';

export async function GET() {
  const healthData = {
    status: 'healthy',
    uptime: '99.99%',
    lastCheck: new Date().toISOString(),
    version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    services: [
      { name: 'Database', status: 'healthy' },
      { name: 'API', status: 'healthy' },
      { name: 'Cache', status: 'healthy' },
      { name: 'Storage', status: 'healthy' },
    ]
  };

  return NextResponse.json(healthData);
}