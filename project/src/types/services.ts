import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  benefits?: string[];
}