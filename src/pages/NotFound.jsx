import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main
      style={{
        paddingTop: 'calc(var(--nav-height) + 60px)',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 20px'
      }}
    >
      <div style={{ maxWidth: '480px' }}>
        <div style={{ fontSize: '4rem', marginBottom: '16px' }}>📱 404</div>
        <h1 style={{ fontSize: '2rem', marginBottom: '12px' }}>Application Not Found</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', lineHeight: 1.6 }}>
          The mobile application showcase or route you are attempting to reach does not exist or has been relocated in the catalog.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <Link to="/" className="btn btn-primary">
            Return to Homepage
          </Link>
          <Link to="/apps" className="btn btn-outline">
            Explore All Apps
          </Link>
        </div>
      </div>
    </main>
  );
}
