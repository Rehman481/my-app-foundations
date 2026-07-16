export default function DashboardPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-gray-900">1,234</p>
          <p className="text-sm text-green-600 mt-2">↑ 12% from last month</p>
        </div>
        <div className="card">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Revenue</h3>
          <p className="text-3xl font-bold text-gray-900">$45,678</p>
          <p className="text-sm text-green-600 mt-2">↑ 8% from last month</p>
        </div>
        <div className="card">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Active Sessions</h3>
          <p className="text-3xl font-bold text-gray-900">567</p>
          <p className="text-sm text-blue-600 mt-2">Currently online</p>
        </div>
      </div>
    </div>
  );
}