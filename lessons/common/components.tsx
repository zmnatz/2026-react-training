export function Header() {
  return (
    <header className="header">
      <img src="/logo.png" alt="Logo" className="logo" />
      <div className="brand-name">Jimbot 2.0: your highly trained AI Bot</div>
    </header>
  );
}

export function EmptyState() {
  return (
    <div className="empty-state">
      <img src="/logo.png" alt="Logo" className="empty-state-logo" />
      <div className="empty-state-text">Jimbot 2.0: your highly trained AI Bot</div>
    </div>
  );
}
