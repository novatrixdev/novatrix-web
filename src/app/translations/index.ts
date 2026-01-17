import { en } from './en';
import { ua } from './ua';

export const translations = {
  en,
  ua,
};

export type Language = 'en' | 'ua';
export type TranslationKey = keyof typeof en;
