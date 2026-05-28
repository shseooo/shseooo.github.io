import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export default function AdminPage() {
  const { t } = useTranslation();
  const [token, setToken] = React.useState('');
  const [user, setUser] = React.useState('');
  const [repo, setRepo] = React.useState('');
  const [saved, setSaved] = React.useState(false);

  React.useEffect(() => {
    setToken(localStorage.getItem('github_token') || '');
    setUser(localStorage.getItem('github_user') || '');
    setRepo(localStorage.getItem('github_repo') || '');
  }, []);

  const handleSave = () => {
    localStorage.setItem('github_token', token);
    localStorage.setItem('github_user', user);
    localStorage.setItem('github_repo', repo);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Settings</h1>

      {saved && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Settings saved!
        </div>
      )}

      <div className="max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">GitHub User</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="your-username"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Repository Name</label>
          <input
            type="text"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="blog"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">GitHub Personal Access Token</label>
          <input
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="ghp_xxxxxxxxxxxx"
          />
          <p className="text-xs text-gray-500 mt-1">
            Token needs repo scope. Get it from GitHub Settings &gt; Developer settings &gt; Personal access tokens.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}
