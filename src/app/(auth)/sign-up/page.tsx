"use client"; // This page is client side

// <import styles
import styles from './signUp.module.scss';
// import styles>

// <import RQ
import { useQuery } from '@tanstack/react-query';
// import RQ>

// <import components
import { SignUpForm, VerifyOtp, SendOtp } from './components';
// import components>

/**
 * @description sing up page
 */
export default function Signup() {

  const { data : signUpState } = useQuery(['signUpState'], {
    select: (data) => data,
  });

  return (
    <>
      <header>
        <title>Sign up</title>
      </header>
      <main className={styles.authPage}>
        <div className={styles.authContainer}>
          {
            signUpState === '1' ? <SendOtp/> : signUpState === '2' ? <VerifyOtp/> : <SignUpForm/>
          }
        </div>
      </main>
    </>
  )
};