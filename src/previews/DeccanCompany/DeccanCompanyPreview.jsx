import { useState } from 'react';

const SERVICES = [
  { id: 'mobile', title: 'Mobile App Engineering', icon: '📱', desc: 'Enterprise iOS, Android, React Native & Flutter solutions with offline-first architecture.' },
  { id: 'cloud', title: 'Cloud & Web Platforms', icon: '☁️', desc: 'Ultra-scalable distributed cloud backends, microservices, and high-concurrency APIs.' },
  { id: 'security', title: 'Cybersecurity & IAM', icon: '🛡️', desc: 'Decentralized identity (DID), biometric access control, and SOC 2 security compliance.' },
  { id: 'ai', title: 'Enterprise AI & Vision', icon: '🧠', desc: 'Custom edge AI models, automated OCR document extractors, and LLM agent integration.' }
];

const TEAM = [
  { name: 'Dr. V. Prasad', role: 'Chief Technical Officer', center: 'Hyderabad', exp: '18+ yrs' },
  { name: 'Sameer Rao', role: 'Head of Mobile Architecture', center: 'Hyderabad', exp: '12+ yrs' },
  { name: 'Kavitha M.', role: 'Lead IAM & Security Architect', center: 'Ongole', exp: '10+ yrs' },
  { name: 'N. Rajesh Kumar', role: 'Director — Client Engagements', center: 'Tirupati', exp: '14+ yrs' }
];

