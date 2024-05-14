import { AnchorProvider, setProvider } from "@coral-xyz/anchor";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useMemo } from "react";

const useAnchorProvider = () => {
  const wallet = useAnchorWallet();
  const { connection } = useConnection();

  const provider = useMemo(() => {
    if (!wallet || !connection) return;

    return new AnchorProvider(connection, wallet, {
      commitment: "confirmed",
    });
  }, [wallet, connection]);

  useEffect(() => {
    if (provider) {
      setProvider(provider);
    }
  }, [provider]);

  return provider;
};

export default useAnchorProvider;
