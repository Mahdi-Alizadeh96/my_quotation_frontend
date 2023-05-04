"use client" // this layout is client side

// <import packages
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';
// import packages>

// <import styles
import styles from './auth.module.scss';
// import styles>

// <import configs
import toastOptions from '&/configs/toastOptions';
// import configs>

const queryClient = new QueryClient();

/**
 * @param { children } -> auth page that passed to layout 
 * @returns Auth Layout
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {

    queryClient.setQueryData([ 'signUpState' ], "1");

    return (
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false}/>
                <Toaster toastOptions={toastOptions} />
                <section>
                    {children}
                </section>
            </QueryClientProvider>
            );

};