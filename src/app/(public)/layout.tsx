// <import styles
import styles from './layout.module.scss';
// import styles>

// <import Global components
import { Footer, Header } from "@/app/components";
// import Global components>

/**
 * @description public layout with header & footer
 * @includes header and footer
 */
export default function publicLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className={styles.publicLayout}>
        <Header/>
        <div className={styles.layoutContent}>
          {children}
        </div>
        <Footer/>
      </div>
    )
};