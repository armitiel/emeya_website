export interface BlogPost {
  id: number;
  title: string;
  titleEn?: string;
  slug: string;
  excerpt: string;
  excerptEn?: string;
  imageUrl: string;
  date: string;
  readTime: number;
  language?: 'pl' | 'en';
}