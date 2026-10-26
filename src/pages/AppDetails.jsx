import { useParams, Link, Navigate } from 'react-router-dom';
import { appsData } from '../data/apps.js';
import siteConfig from '../data/site.config.js';
import PreviewContainer from '../components/preview/PreviewContainer.jsx';

export default function AppDetails() {
  const { appId } = useParams();
  const app = appsData.find(a => a.id === appId);

  if (!app) {
    return <Navigate to="/apps" replace />;
  }

  return (
    <main style={{ paddingTop: 'calc(var(--nav-height) + 24px)', minHeight: '85vh' }}>
      <div className="container">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: '24px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <Link to="/apps" style={{ color: 'var(--text-secondary)' }}>Apps</Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span style={{ color: 'var(--brand-gold-light)', fontWeight: 600 }}>{app.name}</span>
        </nav>

        {/* Top App Header Strip */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            padding: '24px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-xl)',
            marginBottom: '36px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '20px',
                background: `linear-gradient(135deg, ${app.iconColor}22 0%, ${app.iconColor}44 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.4rem',
                border: '1px solid rgba(255,255,255,0.15)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)'
              }}
              aria-hidden="true"
            >
              {app.iconSymbol}
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', margin: 0 }}>{app.name}</h1>
                <span className="badge badge-gold">{app.badge}</span>
                {app.hasLivePreview ? (
                  <span className="badge badge-live">Live Interactive Simulator</span>
                ) : (
                  <span className="badge badge-concept">In Dev Pipeline</span>
                )}
              </div>
              <p style={{ color: 'var(--text-secondary)', marginTop: '4px', fontSize: '0.95rem' }}>
                {app.tagline}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {app.hasLivePreview && (
              <Link to={`/app/${app.id}/preview`} className="btn btn-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                <span>Full-Screen Simulator</span>
              </Link>
            )}

            {app.storeLinks?.android && (
              <a
                href={app.storeLinks.android}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                title={`Download ${app.name} on Google Play Store`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.793 12 3.61 22.186c-.36-.36-.61-.88-.61-1.47V3.284c0-.59.25-1.11.609-1.47zm11.604 11.604L4.832 2.375 16.97 9.382l-1.757 4.036zm0-2.836l1.757 4.036L4.832 21.625l10.381-11.043zm1.42 1.42l3.438-1.984c.83-.48.83-1.26 0-1.74l-3.438-1.985-1.574 3.61 1.574 2.099z"/>
                </svg>
                <span>Google Play</span>
              </a>
            )}

            {app.storeLinks?.ios && (
              <a
                href={app.storeLinks.ios}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                title={`Download ${app.name} on Apple App Store`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.64-.78 1.08-1.86.96-2.94-1 .04-2.13.67-2.79 1.44-.58.67-1.1 1.76-.96 2.82 1.12.09 2.16-.54 2.79-1.32z"/>
                </svg>
                <span>App Store</span>
              </a>
            )}

            {app.storeLinks?.website && (
              <a
                href={app.storeLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                title={`Visit official website: ${app.storeLinks.website}`}
              >
                <span>🌐</span>
                <span>Website</span>
              </a>
            )}

            <a
              href={`${siteConfig.whatsappLink}?text=Hello%20DeccanIDentity,%20I%20am%20interested%20in%20customizing%20${encodeURIComponent(app.name)}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp"
            >
              <span>Inquire Custom App</span>
            </a>
          </div>
        </div>

        {/* Main Two-Column Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '60px'
          }}
          className="app-detail-grid"
        >
          {/* Left Column: Product Information & Specs */}
          <div>
            {/* Overview Card */}
            <div className="card" style={{ padding: '28px', marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>Executive Overview</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '20px' }}>
                {app.fullDescription}
              </p>

              {/* Platform Badges */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Supported Platforms:</span>
                {app.platforms.map(p => (
                  <span key={p} className="badge-platform" style={{ padding: '5px 12px', fontSize: '0.8rem' }}>{p}</span>
                ))}
                <span style={{ fontSize: '0.85rem', color: 'var(--text-gold)', fontWeight: 700, marginLeft: 'auto' }}>
                  ★ {app.rating.toFixed(2)} Rating ({app.reviewsCount} reviews)
                </span>
              </div>
            </div>

            {/* Core Features Grid */}
            <div className="card" style={{ padding: '28px', marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>Core Capabilities & Workflow Features</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
                {app.features.map((feat, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-elevated)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ color: 'var(--brand-gold)' }}>✓</span>
                      <h3 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>{feat.title}</h3>
                    </div>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Specifications */}
            <div className="card" style={{ padding: '28px', marginBottom: '28px' }}>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '16px' }}>Technical Architecture Specifications</h2>
              <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                {Object.entries(app.specifications).map(([key, val], i) => (
                  <div
                    key={key}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 18px',
                      background: i % 2 === 0 ? 'var(--bg-surface)' : 'var(--bg-card)',
                      borderBottom: i < Object.keys(app.specifications).length - 1 ? '1px solid var(--border)' : 'none',
                      fontSize: '0.875rem'
                    }}
                  >
                    <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>{key}</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700 }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Store & Distribution Disclosure */}
            <div
              style={{
                background: 'var(--brand-gold-subtle)',
                border: '1px solid var(--border-gold)',
                borderRadius: 'var(--radius-lg)',
                padding: '22px',
                fontSize: '0.85rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--brand-gold-light)', fontWeight: 700, marginBottom: '8px' }}>
                <span>ℹ️</span>
                <span>Official App Store & Distribution Channels</span>
              </div>
              <p style={{ color: 'var(--text-secondary)', margin: '0 0 14px 0', lineHeight: 1.5 }}>
                {app.storeLinks.statusNote}
              </p>

              {(app.storeLinks.android || app.storeLinks.ios || app.storeLinks.website) && (
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', paddingTop: '12px', borderTop: '1px solid rgba(200, 134, 10, 0.2)' }}>
                  {app.storeLinks.android && (
                    <a
                      href={app.storeLinks.android}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <span>▶</span>
                      <span>Google Play Store</span>
                    </a>
                  )}

                  {app.storeLinks.ios && (
                    <a
                      href={app.storeLinks.ios}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <span></span>
                      <span>Apple App Store</span>
                    </a>
                  )}

                  {app.storeLinks.website && (
                    <a
                      href={app.storeLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <span>🌐</span>
                      <span>Official Website</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Live Smartphone Simulator Viewport */}
          <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '12px', textAlign: 'center' }}>
              <span className="badge badge-gold" style={{ marginBottom: '4px' }}>Interactive Device Viewport</span>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Scroll & interact with live controls inside the phone screen
              </div>
            </div>

            <PreviewContainer
              app={app}
              backUrl="/apps"
              showControls={true}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .app-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
