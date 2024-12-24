export interface Retreat {
  id: string;
  title: string;
  description: string;
  location: string;
  duration: string;
  date: string;
  imageUrl: string;
  highlights?: string[];
  includes?: string[];
  price?: string;
}

export interface RetreatsContent {
  title: string;
  description: string;
  destinations: Retreat[];
}