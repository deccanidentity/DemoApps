import { Link } from 'react-router-dom';
import siteConfig from '../../data/site.config.js';
import { CATEGORIES } from '../../data/apps.js';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__grid">
          {/* Brand & Corporate Bio */}
          <div className="footer__brand">
            <div className="footer__brand-head">
              <img
                src={siteConfig.logoSymbol}
                alt="DeccanIDentity Emblem"
                className="footer__logo-img"
                width="36"
                height="36"
              />
              <img
                src={siteConfig.logoName}
                alt="DeccanIDentity"
                className="footer__logo-name-img"
                height="28"
              />
            </div>
            <div className="footer__legal-name">Mobile Innovation · Engineered for Growth</div>

            <p className="footer__tagline">{siteConfig.tagline}</p>
            <p className="footer__quote">"{siteConfig.corporateQuote}"</p>

            {/* Social Icons */}
            <div className="footer__socials">
              <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter / X" title="Twitter / X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                </svg>
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" title="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
              <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp Direct">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Showcase Links */}
          <div>
            <h4 className="footer__col-title">Showcase Hub</h4>
            <ul className="footer__links">
              <li><Link to="/">Home Showcase</Link></li>
              <li><Link to="/apps">Explore All Mobile Apps</Link></li>
              <li><Link to="/app/estatemark">EstateMark (Real Estate)</Link></li>
              <li><Link to="/app/tapdid">TapDID (Digital Identity)</Link></li>
              <li><Link to="/app/deccan-company">DeccanIDentity Portal</Link></li>
              <li><a href={siteConfig.mainWebsite} target="_blank" rel="noreferrer">Corporate Website ↗</a></li>
            </ul>
          </div>

          {/* Industry App Categories */}
          <div>
            <h4 className="footer__col-title">App Categories</h4>
            <ul className="footer__links">
              {CATEGORIES.slice(1, 7).map(cat => (
                <li key={cat.id}>
                  <Link to={`/apps?category=${cat.id}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Branch Offices */}
          <div id="about">
            <h4 className="footer__col-title">Contact & Offices</h4>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p>
                <strong style={{ color: 'var(--brand-gold-light)' }}>Registered Office:</strong><br />
                {siteConfig.registeredOffice.fullAddress}
              </p>
              <p>
                <strong style={{ color: 'var(--brand-gold-light)' }}>Branch Centers:</strong><br />
                Ongole & Tirupati, Andhra Pradesh, India
              </p>
              <p style={{ marginTop: '4px' }}>
                <strong>Direct Desk:</strong> <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--text-primary)' }}>{siteConfig.phone}</a><br />
                <strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} style={{ color: 'var(--text-primary)' }}>{siteConfig.email}</a>
              </p>
              <div style={{ marginTop: '8px' }}>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp btn-sm"
                  style={{ width: '100%', gap: '8px' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p>© {CURRENT_YEAR} {siteConfig.companyLegalName}. All Rights Reserved.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href={siteConfig.mainWebsite} target="_blank" rel="noreferrer">DeccanIDentity.com</a>
            <span>•</span>
            <span style={{ color: 'var(--brand-gold-light)' }}>Mobile Applications Portal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
