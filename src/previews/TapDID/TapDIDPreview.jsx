import { useState } from 'react';

export default function TapDIDPreview() {
  const [profileType, setProfileType] = useState('work'); // 'work' | 'personal' | 'executive'
  const [nfcScanning, setNfcScanning] = useState(false);
  const [nfcSuccess, setNfcSuccess] = useState(false);
  const [vcardSaved, setVcardSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('card'); // 'card' | 'qr' | 'history'

  const [connections, setConnections] = useState([
    { name: 'Dr. Suresh Reddy', company: 'Apollo Hospital Networks', time: 'Yesterday, 4:20 PM', mode: 'NFC Tap' },
    { name: 'Ananya Deshmukh', company: 'Telangana Tech Council', time: 'Oct 24, 11:15 AM', mode: 'Dynamic QR' }
  ]);

  const profile = {
    work: {
      name: 'Karthik Varma',
      title: 'VP — Enterprise Engineering',
      company: 'Deccan IDentity Software Pvt. Ltd.',
      email: 'karthik.v@deccanidentity.com',
      phone: '+91 90000 35869',
      avatarBg: 'linear-gradient(135deg, #1d4ed8, #1e40af)',
      didNumber: 'did:deccan:0x89f2c...7b31',
      badge: 'Verified Corporate DID',
      color: '#3B82F6'
    },
    executive: {
      name: 'Karthik Varma',
      title: 'Principal Systems Architect',
      company: 'DeccanIDentity Consulting',
      email: 'consulting@deccanidentity.com',
      phone: '+91 81860 35869',
      avatarBg: 'linear-gradient(135deg, #B45309, #78350F)',
      didNumber: 'did:deccan:0x93aa1...48c2',
      badge: 'Executive Advisory',
      color: '#F59E0B'
    },
    personal: {
      name: 'Karthik Varma',
      title: 'Tech Speaker & Open Source Contributor',
      company: 'Hyderabad React & Rust Community',
      email: 'karthik@personal.io',
      phone: '+91 94947 65679',
      avatarBg: 'linear-gradient(135deg, #4338ca, #312e81)',
      didNumber: 'did:deccan:0x11ff4...99a0',
      badge: 'Community Identity',
      color: '#8B5CF6'
    }
  }[profileType];

  const handleSimulateNFC = () => {
    setNfcScanning(true);
    setNfcSuccess(false);
    setTimeout(() => {
      setNfcScanning(false);
      setNfcSuccess(true);
      setConnections(prev => [
        {
          name: 'Device (Nearby iPhone 16)',
          company: 'Simulated NFC Handshake',
          time: 'Just now',
          mode: 'NFC Tap'
        },
        ...prev
      ]);
      setTimeout(() => setNfcSuccess(false), 2500);
    }, 1600);
  };

  const handleSaveVCard = () => {
    setVcardSaved(true);
    setTimeout(() => setVcardSaved(false), 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#090b10', color: '#f8fafc', fontSize: '0.85rem' }}>
      {/* Simulation Banner */}
      <div style={{ background: '#2563EB', color: '#fff', fontSize: '0.65rem', fontWeight: 700, padding: '3px 8px', textAlign: 'center', letterSpacing: '0.04em' }}>
        SIMULATED PROTOTYPE · TAPDID NFC & DID ENGINE
      </div>

      {/* Header */}
      <div style={{ padding: '12px 14px', background: '#111520', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.25rem' }}>🪪</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fff', letterSpacing: '-0.02em' }}>TapDID Smart Card</div>
            <div style={{ fontSize: '0.65rem', color: '#60a5fa' }}>● Hardware NFC Ready</div>
          </div>
        </div>
        <span style={{ fontSize: '0.68rem', padding: '3px 8px', borderRadius: '20px', background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
          v3.1 Live
        </span>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>
        {/* Profile Switcher Pills */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
          {[
            { id: 'work', label: 'Work' },
            { id: 'executive', label: 'Executive' },
            { id: 'personal', label: 'Personal' }
          ].map(p => (
            <button
              key={p.id}
              type="button"
              onClick={() => setProfileType(p.id)}
              style={{
                flex: 1,
                padding: '6px 0',
                borderRadius: '8px',
                fontSize: '0.72rem',
                fontWeight: 700,
                background: profileType === p.id ? profile.color : '#161d2d',
                color: profileType === p.id ? '#fff' : '#94a3b8',
                border: '1px solid rgba(255,255,255,0.08)'
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        {activeTab === 'card' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* The Smart Digital Business Card */}
            <div
              style={{
                background: profile.avatarBg,
                borderRadius: '16px',
                padding: '16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.2)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.62rem', fontWeight: 700, color: '#fff' }}>
                  {profile.badge}
                </span>
                <span style={{ fontSize: '1.1rem' }}>⚡</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fff', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', flexShrink: 0 }}>
                  KV
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#fff', fontWeight: 800 }}>{profile.name}</h4>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.85)' }}>{profile.title}</div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.65)' }}>{profile.company}</div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)' }}>
                <span>{profile.didNumber}</span>
                <span style={{ fontWeight: 700 }}>NFC ACTIVE</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <button
                type="button"
                onClick={handleSimulateNFC}
                disabled={nfcScanning}
                style={{
                  background: '#2563EB',
                  color: '#fff',
                  padding: '10px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <span>📡</span>
                <span>{nfcScanning ? 'Transmitting...' : 'Simulate NFC Tap'}</span>
              </button>

              <button
                type="button"
                onClick={handleSaveVCard}
                style={{
                  background: '#161d2d',
                  color: '#f8fafc',
                  border: '1px solid rgba(255,255,255,0.12)',
                  padding: '10px',
                  borderRadius: '10px',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px'
                }}
              >
                <span>📥</span>
                <span>{vcardSaved ? 'Saved to Contacts!' : 'Export vCard'}</span>
              </button>
            </div>

            {/* NFC Transmission State Banner */}
            {nfcScanning && (
              <div style={{ background: 'rgba(37, 99, 235, 0.15)', border: '1px solid #3b82f6', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.2rem', animation: 'spin 1s linear infinite' }}>🔄</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#60a5fa', marginTop: '4px' }}>
                  Broadcasting encrypted DID payload via NFC...
                </div>
              </div>
            )}

            {nfcSuccess && (
              <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid #10b981', borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '1rem', color: '#10b981', fontWeight: 800 }}>✓ Contact Successfully Transmitted!</div>
                <div style={{ fontSize: '0.68rem', color: '#cbd5e1', marginTop: '2px' }}>Profile card received by simulated recipient smartphone.</div>
              </div>
            )}

            {/* Channels & Info */}
            <div style={{ background: '#121826', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginBottom: '8px', fontWeight: 700, textTransform: 'uppercase' }}>
                Connected Channels
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.75rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#cbd5e1' }}>Direct Phone:</span>
                  <span style={{ fontWeight: 600, color: '#60a5fa' }}>{profile.phone}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#cbd5e1' }}>Verified Email:</span>
                  <span style={{ fontWeight: 600, color: '#fff' }}>{profile.email}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#cbd5e1' }}>Identity Protocol:</span>
                  <span style={{ fontWeight: 600, color: '#34d399' }}>W3C Verifiable Credential</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'qr' && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>Dynamic Identity QR Card</div>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: 0 }}>
              Scan with any camera app to instantly add {profile.name} to mobile address book.
            </p>

            {/* Simulated High-Res QR code box */}
            <div style={{ background: '#ffffff', padding: '14px', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.5)', width: '190px', height: '190px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="150" height="150" viewBox="0 0 100 100" fill="#000000">
                {/* 3 Position Detection Markers */}
                <rect x="5" y="5" width="28" height="28" fill="#000" rx="3" />
                <rect x="9" y="9" width="20" height="20" fill="#fff" rx="2" />
                <rect x="13" y="13" width="12" height="12" fill="#000" rx="1" />

                <rect x="67" y="5" width="28" height="28" fill="#000" rx="3" />
                <rect x="71" y="9" width="20" height="20" fill="#fff" rx="2" />
                <rect x="75" y="13" width="12" height="12" fill="#000" rx="1" />

                <rect x="5" y="67" width="28" height="28" fill="#000" rx="3" />
                <rect x="9" y="71" width="20" height="20" fill="#fff" rx="2" />
                <rect x="13" y="75" width="12" height="12" fill="#000" rx="1" />

                {/* Simulated Payload Matrix */}
                <rect x="38" y="10" width="8" height="8" />
                <rect x="50" y="18" width="6" height="6" />
                <rect x="38" y="24" width="8" height="8" />
                <rect x="10" y="40" width="6" height="6" />
                <rect x="22" y="44" width="8" height="8" />
                <rect x="38" y="40" width="10" height="10" />
                <rect x="56" y="40" width="8" height="8" />
                <rect x="72" y="42" width="6" height="6" />
                <rect x="84" y="46" width="6" height="6" />
                <rect x="42" y="60" width="8" height="8" />
                <rect x="56" y="58" width="8" height="8" />
                <rect x="70" y="62" width="10" height="10" />
                <rect x="85" y="68" width="6" height="6" />
                <rect x="40" y="76" width="8" height="8" />
                <rect x="54" y="80" width="10" height="10" />
                <rect x="70" y="82" width="8" height="8" />
                <rect x="84" y="84" width="6" height="6" />
              </svg>
            </div>

            <span style={{ fontSize: '0.65rem', color: '#60a5fa', background: 'rgba(59,130,246,0.1)', padding: '4px 10px', borderRadius: '12px' }}>
              🔒 Encrypted with TapDID Keystore
            </span>
          </div>
        )}

        {activeTab === 'history' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#60a5fa' }}>Recent Card Exchanges</div>
            {connections.map((c, i) => (
              <div key={i} style={{ background: '#121826', borderRadius: '10px', padding: '10px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff' }}>{c.name}</span>
                  <span style={{ fontSize: '0.65rem', color: '#60a5fa', background: 'rgba(59,130,246,0.15)', padding: '2px 6px', borderRadius: '4px' }}>{c.mode}</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: '#cbd5e1', marginTop: '2px' }}>{c.company}</div>
                <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '4px' }}>⏱️ {c.time}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* In-App Mobile Bottom Bar */}
      <div style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.08)', background: '#0d121c', padding: '6px 0', zIndex: 10 }}>
        {[
          { id: 'card', label: 'My Card', icon: '🪪' },
          { id: 'qr', label: 'QR Share', icon: '📷' },
          { id: 'history', label: 'Exchanges', icon: '🤝' }
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
              color: activeTab === tab.id ? '#60a5fa' : '#64748b',
              padding: '4px 0'
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
