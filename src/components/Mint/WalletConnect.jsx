import {
  ConnectionProvider as SolanaConnectionProvider,
  WalletProvider as SolanaWalletProvider,
} from '@solana/wallet-adapter-react'
import { WalletModalProvider as SolanaWalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets'
import { solana } from './config';
import '@solana/wallet-adapter-react-ui/styles.css';

const WalletConnect = ({ children }) => {
  // You can also provide a custom RPC endpoint.
  const { endpoint, config: solanaConfig } = solana;

  const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()]

  return (
    <SolanaConnectionProvider endpoint={endpoint} config={solanaConfig}>
      <SolanaWalletProvider wallets={wallets} autoConnect>
        <SolanaWalletModalProvider>
          {children}
        </SolanaWalletModalProvider>
      </SolanaWalletProvider>
    </SolanaConnectionProvider>
  )
}

export default WalletConnect
