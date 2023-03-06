// <global styles
import '@/styles/globals.scss';
// global styles>

// <meta data
export const metadata = {
  title: 'My Quotation',
  description: 'Generated by create next app',
}
// meta data>

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
};