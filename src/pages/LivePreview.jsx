import { useParams, Link, Navigate } from 'react-router-dom';
import { appsData } from '../data/apps.js';
import PreviewContainer from '../components/preview/PreviewContainer.jsx';

export default function LivePreview() {
  const { appId } = useParams();
  const app = appsData.find(a => a.id === appId);

  if (!app) {
    return <Navigate to="/apps" replace />;
  }

  return (
    <main
      style={{
        paddingTop: 'calc(var(--nav-height) + 20px)',
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '40px'
      }}
    >
      <div className="container" style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span className="badge badge-gold">{app.categoryName}</span>
          <span className="badge badge-live">Interactive Device Simulator</span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', marginBottom: '8px' }}>
          {app.name} — Live Mobile Prototype
        </h1>

        <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 16px', fontSize: '0.9rem' }}>
          Test interactive workflows, navigation tabs, and form submissions inside the device frame below.
        </p>

        {/* Prototype Disclaimer Bar */}
        <div
          style={{
            maxWidth: '560px',
            margin: '0 auto',
            background: 'rgba(200, 134, 10, 0.1)',
            border: '1px solid rgba(200, 134, 10, 0.3)',
            borderRadius: 'var(--radius-pill)',
            padding: '6px 18px',
            fontSize: '0.78rem',
            color: 'var(--brand-gold-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <span>ℹ️</span>
          <span>Simulated Mobile Prototype · Uses isolated client mock data</span>
        </div>
      </div>

      {/* The Centralized Simulator */}
      <div style={{ position: 'relative', marginTop: '16px' }}>
        <PreviewContainer
          app={app}
          backUrl={`/app/${app.id}`}
          showControls={true}
          showCloseButton={true}
        />
      </div>

      {/* Return to App Details Link & Store Download */}
      <div style={{ marginTop: '28px', display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to={`/app/${app.id}`} className="btn btn-outline btn-sm">
          <span>← Back to {app.name} Overview</span>
        </Link>
        {app.storeLinks?.android && (
          <a
            href={app.storeLinks.android}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <span>▶</span>
            <span>Download Official App (Play Store)</span>
          </a>
        )}
        <Link to="/apps" className="btn btn-ghost btn-sm">
          <span>Browse All Mobile Demos</span>
        </Link>
      </div>
    </main>
  );
}
