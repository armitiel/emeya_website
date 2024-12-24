import type { WisdomArticle } from '../types/wisdom';

export const wisdomArticles: Record<'pl' | 'en', WisdomArticle[]> = {
  pl: [
    {
      id: 'ancient-wisdom',
      title: 'Pradawna Mądrość w Nowoczesnym Świecie',
      excerpt: 'Jak starożytne praktyki duchowe mogą pomóc nam odnaleźć równowagę w dzisiejszych czasach.',
      category: 'Duchowość',
      readTime: 8
    },
    {
      id: 'energy-healing',
      title: 'Sztuka Uzdrawiania Energetycznego',
      excerpt: 'Odkryj, jak pracować z subtelnymi energiami ciała dla osiągnięcia harmonii i zdrowia.',
      category: 'Uzdrawianie',
      readTime: 10
    },
    {
      id: 'meditation-guide',
      title: 'Przewodnik po Medytacji',
      excerpt: 'Praktyczne wskazówki jak rozpocząć i pogłębić swoją praktykę medytacyjną.',
      category: 'Praktyka',
      readTime: 12
    }
  ],
  en: [
    {
      id: 'ancient-wisdom',
      title: 'Ancient Wisdom in the Modern World',
      excerpt: 'How ancient spiritual practices can help us find balance in today\'s times.',
      category: 'Spirituality',
      readTime: 8
    },
    {
      id: 'energy-healing',
      title: 'The Art of Energy Healing',
      excerpt: 'Discover how to work with subtle body energies to achieve harmony and health.',
      category: 'Healing',
      readTime: 10
    },
    {
      id: 'meditation-guide',
      title: 'Meditation Guide',
      excerpt: 'Practical tips on how to start and deepen your meditation practice.',
      category: 'Practice',
      readTime: 12
    }
  ]
};