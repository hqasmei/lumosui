import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function makeIntoSlug(str: string | undefined | null): string {
  if (!str) return '';
  return str.toLowerCase().replace(/\s+/g, '-');
}
