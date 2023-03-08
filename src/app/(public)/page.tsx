// <import next
import Image from 'next/image'
// import next>

// <import styles
import styles from './page.module.scss';
// import styles>

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
