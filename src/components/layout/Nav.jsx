import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import siteConfig from '../../data/site.config.js';
import { useTheme } from '../../context/ThemeContext.jsx';

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const closeMobile = () => setMobileOpen(false);

  const isTemplatesActive = location.pathname === '/templates' || location.pathname === '/apps';

  return (
    <>
      <nav className="nav" aria-label="Main navigation">
        <div className="container nav__inner">
          {/* Brand Logo with Official DeccanIDentity emblem & text logo */}
          <Link to="/" className="nav__logo" aria-label="DeccanIDentity Home" onClick={closeMobile}>
            <img
              src={siteConfig.logoSymbol}
              alt="DeccanIDentity Emblem"
              className="nav__logo-img"
              width="34"
              height="34"
            />
            <img
              src={siteConfig.logoName}
              alt="DeccanIDentity"
              className="nav__logo-name-img"
              height="26"
            />
            <span className="nav__badge">Mobile Apps</span>
          </Link>

          {/* Desktop Navigation Links matching DemoSites */}
          <ul className="nav__links" role="list">
            <li>
              <NavLink to="/" end>Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/templates"
                className={({ isActive }) => (isActive || isTemplatesActive ? 'active' : '')}
              >
                Templates
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/clients">Clients</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>

          {/* Actions: Theme Toggle & Explore CTA */}
          <div className="nav__actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>

            <Link to="/templates" className="btn btn-primary btn-sm" style={{ display: 'none', md: 'inline-flex' }}>
              <span>Explore Apps</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="nav__mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
        <NavLink to="/" end className="mobile-drawer__link" onClick={closeMobile}>
          Home
        </NavLink>
        <NavLink
          to="/templates"
          className={({ isActive }) => `mobile-drawer__link ${isActive || isTemplatesActive ? 'active' : ''}`}
          onClick={closeMobile}
        >
          Templates
        </NavLink>
        <NavLink to="/pricing" className="mobile-drawer__link" onClick={closeMobile}>
          Pricing
        </NavLink>
        <NavLink to="/clients" className="mobile-drawer__link" onClick={closeMobile}>
          Clients
        </NavLink>
        <NavLink to="/contact" className="mobile-drawer__link" onClick={closeMobile}>
          Contact
        </NavLink>
        <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
          <Link to="/templates" className="btn btn-primary" style={{ width: '100%' }} onClick={closeMobile}>
            Launch App Showcase
          </Link>
        </div>
      </div>
    </>
  );
}
