import { BN } from "@coral-xyz/anchor";
import {
  DECIMAL_FACTOR,
  LAMPORTS_PER_SOL_BN,
  SOL_DECIMALS,
  TOKEN_DECIMALS,
} from "../constants";
import { web3 } from "@coral-xyz/anchor";

export const parseUnits = (
  amount: string,
  decimals: number
): BN | undefined => {
  if (isNaN(parseFloat(amount))) return;

  const base = new BN(10).pow(new BN(decimals));
  // Split the input to handle decimal amounts correctly
  const parts = amount.toString().split(".");
  let bnAmount = new BN(parts[0]).mul(base);

  if (parts.length > 1) {
    let fraction = parts[1];
    let fractionBase = new BN(10).pow(new BN(fraction.length));
    let fractionAmount = new BN(fraction);
    fractionAmount = fractionAmount.mul(base).div(fractionBase);
    bnAmount = bnAmount.add(fractionAmount);
  }

  return bnAmount;
};

export const formatUnits = (amount: BN, decimals: number): string => {
  const base = new BN(10).pow(new BN(decimals));
  const integer = amount.div(base);
  const fraction = amount.mod(base).toString(10);

  // Properly format the fraction part to remove leading zeroes
  const paddedFraction = fraction.padStart(decimals, "0").replace(/0+$/, "");
  return `${integer.toString(10)}${paddedFraction ? "." + paddedFraction : ""}`;
};

export const parseSol = (sol: string) => {
  return parseUnits(sol, SOL_DECIMALS);
};

export const formatSol = (sol: BN) => {
  return formatUnits(sol, SOL_DECIMALS);
};

export const parseTokens = (token: string) => {
  return parseUnits(token, TOKEN_DECIMALS);
};

export const formatTokens = (token: BN) => {
  return formatUnits(token, TOKEN_DECIMALS);
};

export const toBn = (number: string) => {
  return new BN(number);
};
