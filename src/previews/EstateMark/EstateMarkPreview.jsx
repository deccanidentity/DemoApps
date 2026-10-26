import { useState } from 'react';

const INITIAL_PROPERTIES = [
  {
    id: 'p1',
    title: 'Deccan Aero Greens',
    type: 'plots',
    typeName: 'Open Plots',
    location: 'Adibatla Aerospace Corridor, Hyderabad',
    price: '₹38.5 Lakhs',
    priceSqYd: '₹18,500 / sq.yd',
    size: '200 - 450 Sq.Yds',
    status: 'Ready for Construction',
    rera: 'P02400004521',
    imageBg: 'linear-gradient(135deg, #1e3a5f, #0d1b2a)',
    tag: 'HMDA & RERA Approved',
    highlights: ['40ft BT Roads', 'Underground Cabling', 'Clubhouse & Park']
  },
  {
    id: 'p2',
    title: 'Emerald County Villas',
    type: 'villas',
    typeName: 'Gated Luxury Villa',
    location: 'Mokila - Shankarpally Road, Hyderabad',
    price: '₹1.85 Cr',
    priceSqYd: '4 BHK Duplex',
    size: '3,200 Sq.Ft',
    status: 'Under Construction (Dec 2026)',
    rera: 'P02400006733',
    imageBg: 'linear-gradient(135deg, #3d2645, #1e152a)',
    tag: 'Luxury Community',
    highlights: ['Private Garden', 'Infinity Pool', 'Smart Home Automation']
  },
  {
    id: 'p3',
    title: 'Skyline Pinnacle Towers',
    type: 'flats',
    typeName: 'High-Rise Apartments',
    location: 'Financial District, Gachibowli, Hyderabad',
    price: '₹1.15 Cr',
    priceSqYd: '3 BHK Lake View',
    size: '1,850 Sq.Ft',
    status: 'Ready to Move',
    rera: 'P02400003198',
    imageBg: 'linear-gradient(135deg, #2b3a42, #141d22)',
    tag: 'Premium Living',
    highlights: ['Double Height Balcony', 'EV Charging Bays', 'Sky Lounge & Gym']
  },
  {
    id: 'p4',
    title: 'Ongole Highway Enclave',
    type: 'plots',
    typeName: 'Commercial & Resi Plots',
    location: 'NH-16 Bypass, Ongole, Andhra Pradesh',
    price: '₹22.0 Lakhs',
    priceSqYd: '₹12,000 / sq.yd',
    size: '180 - 300 Sq.Yds',
    status: 'Immediate Registration',
    rera: 'P02500001844',
    imageBg: 'linear-gradient(135deg, #354f52, #1f2f32)',
    tag: 'High Growth Corridor',
    highlights: ['Highway Facing', 'Clear Title', 'Spot Registration']
  }
];

