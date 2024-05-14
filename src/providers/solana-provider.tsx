"use client";

import { useCallback, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletAdapterNetwork, WalletError } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  CloverWalletAdapter,
  SolflareWalletAdapter,
  SolongWalletAdapter,
  // SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";

import { WalletMultiButton } from "@/packages/wallet-connect";
import "@/packages/wallet-connect/style.css";

export const WalletButton = WalletMultiButton;

const endpoints = {
  devnet:
    "https://stylish-side-paper.solana-devnet.quiknode.pro/b9ef149a1a30472a8a36ec37c5758f578fd1099c",
};

function SolanaProvider({ children }: { children: React.ReactNode }) {
  const onError = useCallback((error: WalletError) => {
    console.error(error);
  }, []);

  const network = WalletAdapterNetwork.Devnet;

  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new CloverWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new SolongWalletAdapter({ network }),
      // new SolletExtensionWalletAdapter({ network }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoints.devnet}>
      <WalletProvider wallets={wallets} onError={onError} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default SolanaProvider;
