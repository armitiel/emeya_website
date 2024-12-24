// Central configuration for all image assets
export const images = {
  // Brand Assets
  brand: {
    logo: '/images/brand/logo.png',
    logoLight: '/images/brand/logo-light.png',
  },

  // Hero Section
  hero: {
    main: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80',
    overlay: '/images/patterns/mystic-overlay.svg',
  },

  // Service Icons
  services: {
    holistic: '/images/services/holistic.svg',
    natural: '/images/services/natural.svg',
    development: '/images/services/development.svg',
    relationship: '/images/services/relationship.svg',
  },

  // Patterns & Backgrounds
  patterns: {
    mystic: '/images/patterns/mystic.svg',
    spiritual: '/images/patterns/spiritual.svg',
  },

  // Default placeholder for missing images
  placeholder: 'https://images.unsplash.com/photo-1636955860106-9eb89e576026?auto=format&fit=crop&q=80',

  // Testimonial Images
  testimonials: {
    person1: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    person2: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    person3: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80',
  },

  // Blog Images
  blog: {
    meditation: 'https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?auto=format&fit=crop&q=80',
    holistic: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80',
    mindfulness: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80',
  },

  // Wisdom Section Images
  wisdom: {
    ancient: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80',
    energy: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80',
    meditation: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80',
    practice: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80',
  }
};

// Helper function to get image URL with fallback
export const getImageUrl = (path: string, fallback = images.placeholder): string => {
  if (path.startsWith('http')) {
    return path;
  }
  try {
    // For local images, we can add version or cache busting if needed
    return path;
  } catch {
    return fallback;
  }
};