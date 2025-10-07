import type { LucideIcon } from "lucide-react";

export interface Plan {
  name: string;
  price: number;
  description: string;
  features: string[];
  isStandard?: boolean;
}

export interface Review {
  quote: string;
  author: string;
  details: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  category: string;
  items: { name: string; light: string; standard: string; premium: string }[];
}

/* ✅ 修正版 TeamMember */
export interface TeamMember {
  name: string;
  title: string;
  icon: LucideIcon; // ← Lucideのアイコン型を直接指定
}
