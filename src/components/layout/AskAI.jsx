import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import siteConfig from '../../data/site.config.js';
import './AskAI.css';

// ─── Interactive Vector Robot Head with Waving Hand ───────────────────────────
function RobotHeadWithHand({ size = 56, showHand = true, isHappy = false }) {
  return (
    <div className="ask-ai-robo-character" style={{ width: size, height: size }}>
      <svg
        className="ask-ai-robo-svg"
        viewBox="0 0 100 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="robo-glow-filter-apps" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <linearGradient id="robo-head-metallic-apps" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <linearGradient id="robo-screen-glass-apps" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0b1329" />
            <stop offset="100%" stopColor="#030712" />
          </linearGradient>
          <linearGradient id="robo-hand-metallic-apps" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
        </defs>

        {/* ── Antenna with Signal Waves ── */}
        <g className="ask-ai-robo-antenna">
          <line x1="42" y1="23" x2="42" y2="12" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
          <circle cx="42" cy="10" r="5" fill="#38bdf8" filter="url(#robo-glow-filter-apps)" className="ask-ai-antenna-orb" />
          <circle cx="42" cy="10" r="9" stroke="#38bdf8" strokeWidth="1.5" className="ask-ai-antenna-wave" />
        </g>

        {/* ── Ears / Audio Pods ── */}
        <rect x="9" y="39" width="7" height="17" rx="3.5" fill="#64748b" />
        <circle cx="12.5" cy="47.5" r="2.2" fill="#38bdf8" />
        <rect x="68" y="39" width="7" height="17" rx="3.5" fill="#64748b" />
        <circle cx="71.5" cy="47.5" r="2.2" fill="#38bdf8" />

        {/* ── Robot Head Outer Shell ── */}
        <rect
          x="14"
          y="23"
          width="56"
          height="49"
          rx="18"
          fill="url(#robo-head-metallic-apps)"
          stroke="#cbd5e1"
          strokeWidth="1.5"
        />
        {/* Head Top Specular Highlight */}
        <path
          d="M 23 27 Q 42 24 61 27"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* ── Dark Visor Screen ── */}
        <rect
          x="21"
          y="31"
          width="42"
          height="33"
          rx="11"
          fill="url(#robo-screen-glass-apps)"
          stroke="#1e293b"
          strokeWidth="1"
        />
        {/* Visor Glass Reflection */}
        <path d="M 24 34 L 35 34 L 29 60 L 24 60 Z" fill="rgba(255,255,255,0.08)" />

        {/* ── Normal Round Glowing Eyes ── */}
        <g className={`ask-ai-eyes-normal ${isHappy ? 'hidden' : ''}`}>
          <circle cx="33" cy="45" r="4.3" fill="#38bdf8" filter="url(#robo-glow-filter-apps)" />
          <circle cx="34.5" cy="43.5" r="1.5" fill="#ffffff" />
          <circle cx="51" cy="45" r="4.3" fill="#38bdf8" filter="url(#robo-glow-filter-apps)" />
          <circle cx="52.5" cy="43.5" r="1.5" fill="#ffffff" />
        </g>

        {/* ── Happy Squint Eyes (Active on Hover) ── */}
        <g className={`ask-ai-eyes-happy ${isHappy ? 'visible' : ''}`}>
          <path d="M 29 47 Q 33 41 37 47" stroke="#38bdf8" strokeWidth="2.8" strokeLinecap="round" fill="none" filter="url(#robo-glow-filter-apps)" />
          <path d="M 47 47 Q 51 41 55 47" stroke="#38bdf8" strokeWidth="2.8" strokeLinecap="round" fill="none" filter="url(#robo-glow-filter-apps)" />
        </g>

        {/* ── Digital Smile ── */}
        <path d="M 38 54 Q 42 58 46 54" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" fill="none" filter="url(#robo-glow-filter-apps)" />

        {/* ── Cute Cheeks Blush on Hover ── */}
        <ellipse cx="28" cy="52" rx="3" ry="2" fill="rgba(244, 114, 182, 0.65)" className="ask-ai-cheeks" />
        <ellipse cx="56" cy="52" rx="3" ry="2" fill="rgba(244, 114, 182, 0.65)" className="ask-ai-cheeks" />

        {/* ── Robot Waving Hand (Arm + Palm + Fingers) ── */}
        {showHand && (
          <g className="ask-ai-robo-hand-assembly">
            <path d="M 68 56 Q 77 53 80 43" stroke="#94a3b8" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            <ellipse cx="81" cy="38" rx="6.5" ry="7.5" fill="url(#robo-hand-metallic-apps)" stroke="#cbd5e1" strokeWidth="1.2" />
            <circle cx="81" cy="38" r="2.2" fill="#38bdf8" filter="url(#robo-glow-filter-apps)" />
            <path d="M 76 39 C 73 37 74 34 77 33" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 79 32 C 79 27 82 26 83 29" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 83 31 C 84 26 87 26 87 29" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M 87 33 C 89 29 91 30 90 34" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </g>
        )}
      </svg>
    </div>
  );
}

