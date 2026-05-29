import { createRoute } from '@tanstack/react-router';
import { Route as rootRoute } from './__root';
import { useApp } from '../state/AppContext';

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminPage,
});

function AdminPage() {
  const { theme, setTheme, model, setModel } = useApp();
  const models = ['gpt-4', 'gpt-3.5-turbo', 'claude-3-opus', 'llama-3'];

  return (
    <div className="admin-page" style={{ padding: '20px' }}>
      <h1>Admin Settings</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <label>Theme: </label>
        <select value={theme} onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label>Default Model: </label>
        <select value={model} onChange={(e) => setModel(e.target.value)}>
          {models.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
