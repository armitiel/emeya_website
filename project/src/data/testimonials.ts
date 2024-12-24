import type { Testimonial } from '../types/testimonials';

export const testimonials: Record<'pl' | 'en', Testimonial[]> = {
  pl: [
    {
      author: "Anna Kowalska",
      role: "Nauczycielka Jogi",
      content: "Sesje z Redaktorem Losu otworzyły przede mną nowe ścieżki samopoznania. Odkryłam w sobie siłę, o której istnieniu nie miałam pojęcia.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      imagePosition: "center"
    },
    {
      author: "Marek Nowicki",
      role: "Przedsiębiorca",
      content: "Holistyczne podejście do rozwoju osobistego pomogło mi znaleźć równowagę między życiem zawodowym a duchowym. To była transformacyjna podróż.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      imagePosition: "center"
    },
    {
      author: "Karolina Wiśniewska",
      role: "Artystka",
      content: "Dzięki sesjom terapeutycznym odkryłam swój prawdziwy potencjał twórczy. Moja sztuka nabrała głębszego, duchowego wymiaru.",
      imageUrl: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80",
      imagePosition: "center"
    }
  ],
  en: [
    {
      author: "Sarah Johnson",
      role: "Yoga Teacher",
      content: "Sessions with the Fate Editor opened new paths of self-discovery for me. I discovered strength within myself that I never knew existed.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      imagePosition: "center"
    },
    {
      author: "Mark Newman",
      role: "Entrepreneur",
      content: "The holistic approach to personal development helped me find balance between professional and spiritual life. It was a transformative journey.",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      imagePosition: "center"
    },
    {
      author: "Caroline Wilson",
      role: "Artist",
      content: "Through therapeutic sessions, I discovered my true creative potential. My art gained a deeper, spiritual dimension.",
      imageUrl: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?auto=format&fit=crop&q=80",
      imagePosition: "center"
    }
  ]
};