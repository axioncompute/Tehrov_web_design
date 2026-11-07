export const SITE_CONFIG = {
  brandName: 'Hydro Build',
  domain: 'tehrov.in',
  siteUrl: 'https://tehrov.in',
  tagline: 'Indoor Hydroponic Rescue & Space-Optimized Apartment Builds',
  description:
    'Practical hydroponic troubleshooting, active DWC upgrades, and custom small-space indoor builds tested in real Indian apartments.',
  logo: {
    src: '/assets/logo.webp',
    lightSrc: '/assets/logo-light.webp',
    darkSrc: '/assets/logo-dark.webp',
    alt: 'Hydro Build by Tehrov official logo',
  },
  contact: {
    phoneDisplay: '+91 80023 85354',
    phoneRaw: '+918002385354',
    phoneHref: 'tel:+918002385354',
    whatsappHref:
      'https://wa.me/918002385354?text=Hi%20Hydro%20Build%2C%20I%20need%20help%20with%20my%20indoor%20hydroponic%20setup.',
    email: 'info@tehrov.in',
    emailHref: 'mailto:info@tehrov.in',
    hours: 'Mon – Sat, 9:00 AM – 8:00 PM IST',
    serviceCoverage: 'Pan-India Video Consultations & Local Metro Support',
  },
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/blog' },
    { label: 'About Us', path: '/about' },
    {
      label: 'Legal',
      dropdown: [
        { label: 'Privacy Policy', path: '/legal/privacy-policy' },
        { label: 'Disclaimer', path: '/legal/disclaimer' },
        { label: 'Terms & Conditions', path: '/legal/terms' },
      ],
    },
    { label: 'Contact Us', path: '/contact' },
  ],
};
