'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { WagmiProvider } from 'wagmi'
import { ChakraProvider, useColorMode } from '@chakra-ui/react';
import { theme } from '../styles/theme';

const ForceDarkMode = ({ children }: { children: React.ReactNode }) => {
    const { setColorMode } = useColorMode();

    useEffect(() => {
        setColorMode('dark');
    }, [setColorMode]);

    return <>{children}</>;
};
import { config } from 'wagmi'
console.log("config: ", config)
export function Providers(props: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient())

  return (
      <ChakraProvider theme={theme}>
          <ForceDarkMode>
            <WagmiProvider config={config}>
              <QueryClientProvider client={queryClient}>
                {props.children}
              </QueryClientProvider>
            </WagmiProvider>
          </ForceDarkMode>
      </ChakraProvider>
  )
}
