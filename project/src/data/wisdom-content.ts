import type { WisdomContent } from '../types/wisdom';

export const wisdomContent: Record<'pl' | 'en', WisdomContent> = {
  pl: {
    title: 'Strumień Mądrości',
    subtitle: 'Zanurz się w ocean pradawnej wiedzy i współczesnych odkryć duchowych.',
    description: 'Odkryj sekrety zapisane w starożytnych księgach, które prowadzą do głębszego zrozumienia siebie i świata.',
    topics: [
      'Pradawne Rytuały i Ich Współczesne Znaczenie',
      'Sekrety Energetycznego Uzdrawiania',
      'Medytacja i Praktyki Duchowe',
      'Alchemia Transformacji Osobistej'
    ],
    cta: 'Biblioteka Wiedzy'
  },
  en: {
    title: 'Stream of Wisdom',
    subtitle: 'Immerse yourself in the ocean of ancient knowledge and contemporary spiritual discoveries.',
    description: 'Uncover secrets written in ancient books that lead to a deeper understanding of yourself and the world.',
    topics: [
      'Ancient Rituals and Their Modern Significance',
      'Secrets of Energy Healing',
      'Meditation and Spiritual Practices',
      'Alchemy of Personal Transformation'
    ],
    cta: 'Wisdom Library'
  }
};