import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { appsData, CATEGORIES } from '../data/apps.js';
import packages from '../data/packages.js';
import siteConfig from '../data/site.config.js';
import { clientStats } from '../data/testimonials.js';
import AppCard from '../components/apps/AppCard.jsx';
import PreviewContainer from '../components/preview/PreviewContainer.jsx';
import './Home.css';

const CAPABILITIES = [
  {
    id: 'cross-platform',
    icon: '📱',
    title: 'Cross-Platform Frameworks',
    badge: 'React Native & Flutter',
    tagline: 'Native 60 FPS performance with unified iOS and Android codebase',
    points: [
      { label: 'React Native 0.76 New Architecture', desc: 'Fabric Concurrent Renderer, TurboModules, and JSI direct C++ memory bindings.' },
      { label: 'Fluid Gestures & Micro-interactions', desc: 'Hardware-accelerated animations using React Native Reanimated 3 with zero thread blocking.' },
      { label: 'Flutter 3.24 Multi-Platform', desc: 'Custom Impeller canvas graphics engine for pixel-perfect brand presentations.' },
      { label: '100% Code & Asset Ownership', desc: 'Clean, modular TypeScript code delivered directly to your internal repositories.' },
    ],
    metric: '98% Code Sharing Across iOS & Android'
  },
  {
    id: 'hardware-sensors',
    icon: '🪪',
    title: 'Hardware & Native Sensors',
    badge: 'NFC, Biometrics & IoT',
    tagline: 'Deep integration with device hardware, secure enclaves, and wireless peripherals',
    points: [
      { label: 'NFC Read & Tag Emulation', desc: 'ISO 14443 Type A/B, NDEF tap exchanges for digital identity cards, access tags, and payments.' },
      { label: 'Biometric FaceID & Keystore', desc: 'Hardware-backed Apple Secure Enclave & Android Keystore biometric cryptographic sign-offs.' },
      { label: 'Bluetooth Low Energy (BLE)', desc: 'Background peripheral scanning, wireless telemetry, and smart sensor synchronization.' },
      { label: 'Geofencing & Precision GPS', desc: 'Battery-efficient background location tracking and geo-triggered site notifications.' },
    ],
    metric: 'Sub-100ms NFC & Biometric Response'
  },
  {
    id: 'cloud-offline',
    icon: '☁️',
    title: 'Cloud & Offline-First Sync',
    badge: 'ABDM, HIPAA & SQLite',
    tagline: 'Reliable mobile workflows designed for real-world connectivity disruptions',
    points: [
      { label: 'Offline-First SQLite Architecture', desc: 'Zero data loss when operating in remote rural plots or underground basements with WatermelonDB.' },
      { label: 'Real-Time Bi-Directional Sync', desc: 'Automatic conflict resolution and instant synchronization with Supabase, PostgreSQL, or Firebase.' },
      { label: 'Healthcare & Enterprise Security', desc: 'ABDM (Ayushman Bharat) and HIPAA compliance with TLS 1.3 payload encryption.' },
      { label: 'Push Notifications (FCM / APNs)', desc: 'High-delivery rate transactional push messaging with deep linking and rich interactive actions.' },
    ],
    metric: '100% Offline Resilience Guarantee'
  },
  {
    id: 'store-devops',
    icon: '🚀',
    title: 'App Store Clearance & CI/CD',
    badge: '100% Store Approval',
    tagline: 'End-to-end publishing, automated testing, and zero-downtime OTA release pipelines',
    points: [
      { label: 'App Store Review Guarantee', desc: 'Full compliance with Apple Guideline 4.2 (Minimum Functionality), Privacy Nutrition Labels & EULA.' },
      { label: 'Google Play Target SDK 35', desc: 'Compliant with latest 14-day closed testing mandates and Google Play Console policies.' },
      { label: 'Fastlane Automated CI/CD', desc: 'One-command build generation, automated provisioning profile renewal, and TestFlight deployment.' },
      { label: 'Over-The-Air (OTA) Hotfixes', desc: 'Deploy instant JavaScript / Dart bug fixes directly to users without waiting for app store review.' },
    ],
    metric: '100% First-Submission Approval Track Record'
  },
];

