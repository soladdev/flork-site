import { mplCandyMachine } from "@metaplex-foundation/mpl-candy-machine";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { useWallet } from "@solana/wallet-adapter-react";

const rpcEndpoint = import.meta.env.VITE_SOLANA_RPC || "https://api.devnet.solana.com";

export default function useUmi() {
  const wallet = useWallet();
  try {
    // Create the UMI instance and register programs
    const umi = createUmi(rpcEndpoint)
      .use(mplTokenMetadata()) // Register Token Metadata program
      .use(mplCandyMachine()) // Register Candy Machine program
      .use(walletAdapterIdentity(wallet)); // Attach wallet adapter
    return umi;
  } catch (error) {
    console.error("Error initializing UMI:", error);
    throw error;
  }
}
