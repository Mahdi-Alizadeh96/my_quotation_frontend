"use client" // this layout is client side

// <import packages
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// import packages>

const queryClient = new QueryClient();

/**
 * @param { children } -> auth page that passed to layout 
 * @returns Auth Layout
 */
export default function AuthLayout({ children }: { children: React.ReactNode }) {

    return (
            <QueryClientProvider client={queryClient}>
                <section>
                    {children}
                </section>
            </QueryClientProvider>
            );

}
  