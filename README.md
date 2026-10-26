# DeccanIDentity — Mobile App Showcase Portal

An interactive, high-performance web platform purpose-built to showcase enterprise-grade **iOS and Android mobile applications** directly inside the browser.

Developed by **[Deccan IDentity Software Pvt. Ltd.](https://deccanidentity.com/)**  
Reference Web Portal: [demo.deccanidentity.in](https://demo.deccanidentity.in/)

---

## 🌟 Highlights & Capabilities

- **Mobile-Only Application Showcase**: Purpose-engineered exclusively for mobile applications across iOS, Android, and cross-platform ecosystems (React Native & Flutter).
- **Interactive In-Browser Smartphone Simulator**:
  - Realistic smartphone frame (`PhoneFrame`) with switchable device chassis (iOS Dynamic Island & Android punch-hole).
  - Live real-time status bar (clock, cellular reception, Wi-Fi, battery).
  - Sandboxed interactive execution with zero state pollution across prototypes.
  - One-click **Reset Demo State** and **Return to Showcase** controls.
- **Initial Flagship Mobile Portfolio**:
  - **EstateMark** *(Category: Real Estate)*: Plotted developments, luxury gated villas, high-rise apartment units, interactive layout availability maps, and simulated site-inspection booking workflows.
  - **TapDID** *(Category: Digital Identity)*: Decentralized identity profiles (DID), one-tap simulated NFC transmission, dynamic QR code cards, and vCard address book export.
  - **DeccanIDentity Portal** *(Category: Business & Enterprise)*: Corporate service catalog, team directory, and project consultation brief submission.
- **Dynamic 10-Industry Catalog & Filtering**:
  - Categories: Real Estate, Digital Identity, Business & Enterprise, E-commerce, Finance, Healthcare, Education, Productivity, Lifestyle, and AI Applications.
  - Real-time search across app titles, features, and technology stacks.
  - Platform filtering (`iOS`, `Android`, `Cross-Platform`) and sorting (`Featured`, `Rating`, `Name`).
- **Design System Parity with DemoSites**:
  - Tailored WCAG AAA high-contrast dark theme (`#080808` base) and light mode toggle.
  - DeccanIDentity signature gold tokens (`--brand-gold: #C8860A`, `--brand-gold-light: #F0A830`).
  - Modern typography pairing (`Outfit` for display headings and `Inter` for interface elements).
  - Global floating WhatsApp desk (+91 81860 35869) and registered offices (Adibatla Hyderabad, Ongole, Tirupati).

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node 20 / 22 / 24)
- npm 9+

### Installation
```bash
npm install
```

### Local Development
```bash
npm run dev
```
Starts the Vite dev server with Hot Module Replacement (HMR) at `http://localhost:5173/`.

### Production Build
```bash
npm run build
```
Compiles and generates an optimized, minified bundle in `dist/`.

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Repository Structure

```
demoapps/
├── public/
│   ├── deccan-logo.png           # Official brand symbol
│   ├── deccan-logoname.png       # Official brand typography
│   ├── favicon.svg               # SVG Favicon
│   ├── favicon.png               # Fallback PNG Favicon
│   ├── app-icons/                # Mobile app icons
│   └── app-screenshots/          # App screenshots & assets
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.jsx           # Global header with mobile drawer & theme switcher
│   │   │   ├── Footer.jsx        # Enterprise footer matching company guidelines
│   │   │   └── FloatingWhatsApp.jsx # Direct WhatsApp support widget
│   │   ├── apps/
│   │   │   ├── AppCard.jsx       # Reusable showcase card with platform badges
│   │   │   └── CategoryPills.jsx # Interactive category filter scroller
│   │   └── preview/
│   │       ├── PhoneFrame.jsx    # Realistic smartphone bezel with live clock & notch
│   │       └── PreviewContainer.jsx # Sandboxed loader for app prototypes
│   ├── context/
│   │   └── ThemeContext.jsx      # Theme provider (system-aware Dark/Light mode)
│   ├── data/
│   │   ├── site.config.js        # Company branding, contacts, and office locations
│   │   └── apps.js               # Centralized registry for all mobile apps
│   ├── pages/
│   │   ├── Home.jsx              # Homepage with animated phone showcase & featured apps
│   │   ├── ExploreApps.jsx       # Searchable catalog with platform filters & sorting
│   │   ├── AppDetails.jsx        # Dedicated app view: specs, features, and simulator
│   │   ├── LivePreview.jsx       # Focused full-screen simulator view
│   │   └── NotFound.jsx          # 404 page
│   ├── previews/                 # Interactive sandboxed mobile prototypes
│   │   ├── EstateMark/           # Real Estate discovery & visit booking workflow
│   │   ├── TapDID/               # Digital Identity, NFC transmission & QR sharing
│   │   └── DeccanCompany/        # Enterprise services & consultation RFP submission
│   ├── App.jsx                   # Central routing & layout shell
│   ├── index.css                 # Master design tokens & CSS system
│   └── main.jsx                  # React 19 mount
├── index.html                    # HTML5 entry with meta SEO tags & typography
├── package.json
├── vite.config.js
└── README.md
```

---

## 🛠️ Adding a New Mobile App to the Showcase

1. **Register App Metadata in `src/data/apps.js`**:
   ```javascript
   {
     id: 'your-app-id',
     name: 'Your App Name',
     tagline: 'Short catchy tagline',
     category: 'real-estate', // One of the supported category IDs
     categoryName: 'Real Estate',
     platforms: ['iOS', 'Android', 'Cross-Platform'],
     techStack: ['React Native', 'TypeScript', 'Supabase'],
     iconColor: '#C8860A',
     iconSymbol: '📱',
     featured: true,
     hasLivePreview: true,
     rating: 4.9,
     reviewsCount: 120,
     badge: 'Featured Demo',
     shortDescription: '1-2 sentence overview for cards.',
     fullDescription: 'Comprehensive overview for detail page.',
     features: [
       { title: 'Feature Name', description: 'What this does.' }
     ],
     specifications: {
       'Framework': 'React Native 0.76',
       'Target SDK': 'iOS 15+ / Android 10+'
     },
     storeLinks: {
       ios: null,
       android: null,
       statusNote: 'Enterprise Demo Build · Production deployment available.'
     }
   }
   ```
2. **Implement Interactive Prototype in `src/previews/`**:
   - Create `src/previews/YourApp/YourAppPreview.jsx`.
   - Keep state isolated using React local state or dedicated hooks.
   - Use mock data only; never connect directly to production customer credentials.
3. **Register in `src/components/preview/PreviewContainer.jsx`**:
   - Import your component and add a case in `renderAppContent()` matching `app.id`.

---

## 🌐 Production Deployment Guidelines

- **Build Output**: Run `npm run build` to generate the static distribution bundle in `dist/`.
- **Web Server**: Deployable to any standard static file hosting (Nginx, Cloudflare Pages, AWS S3/CloudFront, Firebase Hosting).
- **Single Page Application (SPA) Routing**: Configure server fallback to `index.html` for clean client-side routing on reload.
  - **Nginx Example**:
    ```nginx
    location / {
      try_files $uri $uri/ /index.html;
    }
    ```

---

## 📄 License & Attribution

Copyright © 2026 All Rights Reserved. By **[Deccan IDentity Software Pvt. Ltd.](https://deccanidentity.com/)**
