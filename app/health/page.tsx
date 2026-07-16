import { fetchHealthData } from '@/lib/health';

export default async function HealthPage() {
  const healthData = await fetchHealthData();

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">System Health</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Status</h3>
          <div className="flex items-center space-x-2">
            <div className={`w-3 h-3 rounded-full ${
              healthData.status === 'healthy' ? 'bg-green-500' : 'bg-red-500'
            }`} />
            <span className="text-xl font-semibold capitalize">
              {healthData.status}
            </span>
          </div>
        </div>
        <div className="card">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Uptime</h3>
          <p className="text-xl font-semibold">{healthData.uptime}</p>
        </div>
        <div className="card">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Last Check</h3>
          <p className="text-xl font-semibold">
            {new Date(healthData.lastCheck).toLocaleString()}
          </p>
        </div>
        <div className="card">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Version</h3>
          <p className="text-xl font-semibold">{healthData.version}</p>
        </div>
      </div>
      <div className="mt-8 card">
        <h3 className="text-lg font-semibold mb-4">Services Status</h3>
        <div className="space-y-3">
          {healthData.services?.map((service: any, index: number) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
              <span className="font-medium">{service.name}</span>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded text-sm ${
                  service.status === 'healthy' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {service.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}