export default function DeccanCompanyPreview() {
  const [activeTab, setActiveTab] = useState('services'); // 'services' | 'team' | 'inquiry' | 'branches'

  // Inquiry Form
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [projectBudget, setProjectBudget] = useState('₹5L - ₹15L');
  const [notes, setNotes] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    if (!clientName || !clientEmail) return;

    setTicketId(`DEC-${Math.floor(10000 + Math.random() * 90000)}`);
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setClientName('');
      setClientEmail('');
      setNotes('');
      setActiveTab('services');
    }, 2000);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0a0a0c', color: '#f8fafc', fontSize: '0.85rem' }}>
      {/* Simulation Banner */}
      <div style={{ background: '#C8860A', color: '#000', fontSize: '0.65rem', fontWeight: 700, padding: '3px 8px', textAlign: 'center', letterSpacing: '0.04em' }}>
        DECCANIDENTITY CORPORATE DEMO · INTERNAL SUITE
      </div>

      {/* Header */}
      <div style={{ padding: '12px 14px', background: '#111116', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/deccan-logo.png" alt="DeccanIDentity" style={{ width: '22px', height: '22px' }} />
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#fff', letterSpacing: '-0.02em' }}>DeccanIDentity</div>
            <div style={{ fontSize: '0.65rem', color: '#F0A830' }}>Enterprise Mobile Suite</div>
          </div>
        </div>
        <span style={{ fontSize: '0.65rem', padding: '2px 8px', borderRadius: '12px', background: 'rgba(200, 134, 10, 0.15)', color: '#F0A830', border: '1px solid rgba(200, 134, 10, 0.3)', fontWeight: 700 }}>
          v1.6 MDM
        </span>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>
        {activeTab === 'services' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Hero Card */}
            <div style={{ background: 'linear-gradient(135deg, #1c150c 0%, #111116 100%)', border: '1px solid rgba(200, 134, 10, 0.3)', borderRadius: '14px', padding: '14px' }}>
              <div style={{ fontSize: '0.68rem', color: '#F0A830', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                Engineering Excellence
              </div>
              <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#fff', fontWeight: 800 }}>
                Enterprise Software Architecture
              </h3>
              <p style={{ margin: '6px 0 10px', fontSize: '0.72rem', color: '#cbd5e1', lineHeight: 1.4 }}>
                We engineer mission-critical mobile and cloud systems for high-growth enterprises across India and globally.
              </p>
              <button
                type="button"
                onClick={() => setActiveTab('inquiry')}
                style={{
                  background: '#C8860A',
                  color: '#000',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  fontSize: '0.72rem',
                  fontWeight: 800
                }}
              >
                Request Architecture Consultation ➔
              </button>
            </div>

            {/* Services Grid */}
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginTop: '4px' }}>
              CORE PILLARS & SOLUTIONS
            </div>

            {SERVICES.map(s => (
              <div
                key={s.id}
                onClick={() => setSelectedService(s)}
                style={{
                  background: '#15151a',
                  borderRadius: '12px',
                  padding: '12px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer'
                }}
              >
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(200,134,10,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                  {s.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff' }}>{s.title}</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>{s.desc}</div>
                </div>
                <span style={{ color: '#F0A830', fontSize: '0.8rem' }}>›</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'team' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#F0A830' }}>Principal Leadership & Architects</div>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: 0 }}>
              Direct access to our senior engineers and development center leads.
            </p>

            {TEAM.map((member, i) => (
              <div key={i} style={{ background: '#15151a', borderRadius: '10px', padding: '12px', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff' }}>{member.name}</div>
                  <div style={{ fontSize: '0.7rem', color: '#F0A830' }}>{member.role}</div>
                  <div style={{ fontSize: '0.65rem', color: '#94a3b8', marginTop: '2px' }}>📍 {member.center} · {member.exp} Experience</div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveTab('inquiry')}
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    padding: '6px 10px',
                    borderRadius: '6px',
                    fontSize: '0.68rem',
                    fontWeight: 600
                  }}
                >
                  Consult
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'inquiry' && (
          <div style={{ background: '#15151a', borderRadius: '14px', padding: '14px', border: '1px solid rgba(200, 134, 10, 0.3)' }}>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#F0A830', marginBottom: '4px' }}>
              Enterprise Project Consultation
            </div>
            <p style={{ fontSize: '0.7rem', color: '#94a3b8', marginBottom: '12px' }}>
              Connect directly with our engineering architects within 24 hours.
            </p>

            {inquirySubmitted ? (
              <div style={{ textAlign: 'center', padding: '24px 10px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🎉</div>
                <div style={{ fontWeight: 800, color: '#34d399', fontSize: '0.95rem' }}>Consultation Scheduled!</div>
                <p style={{ fontSize: '0.72rem', color: '#cbd5e1', marginTop: '4px' }}>
                  Reference Ticket: <strong>{ticketId || 'DEC-24018'}</strong>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.68rem', color: '#94a3b8', marginBottom: '3px' }}>Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Chandra"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    style={{ width: '100%', padding: '8px', background: '#0a0a0c', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#fff', fontSize: '0.78rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.68rem', color: '#94a3b8', marginBottom: '3px' }}>Corporate Email</label>
                  <input
                    type="email"
                    required
                    placeholder="vikram@enterprise.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    style={{ width: '100%', padding: '8px', background: '#0a0a0c', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#fff', fontSize: '0.78rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.68rem', color: '#94a3b8', marginBottom: '3px' }}>Estimated Budget Scope</label>
                  <select
                    value={projectBudget}
                    onChange={(e) => setProjectBudget(e.target.value)}
                    style={{ width: '100%', padding: '8px', background: '#0a0a0c', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#fff', fontSize: '0.78rem' }}
                  >
                    <option>₹5L - ₹15L (Startup MVP)</option>
                    <option>₹15L - ₹40L (Growth & Production)</option>
                    <option>₹40L+ (Enterprise Custom Platform)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.68rem', color: '#94a3b8', marginBottom: '3px' }}>Project Summary</label>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe your mobile/cloud requirements..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    style={{ width: '100%', padding: '8px', background: '#0a0a0c', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#fff', fontSize: '0.78rem' }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: '#C8860A',
                    color: '#000',
                    padding: '10px',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '0.8rem',
                    marginTop: '4px'
                  }}
                >
                  Submit Brief to DeccanIDentity Desk
                </button>
              </form>
            )}
          </div>
        )}

        {activeTab === 'branches' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#F0A830' }}>Office Centers & Connectivity</div>

            <div style={{ background: '#15151a', borderRadius: '10px', padding: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#fff' }}>Adibatla Engineering Center (HQ)</div>
              <div style={{ fontSize: '0.7rem', color: '#cbd5e1', marginTop: '2px' }}>Adibatla, Hyderabad, Telangana — 501510</div>
              <div style={{ fontSize: '0.68rem', color: '#F0A830', marginTop: '4px' }}>📞 +91 90000 35869</div>
            </div>

            <div style={{ background: '#15151a', borderRadius: '10px', padding: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#fff' }}>Ongole Development Center</div>
              <div style={{ fontSize: '0.7rem', color: '#cbd5e1', marginTop: '2px' }}>Gupta's Midtown, Ongole, Andhra Pradesh — 523001</div>
              <div style={{ fontSize: '0.68rem', color: '#F0A830', marginTop: '4px' }}>📞 +91 94947 65679</div>
            </div>

            <div style={{ background: '#15151a', borderRadius: '10px', padding: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontWeight: 800, fontSize: '0.85rem', color: '#fff' }}>Tirupati Tech Hub</div>
              <div style={{ fontSize: '0.7rem', color: '#cbd5e1', marginTop: '2px' }}>Mangalam, Tirupati, Andhra Pradesh — 517501</div>
              <div style={{ fontSize: '0.68rem', color: '#F0A830', marginTop: '4px' }}>📞 +91 90000 35869</div>
            </div>
          </div>
        )}
      </div>

      {/* In-App Mobile Bottom Bar */}
      <div style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.08)', background: '#0e0e13', padding: '6px 0', zIndex: 10 }}>
        {[
          { id: 'services', label: 'Solutions', icon: '🏛️' },
          { id: 'team', label: 'Team', icon: '👥' },
          { id: 'inquiry', label: 'RFP Brief', icon: '📝' },
          { id: 'branches', label: 'Offices', icon: '📍' }
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
              color: activeTab === tab.id ? '#F0A830' : '#64748b',
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
