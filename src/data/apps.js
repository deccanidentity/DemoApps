// ─── DeccanIDentity Mobile Apps Catalog ───────────────────────────────────────
// Centralized metadata registry for mobile applications.

export const CATEGORIES = [
  { id: 'all', name: 'All Categories', count: 12, icon: 'grid', emoji: '🌟' },
  { id: 'real-estate', name: 'Real Estate', count: 2, icon: 'home', emoji: '🏡' },
  { id: 'digital-identity', name: 'Digital Identity', count: 1, icon: 'shield-check', emoji: '🪪' },
  { id: 'business-enterprise', name: 'Business & Enterprise', count: 1, icon: 'briefcase', emoji: '🏛️' },
  { id: 'iot-hardware', name: 'IoT & Smart Telemetry', count: 1, icon: 'wifi', emoji: '📡' },
  { id: 'ecommerce', name: 'E-commerce', count: 1, icon: 'shopping-bag', emoji: '⚡' },
  { id: 'finance', name: 'Finance', count: 1, icon: 'credit-card', emoji: '💳' },
  { id: 'healthcare', name: 'Healthcare', count: 1, icon: 'activity', emoji: '🏥' },
  { id: 'education', name: 'Education', count: 1, icon: 'book-open', emoji: '🎓' },
  { id: 'productivity', name: 'Productivity', count: 1, icon: 'check-square', emoji: '🚀' },
  { id: 'lifestyle', name: 'Lifestyle', count: 1, icon: 'heart', emoji: '🧘' },
  { id: 'ai-applications', name: 'AI Applications', count: 1, icon: 'cpu', emoji: '🧠' },
];

export const PLATFORMS = [
  { id: 'all', name: 'All Platforms' },
  { id: 'ios', name: 'iOS' },
  { id: 'android', name: 'Android' },
  { id: 'cross-platform', name: 'Cross-Platform' },
];

