export async function fetchHealthData() {
  // In a real app, this would fetch from your API
  // For now, we'll return mock data
  return {
    status: 'healthy',
    uptime: '99.99%',
    lastCheck: new Date().toISOString(),
    version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    services: [
      { name: 'Database', status: 'healthy' },
      { name: 'API', status: 'healthy' },
      { name: 'Cache', status: 'healthy' },
      { name: 'Storage', status: 'healthy' },
    ]
  };
}