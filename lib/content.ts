// lib/content.ts
// ─────────────────────────────────────────────────────────────────────────────
// EDIT THIS FILE to change any text, images, or links on the website.
// All sections pull from this single source of truth.
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {
  name:    'Roots & Harvest',
  tagline: 'Grown with love. Made with soul.',
  url:     'https://rootsandharvest.ag',
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const HERO = {
  headline:    'From the\nAntiguian\nSoil',
  subheadline: 'Pure peanuts, golden coconut oil, and hand-picked island produce — brought straight from the field to your table.',
  cta:         'Explore Products',
  ctaAnchor:   '#products',
  // Replace with your actual image path under /public/images/
  backgroundImage: '/images/hero-bg.jpg',
  // Fallback gradient used when image isn't loaded
  fallbackGradient: 'from-forest-900 via-earth-900 to-ink',
}

// ─── About ────────────────────────────────────────────────────────────────────
export const ABOUT = {
  badge:   'Our Story',
  heading: 'Rooted in Tradition,\nHarvested with Pride',
  body: [
    'For three generations, our family has worked the land of Antigua and Barbuda, growing the crops that define our culture — peanuts, coconuts, guava, and fresh vegetables — using methods passed down by our grandparents.',
    'Every product we make carries the warmth of the Caribbean sun, the richness of our volcanic soil, and the care of hands that know the land. We believe that real food tells a real story.',
    'Today we bring that tradition to your home — nothing artificial, nothing imported, just the honest flavour of the islands.',
  ],
  mission: '"We grow what we eat, and we share what we grow."',
  image:   '/images/about-farmer.jpg',
  stats: [
    { value: '30+', label: 'Years Farming'   },
    { value: '100%', label: 'Natural Products' },
    { value: '4',   label: 'Crop Varieties'  },
    { value: '🌴',  label: 'Antigua & Barbuda' },
  ],
}

// ─── Products ─────────────────────────────────────────────────────────────────
export const PRODUCTS = [
  {
    id:          'peanuts',
    featured:    true,
    name:        'Roasted Peanuts',
    subtitle:    'Our Signature',
    description: 'Sun-dried and slow-roasted to perfection. Crunchy, naturally sweet, and packed with protein. Available salted, spiced, or plain.',
    image:       '/images/product-peanuts.jpg',
    badge:       'Best Seller',
    cta:         'Order Now',
    whatsapp:    true,
  },
  {
    id:          'coconut-oil',
    featured:    false,
    name:        'Virgin Coconut Oil',
    subtitle:    'Cold Pressed',
    description: 'Cold-pressed from fresh Antiguan coconuts. Unrefined, fragrant, and rich in natural fatty acids. Perfect for cooking and skin care.',
    image:       '/images/product-coconut-oil.jpg',
    badge:       'Pure & Raw',
    cta:         'Order Now',
    whatsapp:    true,
  },
  {
    id:          'guava',
    featured:    false,
    name:        'Guava Products',
    subtitle:    'Jams · Juices · Fresh',
    description: 'From our guava grove — sweet pink-flesh guavas made into jam, fresh-pressed juice, and seasonal whole fruit. Taste the tropics.',
    image:       '/images/product-guava.jpg',
    badge:       'Seasonal',
    cta:         'Order Now',
    whatsapp:    true,
  },
  {
    id:          'vegetables',
    featured:    false,
    name:        'Fresh Vegetables',
    subtitle:    'Garden-to-Door',
    description: 'Seasonal garden vegetables grown without pesticides. Okra, sweet peppers, callaloo, christophene, and more — harvested weekly.',
    image:       '/images/product-vegetables.jpg',
    badge:       'Organic',
    cta:         'Order Now',
    whatsapp:    true,
  },
]

// ─── Video ────────────────────────────────────────────────────────────────────
export const VIDEOS = {
  badge:    'Watch & Learn',
  heading:  'See How We Work',
  subtext:  'From field to finished product — an honest look at how your food is made.',
  items: [
    {
      title:       'The Peanut Harvest',
      description: 'Follow the journey from planting to roasting in our traditional open-air kitchen.',
      // Replace with real YouTube embed ID
      youtubeId:   'dQw4w9WgXcQ',
      thumbnail:   '/images/video-thumb-peanuts.jpg',
    },
    {
      title:       'Pressing Coconut Oil',
      description: 'Watch how we cold-press coconuts to extract pure, golden oil the old-fashioned way.',
      youtubeId:   'dQw4w9WgXcQ',
      thumbnail:   '/images/video-thumb-coconut.jpg',
    },
  ],
}

// ─── Engagement ───────────────────────────────────────────────────────────────
export const ENGAGEMENT = {
  heading: 'Join the Roots Community',
  subtext: 'If our story moved you, share it. Every share plants a seed.',
  shareText:   'I just discovered Roots & Harvest — real food from Antigua & Barbuda. Check it out!',
  shareUrl:    'https://rootsandharvest.ag',
  whatsappMsg: 'I just discovered Roots & Harvest — real Caribbean food! Check it out: https://rootsandharvest.ag',
}

// ─── Contact ──────────────────────────────────────────────────────────────────
export const CONTACT = {
  badge:          'Get in Touch',
  heading:        'Order Direct.\nTalk to Us.',
  subtext:        'No middlemen. Message us directly on WhatsApp or send a quick note below — we reply within the day.',
  whatsappNumber: '12687211140',   // Format: country code + number, no spaces
  whatsappGreeting: 'Hello! I found you on your website and I\'d like to place an order.',
  email:          'hello@rootsandharvest.ag',
  address:        'Antigua & Barbuda, West Indies',
  formFields: {
    name:    { label: 'Your Name',       placeholder: 'e.g. Maria Joseph'        },
    message: { label: 'Message / Order', placeholder: 'Tell us what you need…'   },
  },
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export const FOOTER = {
  tagline:   'Pure food. Real people. Island roots.',
  copyright: `© ${new Date().getFullYear()} Roots & Harvest. All rights reserved.`,
  links: [
    { label: 'Products', anchor: '#products' },
    { label: 'Our Story', anchor: '#about'   },
    { label: 'Videos',   anchor: '#videos'   },
    { label: 'Contact',  anchor: '#contact'  },
  ],
}