// ── Synthetic Web Audio Chime Sound Effects ──────────────────────────────────
function playChime(type = 'receive') {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();

    if (type === 'send') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
      osc.start();
      osc.stop(ctx.currentTime + 0.12);
    } else {
      const osc1 = ctx.createOscillator();
      const osc2 = ctx.createOscillator();
      const gain = ctx.createGain();
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(ctx.destination);
      osc1.type = 'sine';
      osc2.type = 'triangle';
      osc1.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc1.frequency.setValueAtTime(880, ctx.currentTime + 0.08);
      osc2.frequency.setValueAtTime(293.66, ctx.currentTime);
      gain.gain.setValueAtTime(0.07, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);
      osc1.start();
      osc2.start();
      osc1.stop(ctx.currentTime + 0.22);
      osc2.stop(ctx.currentTime + 0.22);
    }
  } catch {
    // Audio context may be restricted before user gesture
  }
}

// ─── AI Knowledge Engine for DeccanIDentity Mobile Apps ───────────────────────
function getBotResponse(input) {
  const query = input.toLowerCase().trim();

  // 1. EstateMark
  if (query.includes('estatemark') || query.includes('real estate') || query.includes('plot') || query.includes('villa') || query.includes('flat')) {
    return {
      text: `🏡 **EstateMark** is our flagship real estate mobile application.
- **Key Capabilities**: Interactive layout navigator, open plot availability grids, 3D villa/flat floorplans, and instant site inspection visit scheduling with free cab pickup!
- **Tech Stack**: React Native 0.76 (New Architecture), Expo SQLite, Google Maps SDK, and Node.js.
- **Live Demo**: You can test the full interactive prototype right now inside our in-browser smartphone simulator!`,
      link: '/app/estatemark',
      linkText: 'View EstateMark Details ➔'
    };
  }

  // 2. TapDID
  if (query.includes('tapdid') || query.includes('nfc') || query.includes('digital identity') || query.includes('did') || query.includes('card') || query.includes('vcard')) {
    return {
      text: `🪪 **TapDID** is our decentralized digital identity & smart contact sharing app.
- **Key Capabilities**: 1-tap simulated NFC credential exchange, dynamic QR codes, multi-profile switcher (Work/Personal/Executive), and direct vCard address book export.
- **Security**: Hardware Keystore, W3C Verifiable Credentials, and Face ID biometric authentication.
- **Live Demo**: Ready to test in browser with full NFC transmission simulation!`,
      link: '/app/tapdid',
      linkText: 'View TapDID Details ➔'
    };
  }

  // 3. DeccanIDentity Company App
  if (query.includes('company app') || query.includes('deccanidentity app') || query.includes('portal') || query.includes('rfp') || query.includes('corporate')) {
    return {
      text: `🏛️ **DeccanIDentity Portal** is our corporate mobile platform.
- **Features**: Interactive engineering services showcase, principal architects directory, instant consultation RFP brief submission, and branch office navigators.
- **Offices**: Connects clients to our engineering centers in Adibatla (Hyderabad), Ongole, and Tirupati.`,
      link: '/app/deccan-company',
      linkText: 'View DeccanIDentity App ➔'
    };
  }

  // 4. Custom App Development & Pricing
  if (query.includes('custom') || query.includes('build') || query.includes('cost') || query.includes('price') || query.includes('hire') || query.includes('quote')) {
    return {
      text: `🚀 **Custom Mobile Engineering by DeccanIDentity**:
We build custom iOS and Android solutions for enterprise startups, real estate developers, healthcare chains, and fintech providers.
- **Delivery Models**: Turnkey white-label solutions, dedicated engineering pods, or custom ground-up architectures.
- **Direct Desk**: Connect directly with our engineering team on WhatsApp (+91 81860 35869) for scope and timeline estimates within 24 hours.`,
      whatsapp: true
    };
  }

  // 5. Tech Stack & Frameworks
  if (query.includes('tech') || query.includes('stack') || query.includes('framework') || query.includes('react native') || query.includes('flutter') || query.includes('ios') || query.includes('android')) {
    return {
      text: `⚡ **Supported Mobile Technologies**:
- **Cross-Platform**: React Native 0.76+ (Fabric / TurboModules) and Flutter 3.24 (Dart).
- **Native Modules**: Swift / SwiftUI for iOS and Kotlin / Jetpack Compose for Android.
- **Sensors & Hardware**: NFC Reader/Writer, Camera Barcode/QR, GPS Geofencing, Biometric FaceID / Fingerprint.
- **Cloud & Offline**: SQLite Local Cache, CRDT offline sync, WebSockets, GraphQL, and HIPAA / ABDM compliance.`
    };
  }

  // 6. Branch Offices & Contact
  if (query.includes('office') || query.includes('branch') || query.includes('location') || query.includes('hyderabad') || query.includes('ongole') || query.includes('tirupati') || query.includes('contact') || query.includes('phone') || query.includes('address')) {
    return {
      text: `📍 **DeccanIDentity Engineering Centers**:
- **Hyderabad HQ**: Adibatla Aerospace Corridor, Hyderabad, Telangana — 501510 (Phone: +91 90000 35869)
- **Ongole Center**: Gupta's Midtown, Ongole, Andhra Pradesh — 523001 (Phone: +91 94947 65679)
- **Tirupati Center**: Mangalam, Tirupati, Andhra Pradesh — 517501 (WhatsApp: +91 81860 35869)
- **Official Desk**: info@deccanidentity.com`,
      whatsapp: true
    };
  }

  // 7. Testing Live Simulator
  if (query.includes('test') || query.includes('simulator') || query.includes('demo') || query.includes('browser') || query.includes('install')) {
    return {
      text: `📱 **In-Browser Interactive Smartphone Simulator**:
- You can experience full mobile prototypes right on your computer or phone screen with **zero installation**!
- Switch between **iOS** and **Android** chassis bezels.
- Use the **Reset** button anytime to restore clean mock data.
- Click 'Full-Screen Simulator' on any app detail page for an immersive device session!`,
      link: '/apps',
      linkText: 'Explore Mobile Demos ➔'
    };
  }

  // Fallback default response
  return {
    text: `👋 I can help you explore our mobile applications! You can ask me about:
- **EstateMark** (Real Estate & Site Visit Booking)
- **TapDID** (NFC Digital Business Cards & Credentials)
- **DeccanIDentity Corporate Portal** (Services & Offices)
- **Custom iOS & Android App Engineering**
- **Mobile Tech Stacks** (React Native, Flutter, Swift, Kotlin)
- Or chat directly with an architect on WhatsApp!`,
    whatsapp: true
  };
}