export default function Home() {
  const navigate = useNavigate();
  const featuredApps = appsData.filter(a => a.featured);
  const heroApp = appsData.find(a => a.id === 'estatemark') || appsData[0];
  const [activeHeroApp, setActiveHeroApp] = useState(heroApp);
  const [activeCapId, setActiveCapId] = useState(CAPABILITIES[0].id);

  const selectedCapability = CAPABILITIES.find(c => c.id === activeCapId) || CAPABILITIES[0];

  return (
    <main className="page-content home-page">
      {/* ── 1. Hero: Two-Column Interactive Mobile Showcase ──────────────── */}
      <section className="hero" style={{ paddingTop: 'calc(var(--nav-height) + 24px)', paddingBottom: '40px', minHeight: 'auto' }} aria-labelledby="hero-title">
        <div className="hero__bg">
          <div className="hero__grid-lines" aria-hidden="true" />
          <div className="hero__glow" aria-hidden="true" />
        </div>

        <div className="container hero-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-split-grid">
            {/* Left Column: Value Proposition & Key Stats */}
            <div className="hero-split-left">
              <div className="hero__eyebrow-slug">
                <span className="hero__eyebrow-dot" aria-hidden="true" />
                Your Business. Your Mobile App. Your Way.
              </div>

              <h1 id="hero-title" className="hero-main-heading">
                Discover Mobile Experiences{' '}
                <span className="gradient-text">Built for the Future.</span>
              </h1>

              <p className="hero-main-sub">
                Explore production-ready iOS and Android applications directly inside your browser. Test realistic property discovery, W3C decentralized identities, and enterprise workflows with zero installation.
              </p>

              <div className="hero-cta-group">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => navigate('/apps')}
                >
                  <span>Explore All Apps ({appsData.length})</span>
                  <span>→</span>
                </button>
                <button
                  type="button"
                  className="btn btn-outline btn-lg"
                  onClick={() => navigate('/contact')}
                >
                  <span>Contact Our Architects</span>
                </button>
              </div>

              {/* Stats Inline Strip */}
              <div className="hero__stats-inline" role="list">
                <div className="hero__stat-inline-item" role="listitem">
                  <span className="hero__stat-inline-icon" aria-hidden="true">📱</span>
                  <strong>10+</strong>
                  <span>App Domains</span>
                </div>
                <span className="hero__stat-inline-dot" aria-hidden="true">•</span>
                <div className="hero__stat-inline-item" role="listitem">
                  <span className="hero__stat-inline-icon" aria-hidden="true">⚡</span>
                  <strong>100%</strong>
                  <span>Cross-Platform</span>
                </div>
                <span className="hero__stat-inline-dot" aria-hidden="true">•</span>
                <div className="hero__stat-inline-item hero__stat-inline-item--price" role="listitem">
                  <span className="hero__stat-inline-icon" aria-hidden="true">👉</span>
                  <strong>0-Install</strong>
                  <span>Live Simulator ✨</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Phone Simulator */}
            <div className="hero-split-right">
              {/* Centralized Phone Simulator */}
              <div className="hero-phone-mount">
                <PreviewContainer
                  app={activeHeroApp}
                  backUrl="/apps"
                  showControls={true}
                  showCloseButton={false}
                />
              </div>

              {/* App Selector Tabs situated cleanly below the mobile preview screen */}
              <div className="hero-app-selector" role="tablist" aria-label="Select hero prototype" style={{ marginTop: '16px', marginBottom: 0 }}>
                {featuredApps.map(app => (
                  <button
                    key={app.id}
                    type="button"
                    role="tab"
                    aria-selected={activeHeroApp.id === app.id}
                    className={`hero-app-pill ${activeHeroApp.id === app.id ? 'active' : ''}`}
                    onClick={() => setActiveHeroApp(app)}
                  >
                    <span>{app.iconSymbol}</span>
                    <span>{app.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Full-Width Industry Panorama Deck ─────────────────────────────── */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '40px' }} aria-labelledby="industry-deck-title">
        <div className="container">
          <div className="hero__industry-deck">
            <div className="hero__deck-header">
              <div className="hero__deck-header-left">
                <span className="hero__deck-tag">
                  <span className="hero__deck-tag-dot" aria-hidden="true" />
                  FIND YOUR INDUSTRY
                </span>
                <h2 id="industry-deck-title" className="hero__deck-title">
                  What kind of mobile application do you need?
                </h2>
              </div>
              <span className="hero__deck-hint">
                Click any category to preview mobile applications ↗
              </span>
            </div>

            <div className="hero__deck-grid">
              {CATEGORIES.slice(1).map(cat => {
                const count = appsData.filter(a => a.category === cat.id).length;
                return (
                  <div
                    key={cat.id}
                    className="hero__deck-card"
                    onClick={() => navigate(`/apps?category=${cat.id}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && navigate(`/apps?category=${cat.id}`)}
                    aria-label={`${cat.name} mobile applications`}
                  >
                    <div className="hero__deck-card-glow" aria-hidden="true" />
                    <div className="hero__deck-icon-wrap">
                      <span className="hero__deck-emoji" aria-hidden="true">
                        {cat.id === 'real-estate' ? '🏡' :
                         cat.id === 'digital-identity' ? '🪪' :
                         cat.id === 'business-enterprise' ? '🏛️' :
                         cat.id === 'iot-hardware' ? '📡' :
                         cat.id === 'ecommerce' ? '⚡' :
                         cat.id === 'finance' ? '💳' :
                         cat.id === 'healthcare' ? '🏥' :
                         cat.id === 'education' ? '🎓' :
                         cat.id === 'productivity' ? '🚀' :
                         cat.id === 'lifestyle' ? '🧘' : '🧠'}
                      </span>
                    </div>

                    <div className="hero__deck-details">
                      <div className="hero__deck-name">{cat.name}</div>
                      <div className="hero__deck-sub">
                        {count > 0 ? `${count} App Available` : 'Available on Request'}
                      </div>
                    </div>

                    <div className="hero__deck-action">
                      <span className={`hero__deck-badge ${count > 0 ? 'is-live' : 'is-explore'}`}>
                        {count > 0 ? (
                          <>
                            <span className="hero__live-dot" aria-hidden="true" />
                            {count} Live
                          </>
                        ) : (
                          'Explore'
                        )}
                      </span>
                      <span className="hero__deck-arrow-btn" aria-hidden="true">
                        <span className="hero__deck-arrow">→</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. Ready to Launch Promotional Banner ────────────────────────────── */}
      <section className="launch-cta-section" aria-label="Ready to Launch Mobile App">
        <div className="container">
          <div className="launch-cta-box">
            <div className="launch-cta-box__left">
              <div className="launch-cta-box__tags-row">
                <span className="launch-cta-box__tag">
                  <span className="launch-cta-box__tag-dot" aria-hidden="true" />
                  Ready to Launch?
                </span>
                <span
                  className="launch-cta-box__offer-pill"
                  title="View Flat 30% Off Mobile App Packages"
                  onClick={() => navigate('/pricing')}
                  style={{ cursor: 'pointer' }}
                >
                  <span className="launch-cta-box__offer-dot" aria-hidden="true" />
                  FLAT 30% OFFER
                </span>
              </div>
              <h2 className="launch-cta-box__title">
                Ready to build your business mobile application?
              </h2>
              <p className="launch-cta-box__desc">
                Pick a mobile blueprint, test every interactive screen live, and launch on Apple App Store &amp; Google Play starting at ₹24,999 with <strong>Flat 30% Off</strong> and 100% source code ownership.
              </p>
            </div>
            <div className="launch-cta-box__buttons">
              <button
                type="button"
                className="btn btn-primary launch-cta-box__btn"
                onClick={() => navigate('/pricing')}
              >
                Starting at ₹24,999 →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Featured Mobile Applications Showcase ─────────────────────────── */}
      <section className="section featured-section" aria-labelledby="featured-title">
        <div className="container">
          <div className="featured-header">
            <div>
              <div className="section-label">Interactive Showcase</div>
              <h2 id="featured-title" className="section-title">Featured Mobile Applications</h2>
              <p className="section-sub">Experience real interactive touch workflows with layout maps, NFC transmissions, and corporate RFP briefs.</p>
            </div>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => navigate('/apps')}
            >
              View All Apps ({appsData.length}) →
            </button>
          </div>
          <div className="templates-grid">
            {featuredApps.map(app => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Mobile Engineering & Architectural Capabilities ───────────────── */}
      <section className="section capabilities-section" aria-labelledby="capabilities-title" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="capabilities-header" style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="section-label">Enterprise Competencies</div>
            <h2 id="capabilities-title" className="section-title">
              Engineered for Scale. <span className="gradient-text">Built for Mobile.</span>
            </h2>
            <p className="section-sub" style={{ maxWidth: '720px', margin: '0 auto' }}>
              From sub-100ms hardware sensors to offline-resilient local sync, explore the engineering pillars powering DeccanIDentity mobile applications.
            </p>
          </div>

          {/* Interactive Capability Tabs */}
          <div
            className="capabilities-tabs-bar"
            role="tablist"
            aria-label="Mobile engineering capabilities"
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '28px'
            }}
          >
            {CAPABILITIES.map(cap => (
              <button
                key={cap.id}
                type="button"
                role="tab"
                aria-selected={activeCapId === cap.id}
                onClick={() => setActiveCapId(cap.id)}
                className={`capability-tab-btn ${activeCapId === cap.id ? 'active' : ''}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-pill)',
                  background: activeCapId === cap.id ? 'rgba(200, 134, 10, 0.15)' : 'var(--bg-elevated)',
                  border: activeCapId === cap.id ? '1px solid var(--brand-gold)' : '1px solid var(--border)',
                  color: activeCapId === cap.id ? 'var(--brand-gold-light)' : 'var(--text-secondary)',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeCapId === cap.id ? '0 0 16px rgba(200, 134, 10, 0.25)' : 'none'
                }}
              >
                <span>{cap.icon}</span>
                <span>{cap.title}</span>
              </button>
            ))}
          </div>

          {/* Active Capability Showcase Card */}
          <div
            className="capability-active-card card"
            style={{
              background: 'linear-gradient(135deg, rgba(20, 23, 30, 0.9) 0%, rgba(14, 16, 22, 0.95) 100%)',
              border: '1px solid var(--border-gold)',
              borderRadius: 'var(--radius-xl)',
              padding: '36px',
              boxShadow: '0 16px 36px -8px rgba(0, 0, 0, 0.35)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '18px' }}>
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--brand-gold)', background: 'rgba(200, 134, 10, 0.12)', border: '1px solid rgba(200, 134, 10, 0.3)', padding: '4px 12px', borderRadius: 'var(--radius-pill)' }}>
                  {selectedCapability.badge}
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-primary)', margin: '10px 0 4px' }}>
                  {selectedCapability.title}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', margin: 0 }}>
                  {selectedCapability.tagline}
                </p>
              </div>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: 'var(--radius-pill)', padding: '8px 16px', color: '#10b981', fontWeight: 700, fontSize: '0.85rem' }}>
                <span aria-hidden="true">⚡</span>
                <span>{selectedCapability.metric}</span>
              </div>
            </div>

            {/* 4 Feature Points Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {selectedCapability.points.map((pt, idx) => (
                <div key={idx} style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ color: 'var(--brand-gold)', fontSize: '1rem' }}>✓</span>
                    <strong style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{pt.label}</strong>
                  </div>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Actions inside Capability Card */}
            <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px', paddingTop: '18px', borderTop: '1px solid var(--border)' }}>
              <span style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                Need tailored architecture for your domain? Our lead architects in Hyderabad &amp; AP provide custom blueprint reviews.
              </span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="button"
                  className="btn btn-outline btn-sm"
                  onClick={() => navigate('/templates')}
                >
                  Explore Blueprints →
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-sm"
                  onClick={() => navigate('/contact')}
                >
                  Request Consultation →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Real Client Outcomes & Proof Metrics ──────────────────────────── */}
      <section className="section testimonials-section" aria-labelledby="testimonials-title">
        <div className="container">
          <div className="testimonials-header">
            <div className="testimonials-header__content">
              <div className="section-label">Real Client Outcomes</div>
              <h2 id="testimonials-title" className="section-title testimonials-title">
                Trusted by Businesses Across <span className="gradient-text">Telangana, AP &amp; Worldwide</span>
              </h2>
              <p className="section-sub">
                See how real builders, clinics, academies, and business founders launched high-performing mobile applications with DeccanIDentity.
              </p>
            </div>
          </div>

          {/* Proof Stats Strip */}
          <div className="testimonials-stats-strip">
            {clientStats.map(stat => (
              <div key={stat.label} className="tstat-card">
                <span className="tstat-card__icon" aria-hidden="true">{stat.icon}</span>
                <div className="tstat-card__text">
                  <div className="tstat-card__val">{stat.value}</div>
                  <div className="tstat-card__lbl">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Minimal Navigation Callout to Clients Page */}
          <div className="testimonials-min-bar">
            <div className="testimonials-min-bar__left">
              <span className="testimonials-min-bar__badge">Verified Feedback</span>
              <p className="testimonials-min-bar__desc">
                Read authentic reviews, project metrics, and client feedback from over 50+ launched mobile applications.
              </p>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => navigate('/clients')}
            >
              Explore All Client Stories &amp; Reviews →
            </button>
          </div>
        </div>
      </section>

      {/* ── 6. Competitive Advantage Comparison ──────────────────────────────── */}
      <section className="section competitive-section" aria-labelledby="comp-title">
        <div className="container">
          <div className="section-label">Why Choose Us</div>
          <h2 id="comp-title" className="section-title">
            The DeccanIDentity <span className="gradient-text">Mobile Advantage</span>
          </h2>
          <p className="section-sub">
            Purpose-engineered for 60 FPS fluid gestures, hardware sensor integration, and 100% source code ownership.
          </p>

          <div className="comp-grid">
            {/* DeccanIDentity Card */}
            <div className="comp-card comp-card--featured">
              <div className="comp-card__badge">⭐ Recommended Choice</div>
              <div className="comp-card__header-group">
                <h3 className="comp-card__title">DeccanIDentity Mobile Suite</h3>
                <p className="comp-card__desc">Modern cross-platform architecture built by enterprise engineers at {siteConfig.companyLegalName}.</p>
              </div>
              <ul className="comp-card__list">
                <li><span className="comp-card__icon-bullet">⚡</span> <div><strong>60 FPS Fluid Gestures:</strong> Built with React Native 0.76 New Architecture and Flutter 3.24.</div></li>
                <li><span className="comp-card__icon-bullet">🎯</span> <div><strong>In-Browser Live Simulators:</strong> Try every interactive screen and form before committing capital.</div></li>
                <li><span className="comp-card__icon-bullet">🛡️</span> <div><strong>Enterprise Security:</strong> Biometric FaceID, Hardware Keystore, and W3C DID compliant.</div></li>
                <li><span className="comp-card__icon-bullet">💼</span> <div><strong>100% Code Ownership:</strong> Deployed directly to your corporate App Store &amp; Play Console.</div></li>
                <li><span className="comp-card__icon-bullet">📞</span> <div><strong>Dedicated Support Desks:</strong> Hands-on support from Hyderabad HQ, Ongole, and Tirupati.</div></li>
              </ul>
              <div className="comp-card__cta-wrap">
                <button
                  type="button"
                  className="btn btn-primary comp-card__btn"
                  onClick={() => navigate('/apps')}
                >
                  Browse Live Demos →
                </button>
              </div>
            </div>

            {/* Hybrid Webview Wrappers */}
            <div className="comp-card">
              <div className="comp-card__label">⚠️ Traditional Alternative</div>
              <div className="comp-card__header-group">
                <h3 className="comp-card__title">Hybrid WebView Wrappers</h3>
                <p className="comp-card__desc">Websites converted into apps via WebView wrappers.</p>
              </div>
              <ul className="comp-card__list comp-card__list--alt">
                <li><span className="comp-card__icon-bullet warn">⚠️</span> <div>Sluggish scrolling, poor touch latency, and high battery drain.</div></li>
                <li><span className="comp-card__icon-bullet warn">⚠️</span> <div>High risk of Apple App Store Guideline 4.2 rejections.</div></li>
                <li><span className="comp-card__icon-bullet warn">⚠️</span> <div>Zero native hardware integration (NFC, biometrics, offline SQLite).</div></li>
                <li><span className="comp-card__icon-bullet warn">⚠️</span> <div>Fails completely in low-connectivity rural markets.</div></li>
                <li><span className="comp-card__icon-bullet warn">⚠️</span> <div>Poor user retention and sub-3.0 star app store ratings.</div></li>
              </ul>
            </div>

            {/* Unverified Freelancers */}
            <div className="comp-card">
              <div className="comp-card__label">⚠️ Traditional Alternative</div>
              <div className="comp-card__header-group">
                <h3 className="comp-card__title">Unverified Freelance Projects</h3>
                <p className="comp-card__desc">Ad-hoc mobile app builds without corporate accountability.</p>
              </div>
              <ul className="comp-card__list comp-card__list--alt">
                <li><span className="comp-card__icon-bullet warn">⚠️</span> <div>Inconsistent architecture and abandoned build dependencies.</div></li>
                <li><span className="comp-card__icon-bullet warn">⚠️</span> <div>No assistance with complex App Store review rejections.</div></li>
                <li><span className="comp-card__icon-bullet warn">⚠️</span> <div>Zero post-launch warranty or security patch maintenance.</div></li>
                <li><span className="comp-card__icon-bullet warn">⚠️</span> <div>Hidden fees for minor API adjustments and store certificates.</div></li>
                <li><span className="comp-card__icon-bullet warn">⚠️</span> <div>Single point of failure when individual developers move on.</div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. How It Works: 4 Straightforward Steps ─────────────────────────── */}
      <section className="section how-section" aria-labelledby="how-title">
        <div className="container">
          <div className="section-label">Simple Process</div>
          <h2 id="how-title" className="section-title">
            How It Works: <span className="gradient-text">4 Straightforward Steps</span>
          </h2>
          <p className="section-sub">From interactive browser simulation to production App Store deployment in average 3–4 weeks.</p>

          <div className="how-grid">
            {[
              { step: '01', icon: '🔍', title: 'Pick Your App Blueprint', desc: 'Browse our mobile catalog by category. Test every screen, form, and layout map live in your browser.' },
              { step: '02', icon: '📝', title: 'Share Your Workflows', desc: 'Send your branding, color guidelines, database schema, and custom business requirements via WhatsApp or brief.' },
              { step: '03', icon: '⚡', title: 'We Engineer & Integrate', desc: 'Our senior architects build and connect your mobile platform with secure cloud backends and native sensors.' },
              { step: '04', icon: '🚀', title: 'Deploy on App Stores', desc: 'We handle provisioning, code signing, and submit your verified app to Apple App Store and Google Play Console.' },
            ].map(item => (
              <div key={item.step} className="how-card">
                <div className="how-card__top">
                  <span className="how-card__step-pill">Step {item.step}</span>
                  <div className="how-card__watermark" aria-hidden="true">{item.step}</div>
                </div>
                <div className="how-card__icon-wrap">
                  <span className="how-card__icon" aria-hidden="true">{item.icon}</span>
                </div>
                <h3 className="how-card__title">{item.title}</h3>
                <p className="how-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Transparent Pricing Preview Strip ─────────────────────────────── */}
      <section className="section pricing-strip-section" aria-labelledby="pricing-strip-title">
        <div className="container">
          <div className="section-label">Transparent Packages</div>
          <h2 id="pricing-strip-title" className="section-title">
            One Clear Pricing System. <span className="gradient-text">Zero Hidden Costs.</span>
          </h2>
          <p className="section-sub">Same transparent tiers apply across all industries with no setup surprises or recurring builder lock-ins.</p>

          {/* Promotional Offer Callout Bar */}
          <div
            className="pricing-strip__offer-bar"
            onClick={() => navigate('/pricing')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && navigate('/pricing')}
            style={{ cursor: 'pointer' }}
            title="Click to view pricing & discount"
          >
            <div className="pricing-strip__offer-left">
              <span className="pricing-strip__offer-pill">
                <span className="pricing-strip__offer-dot" aria-hidden="true" />
                FLAT 30% OFFER
              </span>
              <span className="pricing-strip__offer-text">
                Limited Time Offer: <strong>Flat 30% Off</strong> on all mobile application development packages!
              </span>
            </div>
            <button
              type="button"
              className="btn btn-primary pricing-strip__offer-btn"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/pricing');
              }}
            >
              Explore All Packages &amp; Inclusions →
            </button>
          </div>

          {/* Pricing Chips Grid matching DemoSites */}
          <div className="pricing-strip" style={{ marginTop: '24px' }}>
            {packages.map(pkg => (
              <div
                key={pkg.id}
                className={`price-chip ${pkg.highlight ? 'price-chip--active' : ''}`}
                onClick={() => navigate('/pricing')}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && navigate('/pricing')}
                title={`View ${pkg.name} Package Details`}
              >
                {pkg.badge && <span className="price-chip__badge">{pkg.badge}</span>}
                <div className="price-chip__name">{pkg.name}</div>
                <div className="price-chip__price">{pkg.priceLabel}</div>
                {pkg.pages && <div className="price-chip__pages">{pkg.pages} Screens</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Corporate CTA Section ────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '20px', paddingBottom: '60px' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #1c150c 0%, #111116 100%)',
              border: '1px solid var(--border-gold)',
              borderRadius: 'var(--radius-xl)',
              padding: '48px 36px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', marginBottom: '14px' }}>
              Need a Custom Mobile App for Your Enterprise?
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '640px', margin: '0 auto 28px', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Whether you are launching a real estate discovery platform, a secure biometric identity card, or a bespoke field-service tool, our senior engineers in Hyderabad, Ongole, and Tirupati are ready to build.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp btn-lg"
              >
                <span>Direct WhatsApp Consultation (+91 81860 35869)</span>
              </a>
              <button
                type="button"
                className="btn btn-outline btn-lg"
                onClick={() => navigate('/apps')}
              >
                <span>Browse All Mobile Demos</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Styles specific to Split Hero Grid */}
      <style>{`
        .hero-split-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 40px;
          align-items: center;
          width: 100%;
        }

        .hero-main-heading {
          font-size: clamp(2.2rem, 3.8vw, 3.4rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 16px;
        }

        .hero-main-sub {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 580px;
          margin-bottom: 28px;
        }

        .hero-cta-group {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .hero-app-selector {
          display: flex;
          gap: 8px;
          margin-bottom: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-app-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: var(--radius-pill);
          font-size: 0.78rem;
          font-weight: 700;
          background: var(--bg-elevated);
          color: var(--text-secondary);
          border: 1px solid var(--border);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .hero-app-pill.active {
          background: var(--brand-gold);
          color: #000000;
          border-color: var(--brand-gold);
          box-shadow: 0 2px 10px rgba(200, 134, 10, 0.35);
        }

        .hero-phone-mount {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        @media (max-width: 960px) {
          .hero-split-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 36px;
          }

          .hero-split-left {
            max-width: 680px;
            margin: 0 auto;
          }

          .hero-main-sub {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-cta-group {
            justify-content: center;
          }

          .hero__stats-inline {
            justify-content: center;
            margin: 0 auto;
          }
        }

        @media (max-width: 640px) {
          .hero-main-heading {
            font-size: 1.95rem;
          }

          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }

          .hero-cta-group .btn {
            width: 100%;
            justify-content: center;
          }

          .hero__stats-inline {
            flex-direction: column;
            gap: 8px;
            border-radius: var(--radius-lg);
            padding: 12px 18px;
            width: 100%;
          }

          .hero__stat-inline-dot {
            display: none;
          }

          .capability-active-card {
            padding: 20px !important;
          }

          .capability-tab-btn {
            flex: 1 1 140px;
            justify-content: center;
            font-size: 0.78rem !important;
            padding: 8px 12px !important;
          }
        }
      `}</style>
    </main>
  );
}
