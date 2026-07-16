export default function HomePage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to My App
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This is the home page. Navigate using the menu above to explore different sections.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <h2 className="text-xl font-semibold mb-3">Dashboard</h2>
            <p className="text-gray-600">View your analytics and key metrics.</p>
          </div>
          <div className="card">
            <h2 className="text-xl font-semibold mb-3">Profile</h2>
            <p className="text-gray-600">Manage your personal information.</p>
          </div>
          <div className="card">
            <h2 className="text-xl font-semibold mb-3">Settings</h2>
            <p className="text-gray-600">Configure your preferences.</p>
          </div>
          <div className="card">
            <h2 className="text-xl font-semibold mb-3">Health</h2>
            <p className="text-gray-600">Check system status and health.</p>
          </div>
        </div>
      </div>
    </div>
  );
}