import { Josefin_Sans, Playwrite_AU_NSW } from 'next/font/google';

export const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const playwrite = Playwrite_AU_NSW({
  weight: ['400'],
  variable: '--font-playwrite',
});