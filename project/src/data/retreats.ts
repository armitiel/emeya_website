import type { RetreatsContent } from '../types/retreats';

export const retreats: Record<'pl' | 'en', RetreatsContent> = {
  pl: {
    title: 'Duchowe Podróże',
    description: 'Odkryj transformacyjne wyprawy do miejsc mocy, gdzie starożytna mądrość spotyka się z osobistym rozwojem.',
    destinations: [
      {
        id: 'sacred-peru',
        title: 'Święte Peru',
        description: 'Podróż do serca starożytnej cywilizacji Inków, gdzie poznasz szamańskie rytuały i pradawną mądrość Andów.',
        location: 'Cusco, Święta Dolina, Machu Picchu',
        duration: '12 dni',
        date: '15-26 Września 2024',
        imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80',
        highlights: [
          'Ceremonie z szamanami Q\'ero',
          'Medytacje w Machu Picchu',
          'Rytuały oczyszczające',
          'Warsztaty rozwoju duchowego'
        ],
        includes: [
          'Zakwaterowanie w tradycyjnych hacjendach',
          'Wegetariańskie posiłki',
          'Transport lokalny',
          'Przewodnik duchowy'
        ],
        price: '8900 PLN'
      },
      {
        id: 'mystical-bali',
        title: 'Mistyczne Bali',
        description: 'Zanurz się w duchowej kulturze Bali, gdzie hinduistyczne tradycje łączą się z praktykami medytacyjnymi i jogą.',
        location: 'Ubud, Uluwatu, Munduk',
        duration: '10 dni',
        date: '5-14 Listopada 2024',
        imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80',
        highlights: [
          'Ceremonie w świątyniach',
          'Praktyki jogi i medytacji',
          'Rytuały uzdrawiające',
          'Warsztaty rozwoju osobistego'
        ],
        includes: [
          'Zakwaterowanie w eco-resortach',
          'Organiczne posiłki',
          'Transport na wyspie',
          'Instruktorzy jogi'
        ],
        price: '7900 PLN'
      }
    ]
  },
  en: {
    title: 'Spiritual Journeys',
    description: 'Discover transformative journeys to power places where ancient wisdom meets personal growth.',
    destinations: [
      {
        id: 'sacred-peru',
        title: 'Sacred Peru',
        description: 'Journey to the heart of ancient Incan civilization, where you\'ll experience shamanic rituals and ancestral wisdom of the Andes.',
        location: 'Cusco, Sacred Valley, Machu Picchu',
        duration: '12 days',
        date: 'September 15-26, 2024',
        imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&q=80',
        highlights: [
          'Ceremonies with Q\'ero shamans',
          'Meditations at Machu Picchu',
          'Cleansing rituals',
          'Spiritual development workshops'
        ],
        includes: [
          'Accommodation in traditional haciendas',
          'Vegetarian meals',
          'Local transportation',
          'Spiritual guide'
        ],
        price: '1990 EUR'
      },
      {
        id: 'mystical-bali',
        title: 'Mystical Bali',
        description: 'Immerse yourself in Bali\'s spiritual culture, where Hindu traditions blend with meditation practices and yoga.',
        location: 'Ubud, Uluwatu, Munduk',
        duration: '10 days',
        date: 'November 5-14, 2024',
        imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80',
        highlights: [
          'Temple ceremonies',
          'Yoga and meditation practices',
          'Healing rituals',
          'Personal development workshops'
        ],
        includes: [
          'Eco-resort accommodation',
          'Organic meals',
          'Island transportation',
          'Yoga instructors'
        ],
        price: '1790 EUR'
      }
    ]
  }
};