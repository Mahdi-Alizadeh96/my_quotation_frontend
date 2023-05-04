"use client"; // This component is client side

// <import react
import { useEffect, useState } from 'react';
// import react>

// <import RQ
import { useMutation, useQueryClient } from '@tanstack/react-query';
// import RQ>

// <import services
import services from '@/lib/services';
// import services>

// <import styles
import styles from './sendOtp.module.scss';
// import styles>

// <import General components
import { Inputs, Button } from "@/app/general_components";
// import General components>

// <import types
import { InputEvent } from '&/types';
import { toast } from 'react-hot-toast';
// import types>

export default function SendOtp() {

  // use states 
  const [sendOtpFormInputs, setSendOtpFormInputs] = useState({
    email : null
  });

  const [activeButton, setActiveButton] = useState(false);

  // use react query
  const queryClient = useQueryClient();
  const sendOtpApiCall = useMutation({ mutationFn: async () => await new services.authApi(sendOtpFormInputs).postSendOtp() });

  /**
   * @description save input's value in state
   * @param event 
   */
  function handleInputs(event : InputEvent) : void {

    setSendOtpFormInputs((prev)=> ({...prev, [event.type] : event.value}));
    
  };

  /**
   * @description submit sendOtp form
   */
  async function handleSubmit() {

    const response = await sendOtpApiCall.mutateAsync();

    console.log(response);
    

    if (response) {

      if ( response?.type ) {

        queryClient.setQueryData([ 'signUpState' ], "2"); // set state for verify otp
        
        queryClient.setQueryData([ 'userEmail' ], sendOtpFormInputs.email); // set user email
        
        toast.success(response.message);
        
      } else {
        
        toast.error(response.message);

      };

    };
    
  };

  /**
  * @description check for active submit button when email & password format is correct
  */
  useEffect(() => {

    setActiveButton(sendOtpFormInputs.email ? true : false);

  },[sendOtpFormInputs]);

  return (
    <div className={styles.sendOtp}>
      <label className={styles.label}>Send Otp</label>
        <div className={styles.inputs}>
          <Inputs.Input name='email' keyName='email' validation={handleInputs} type={'email'} placeholder={"Enter your email"}/>
        </div>
        <div className={styles.buttonContainer}>
          <Button label='send' size='large' active={activeButton} onClick={handleSubmit}/>
        </div>
    </div>
  );
};