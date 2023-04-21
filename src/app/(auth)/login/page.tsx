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
import axios from 'axios';
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
   * @description save input's value in state
   * @param event 
   */
  function handleInputs(event : InputEvent) : void {

    setLoginFormInputs((prev)=> ({...prev, [event.type] : event.value}));
    
  };
  
  /**
   * @description submit login form
   */
  async function handleSubmit() : Promise<void> {
    
    if (activeButton) {

      // router.push('/');

      const {isLoading, error, data} = login;

      if(data) {

        console.log(isLoading, error,await data());

      }
      
      
      

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

  const login = useQuery({queryKey: ['login'], queryFn: () => postLogin});

  async function postLogin() {

    try {
      const res = await axios.post('http://localhost:8080/v1/auth/login', {
        email : "lots.go1@gmail.com",
        password: "Aa15800853"
      })
  
      return await res.data;
      
    } catch (error) {

      return error

    }

  }
  
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