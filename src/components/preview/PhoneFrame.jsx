import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function PhoneFrame({
  children,
  deviceType = 'ios', // 'ios' | 'android'
  onReset = null,
  showControls = true,
  showCloseButton = false,
  backUrl = '/apps'
}) {
  const [device, setDevice] = useState(deviceType);
  const [currentTime, setCurrentTime] = useState('09:41');

  // Realistic live clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="phone-mockup-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Phone Controls Toolbar: In natural document flow with clean spacing, zero overlap */}
      {showControls && (
        <div
          className="phone-controls-toolbar"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            maxWidth: '320px',
            marginBottom: '12px',
            padding: '4px 6px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-pill)',
            boxShadow: 'var(--shadow-sm)',
            boxSizing: 'border-box',
            gap: '8px'
          }}
        >
          {/* Device Type Toggle (iOS / Android) */}
          <div
            style={{
              display: 'inline-flex',
              background: 'var(--bg-elevated)',
              borderRadius: 'var(--radius-pill)',
              padding: '2px',
              border: '1px solid var(--border)'
            }}
          >
            <button
              type="button"
              onClick={() => setDevice('ios')}
              style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.72rem',
                fontWeight: 700,
                background: device === 'ios' ? 'var(--brand-gold)' : 'transparent',
                color: device === 'ios' ? '#000000' : 'var(--text-secondary)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              title="Switch to Apple iOS styling"
            >
              iOS
            </button>
            <button
              type="button"
              onClick={() => setDevice('android')}
              style={{
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.72rem',
                fontWeight: 700,
                background: device === 'android' ? 'var(--brand-gold)' : 'transparent',
                color: device === 'android' ? '#000000' : 'var(--text-secondary)',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              title="Switch to Google Android styling"
            >
              Android
            </button>
          </div>

          {/* Action buttons (Reset & optional Close) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {onReset && (
              <button
                type="button"
                onClick={onReset}
                title="Reset demo data and state"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  background: 'var(--brand-gold-dim)',
                  border: '1px solid var(--border-gold)',
                  color: 'var(--brand-gold-light)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
                <span>Reset</span>
              </button>
            )}

            {showCloseButton && (
              <Link
                to={backUrl}
                title="Exit simulator and return"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>✕ Exit</span>
              </Link>
            )}
          </div>
        </div>
      )}

      {/* The Physical Device Frame */}
      <div className={`phone-frame phone-frame--${device}`}>
        {/* Notch / Dynamic Island / Punch Hole */}
        <div className="phone-notch-container">
          {device === 'ios' ? (
            <div className="phone-dynamic-island">
              <span className="phone-sensor" />
              <span className="phone-camera-lens" />
            </div>
          ) : (
            <div className="phone-punchhole" />
          )}
        </div>

        {/* Status Bar */}
        <div className="phone-status-bar">
          <span>{currentTime}</span>
          <div className="phone-status-bar__icons">
            {/* Cellular signal */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="16" width="3" height="6" rx="1" />
              <rect x="7" y="12" width="3" height="10" rx="1" />
              <rect x="12" y="8" width="3" height="14" rx="1" />
              <rect x="17" y="4" width="3" height="18" rx="1" />
            </svg>
            {/* Wi-Fi */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12.55a11 11 0 0 1 14.08 0" />
              <path d="M1.42 9a16 16 0 0 1 21.16 0" />
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
              <line x1="12" y1="20" x2="12.01" y2="20" strokeWidth="3" />
            </svg>
            {/* Battery */}
            <svg width="18" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="6" width="18" height="12" rx="2" />
              <line x1="22" y1="10" x2="22" y2="14" />
              <rect x="4" y="8" width="13" height="8" rx="1" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Internal Screen Viewport */}
        <div className="phone-screen">
          <div className="phone-screen-content">
            {children}
          </div>

          {/* Bottom Gestures */}
          {device === 'ios' ? (
            <div className="phone-home-indicator" />
          ) : (
            <div className="phone-android-nav">
              <span>|||</span>
              <span>◯</span>
              <span>‹</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
