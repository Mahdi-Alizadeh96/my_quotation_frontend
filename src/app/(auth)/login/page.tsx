// <import next
import Link from 'next/link';
// import next>

// <import styles
import styles from './login.module.scss';
// import styles>

// <import General components
import Components from "@/app/general_components";
// import General components>

/**
 * @description home page of site
 * @includes top quotations displayed by views
*/
export default async function Login() {
    return (
      <>
        <main className={styles.loginPage}>
          <div className={styles.loginContainer}>
            <label className={styles.label}>Login</label>
            <div className={styles.inputs}>
              <Components.Inputs.Input type={'email'}/>
              <Components.Inputs.Input type={'password'}/>
            </div>
            <div className={styles.buttonContainer}>
              <Components.Button label='Submit' size='large'/>
            </div>
            <div className={styles.signUpRedirect}>
              <Link href='/sign-up'>Don&apos;t have any account ?</Link>
            </div>
          </div>
        </main>
      </>
    )
  };