export default function AskAI() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHappy] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'assistant',
      text: `👋 **Welcome to DeccanIDentity Mobile Apps!**\n\nI am your AI assistant. Ask me anything about **EstateMark**, **TapDID**, mobile tech stacks, or getting a custom iOS/Android app built for your company.`
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = (userText) => {
    const textToSend = userText || inputVal;
    if (!textToSend.trim()) return;

    if (soundEnabled) playChime('send');

    const newMsg = {
      id: Date.now(),
      sender: 'user',
      text: textToSend
    };

    setMessages(prev => [...prev, newMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(textToSend);
      if (soundEnabled) playChime('receive');
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'assistant',
          ...response
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* ── 1. The Floating Robotic Button (Bottom Right) ────────────────────── */}
      <button
        type="button"
        className="ask-ai-fab"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHappy(true)}
        onMouseLeave={() => setIsHappy(false)}
        aria-label="Ask AI Assistant about DeccanIDentity Mobile Apps"
        title="Chat with DeccanIDentity AI Mobile Assistant"
      >
        <span className="ask-ai-fab__pulse" aria-hidden="true" />
        <span className="ask-ai-fab__signal-dot" aria-hidden="true" />

        <RobotHeadWithHand size={56} showHand={true} isHappy={isHovered} />

        {/* Hover Speech Bubble */}
        <span className="ask-ai-fab__tooltip">
          <span className="ask-ai-fab__tooltip-dot" />
          <span className="ask-ai-fab__tooltip-text">Ask AI</span>
          <span className="ask-ai-fab__tooltip-badge">Online</span>
        </span>
      </button>

      {/* ── 2. The Interactive Chatbot Modal Overlay ──────────────────────────── */}
      <div
        className={`ask-ai-modal-overlay ${isOpen ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsOpen(false);
        }}
      >
        <div className="ask-ai-window" role="dialog" aria-label="DeccanIDentity AI Mobile Assistant">
          {/* Modal Header */}
          <div className="ask-ai-header">
            <div className="ask-ai-header__brand">
              <div className="ask-ai-header__avatar">
                <RobotHeadWithHand size={30} showHand={false} isHappy={true} />
              </div>
              <div className="ask-ai-header__info">
                <div className="ask-ai-header__title">
                  <span>DeccanIDentity AI</span>
                  <span className="ask-ai-header__badge">Online</span>
                </div>
                <div className="ask-ai-header__sub">
                  Mobile Architecture & App Showcase Assistant
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <button
                type="button"
                onClick={() => setSoundEnabled(!soundEnabled)}
                title={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
                style={{ color: soundEnabled ? '#38bdf8' : '#64748b', fontSize: '0.9rem', padding: '4px 6px', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                {soundEnabled ? '🔔' : '🔕'}
              </button>
              <button
                type="button"
                className="ask-ai-header__close"
                onClick={() => setIsOpen(false)}
                title="Close chat window"
                aria-label="Close"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Modal Message Area */}
          <div className="ask-ai-body">
            {messages.map(m => (
              <div key={m.id} className={`ask-ai-msg ${m.sender}`}>
                {m.sender === 'assistant' && (
                  <div className="ask-ai-msg__avatar">
                    <RobotHeadWithHand size={22} showHand={false} isHappy={true} />
                  </div>
                )}
                <div className="ask-ai-msg__bubble" style={{ whiteSpace: 'pre-line' }}>
                  {m.text}

                  {m.link && (
                    <div className="ask-ai-msg__links">
                      <Link
                        to={m.link}
                        onClick={() => setIsOpen(false)}
                        className="ask-ai-msg__link-btn"
                      >
                        <span>{m.linkText}</span>
                      </Link>
                    </div>
                  )}

                  {m.whatsapp && (
                    <div className="ask-ai-msg__links">
                      <a
                        href={siteConfig.whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="ask-ai-msg__link-btn"
                        style={{ background: '#25D366', color: '#ffffff', borderColor: '#1ea952' }}
                      >
                        <span>💬 Chat on WhatsApp Desk (+91 81860 35869)</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="ask-ai-msg assistant">
                <div className="ask-ai-msg__avatar">
                  <RobotHeadWithHand size={22} showHand={false} isHappy={true} />
                </div>
                <div className="ask-ai-msg__bubble">
                  <div className="ask-ai-typing">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts Chips */}
          <div className="ask-ai-suggestions">
            <button type="button" className="ask-ai-chip" onClick={() => handleSend('Tell me about EstateMark')}>
              🏡 EstateMark
            </button>
            <button type="button" className="ask-ai-chip" onClick={() => handleSend('How does TapDID NFC work?')}>
              🪪 TapDID NFC
            </button>
            <button type="button" className="ask-ai-chip" onClick={() => handleSend('Can you build a custom mobile app for our business?')}>
              🚀 Custom App
            </button>
            <button type="button" className="ask-ai-chip" onClick={() => handleSend('What mobile tech stacks do you use?')}>
              ⚡ Tech Stack
            </button>
            <button type="button" className="ask-ai-chip" onClick={() => handleSend('Where are your development offices?')}>
              📍 Offices
            </button>
          </div>

          {/* Modal Input Box */}
          <div className="ask-ai-footer">
            <input
              type="text"
              className="ask-ai-input"
              placeholder="Ask about apps, features, or custom mobile engineering..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              type="button"
              className="ask-ai-send-btn"
              onClick={() => handleSend()}
              disabled={!inputVal.trim()}
              title="Send message"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
