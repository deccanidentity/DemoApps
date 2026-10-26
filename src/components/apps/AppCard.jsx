import { Link } from 'react-router-dom';

export default function AppCard({ app }) {
  return (
    <div className="app-card" id={`app-${app.id}`}>
      <div className="app-card__header">
        <div
          className="app-card__icon-box"
          style={{
            background: `linear-gradient(135deg, ${app.iconColor}22 0%, ${app.iconColor}44 100%)`,
            color: app.iconColor
          }}
          aria-hidden="true"
        >
          {app.iconSymbol}
        </div>

        <div className="app-card__title-group">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <h3 className="app-card__title">
              {app.name}
            </h3>
            {app.hasLivePreview ? (
              <span className="badge badge-live">Live Demo</span>
            ) : (
              <span className="badge badge-concept">In Dev</span>
            )}
          </div>
          <span className="app-card__category">{app.categoryName}</span>
        </div>
      </div>

      <p className="app-card__desc">
        {app.shortDescription}
      </p>

      <div className="app-card__meta">
        <div className="app-card__platforms">
          {app.platforms.map(p => (
            <span key={p} className="badge-platform">{p}</span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-gold)', fontWeight: 700 }}>
          <span>★</span>
          <span>{app.rating.toFixed(1)}</span>
        </div>
      </div>

      {app.storeLinks?.android && (
        <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 12px', background: 'rgba(200, 134, 10, 0.08)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-gold)' }}>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <span>▶</span>
            <span>Live on Google Play</span>
          </span>
          <a
            href={app.storeLinks.android}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--brand-gold-light)', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
            onClick={(e) => e.stopPropagation()}
            title={`Download ${app.name} on Google Play Store`}
          >
            <span>Download ↗</span>
          </a>
        </div>
      )}

      <div className="app-card__actions">
        <Link to={`/app/${app.id}`} className="btn btn-outline btn-sm">
          <span>View Details</span>
        </Link>

        {app.hasLivePreview ? (
          <Link to={`/app/${app.id}/preview`} className="btn btn-primary btn-sm">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            <span>Try Demo</span>
          </Link>
        ) : (
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            disabled
            style={{ opacity: 0.6, cursor: 'not-allowed' }}
            title="Interactive preview under development"
          >
            <span>Demo Soon</span>
          </button>
        )}
      </div>
    </div>
  );
}
