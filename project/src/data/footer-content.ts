interface FooterContent {
  description: string;
  quickLinks: {
    title: string;
    items: Array<{ label: string; href: string; }>;
  };
  services: {
    title: string;
    items: Array<{ label: string; href: string; }>;
  };
  contact: {
    title: string;
    items: Array<{ label: string; href: string; }>;
  };
  rights: string;
}

export const footerContent: Record<'pl' | 'en', FooterContent> = {
  pl: {
    description: 'Odkryj swoją prawdziwą ścieżkę i przekształć swoje przeznaczenie poprzez starożytną mądrość i duchowe przewodnictwo.',
    quickLinks: {
      title: 'Szybkie Linki',
      items: [
        { label: 'O nas', href: '#about' },
        { label: 'Usługi', href: '#services' },
        { label: 'Opinie', href: '#testimonials' },
        { label: 'Kontakt', href: '#contact' },
      ]
    },
    services: {
      title: 'Nasze Usługi',
      items: [
        { label: 'Terapia Holistyczna', href: '#services' },
        { label: 'Medycyna Naturalna', href: '#services' },
        { label: 'Warsztaty Rozwojowe', href: '#services' },
        { label: 'Doradztwo Duchowe', href: '#services' },
      ]
    },
    contact: {
      title: 'Kontakt',
      items: [
        { label: '+48 123 456 789', href: 'tel:+48123456789' },
        { label: 'kontakt@redaktorlosu.pl', href: 'mailto:kontakt@redaktorlosu.pl' },
        { label: 'ul. Duchowa 42', href: '#' },
        { label: '00-001 Warszawa', href: '#' },
      ]
    },
    rights: 'Wszelkie prawa zastrzeżone.'
  },
  en: {
    description: 'Discover your true path and transform your destiny through ancient wisdom and spiritual guidance.',
    quickLinks: {
      title: 'Quick Links',
      items: [
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'Contact', href: '#contact' },
      ]
    },
    services: {
      title: 'Our Services',
      items: [
        { label: 'Holistic Therapy', href: '#services' },
        { label: 'Natural Medicine', href: '#services' },
        { label: 'Development Workshops', href: '#services' },
        { label: 'Spiritual Guidance', href: '#services' },
      ]
    },
    contact: {
      title: 'Contact',
      items: [
        { label: '+48 123 456 789', href: 'tel:+48123456789' },
        { label: 'contact@fateditor.com', href: 'mailto:contact@fateditor.com' },
        { label: '42 Spiritual Street', href: '#' },
        { label: '00-001 Warsaw, Poland', href: '#' },
      ]
    },
    rights: 'All rights reserved.'
  }
};