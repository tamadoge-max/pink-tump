import { PublicKey } from "@solana/web3.js";

export const validateSolanaBase58 = (address: string): boolean => {
  try {
    const pk = new PublicKey(address);
    return true;
  } catch (error) {
    return false;
  }
};
