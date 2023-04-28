"use client"; // This page is client side

// <import styles
import styles from './signUp.module.scss';
// import styles>

// <import packages
import { useQueryClient } from '@tanstack/react-query';
import { Button } from '@/app/general_components';
import Link from 'next/link';
// import packages>

/**
 * @description sing up page
 */
export default function Signup() {

  // use react query
  const queryClient = useQueryClient();

  queryClient.setQueryData([ 'myData' ], "data");

  function handleClick() {

    // console.log(queryClient.getQueryData(['myData']));
    
  };

  return (
    <div className={styles.singUp}>
      <Button label='Submit' onClick={handleClick}/>
        <Link href='/login'>
          login
        </Link>
    </div>
  )
};