import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ParallaxProvider} from "react-scroll-parallax";
import '@rainbow-me/rainbowkit/styles.css';
import {ChakraProvider} from "@chakra-ui/react"
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
require('dotenv').config({ path: ".env" })
console.log(process.env.NEXT_PUBLIC_SUPABASE_URL,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
export default function App({ Component, pageProps }: AppProps) {
  const { chains, publicClient } = configureChains(
    [mainnet, polygon, optimism, arbitrum, zora],
    [
      
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: 'be9a90c85591fba395765df93729cc9a',
    chains
  });
  
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient
  });

  return (
    <ChakraProvider>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider theme={darkTheme()} coolMode chains={chains}>
    <Component {...pageProps} />
    </RainbowKitProvider>
    </WagmiConfig>
    </ChakraProvider>
)
}
