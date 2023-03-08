import { Sansita } from 'next/font/google'; // add font from google

export const sansita = Sansita({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weight: ['400', '700', '900'],
    display: 'swap'
});