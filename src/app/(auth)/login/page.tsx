"use client"; // This page is client side

// <import react
import { useEffect, useState } from 'react';
// import react>

// <import services
import services from '&/services';
// import services>

// <import packages
import toast from 'react-hot-toast';
// import packages>

// <import RQ
import { useMutation, useQueryClient } from '@tanstack/react-query';
// import RQ>

// <import next
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import next>

// <import styles
import styles from './login.module.scss';
// import styles>

// <import General components
import { Inputs, Button } from "@/app/general_components";
// import General components>

// <import messages
import messages from "@/lib/messages/messages.json";
// import messages>

// <import types
import { InputEvent } from '&/types';
// import types>

/**
 * @description home page of site
 * @includes top quotations displayed by views
*/
export default function Login() {

  // use hooks
  const router = useRouter();

  // use states 
  const [loginFormInputs, setLoginFormInputs] = useState({
    email : null,
    password : null
  });

  const [activeButton, setActiveButton] = useState(false);

  // use react query
  const loginApiCall = useMutation({ mutationFn: async () => await new services.authApi(loginFormInputs).postLogin() });

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
  async function handleSubmit() {
      
    const response = await loginApiCall.mutateAsync();

    if (response) {

      if ( response?.type ) {
        
        toast.success(response.message);
        
        setTimeout(() => {

          router.push('/');

        }, 500);
        
      } else {
        
        toast.error(response.message);

      };

    };

  };

  /**
   * @description check for active submit button when email & password format is correct
   */
  useEffect(() => {

    setActiveButton((loginFormInputs.email && loginFormInputs.password) ? true : false);

  },[loginFormInputs]);

  
  return (
    <>
      <header>
        <title>Login</title>
      </header>
      <main className={styles.authPage}>
        <div className={styles.authContainer}>
          <label className={styles.label}>Login</label>
          <div className={styles.inputs}>
            <Inputs.Input keyName='email' name='email' validation={handleInputs} type={'email'} placeholder={"Enter your email"}/>
            <Inputs.Input keyName='password' name='password' validation={handleInputs} type={'password'} placeholder={"Enter your password"}/>
          </div>
          <div className={styles.buttonContainer}>
            <Button label='Submit' size='large' active={activeButton} onClick={handleSubmit}/>
          </div>
          <div className={styles.redirect}>
            <Link href='/sign-up'>{messages.auth.dontHaveAnyAccount}</Link>
          </div>
        </div>
      </main>
    </>
  )
};