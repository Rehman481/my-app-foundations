export default function SettingsPage() {
  return (
    <div className="container py-12 max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
      <div className="space-y-6">
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email Notifications</p>
                <p className="text-sm text-gray-600">Receive updates via email</p>
              </div>
              <button className="btn btn-primary">Enable</button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-gray-600">Switch to dark theme</p>
              </div>
              <button className="btn btn-secondary">Disabled</button>
            </div>
          </div>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <button className="btn btn-secondary w-full">Change Password</button>
        </div>
      </div>
    </div>
  );
}