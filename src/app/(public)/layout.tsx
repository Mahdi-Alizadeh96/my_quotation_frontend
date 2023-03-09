// <import react
import { Suspense } from 'react';
// import react>

// <import styles
import styles from './layout.module.scss';
// import styles>

// <import Global components
import Components from "@/app/components";
// import Global components>

// <import loading
import Loading from './loading';
// import loading>

/**
 * @description public layout with header & footer
 * @includes header and footer
 */
export default function publicLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className={styles.publicLayout}>
        <Components.Header/>
        <div className={styles.layoutContent}>
          <Suspense fallback={<Loading/>}>
            {children}
          </Suspense>
        </div>
        <Components.Footer/>
      </div>
    )
};