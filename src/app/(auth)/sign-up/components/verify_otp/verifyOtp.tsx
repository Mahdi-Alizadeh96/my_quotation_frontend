"use client"; // This component is client side

// <import react
import { useEffect, useState } from 'react';
// import react>

// <import RQ
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
// import RQ>

// <import services
import services from '@/lib/services';
// import services>

// <import packages
import { toast } from 'react-hot-toast';
// import packages>

// <import styles
import styles from './verifyOtp.module.scss';
// import styles>

// <import General components
import { Inputs, Button } from "@/app/general_components";
// import General components>

// <import types
import { InputEvent } from '&/types';
// import types>

export default function VerifyOtp() {

  // use states 
  const [verifyOtpFormInputs, setVerifyOtpFormInputs] = useState({
    otpCode : null
  });
  const [activeButton, setActiveButton] = useState(false);
  const [activeResendText, setActiveResendText] = useState(false);

  // use react query
  const queryClient = useQueryClient();
  const { data : userEmail } = useQuery(['userEmail'], { select: (data) => data });
  const resendOtpApiCall = useMutation({ mutationFn: async () => await new services.authApi({
    email : userEmail
  }).postSendOtp() });
  const verifyOtpApiCall = useMutation({ mutationFn: async () => await new services.authApi({
    email : userEmail,
    otpCode : verifyOtpFormInputs.otpCode
  }).postVerifyOtp() });

  /**
   * @description save input's value in state
   * @param event 
   */
  function handleInputs(event : InputEvent) : void {

    setVerifyOtpFormInputs((prev)=> ({...prev, [event.keyName || event.type] : event.value}));
    
  };

  /**
   * @description submit verifyOtp form
   */
  async function handleSubmit() {

    const response = await verifyOtpApiCall.mutateAsync();

    if (response) {

      if ( response?.type ) {

        queryClient.setQueryData([ 'signUpState' ], "3"); // set state for verify otp
        
        toast.success(response.message);
        
      } else {

        setActiveResendText(true);
        
        toast.error(response.message);

      };

    };
    
  };

  /**
   * @description resend otp code
   */
  async function resendOtpCode() {

    const response = await resendOtpApiCall.mutateAsync();

    if (response) {

      if ( response?.type ) {
        
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

    setActiveButton( verifyOtpFormInputs.otpCode ? true : false );

  },[verifyOtpFormInputs]);

  return (
    <div className={styles.verifyOtp}>
      <label className={styles.label}>Verify Otp</label>
        <div className={styles.inputs}>
          <Inputs.Input name='otp' keyName='otpCode' validation={handleInputs} type={'number'} placeholder={"Enter your otp code"}/>
        </div>
        <div className={styles.buttonContainer}>
          <Button label='verify' size='large' active={activeButton} onClick={handleSubmit}/>
        </div>
        {
          activeResendText && <span className={styles.resend} onClick={resendOtpCode}>Resend otp code</span>
        }
        <span className={styles.changeEmail} onClick={() => queryClient.setQueryData([ 'signUpState' ], "1")}>Change Email</span>
    </div>
  );
};