export const appsData = [
  {
    id: 'estatemark',
    name: 'EstateMark',
    tagline: 'Modern Real Estate & Property Discovery',
    category: 'real-estate',
    categoryName: 'Real Estate',
    platforms: ['iOS', 'Android', 'Cross-Platform'],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'PostgreSQL'],
    iconColor: '#C8860A',
    iconSymbol: '🏡',
    featured: true,
    hasLivePreview: true,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Featured Demo',
    shortDescription: 'Discover verified open plots, luxury villas, and premium high-rise apartments with interactive layouts, 3D site maps, and instant site visit booking.',
    fullDescription: 'EstateMark is an enterprise-grade mobile application designed for real estate developers, property buyers, and channel partners. It delivers an immersive property exploration experience featuring interactive layout maps, unit filtering (plots, 2BHK/3BHK flats, gated villas), instant booking reservations, EMI calculators, and direct developer communication.',
    features: [
      { title: 'Interactive Layout Navigator', description: 'Explore plotted layouts and tower floor plans with zoomable unit availability states.' },
      { title: 'Instant Site Visit Booking', description: 'Schedule cab pickups or sales executive appointments directly from your phone.' },
      { title: 'Smart Property Search & Filters', description: 'Filter by budget, unit type, square footage, facing, and possession date.' },
      { title: 'Built-in EMI & Cost Calculator', description: 'Transparent cost breakdowns including base price, registration, and installment plans.' },
      { title: 'Direct WhatsApp Concierge', description: 'Connect with authorized property advisors in one tap without middleman delays.' },
      { title: 'Offline Document Vault', description: 'Download master layouts, RERA certificates, and brochures for offline viewing.' }
    ],
    specifications: {
      'App Version': 'v1.4.1 (Build 31)',
      'Bundle ID': 'com.estatemark.app',
      'Framework': 'React Native 0.76 / Expo 52',
      'Target SDK': 'iOS 16.0+ / Android 14+ (API 36)',
      'Mapping Engine': 'Google Maps SDK Native',
      'Offline Storage': 'Expo SQLite Local Cache',
      'Security': 'Biometric & Encrypted Keystore'
    },
    storeLinks: {
      android: 'https://play.google.com/store/apps/details?id=com.estatemark.app&hl=en_IN',
      ios: 'https://play.google.com/store/apps/details?id=com.estatemark.app&hl=en_IN',
      website: 'https://www.estatemark.app',
      statusNote: 'Official Production App · Available for direct download on Google Play and App Store.'
    },
    previewComponent: 'EstateMarkPreview'
  },
  {
    id: 'footmark',
    name: 'Footmark',
    tagline: 'Smarter Plot Booking & Real Estate Land Layout Management',
    category: 'real-estate',
    categoryName: 'Real Estate',
    platforms: ['iOS', 'Android', 'Cross-Platform'],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Vector Maps', 'SQLite Local Cache'],
    iconColor: '#D97706',
    iconSymbol: '🧭',
    featured: true,
    hasLivePreview: true,
    rating: 4.93,
    reviewsCount: 118,
    badge: 'Official Store App',
    shortDescription: 'Real-time land plot booking and layout management platform for developers, promoters, brokers, and plot buyers to visualize availability and book without conflict.',
    fullDescription: 'Footmark is an enterprise plot and layout management mobile application developed by DeccanIDentity. Designed for real estate developers, land layout promoters, brokers, and buyers, Footmark allows teams to visualize open plotted layouts, monitor live plot availability (Available, Booked, Hold), schedule site inspections, and generate instant digital booking tokens with real-time multi-agent sync.',
    features: [
      { title: 'Interactive Plot Layout Navigator', description: 'Explore demarcated land layouts with zoomable plot boundaries and color-coded status.' },
      { title: 'Conflict-Free Cloud Booking', description: 'Instant cloud synchronization prevents double-booking across distributed agent networks.' },
      { title: 'Digital Token & Payment Receipts', description: 'Issue digital booking tokens and installment acknowledgments with 1-tap PDF sharing.' },
      { title: 'Multi-Agent Team Management', description: 'Role-based access control for developers, site supervisors, and channel sales partners.' },
      { title: 'One-Tap WhatsApp & Phone Calling', description: 'Connect with prospective buyers and site engineers without delay.' },
      { title: 'Offline Document & Layout Vault', description: 'Access layout drawings, approvals, and legal documents even on remote construction sites.' }
    ],
    specifications: {
      'App Version': 'v1.2.0 (Build 14)',
      'Bundle ID': 'com.deccanidentity.mobile.footmark',
      'Developer': 'DeccanIDentity`',
      'Framework': 'React Native / Expo 52',
      'Target SDK': 'iOS 16.0+ / Android 14+ (API 36)',
      'Mapping Engine': 'Vector GeoJSON Layout Engine',
      'Sync Architecture': 'Real-Time WebSockets & Offline Cache'
    },
    storeLinks: {
      android: 'https://play.google.com/store/apps/details?id=com.deccanidentity.mobile.footmark&hl=en_IN',
      ios: 'https://play.google.com/store/apps/details?id=com.deccanidentity.mobile.footmark&hl=en_IN',
      website: 'https://footmark.co.in/',
      statusNote: 'Official Production App · Available for direct download on Google Play and App Store.'
    },
    previewComponent: 'EstateMarkPreview'
  },
  {
    id: 'tapdid',
    name: 'TapDID',
    tagline: 'Decentralized Digital Identity & Smart Contact Sharing',
    category: 'digital-identity',
    categoryName: 'Digital Identity',
    platforms: ['iOS', 'Android', 'Cross-Platform'],
    techStack: ['Flutter', 'Dart', 'NFC Core', 'Web3 / DID', 'Secure Enclave'],
    iconColor: '#3B82F6',
    iconSymbol: '🪪',
    featured: true,
    hasLivePreview: true,
    rating: 4.95,
    reviewsCount: 208,
    badge: 'Flagship Product',
    shortDescription: 'The ultimate professional digital identity card. Exchange contact info via NFC tap or dynamic QR, verify credentials, and export directly to phone contacts or CRM.',
    fullDescription: 'TapDID revolutionizes modern networking and enterprise access control. Powered by self-sovereign digital identity (DID) standards, TapDID enables executives and teams to share customizable digital profiles in under 2 seconds. Features include encrypted business cards, instant vCard additions, social hub links, and tamper-evident credential verification.',
    features: [
      { title: 'One-Tap NFC Transmission', description: 'Hold phone near another device or physical TapDID smart card to share credentials.' },
      { title: 'Dynamic QR Code Generation', description: 'Real-time updated QR cards readable by any standard smartphone camera.' },
      { title: 'Direct Phonebook vCard Export', description: 'Save contacts directly to iOS Contacts or Google People with a single tap.' },
      { title: 'Custom Branding & Multi-Profile', description: 'Switch seamlessly between Work, Personal, and Creator digital identity cards.' },
      { title: 'Privacy First & Secure Enclave', description: 'Zero ads, zero data selling, and hardware-backed biometric authentication.' },
      { title: 'Team Analytics & CRM Sync', description: 'Enterprise dashboard tracking card views, connection metrics, and CRM webhooks.' }
    ],
    specifications: {
      'App Version': 'v1.1.0 (Build 10)',
      'Bundle ID': 'com.tapdid',
      'Developer': 'DeccanIDentity`',
      'Framework': 'React Native / Expo Router',
      'Target SDK': 'iOS 16.4+ / Android 14+ (API 36)',
      'Hardware Sensors': 'react-native-nfc-manager, Camera QR',
      'Authentication': 'Face ID / Android Biometric Keystore',
      'vCard Standard': 'vCard 4.0 RFC 6350 & W3C DID'
    },
    storeLinks: {
      android: 'https://play.google.com/store/apps/details?id=com.tapdid&hl=en_IN',
      ios: 'https://play.google.com/store/apps/details?id=com.tapdid&hl=en_IN',
      website: 'https://tapdid.com',
      statusNote: 'Official Production App · Available for direct download on Google Play and App Store.'
    },
    previewComponent: 'TapDIDPreview'
  },
  {
    id: 'deccan-company',
    name: 'DeccanIDentity Portal',
    tagline: 'Corporate Services, Engineering Hub & Team App',
    category: 'business-enterprise',
    categoryName: 'Business & Enterprise',
    platforms: ['iOS', 'Android', 'Cross-Platform'],
    techStack: ['React Native', 'Expo Router', 'GraphQL', 'Tailored Design System'],
    iconColor: '#C8860A',
    iconSymbol: '🏛️',
    featured: true,
    hasLivePreview: true,
    rating: 4.88,
    reviewsCount: 97,
    badge: 'Official App',
    shortDescription: 'Experience DeccanIDentity services, schedule software consultations, track enterprise projects, and interact with our cross-platform solutions on mobile.',
    fullDescription: 'The official DeccanIDentity mobile portal gives clients, partners, and enterprise stakeholders direct access to software architecture consulting, project milestone tracking, branch locations (Hyderabad, Ongole, Tirupati), and 24x7 engineer escalation channels directly on iOS and Android devices.',
    features: [
      { title: 'Interactive Solution Portfolio', description: 'Explore enterprise capabilities in Web, Cloud, AI, and Cybersecurity.' },
      { title: 'Project Consultation Scheduler', description: 'Book 30-minute discovery calls with principal engineering architects.' },
      { title: 'Multi-Branch Office Navigator', description: 'Get directions and direct WhatsApp lines to Hyderabad, Ongole, and Tirupati centers.' },
      { title: 'Live Service Health & Status', description: 'Real-time SLA status and uptime metrics for managed client services.' },
      { title: 'Enterprise Inquiries & RFPs', description: 'Submit requirement scopes and upload project briefs with instant confirmation.' },
      { title: 'Direct Engineer Escalation', description: 'High-priority emergency support dispatch for contracted client platforms.' }
    ],
    specifications: {
      'App Version': 'v1.0.2 (Build 2)',
      'Bundle ID': 'com.deccanidentity.mobile',
      'Developer': 'DeccanIDentity`',
      'Framework': 'React Native / Expo Router',
      'Target SDK': 'iOS 16.4+ / Android 14+ (API 36)',
      'Authentication': 'SSO / OAuth2 / Biometric FaceID',
      'API Layer': 'GraphQL & WebSocket Real-time Feeds',
      'Hosting Compliance': 'ISO/IEC 27001 & SOC 2 Aligned'
    },
    storeLinks: {
      android: 'https://play.google.com/store/apps/developer?id=DeccanIDentity%60&hl=en_IN',
      ios: 'https://play.google.com/store/apps/developer?id=DeccanIDentity%60&hl=en_IN',
      website: 'https://deccanidentity.com',
      statusNote: 'Official DeccanIDentity Mobile Apps Ecosystem · Explore production apps on Google Play.'
    },
    previewComponent: 'DeccanCompanyPreview'
  },
  {
    id: 'iotpulse',
    name: 'IoTPulse Telemetry',
    tagline: 'Industrial IoT Telemetry, BLE Mesh & Smart Relay Control',
    category: 'iot-hardware',
    categoryName: 'IoT & Smart Telemetry',
    platforms: ['iOS', 'Android', 'Cross-Platform'],
    techStack: ['React Native', 'BLE Core', 'MQTT / WebSocket', 'Expo', 'TypeScript'],
    iconColor: '#10B981',
    iconSymbol: '📡',
    featured: true,
    hasLivePreview: true,
    rating: 4.96,
    reviewsCount: 164,
    badge: 'Live Simulator',
    shortDescription: 'Industrial IoT mobile cockpit for BLE sensor telemetry, smart relay actuation, threshold alerts, and offline-first local SQLite caching.',
    fullDescription: 'IoTPulse connects field engineers and plant managers with industrial IoT sensors, remote motor pumps, HVAC units, and solar arrays. Delivers sub-100ms BLE mesh command responses, MQTT telemetry over TLS, and reliable local caching during network outages.',
    features: [
      { title: 'Sub-100ms BLE Mesh Sync', description: 'Instant pairing and control with decentralized Bluetooth Low Energy sensor nodes.' },
      { title: 'Remote Relay Actuation', description: 'Safe switching of heavy 3-phase machinery, pumps, and solar inverters with audit logging.' },
      { title: 'Real-Time Telemetry Gauges', description: 'Monitor core temperatures, current loads, motor RPM, and environmental humidity live.' },
      { title: 'Automated Threshold Alerts', description: 'Instant push notifications when voltage or temperature parameters exceed defined limits.' },
      { title: 'Offline-First SQLite Cache', description: 'Continuously logs telemetry even when cellular signal is completely unavailable.' }
    ],
    specifications: {
      'App Version': 'v2.0.1 (Build 18)',
      'Bundle ID': 'com.deccanidentity.iotpulse',
      'Framework': 'React Native 0.76 / Expo 52',
      'Target SDK': 'iOS 16.0+ / Android 14+ (API 36)',
      'Hardware Protocols': 'BLE 5.3, MQTT over TLS, WebSockets',
      'Sensor Sampling': '50Hz native C++ buffer',
      'Encryption': 'AES-256 GCM Hardware Keystore'
    },
    storeLinks: {
      ios: null,
      android: null,
      statusNote: 'Enterprise IoT Showcase Build · Deployable with customized hardware firmware integration.'
    },
    previewComponent: 'IoTPulsePreview'
  },
  {
    id: 'quickcart-mobile',
    name: 'QuickCart Express',
    tagline: 'Hyper-Local Delivery & Quick Commerce App',
    category: 'ecommerce',
    categoryName: 'E-commerce',
    platforms: ['iOS', 'Android', 'Cross-Platform'],
    techStack: ['React Native', 'Redux Toolkit', 'WebSockets', 'Stripe'],
    iconColor: '#10B981',
    iconSymbol: '⚡',
    featured: false,
    hasLivePreview: false,
    rating: 4.85,
    reviewsCount: 89,
    badge: 'Prototype Ready',
    shortDescription: 'Sub-15 minute grocery and retail delivery app featuring real-time rider GPS tracking, smart substitutions, and frictionless one-swipe checkout.',
    fullDescription: 'Built for high-volume quick commerce operations, QuickCart Express combines ultra-low latency catalog browsing with micro-fulfillment dark store routing. Enables consumers to order fresh produce, groceries, and essentials with live delivery partner telemetry.',
    features: [
      { title: 'Live Rider Geolocation', description: 'Real-time turn-by-turn map visualization from warehouse to doorstep.' },
      { title: '1-Swipe UPI & Card Checkout', description: 'Accelerated checkout flow optimized for Indian payment gateways and Apple Pay.' },
      { title: 'Intelligent Inventory Sync', description: 'Zero out-of-stock surprises with real-time warehouse shelf sensors.' }
    ],
    specifications: {
      'App Version': 'v1.2.0 (Demo Prototype)',
      'Framework': 'React Native 0.75',
      'Target SDK': 'iOS 14.0+ / Android 10+'
    },
    storeLinks: { ios: null, android: null, statusNote: 'Custom white-label solution ready for deployment.' }
  },
  {
    id: 'finledger',
    name: 'FinLedger Pro',
    tagline: 'SME Billing, GST Invoicing & Cashflow Radar',
    category: 'finance',
    categoryName: 'Finance',
    platforms: ['Android', 'iOS'],
    techStack: ['Flutter', 'SQLite', 'PDF Kit', 'GST e-Invoice API'],
    iconColor: '#6366F1',
    iconSymbol: '💳',
    featured: false,
    hasLivePreview: false,
    rating: 4.92,
    reviewsCount: 310,
    badge: 'Popular',
    shortDescription: 'Pocket accounting and GST invoicing for Indian traders and enterprises. Generate WhatsApp bills, track credit khata, and forecast monthly tax liabilities.',
    fullDescription: 'FinLedger Pro replaces paper bill-books with an elegant mobile accounting suite tailored for MSMEs, distributors, and service providers. Features automated payment reminders via WhatsApp, GST tax summaries, and encrypted cloud backups.',
    features: [
      { title: 'Instant GST Invoicing', description: 'Generate professional invoices and share via WhatsApp in under 30 seconds.' },
      { title: 'Customer Credit (Udhaar) Khata', description: 'Automated SMS and WhatsApp payment reminders with integrated payment links.' },
      { title: 'Offline First Architecture', description: 'Work without internet in remote markets with background cloud synchronization.' }
    ],
    specifications: {
      'App Version': 'v4.0.1 (Architecture Showcase)',
      'Framework': 'Flutter 3.24',
      'Target SDK': 'Android 8.0+ / iOS 14.0+'
    },
    storeLinks: { ios: null, android: null, statusNote: 'Turnkey enterprise licensing available.' }
  },
  {
    id: 'healthpulse',
    name: 'HealthPulse Care',
    tagline: 'Tele-Consultation & Electronic Health Records',
    category: 'healthcare',
    categoryName: 'Healthcare',
    platforms: ['iOS', 'Android', 'Cross-Platform'],
    techStack: ['React Native', 'WebRTC', 'HL7 FHIR', 'HIPAA Cloud'],
    iconColor: '#EF4444',
    iconSymbol: '❤️‍🩹',
    featured: false,
    hasLivePreview: false,
    rating: 4.89,
    reviewsCount: 165,
    badge: 'Healthcare',
    shortDescription: 'Secure mobile telemedicine platform connecting patients to hospital specialists with HD video consultations, digital prescriptions, and lab integration.',
    fullDescription: 'HealthPulse Care is a compliant digital health system engineered for hospital chains, diagnostic networks, and multi-specialty clinics. Seamlessly digitizes patient medical records according to ABDM (Ayushman Bharat Digital Mission) standards.',
    features: [
      { title: 'Encrypted HD Teleconsultation', description: 'Low-bandwidth video calls with in-call clinical note taking.' },
      { title: 'Smart Diagnostic Reports', description: 'AI-assisted vital trend charts and automated abnormal flag detection.' },
      { title: 'ABHA Health ID Integration', description: 'Seamless interoperability with Indian national digital health networks.' }
    ],
    specifications: {
      'App Version': 'v2.1.0 (Healthcare Concept)',
      'Framework': 'React Native 0.76',
      'Compliance': 'HIPAA / ABDM Tier 2 Compliant'
    },
    storeLinks: { ios: null, android: null, statusNote: 'Hospital deployment upon infrastructure audit.' }
  },
  {
    id: 'edusphere',
    name: 'EduSphere Academy',
    tagline: 'Interactive K-12 & Higher Ed Campus Companion',
    category: 'education',
    categoryName: 'Education',
    platforms: ['iOS', 'Android'],
    techStack: ['Flutter', 'Firebase', 'HLS Video Player', 'Supabase'],
    iconColor: '#F59E0B',
    iconSymbol: '🎓',
    featured: false,
    hasLivePreview: false,
    rating: 4.78,
    reviewsCount: 120,
    badge: 'EdTech',
    shortDescription: 'Student and parent school management app with real-time bus tracking, grade books, homework submission, and interactive video lessons.',
    fullDescription: 'EduSphere closes the communication loop between educational institutions, teachers, students, and parents. Handles fee payments, live GPS tracking of transport buses, digital attendance rosters, and proctored mobile quizzes.',
    features: [
      { title: 'Real-Time School Bus GPS', description: 'Parent alerts when school transport approaches pick-up and drop locations.' },
      { title: 'Mobile Fee Payment Gateway', description: 'Instant receipt generation and term fee reminder notifications.' },
      { title: 'Digital Diary & Homework', description: 'Paperless assignment submissions with voice and picture attachments.' }
    ],
    specifications: {
      'App Version': 'v3.0.4 (EdTech Framework)',
      'Framework': 'Flutter 3.22',
      'Target SDK': 'iOS 13.0+ / Android 9+'
    },
    storeLinks: { ios: null, android: null, statusNote: 'Custom branding for schools and universities.' }
  },
  {
    id: 'flowtask',
    name: 'FlowTask Studio',
    tagline: 'Agile Team Task Management & Sprints',
    category: 'productivity',
    categoryName: 'Productivity',
    platforms: ['iOS', 'Android', 'Cross-Platform'],
    techStack: ['React Native', 'Zustand', 'SQLite Local', 'CRDT Sync'],
    iconColor: '#8B5CF6',
    iconSymbol: '🚀',
    featured: false,
    hasLivePreview: false,
    rating: 4.91,
    reviewsCount: 198,
    badge: 'Productivity',
    shortDescription: 'Minimalist, keyboard-first task manager with Kanban boards, voice memos, calendar sync, and real-time multiplayer board synchronization.',
    fullDescription: 'FlowTask Studio gives developers, product managers, and remote creative teams a lightning-fast native mobile companion for sprinting, triage, and daily standup check-ins without desktop bloat.',
    features: [
      { title: 'Fluid Gesture Kanban', description: 'Smooth swipe-to-prioritize, drag-and-drop cards with haptic feedback.' },
      { title: 'Offline-First CRDT Engine', description: 'Zero sync conflicts whether working on flights or offline in transit.' },
      { title: 'Deep Calendar & Slack Integration', description: 'Transform team chat messages into actionable tracked tickets.' }
    ],
    specifications: {
      'App Version': 'v2.3.0 (Demo)',
      'Framework': 'React Native 0.76'
    },
    storeLinks: { ios: null, android: null, statusNote: 'Private Beta deployment available.' }
  },
  {
    id: 'aurafit',
    name: 'AuraFit Lifestyle',
    tagline: 'Personalized AI Fitness & Wellness Coach',
    category: 'lifestyle',
    categoryName: 'Lifestyle',
    platforms: ['iOS', 'Android'],
    techStack: ['React Native', 'HealthKit', 'Google Fit', 'On-Device ML'],
    iconColor: '#EC4899',
    iconSymbol: '🧘',
    featured: false,
    hasLivePreview: false,
    rating: 4.86,
    reviewsCount: 88,
    badge: 'Wellness',
    shortDescription: 'Holistic lifestyle tracker integrating Apple Health and Google Fit with AI-curated nutrition targets, hydration alerts, and mindful meditation sessions.',
    fullDescription: 'AuraFit connects directly with smart wearables to monitor active heart rate zones, sleep cycles, and daily caloric balance. Features personalized workout routines tailored to individual mobility and equipment availability.',
    features: [
      { title: 'Wearable Biosensor Sync', description: 'Seamless Apple HealthKit and Android Health Connect two-way data sync.' },
      { title: 'AI Meal Photo Scanner', description: 'Snap pictures of Indian meals to estimate macro breakdowns instantly.' },
      { title: 'Guided Breathing & Rest', description: 'Haptic-guided breath pacing for deep relaxation and stress recovery.' }
    ],
    specifications: {
      'App Version': 'v1.4.2 (Lifestyle Showcase)',
      'Framework': 'React Native 0.75'
    },
    storeLinks: { ios: null, android: null, statusNote: 'Ready for consumer publishing.' }
  },
  {
    id: 'omnisense-ai',
    name: 'OmniSense AI Assistant',
    tagline: 'On-Device Vision & Multi-lingual Document Intelligence',
    category: 'ai-applications',
    categoryName: 'AI Applications',
    platforms: ['iOS', 'Android', 'Cross-Platform'],
    techStack: ['React Native', 'PyTorch Mobile', 'MediaPipe', 'WebGPU'],
    iconColor: '#06B6D4',
    iconSymbol: '🧠',
    featured: false,
    hasLivePreview: false,
    rating: 4.96,
    reviewsCount: 240,
    badge: 'Next-Gen AI',
    shortDescription: 'Enterprise AI edge client providing instant multilingual document OCR, intelligent invoice entity extraction, and conversational voice assistance.',
    fullDescription: 'OmniSense AI harnesses small quantized language models running privately on modern smartphone NPUs. Enables field agents and auditors to inspect documents, scan barcodes, and extract structured JSON records with zero cloud dependency.',
    features: [
      { title: '100% Private Offline Inference', description: 'Zero cloud latency or data leak risk; processes documents entirely on-device.' },
      { title: 'Indian Script OCR & Translation', description: 'High-accuracy OCR for English, Telugu, Hindi, Tamil, and Kannada scripts.' },
      { title: 'Voice-First Form Filling', description: 'Speak naturally to fill complex multi-page enterprise inspection questionnaires.' }
    ],
    specifications: {
      'App Version': 'v1.0.0 (Research Demo)',
      'Framework': 'React Native + Native C++ NPU bindings'
    },
    storeLinks: { ios: null, android: null, statusNote: 'Private enterprise evaluation build.' }
  }
];
