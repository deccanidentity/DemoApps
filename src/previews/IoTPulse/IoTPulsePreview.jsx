import { useState, useEffect } from 'react';

export default function IoTPulsePreview() {
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'controls' | 'alerts'
  
  // Interactive Relays State
  const [relays, setRelays] = useState({
    pump: true,
    hvac: false,
    solar: true,
    exhaust: false,
  });

  // Simulated live sensor fluctuation
  const [temp, setTemp] = useState(28.4);
  const [power, setPower] = useState(3.42);
  const [lastSynced, setLastSynced] = useState('Just now');

  useEffect(() => {
    const timer = setInterval(() => {
      setTemp(prev => Number((prev + (Math.random() * 0.4 - 0.2)).toFixed(1)));
      setPower(prev => Number((prev + (Math.random() * 0.1 - 0.05)).toFixed(2)));
      setLastSynced('1s ago');
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const toggleRelay = (key) => {
    setRelays(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#090a0f', color: '#f1f5f9', fontSize: '0.825rem', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Top Telemetry Header */}
      <div style={{ background: '#0e111a', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.95rem' }}>
            📡
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.88rem', color: '#ffffff', letterSpacing: '-0.01em' }}>IoTPulse Core</div>
            <div style={{ fontSize: '0.65rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              BLE Mesh Online · {lastSynced}
            </div>
          </div>
        </div>
        <span style={{ fontSize: '0.625rem', padding: '2px 8px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', border: '1px solid rgba(16, 185, 129, 0.3)', fontWeight: 700 }}>
          RSSI -48dBm
        </span>
      </div>

      {/* Main Scrollable View */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px', WebkitOverflowScrolling: 'touch' }}>
        {activeTab === 'dashboard' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Live Environment Gauges 2x2 */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div style={{ background: '#121622', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '10px' }}>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Core Temp</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f59e0b', marginTop: '2px' }}>
                  {temp}°C
                </div>
                <div style={{ fontSize: '0.62rem', color: '#10b981', marginTop: '2px' }}>✓ Nominal &lt; 38°C</div>
              </div>

              <div style={{ background: '#121622', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '10px' }}>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Power Load</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#38bdf8', marginTop: '2px' }}>
                  {power} kW
                </div>
                <div style={{ fontSize: '0.62rem', color: '#38bdf8', marginTop: '2px' }}>Phase Balanced</div>
              </div>

              <div style={{ background: '#121622', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '10px' }}>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Motor RPM</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#10b981', marginTop: '2px' }}>
                  1,440
                </div>
                <div style={{ fontSize: '0.62rem', color: '#94a3b8', marginTop: '2px' }}>Efficiency 98.4%</div>
              </div>

              <div style={{ background: '#121622', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '10px' }}>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Humidity</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#a855f7', marginTop: '2px' }}>
                  52% RH
                </div>
                <div style={{ fontSize: '0.62rem', color: '#10b981', marginTop: '2px' }}>Within Limits</div>
              </div>
            </div>

            {/* Quick Relay Control Deck */}
            <div style={{ background: '#121622', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: '#94a3b8' }}>
                  Smart Relay Switches
                </span>
                <span style={{ fontSize: '0.65rem', color: '#10b981', fontWeight: 700 }}>Tap to toggle</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { key: 'pump', name: 'Primary Borewell Pump', desc: '415V 7.5 HP · 3-Phase', icon: '💧' },
                  { key: 'hvac', name: 'Server Room HVAC Chill Unit', desc: 'Inverter Dual Zone · 24°C', icon: '❄️' },
                  { key: 'solar', name: 'Grid Solar Inverter Relay', desc: '15.2 kWh Generated Today', icon: '☀️' }
                ].map(r => (
                  <div
                    key={r.key}
                    onClick={() => toggleRelay(r.key)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 10px',
                      background: relays[r.key] ? 'rgba(16, 185, 129, 0.08)' : 'rgba(255,255,255,0.02)',
                      border: relays[r.key] ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid rgba(255,255,255,0.05)',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '1.05rem' }}>{r.icon}</span>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.75rem', color: relays[r.key] ? '#ffffff' : '#94a3b8' }}>{r.name}</div>
                        <div style={{ fontSize: '0.625rem', color: '#64748b' }}>{r.desc}</div>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        padding: '3px 8px',
                        borderRadius: '12px',
                        background: relays[r.key] ? '#10b981' : '#334155',
                        color: relays[r.key] ? '#000000' : '#94a3b8'
                      }}
                    >
                      {relays[r.key] ? 'ON' : 'OFF'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Gateway Telemetry Banner */}
            <div style={{ background: 'linear-gradient(135deg, #1c150c 0%, #111116 100%)', border: '1px solid rgba(200, 134, 10, 0.3)', borderRadius: '12px', padding: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.68rem', color: '#F0A830', fontWeight: 800 }}>
                <span>🛡️</span>
                <span>DECCANIDENTITY IOT STACK</span>
              </div>
              <div style={{ fontSize: '0.75rem', color: '#cbd5e1', marginTop: '4px', lineHeight: 1.4 }}>
                Supports MQTT over TLS, ESP32/Raspberry Pi integration, and offline-first local SQLite caching.
              </div>
            </div>
          </div>
        )}

        {activeTab === 'controls' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#10b981' }}>HARDWARE RELAY CONFIGURATION</div>
            {['pump', 'hvac', 'solar', 'exhaust'].map((key) => (
              <div key={key} style={{ background: '#121622', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.8rem', textTransform: 'capitalize' }}>Relay Output #{key}</div>
                  <div style={{ fontSize: '0.65rem', color: '#64748b' }}>GPIO Pin {key === 'pump' ? '24' : key === 'hvac' ? '25' : key === 'solar' ? '18' : '19'} · Active Low</div>
                </div>
                <button
                  type="button"
                  onClick={() => toggleRelay(key)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    background: relays[key] ? '#10b981' : '#1e293b',
                    color: relays[key] ? '#000000' : '#94a3b8',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  {relays[key] ? 'CONNECTED' : 'DISCONNECTED'}
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'alerts' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#f59e0b' }}>REAL-TIME SENSOR LOGS</div>
            {[
              { time: '14:28:10', msg: 'BLE Mesh sync complete with Gateway #01', type: 'info' },
              { time: '14:26:45', msg: 'Core temp checked (28.4°C) - Optimal', type: 'info' },
              { time: '14:20:00', msg: 'Primary Borewell Pump started on schedule', type: 'success' },
              { time: '13:58:12', msg: 'Grid Solar Inverter reporting 15.2 kWh', type: 'info' },
              { time: '12:00:00', msg: 'Automated 12-hour firmware heartbeat OK', type: 'success' },
            ].map((log, i) => (
              <div key={i} style={{ background: '#121622', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px', padding: '8px 10px', fontSize: '0.7rem' }}>
                <span style={{ color: '#64748b', marginRight: '6px', fontFamily: 'monospace' }}>[{log.time}]</span>
                <span style={{ color: log.type === 'success' ? '#10b981' : '#cbd5e1' }}>{log.msg}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.08)', background: '#0e111a', padding: '6px 0', zIndex: 10 }}>
        {[
          { id: 'dashboard', label: 'Telemetry', icon: '📊' },
          { id: 'controls', label: 'Relays', icon: '⚡' },
          { id: 'alerts', label: 'Live Logs', icon: '🔔' },
        ].map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              fontSize: '0.65rem',
              fontWeight: 600,
              color: activeTab === tab.id ? '#10b981' : '#64748b',
              padding: '4px 0',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <span style={{ fontSize: '1rem' }}>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
