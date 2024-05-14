import { BN } from "@coral-xyz/anchor";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

export const ZERO_BN = new BN(0);

export const FEE_BPS = new BN(100);
export const BPS_DENOMINATOR = new BN(10_000);

export const TOKEN_DECIMALS = 6;
export const DECIMAL_FACTOR = new BN(10).pow(new BN(TOKEN_DECIMALS));

export const SOL_DECIMALS = 9;
export const LAMPORTS_PER_SOL_BN = new BN(LAMPORTS_PER_SOL);

export const TOKEN_TOTAL_SUPPLY = new BN(1_000_000_000).mul(DECIMAL_FACTOR);

export const INITIAL_TOKEN_RESERVE = new BN(793_100_000).mul(DECIMAL_FACTOR);

export const SOL_DELTA = new BN(30).mul(LAMPORTS_PER_SOL_BN);
export const TOKEN_DELTA = new BN(279_900_000).mul(DECIMAL_FACTOR);

export const SCALE_FACTOR = new BN(10).pow(new BN(9));

export const DEVNET_ENDPOINT =
  "https://snowy-magical-research.solana-devnet.quiknode.pro/611457cb459488c128f173a1ba1a4bb8ffdf8ede";

export const WSOLMint = new PublicKey(
  "So11111111111111111111111111111111111111112"
);
