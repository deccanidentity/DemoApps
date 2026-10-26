// ─── DeccanIDentity Mobile App Development Packages & Pricing ─────────────────
// Clear, transparent pricing tiers for iOS, Android, and Cross-Platform Apps.

const packages = [
  {
    id: 'starter-app',
    name: 'Mobile Starter MVP',
    price: 24999,
    priceLabel: '₹24,999',
    description: 'Perfect for small businesses, prototypes, and startups launching their first mobile MVP.',
    pages: 5,
    features: [
      '5 core interactive app screens',
      'React Native or Flutter architecture',
      'iOS or Android primary platform',
      'Modern UI with Dark & Light theme',
      'WhatsApp direct concierge integration',
      'Contact & lead inquiry forms',
      'Google Maps & location services',
      'Complete source code ownership',
      '2 revision cycles included'
    ],
    highlight: false,
    badge: null
  },
  {
    id: 'business-app',
    name: 'Dual-Platform Pro',
    price: 49999,
    priceLabel: '₹49,999',
    description: 'Our most popular tier for growing businesses requiring production iOS & Android deployment.',
    pages: 12,
    features: [
      '12 full application screens & flows',
      '100% Dual Platform (iOS & Android)',
      'Phone & Tablet responsive layouts',
      'Biometric auth (FaceID / Fingerprint)',
      'SQLite offline cache & cloud sync',
      'Push notifications (FCM / APNs)',
      'App Store & Google Play preparation',
      'Razorpay / Stripe payment gateway',
      '30 days post-launch warranty support',
      '3 revision cycles included'
    ],
    highlight: true,
    badge: 'Most Popular'
  },
  {
    id: 'enterprise-app',
    name: 'Enterprise Platform',
    price: 99999,
    priceLabel: '₹99,999',
    description: 'Full-scale enterprise mobile ecosystem with custom native hardware modules, microservices, and high concurrency.',
    pages: 25,
    features: [
      'Unlimited screens & complex workflows',
      'Native Swift/Kotlin C++ performance modules',
      'Hardware integration (NFC, QR, Bluetooth)',
      'Real-time WebSockets & GraphQL API layer',
      'Role-based access control (RBAC / DID)',
      'Automated CI/CD deployment pipelines',
      'End-to-end App Store review guarantee',
      'ISO 27001 & SOC 2 security compliance',
      'Priority 24×7 SLA technical desk',
      'Unlimited revisions during sprint'
    ],
    highlight: false,
    badge: 'Enterprise Grade'
  }
];

export default packages;
