import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { testimonials, clientStats, clientLogos } from '../data/testimonials.js';
import siteConfig from '../data/site.config.js';
import './ClientsPage.css';

export default function ClientsPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { id: 'All', label: 'All Reviews', icon: '⭐' },
    { id: 'real-estate', label: 'Real Estate', icon: '🏡' },
    { id: 'digital-identity', label: 'Digital Identity', icon: '🪪' },
    { id: 'healthcare', label: 'Healthcare', icon: '🏥' },
    { id: 'ecommerce', label: 'E-commerce', icon: '⚡' },
    { id: 'finance', label: 'Finance', icon: '💳' },
  ];

  const filteredTestimonials =
    selectedCategory === 'All'
      ? testimonials
      : testimonials.filter(t => t.industryId === selectedCategory);

  return (
    <main className="page-content clients-page" style={{ paddingTop: 'calc(var(--nav-height) + 12px)' }}>
      {/* ── 1. Page Header Hero ────────────────────────────────────────── */}
      <section className="clients-hero section" aria-labelledby="clients-title">
        <div className="container">
          <div className="clients-hero__inner">
            <div className="clients-hero__eyebrow">
              <span className="clients-hero__eyebrow-dot" aria-hidden="true" />
              Verified Mobile Outcomes
            </div>

            <h1 id="clients-title" className="clients-hero__title">
              <span className="clients-hero__phrase">Real Businesses.</span>{' '}
              <span className="clients-hero__phrase">Real Mobile Apps.</span>{' '}
              <span className="clients-hero__phrase gradient-text">Real Results.</span>
            </h1>

            <p className="clients-hero__sub">
              Explore authentic feedback, verified app ratings, and business growth metrics from founders, real estate developers, healthcare directors, and enterprise CTOs who partnered with {siteConfig.companyLegalName}.
            </p>

            <div className="clients-hero__rating-badge" role="region" aria-label="Client rating summary">
              <div className="clients-hero__rating-stars" aria-hidden="true">★★★★★</div>
              <div className="clients-hero__rating-val">4.9 / 5 Overall App Rating</div>
              <span className="clients-hero__rating-dot" aria-hidden="true">•</span>
              <div className="clients-hero__rating-sub">50+ Mobile Apps Delivered Across Telangana, AP &amp; Pan-India</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Proof Metrics Strip ────────────────────────────────────── */}
      <section className="clients-stats-section">
        <div className="container">
          <div className="clients-stats-grid">
            {clientStats.map((stat, i) => (
              <div key={i} className="clients-stat-card">
                <span className="clients-stat-card__icon" aria-hidden="true">{stat.icon}</span>
                <div>
                  <div className="clients-stat-card__val">{stat.value}</div>
                  <div className="clients-stat-card__lbl">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Trusted Enterprise Brands Strip ─────────────────────────── */}
      <section className="clients-brands-section">
        <div className="container">
          <div className="clients-brands-header">
            <span>Enterprise Footprint Across Telangana &amp; Andhra Pradesh</span>
          </div>
          <div className="clients-brands-list">
            {clientLogos.map((org, idx) => (
              <div key={idx} className="clients-brand-chip">
                <span className="clients-brand-chip__dot" aria-hidden="true" />
                <span className="clients-brand-chip__name">{org.name}</span>
                <span className="clients-brand-chip__meta">({org.location})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Reviews Catalogue & Filter Bar ─────────────────────────── */}
      <section className="clients-reviews-section">
        <div className="container">
          {/* Domain Filter Buttons */}
          <div className="clients-filter-bar" role="tablist" aria-label="Filter testimonials by industry">
            {categories.map(c => {
              const count = c.id === 'All' ? testimonials.length : testimonials.filter(t => t.industryId === c.id).length;
              return (
                <button
                  key={c.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === c.id}
                  className={`clients-filter-btn ${selectedCategory === c.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(c.id)}
                >
                  <span aria-hidden="true">{c.icon}</span>
                  <span>{c.label}</span>
                  <span className="clients-filter-count">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Testimonial Cards Grid */}
          <div className="clients-grid">
            {filteredTestimonials.map(t => (
              <article
                key={t.id}
                className="c-card"
                style={{ '--card-color': t.color || '#c8860a' }}
              >
                <div>
                  <div className="c-card__header">
                    <div className="c-card__tags">
                      <span
                        className="c-card__ind-tag"
                        style={{
                          color: t.color || '#c8860a',
                          borderColor: `${t.color || '#c8860a'}40`,
                          background: `${t.color || '#c8860a'}15`
                        }}
                      >
                        {t.industry}
                      </span>
                      {t.metric && (
                        <span className="c-card__metric">{t.metric}</span>
                      )}
                    </div>
                    <div className="c-card__stars" aria-label={`${t.rating} out of 5 stars`}>
                      {'★'.repeat(t.rating)}
                    </div>
                  </div>

                  <blockquote className="c-card__quote">
                    "{t.feedback}"
                  </blockquote>
                </div>

                <div className="c-card__footer">
                  <div
                    className="c-card__avatar"
                    style={{ background: t.color || 'var(--brand-gold)' }}
                  >
                    {t.initials}
                  </div>
                  <div className="c-card__author-info">
                    <div className="c-card__author-line">
                      <span className="c-card__author-name">{t.name}</span>
                      {t.verified && (
                        <span className="c-card__verified" title="Verified Client Deployment">✓ Verified</span>
                      )}
                    </div>
                    <div className="c-card__role">{t.role}, {t.company}</div>
                    <div className="c-card__meta">
                      <span>📍 {t.location}</span>
                      <span className="c-card__sep">•</span>
                      <span className="c-card__tpl">{t.appName}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ── 5. Bottom Consultation CTA Card ─────────────────────────── */}
          <div className="clients-cta-card">
            <div className="clients-cta-card__left">
              <span className="clients-cta-card__tag">Join Leading Indian Enterprises</span>
              <h2 className="clients-cta-card__title">
                Ready to transform your business with a custom mobile app?
              </h2>
              <p className="clients-cta-card__sub">
                Connect directly with our engineering architects in Hyderabad, Ongole, and Tirupati. We provide fixed-scope proposals within 24 hours.
              </p>
            </div>
            <div className="clients-cta-card__right">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => navigate('/templates')}
              >
                Browse Live Demos →
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => navigate('/pricing')}
              >
                Starting at ₹24,999 →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Client Logo Scrolling Marquee (Bottom of Client Screen) ─────── */}
      <section className="clients-bottom-scroll-section" aria-label="Client logos scrolling">
        <div className="container">
          <div className="clients-bottom-scroll-header">
            <span className="clients-bottom-scroll-tag">
              <span className="clients-bottom-scroll-dot" aria-hidden="true" />
              Trusted Partnerships
            </span>
            <h3 className="clients-bottom-scroll-title">
              Growing Brands &amp; Enterprises Powered by DeccanIDentity Mobile Architecture
            </h3>
          </div>
        </div>

        <div className="clients-marquee-wrap">
          <div className="clients-marquee-track">
            {clientLogos.concat(clientLogos).map((item, index) => (
              <div key={`${item.name}-${index}`} className="clients-marquee-card">
                <span className="clients-marquee-card__icon" aria-hidden="true">{item.icon || '📱'}</span>
                <div className="clients-marquee-card__details">
                  <strong className="clients-marquee-card__name">{item.name}</strong>
                  <span className="clients-marquee-card__meta">{item.location} • {item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
