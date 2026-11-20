export type PlanType = 'essencial' | 'vip';

export const ESSENCIAL_CHECKOUT_URL =
  'https://pay.hotmart.com/D108515300H?checkoutMode=10';

export const VIP_CHECKOUT_URL =
  'https://pay.hotmart.com/Q108559819D?checkoutMode=10';

export interface PlanDetails {
  id: PlanType;
  name: string;
  price: string;
  priceNumber: number;
  badge?: string;
  subtitle: string;
  features: string[];
  ctaLabel: string;
  highlighted?: boolean;
}

export interface AreaInfo {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
}

export interface BonusItem {
  number: string;
  title: string;
  individualPrice: string;
  headline: string;
  description: string;
  items: string[];
  image?: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
