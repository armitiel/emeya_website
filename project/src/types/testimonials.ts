export interface Testimonial {
  author: string;
  role: string;
  content: string;
  imageUrl: string;
  imagePosition?: 'center' | 'top' | 'bottom';
}