// <import styles
import styles from './layout.module.scss';
// import styles>

// <import components
import { Header } from "@/app/components";
// import components>

export default function publicLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className={styles.publicLayout}>
        <Header/>
        <div className={styles.layoutContent}>
          {children}
        </div>
      </div>
    )
};