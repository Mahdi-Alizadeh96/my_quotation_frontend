"use client"; // This component is client side

// <import react
import { useEffect, useState } from 'react';
// import react>

// <import next
import { useRouter } from 'next/navigation';
// import next>

// <import RQ
import { useMutation, useQuery } from '@tanstack/react-query';
// import RQ>

// <import services
import services from '@/lib/services';
// import services>

// <import packages
import { toast } from 'react-hot-toast';
// import packages>

// <import styles
import styles from './signUpForm.module.scss';
// import styles>

// <import General components
import { Inputs, Button } from "@/app/general_components";
// import General components>

// <import types
import { InputEvent } from '&/types';
// import types>

export default function SignUpForm() {

  // use hooks
    const router = useRouter();

  // use states 
  const [signUpFormInputs, setSignUpFormInputs] = useState({
    password : null
  });
  const [activeButton, setActiveButton] = useState(false);

  // use react query
  const { data : userEmail } = useQuery(['userEmail'], { select: (data) => data });
  const signUpFormApiCall = useMutation({ mutationFn: async () => await new services.authApi({
    email : userEmail,
    password : signUpFormInputs.password
  }).postSignUp() });

  /**
   * @description save input's value in state
   * @param event 
   */
  function handleInputs(event : InputEvent) : void {

    setSignUpFormInputs((prev)=> ({...prev, [event.keyName] : event.value}));
    
  };

  /**
   * @description submit signUpForm form
   */
  async function handleSubmit() {

    const response = await signUpFormApiCall.mutateAsync();

    if (response) {

      if ( response?.type ) {

        toast.success(response.message);

        router.push('/login');
        
      } else {
        
        toast.error(response.message);

      };

    };
    
  };
  
  /**
   * @description check for active submit button when email & password format is correct
   */
  useEffect(() => {

    setActiveButton( signUpFormInputs.password ? true : false );

  },[signUpFormInputs]);

  console.log(signUpFormInputs);
  

  return (
    <div className={styles.signUpForm}>
      <label className={styles.label}>Sign Up</label>
        <div className={styles.inputs}>
          <Inputs.Input name='password' keyName='password' validation={handleInputs} type='password' placeholder={"Enter your password"}/>
        </div>
        <div className={styles.buttonContainer}>
          <Button label='Sign Up' size='large' active={activeButton} onClick={handleSubmit}/>
        </div>
        <p className={styles.description}>Your password must contains 6 - 30 characters , A-Z , a-z and contains digits</p>
        <span className={styles.changeEmail} onClick={() => router.push('/login')}>Already have an account ?</span>
    </div>
  );
};