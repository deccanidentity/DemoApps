import { useNavigate } from 'react-router-dom';
import packages from '../data/packages.js';
import siteConfig from '../data/site.config.js';
import './PricingPage.css';

export default function PricingPage() {
  const navigate = useNavigate();

  return (
    <main className="page-content pricing-page" style={{ paddingTop: 'calc(var(--nav-height) + 20px)' }}>
      <section className="pricing-header section" aria-labelledby="pricing-title">
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="section-label">Transparent Mobile Pricing</div>
          <h1 id="pricing-title" className="section-title">Mobile App Development Packages</h1>
          <p className="section-sub" style={{ margin: '0 auto 24px auto' }}>
            Predictable engineering investments for iOS & Android applications. Real Estate, Digital Identity, Enterprise — clear tiers, turnkey execution.
          </p>

          {/* Flat 30% Offer Tag Banner */}
          <div className="pricing-offer-tag-bar">
            <div className="pricing-offer-tag-bar__left">
              <div className="pricing-offer-tag-bar__pill">
                <span className="pricing-offer-tag-bar__dot" aria-hidden="true" />
                FLAT 30% LAUNCH OFFER
              </div>
              <div className="pricing-offer-tag-bar__text">
                <strong>Flat 30% Off</strong> on all custom mobile app engineering packages this quarter!
              </div>
            </div>
            <button
              type="button"
              className="btn btn-primary pricing-offer-tag-bar__btn"
              onClick={() => navigate('/contact')}
            >
              Contact Us for Custom Scope →
            </button>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="pricing-grid">
            {packages.map(pkg => (
              <div
                key={pkg.id}
                className={`pkg-card ${pkg.highlight ? 'pkg-card--active' : ''}`}
              >
                {pkg.badge && (
                  <div className="pkg-card__badge">{pkg.badge}</div>
                )}
                <div className="pkg-card__name">{pkg.name}</div>
                <div className="pkg-card__price">{pkg.priceLabel}</div>
                {pkg.pages && (
                  <div className="pkg-card__pages">{pkg.pages} Screens Included</div>
                )}
                <p className="pkg-card__desc">{pkg.description}</p>
                <ul className="pkg-card__features">
                  {pkg.features.map(f => (
                    <li key={f}>
                      <span className="pkg-card__check">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hi DeccanIDentity! I'm interested in the ${pkg.name} mobile package (${pkg.priceLabel}) with the Flat 30% launch offer. Please share more details.`)}`}
                  className={`btn ${pkg.highlight ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}
                  target="_blank"
                  rel="noreferrer"
                >
                  {pkg.highlight ? '💬 Get Started on WhatsApp' : 'Enquire Package'}
                </a>
              </div>
            ))}
          </div>

          {/* Pricing Note */}
          <div className="pricing-note">
            <span>💡</span>
            <div>
              <strong>Complete Codebase & App Store Ownership:</strong> All packages include 100% intellectual property transfer, direct publishing to your Apple Developer and Google Play Console accounts, and clean modular React Native or Flutter architecture.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
