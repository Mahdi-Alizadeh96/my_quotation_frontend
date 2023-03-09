// <import next
import { Sansita } from 'next/font/google'; // add font from google fonts
// import next>

/**
 * @description add sansita font
 * @url https://fonts.google.com/specimen/Sansita
 */
export const sansita = Sansita({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weight: ['400', '700', '900'],
    display: 'swap'
});