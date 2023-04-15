"use client"; // This page is client side

// <import react
import { useEffect, useState } from 'react';
// import react>

// <import packages
import { useQuery } from '@tanstack/react-query';
// import packages>

// <import next
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import next>

// <import styles
import styles from './login.module.scss';
// import styles>

// <import General components
import Components from "@/app/general_components";
// import General components>

// <import messages
import messages from "@/lib/messages/messages.json";
// import messages>

interface InputEvent {
  type : string
  value : string | null
};

/**
 * @description home page of site
 * @includes top quotations displayed by views
*/
export default function Login() {

  const router = useRouter();

  const [loginFormInputs, setLoginFormInputs] = useState({
    email : null,
    password : null
  });

  const [activeButton, setActiveButton] = useState(false);
  
  /**
   * @description save input's status in state
   * @param event 
   */
  function handleInputs(event : InputEvent) : void {

    setLoginFormInputs((prev)=> ({...prev, [event.type] : event.value}));
    
  };
  
  /**
   * @description submit login form
   */
  function handleSubmit() : void {
    
    if (activeButton) {

      router.push('/');

    };
    
  };

  /**
   * @description check for active submit button when email & password format is correct
   */
  useEffect(() => {

    if (loginFormInputs.email && loginFormInputs.password) {

      setActiveButton(true);

    } else {

      setActiveButton(false);

    };

  },[loginFormInputs]);

  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('http://localhost:8080/v1/auth/login', {
        method : 'post',
        body : JSON.stringify({
          email : "mahdi@gmail.com",
          password: "1fgrtgg2"
      })
      }).then(
        (res) => res.json()
      )
  });

  console.log(isLoading, error, data);
  
  return (
    <>
      <header>
        <title>Login</title>
      </header>
      <main className={styles.loginPage}>
        <div className={styles.loginContainer}>
          <label className={styles.label}>Login</label>
          <div className={styles.inputs}>
            <Components.Inputs.Input validation={handleInputs} type={'email'}/>
            <Components.Inputs.Input validation={handleInputs} type={'password'}/>
          </div>
          <div className={styles.buttonContainer}>
            <Components.Button label='Submit' size='large' active={activeButton} onClick={handleSubmit}/>
          </div>
          <div className={styles.signUpRedirect}>
            <Link href='/sign-up'>{messages.auth.dontHaveAnyAccount}</Link>
          </div>
        </div>
      </main>
    </>
  )
};