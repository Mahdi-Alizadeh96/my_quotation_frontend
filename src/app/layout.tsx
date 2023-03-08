// <global styles
import '@/styles/globals.scss';
// global styles>

// <import configs
import { sansita } from '&/configs/fonts'; // import font
// import configs>

// <meta data
export const metadata = {
  title: 'My Quotation',
  description: 'Quotations from everywhere and everybody'
}
// meta data>

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en" className={sansita.className} >
      <body>{children}</body>
    </html>
  )
};