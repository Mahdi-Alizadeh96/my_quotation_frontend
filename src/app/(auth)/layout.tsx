"use client" // this layout is client side

// <import packages
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import packages>

const queryClient = new QueryClient();

/**
 * @param { children } -> auth page that passed to layout 
 * @returns Auth Layout
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {

    return (
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false}/>
                <section>
                    {children}
                </section>
            </QueryClientProvider>
            );

}
  