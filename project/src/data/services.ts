import type { Service } from '../types/services';

export const services: Record<'pl' | 'en', Service[]> = {
  pl: [
    {
      id: 'holistic-therapy',
      title: 'Terapia Holistyczna',
      description: 'Kompleksowe podejście do uzdrawiania, łączące pracę z ciałem, umysłem i duchem.',
      imageUrl: '/images/services/holistic.svg',
      benefits: [
        'Głębokie uzdrawianie na poziomie energetycznym',
        'Równoważenie czakr i pól energetycznych',
        'Integracja traumy i wspomnień komórkowych',
        'Przywracanie naturalnej harmonii organizmu'
      ]
    },
    {
      id: 'natural-medicine',
      title: 'Medycyna Naturalna',
      description: 'Konsultacje i terapie wykorzystujące naturalne metody leczenia i profilaktyki.',
      imageUrl: '/images/services/natural.svg',
      benefits: [
        'Ziołolecznictwo i naturalne suplementy',
        'Spersonalizowane plany żywieniowe',
        'Techniki detoksykacji organizmu',
        'Wzmacnianie odporności naturalnej'
      ]
    },
    {
      id: 'personal-development',
      title: 'Warsztaty Samorozwoju',
      description: 'Transformacyjne sesje grupowe wspierające rozwój osobisty i duchowy.',
      imageUrl: '/images/services/development.svg',
      benefits: [
        'Odkrywanie własnego potencjału',
        'Praca z przekonaniami limitującymi',
        'Rozwój intuicji i świadomości',
        'Techniki medytacji i uważności'
      ]
    },
    {
      id: 'relationship-mentoring',
      title: 'Doradztwo Partnerskie',
      description: 'Profesjonalne wsparcie w budowaniu i pogłębianiu relacji międzyludzkich.',
      imageUrl: '/images/services/relationship.svg',
      benefits: [
        'Poprawa komunikacji w związku',
        'Rozwiązywanie konfliktów',
        'Budowanie głębszej intymności',
        'Harmonizacja energii partnerskiej'
      ]
    }
  ],
  en: [
    {
      id: 'holistic-therapy',
      title: 'Holistic Therapy',
      description: 'A comprehensive approach to healing, combining work with body, mind, and spirit.',
      imageUrl: '/images/services/holistic.svg',
      benefits: [
        'Deep healing at the energetic level',
        'Balancing chakras and energy fields',
        'Integration of trauma and cellular memories',
        'Restoring natural harmony of the organism'
      ]
    },
    {
      id: 'natural-medicine',
      title: 'Natural Medicine',
      description: 'Consultations and therapies using natural methods of treatment and prevention.',
      imageUrl: '/images/services/natural.svg',
      benefits: [
        'Herbal medicine and natural supplements',
        'Personalized nutrition plans',
        'Body detoxification techniques',
        'Strengthening natural immunity'
      ]
    },
    {
      id: 'personal-development',
      title: 'Self-Development Workshops',
      description: 'Transformative group sessions supporting personal and spiritual growth.',
      imageUrl: '/images/services/development.svg',
      benefits: [
        'Discovering your potential',
        'Working with limiting beliefs',
        'Developing intuition and awareness',
        'Meditation and mindfulness techniques'
      ]
    },
    {
      id: 'relationship-mentoring',
      title: 'Partnership Counseling',
      description: 'Professional support in building and deepening interpersonal relationships.',
      imageUrl: '/images/services/relationship.svg',
      benefits: [
        'Improving relationship communication',
        'Conflict resolution',
        'Building deeper intimacy',
        'Harmonizing partnership energy'
      ]
    }
  ]
};