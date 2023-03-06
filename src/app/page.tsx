// <import next
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import next>

// <import styles
import styles from './page.module.scss';
// import styles>

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        Hello From Next.js 13
      </main>
      <div className={styles.hello}>
        hello
      </div>
    </>
  )
}
