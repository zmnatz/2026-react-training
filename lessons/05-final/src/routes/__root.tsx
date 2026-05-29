import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { AppProvider } from '../state/AppContext';
import './../style.css';

export const Route = createRootRoute({
  component: () => (
    <AppProvider>
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', display: 'flex', gap: '10px' }}>
        <Link to="/" className="link">Chat</Link>
        <Link to="/admin" className="link">Admin</Link>
      </nav>
      <hr />
      <Outlet />
    </AppProvider>
  ),
});

