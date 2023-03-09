// <import next
import Link from 'next/link';
// import next>

// <import styles
import styles from './footer.module.scss';
// import styles>

/**
 * @includes link to github
 */
function Footer() {
  return (
    <footer className={styles.footer}>
      Copyright : 
      <Link className={styles.link} href='https://github.com/Mahdi-Alizadeh96'> 
        Mahdi-Alizadeh96
      </Link>
    </footer>
  )
};

export default Footer;