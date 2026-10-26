import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import siteConfig from '../data/site.config.js';
import './ContactPage.css';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const appRef = searchParams.get('app') || '';

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    industry: '',
    message: appRef ? `I'm interested in customizing the ${appRef} mobile application. Please share architecture options and timeline.` : '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const msg = `Hi DeccanIDentity Engineering Desk!\n\nName: ${form.name}\nApp Category / Industry: ${form.industry || 'Mobile Application'}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nProject Scope:\n${form.message}`;
    window.open(`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  }

  return (
    <main className="page-content contact-page" style={{ paddingTop: 'calc(var(--nav-height) + 16px)' }}>
      {/* ── 1. Contact Header ────────────────────────────────────────── */}
      <section className="contact-header section" aria-labelledby="contact-title" style={{ paddingBottom: '32px' }}>
        <div className="container" style={{ maxWidth: 1080 }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="section-label">Connect With Us</div>
            <h1 id="contact-title" className="section-title">Get in Touch with DeccanIDentity</h1>
            <p className="section-sub" style={{ maxWidth: '780px', margin: '0 auto' }}>
              Whether you want to white-label one of our showcase mobile apps or build a custom cross-platform software system, our architects at {siteConfig.companyLegalName} are ready to partner with you.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="contact-cards" style={{ marginBottom: '40px' }}>
            <div className="contact-card">
              <div className="contact-card__icon" aria-hidden="true">📞</div>
              <div className="contact-card__label">Direct Phone Desk</div>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="contact-card__val">
                {siteConfig.phone}
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon" aria-hidden="true">💬</div>
              <div className="contact-card__label">WhatsApp Concierge</div>
              <a href={siteConfig.whatsappLink} target="_blank" rel="noreferrer" className="contact-card__val" style={{ color: '#25D366' }}>
                {siteConfig.whatsapp}
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon" aria-hidden="true">✉️</div>
              <div className="contact-card__label">Corporate Email</div>
              <a href={`mailto:${siteConfig.email}`} className="contact-card__val">
                {siteConfig.email}
              </a>
            </div>
          </div>

          {/* ── 2. Form & Office Directory Grid ────────────────────────── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 0.8fr',
              gap: 'var(--space-8)',
              alignItems: 'start'
            }}
            className="contact-layout-grid"
          >
            {/* Form Column */}
            <div>
              {submitted ? (
                <div className="contact-success card" style={{ padding: '40px 24px', background: 'var(--bg-surface)' }}>
                  <div className="contact-success__icon">🎉</div>
                  <h2 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>Enquiry Received!</h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 24px' }}>
                    Your message has been initiated with our mobile engineering desk via WhatsApp. We will connect back with an architectural proposal and estimate within 24 hours.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <div className="card" style={{ padding: '32px', background: 'var(--bg-surface)' }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>Submit a Project Requirement Brief</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                    Fill out the form below to receive a customized mobile architecture plan.
                  </p>

                  <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form" style={{ marginTop: 0 }}>
                    <div className="contact-form__row">
                      <div className="contact-form__field">
                        <label htmlFor="contact-name">Your Full Name *</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          className="input"
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-primary)'
                          }}
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Chandra"
                        />
                      </div>
                      <div className="contact-form__field">
                        <label htmlFor="contact-phone">Phone / WhatsApp *</label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          className="input"
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-primary)'
                          }}
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="contact-form__row">
                      <div className="contact-form__field">
                        <label htmlFor="contact-email">Corporate Email Address</label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          className="input"
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-primary)'
                          }}
                          value={form.email}
                          onChange={handleChange}
                          placeholder="ramesh@company.com"
                        />
                      </div>
                      <div className="contact-form__field">
                        <label htmlFor="contact-industry">Mobile App Category</label>
                        <select
                          id="contact-industry"
                          name="industry"
                          className="input"
                          style={{
                            width: '100%',
                            padding: '10px 14px',
                            background: 'var(--bg-elevated)',
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-primary)'
                          }}
                          value={form.industry}
                          onChange={handleChange}
                        >
                          <option value="">Select Domain / Category</option>
                          <option value="Real Estate (EstateMark)">Real Estate (EstateMark)</option>
                          <option value="Digital Identity (TapDID)">Digital Identity (TapDID)</option>
                          <option value="Business & Enterprise">Business &amp; Enterprise</option>
                          <option value="Healthcare & Telemedicine">Healthcare &amp; Telemedicine</option>
                          <option value="E-commerce & Quick Commerce">E-commerce &amp; Quick Commerce</option>
                          <option value="Finance & Invoicing">Finance &amp; Invoicing</option>
                          <option value="Education & Campus">Education &amp; Campus</option>
                          <option value="Custom Mobile Architecture">Custom Mobile Architecture</option>
                        </select>
                      </div>
                    </div>

                    <div className="contact-form__field">
                      <label htmlFor="contact-message">Project Scope &amp; Requirements *</label>
                      <textarea
                        id="contact-message"
                        name="message"
                        className="input"
                        rows={4}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          background: 'var(--bg-elevated)',
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-md)',
                          color: 'var(--text-primary)'
                        }}
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Briefly describe your mobile app goals, features, target platforms (iOS / Android), and expected timeline..."
                      />
                    </div>

                    <div className="contact-form__actions" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '12px' }}>
                      <button
                        type="submit"
                        className="btn btn-whatsapp btn-lg"
                        style={{ flex: 1, minWidth: '220px', justifyContent: 'center' }}
                      >
                        <span>💬 Send to WhatsApp Direct</span>
                      </button>
                      <a
                        href={`mailto:${siteConfig.email}?subject=Mobile App Development Enquiry${appRef ? ` – ${appRef}` : ''}&body=${encodeURIComponent(`Hi DeccanIDentity Architecture Team,\n\nName: ${form.name}\nPhone: ${form.phone}\nMobile App Category: ${form.industry || 'Not specified'}\nEmail: ${form.email}\n\nProject Scope & Requirements:\n${form.message}`)}`}
                        className="btn btn-outline btn-lg"
                        style={{ flex: 1, minWidth: '200px', justifyContent: 'center' }}
                      >
                        <span>✉ Send via Email</span>
                      </a>
                    </div>

                    <p className="contact-form__note" style={{ marginTop: '14px', fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      Prefer immediate technical consultation? Call our engineering desk directly at{' '}
                      <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--brand-gold)', fontWeight: 600 }}>
                        {siteConfig.phone}
                      </a>.
                    </p>
                  </form>
                </div>
              )}
            </div>

            {/* Offices & Contact Details Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Registered Office HQ */}
              <div className="card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '1.35rem' }}>🏛️</span>
                  <div>
                    <h3 style={{ fontSize: '1.05rem', margin: 0 }}>Registered Office &amp; HQ</h3>
                    <div style={{ fontSize: '0.75rem', color: 'var(--brand-gold-light)', fontWeight: 700 }}>
                      {siteConfig.registeredOffice.company}
                    </div>
                  </div>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5, marginTop: '8px' }}>
                  {siteConfig.registeredOffice.fullAddress}
                </p>
                <div style={{ marginTop: '12px', fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                  <strong>Direct Desk:</strong> <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} style={{ color: 'var(--text-primary)' }}>{siteConfig.phone}</a>
                </div>
              </div>

              {/* Branch Engineering Centers */}
              <div className="card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.35rem' }}>📍</span>
                  <h3 style={{ fontSize: '1.05rem', margin: 0 }}>Regional Engineering Centers</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {siteConfig.branches.map(branch => (
                    <div key={branch.city} style={{ borderBottom: '1px solid var(--border)', paddingBottom: '10px' }}>
                      <div style={{ fontWeight: 700, color: 'var(--brand-gold-light)', fontSize: '0.875rem' }}>
                        {branch.city} Center:
                      </div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginTop: '2px', lineHeight: 1.4 }}>
                        {branch.address}
                      </p>
                      <div style={{ marginTop: '4px', fontSize: '0.78rem', display: 'flex', gap: '14px' }}>
                        <span>📞 {branch.phone}</span>
                        <a href={branch.whatsapp} target="_blank" rel="noreferrer" style={{ color: '#25D366', fontWeight: 600 }}>WhatsApp Desk ↗</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response SLA Guarantee */}
              <div
                style={{
                  background: 'rgba(37, 211, 102, 0.08)',
                  border: '1px solid rgba(37, 211, 102, 0.35)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '14px'
                }}
              >
                <div>
                  <div style={{ fontWeight: 800, color: '#25D366', fontSize: '0.9rem' }}>24-Hour SLA Guarantee</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', marginTop: '2px' }}>All mobile inquiries receive principal architect reviews within 1 business day.</div>
                </div>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp btn-sm"
                  style={{ flexShrink: 0 }}
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive layout styling */}
      <style>{`
        @media (max-width: 900px) {
          .contact-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </main>
  );
}
