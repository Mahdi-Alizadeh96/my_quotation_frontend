// <import next
import Link from 'next/link';
// import next>

// <import styles
import styles from './header.module.scss';
// import styles>

/**
 * @returns main header of site
 */
function Header() {

  return (
    <header className={styles.header}>
        <Link href='/'>
            <h1 className={styles.title}>
                My Quotation
            </h1>
        </Link>
    </header>
  )

};

export default Header;