export default function EstateMarkPreview() {
  const [activeTab, setActiveTab] = useState('discover'); // 'discover' | 'layouts' | 'bookings'
  const [filterType, setFilterType] = useState('all');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookings, setBookings] = useState([
    {
      id: 'BK-9021',
      propertyTitle: 'Deccan Aero Greens (Plot #42)',
      date: 'This Saturday, 11:00 AM',
      pickup: 'Cab Requested (Adibatla)',
      status: 'Confirmed'
    }
  ]);

  // Form State
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [visitDate, setVisitDate] = useState('2026-10-31');
  const [needPickup, setNeedPickup] = useState(true);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const filtered = filterType === 'all'
    ? INITIAL_PROPERTIES
    : INITIAL_PROPERTIES.filter(p => p.type === filterType);

  const handleBookVisit = (e) => {
    e.preventDefault();
    if (!visitorName || !visitorPhone) return;

    const newBooking = {
      id: `BK-${Math.floor(1000 + Math.random() * 9000)}`,
      propertyTitle: selectedProperty?.title || 'Selected Site',
      date: `${visitDate} (10:30 AM)`,
      pickup: needPickup ? 'Free Site Cab Requested' : 'Self-Drive',
      status: 'Confirmed'
    };

    setBookings([newBooking, ...bookings]);
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setBookingModalOpen(false);
      setSelectedProperty(null);
      setActiveTab('bookings');
    }, 1500);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#0a0d14', color: '#f1f5f9', fontSize: '0.85rem' }}>
      {/* Simulation Banner */}
      <div style={{ background: '#C8860A', color: '#000', fontSize: '0.65rem', fontWeight: 700, padding: '3px 8px', textAlign: 'center', letterSpacing: '0.04em' }}>
        SIMULATED PROTOTYPE · SAFE MOCK DATA
      </div>

      {/* App Header */}
      <div style={{ padding: '12px 14px', background: '#111726', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.25rem' }}>🏡</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#fff', letterSpacing: '-0.02em' }}>EstateMark</div>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>📍 Hyderabad & AP Corridor</div>
          </div>
        </div>
        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>
          🔔
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>
        {activeTab === 'discover' && !selectedProperty && (
          <>
            {/* Search Bar */}
            <div style={{ background: '#172033', padding: '8px 12px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span>🔍</span>
              <input
                type="text"
                placeholder="Search plots, villas, flats..."
                readOnly
                value="Showing Prime Telangana & AP Sites"
                style={{ background: 'transparent', border: 'none', color: '#94a3b8', fontSize: '0.75rem', width: '100%', outline: 'none' }}
              />
            </div>

            {/* Filter Pills */}
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '10px' }}>
              {[
                { id: 'all', label: 'All Sites' },
                { id: 'plots', label: 'Open Plots' },
                { id: 'villas', label: 'Villas' },
                { id: 'flats', label: 'Flats' }
              ].map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilterType(f.id)}
                  style={{
                    padding: '5px 10px',
                    borderRadius: '20px',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    background: filterType === f.id ? '#C8860A' : '#172033',
                    color: filterType === f.id ? '#000' : '#cbd5e1',
                    border: '1px solid rgba(255,255,255,0.06)'
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Property Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filtered.map(item => (
                <div
                  key={item.id}
                  onClick={() => setSelectedProperty(item)}
                  style={{
                    background: '#131b2c',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255,255,255,0.08)',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ height: '105px', background: item.imageBg, padding: '10px', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ background: 'rgba(0,0,0,0.6)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.65rem', fontWeight: 600, color: '#F0A830' }}>
                        {item.tag}
                      </span>
                      <span style={{ fontSize: '0.7rem' }}>❤️</span>
                    </div>
                    <div>
                      <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff' }}>{item.title}</div>
                      <div style={{ fontSize: '0.68rem', color: '#cbd5e1' }}>{item.location}</div>
                    </div>
                  </div>

                  <div style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#F0A830' }}>{item.price}</div>
                      <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>{item.priceSqYd}</div>
                    </div>
                    <button
                      type="button"
                      style={{
                        background: 'rgba(200, 134, 10, 0.15)',
                        color: '#F0A830',
                        border: '1px solid rgba(200, 134, 10, 0.4)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        fontSize: '0.7rem',
                        fontWeight: 700
                      }}
                    >
                      View & Book ➔
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Property Detail View */}
        {selectedProperty && !bookingModalOpen && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              type="button"
              onClick={() => setSelectedProperty(null)}
              style={{ alignSelf: 'flex-start', color: '#F0A830', fontSize: '0.75rem', fontWeight: 700, padding: '4px 0' }}
            >
              ← Back to Listings
            </button>

            <div style={{ height: '130px', background: selectedProperty.imageBg, borderRadius: '14px', padding: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <span style={{ background: '#C8860A', color: '#000', padding: '3px 8px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 700, alignSelf: 'flex-start', marginBottom: '6px' }}>
                RERA: {selectedProperty.rera}
              </span>
              <h4 style={{ fontSize: '1.2rem', color: '#fff', margin: 0 }}>{selectedProperty.title}</h4>
              <p style={{ fontSize: '0.72rem', color: '#cbd5e1', margin: 0 }}>{selectedProperty.location}</p>
            </div>

            <div style={{ background: '#131b2c', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div>
                  <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Starting Price</span>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#F0A830' }}>{selectedProperty.price}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '0.68rem', color: '#94a3b8' }}>Unit Configuration</span>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700 }}>{selectedProperty.size}</div>
                </div>
              </div>

              <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '8px', fontWeight: 600 }}>Project Highlights:</div>
              <ul style={{ paddingLeft: '18px', fontSize: '0.72rem', color: '#e2e8f0', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {selectedProperty.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => setBookingModalOpen(true)}
              style={{
                background: '#C8860A',
                color: '#000',
                padding: '12px',
                borderRadius: '10px',
                fontWeight: 800,
                fontSize: '0.85rem',
                marginTop: '4px',
                boxShadow: '0 4px 12px rgba(200, 134, 10, 0.4)'
              }}
            >
              🗓️ Schedule Free Site Visit
            </button>
          </div>
        )}

        {/* Booking Form Modal */}
        {bookingModalOpen && (
          <div style={{ background: '#131b2c', borderRadius: '14px', padding: '14px', border: '1px solid rgba(200, 134, 10, 0.3)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#F0A830' }}>Schedule Site Inspection</span>
              <button type="button" onClick={() => setBookingModalOpen(false)} style={{ color: '#94a3b8', fontSize: '0.85rem' }}>✕</button>
            </div>

            {bookingSuccess ? (
              <div style={{ textAlign: 'center', padding: '24px 12px' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>✅</div>
                <div style={{ fontWeight: 800, color: '#34d399', fontSize: '0.95rem' }}>Site Visit Confirmed!</div>
                <p style={{ fontSize: '0.72rem', color: '#cbd5e1', marginTop: '4px' }}>Booking confirmation and cab details have been simulated.</p>
              </div>
            ) : (
              <form onSubmit={handleBookVisit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.68rem', color: '#94a3b8', marginBottom: '3px' }}>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    style={{ width: '100%', padding: '8px', background: '#0a0d14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#fff', fontSize: '0.78rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.68rem', color: '#94a3b8', marginBottom: '3px' }}>Mobile Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={visitorPhone}
                    onChange={(e) => setVisitorPhone(e.target.value)}
                    style={{ width: '100%', padding: '8px', background: '#0a0d14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#fff', fontSize: '0.78rem' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.68rem', color: '#94a3b8', marginBottom: '3px' }}>Preferred Date</label>
                  <input
                    type="date"
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    style={{ width: '100%', padding: '8px', background: '#0a0d14', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#fff', fontSize: '0.78rem' }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0' }}>
                  <input
                    type="checkbox"
                    id="cab"
                    checked={needPickup}
                    onChange={(e) => setNeedPickup(e.target.checked)}
                  />
                  <label htmlFor="cab" style={{ fontSize: '0.72rem', color: '#cbd5e1' }}>
                    Request complimentary AC cab pickup
                  </label>
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
                    marginTop: '6px'
                  }}
                >
                  Confirm Site Visit Booking
                </button>
              </form>
            )}
          </div>
        )}

        {/* Layouts Tab */}
        {activeTab === 'layouts' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#F0A830' }}>Interactive Master Layouts</div>
            <p style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Tap on any sector below to inspect plot availability status.</p>

            <div style={{ background: '#131b2c', borderRadius: '12px', padding: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.7rem' }}>
                <span style={{ color: '#34d399' }}>● Available (24)</span>
                <span style={{ color: '#f59e0b' }}>● Booked (12)</span>
                <span style={{ color: '#ef4444' }}>● Sold (48)</span>
              </div>

              {/* Grid of sample plots */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                {Array.from({ length: 16 }).map((_, i) => {
                  const plotNum = i + 101;
                  const isAvailable = i % 3 !== 0;
                  return (
                    <div
                      key={plotNum}
                      style={{
                        padding: '10px 4px',
                        textAlign: 'center',
                        borderRadius: '6px',
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        background: isAvailable ? 'rgba(52, 211, 153, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                        border: isAvailable ? '1px solid rgba(52, 211, 153, 0.4)' : '1px solid rgba(239, 68, 68, 0.3)',
                        color: isAvailable ? '#34d399' : '#ef4444'
                      }}
                    >
                      P-{plotNum}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* My Bookings Tab */}
        {activeTab === 'bookings' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#F0A830' }}>Your Scheduled Site Visits</div>

            {bookings.length === 0 ? (
              <p style={{ fontSize: '0.72rem', color: '#94a3b8' }}>No scheduled visits yet.</p>
            ) : (
              bookings.map(b => (
                <div key={b.id} style={{ background: '#131b2c', borderRadius: '10px', padding: '10px', border: '1px solid rgba(200, 134, 10, 0.25)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#F0A830' }}>{b.id}</span>
                    <span style={{ background: 'rgba(52, 211, 153, 0.15)', color: '#34d399', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem', fontWeight: 700 }}>
                      {b.status}
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#fff' }}>{b.propertyTitle}</div>
                  <div style={{ fontSize: '0.7rem', color: '#cbd5e1', marginTop: '2px' }}>⏰ {b.date}</div>
                  <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>🚗 {b.pickup}</div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      {/* In-App Mobile Bottom Bar */}
      <div style={{ display: 'flex', borderTop: '1px solid rgba(255,255,255,0.08)', background: '#0e1422', padding: '6px 0', zIndex: 10 }}>
        {[
          { id: 'discover', label: 'Discover', icon: '🔍' },
          { id: 'layouts', label: 'Layouts', icon: '🗺️' },
          { id: 'bookings', label: 'Bookings', icon: '📋' }
        ].map(tab => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveTab(tab.id);
              setSelectedProperty(null);
            }}
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
