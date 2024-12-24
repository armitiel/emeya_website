export interface WisdomContent {
  title: string;
  subtitle: string;
  description: string;
  topics: string[];
  cta: string;
}

export interface WisdomArticle {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  readTime: number;
  content?: string;
}