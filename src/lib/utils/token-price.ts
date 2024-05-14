import { BN } from "@coral-xyz/anchor";
import { SOL_DELTA, TOKEN_DELTA } from "../constants";

export const calculateOutputTokens = (
  inputSol: BN,
  solReserve: BN,
  tokenReserve: BN
) => {
  const virtualSolReserve = solReserve.add(SOL_DELTA);
  const virtualTokenReserve = tokenReserve.add(TOKEN_DELTA);
  const invariant = virtualSolReserve.mul(virtualTokenReserve);

  const newVirtualSolReserves = virtualSolReserve.add(inputSol);

  const newVirtualTokenReserves = invariant
    .div(newVirtualSolReserves)
    .add(new BN(1));

  const outputTokens = virtualTokenReserve.sub(newVirtualTokenReserves);

  return BN.min(outputTokens, tokenReserve);
};

export const calculateInputSol = (
  outputTokens: BN,
  solReserve: BN,
  tokenReserve: BN
) => {
  const virtualSolReserve = solReserve.add(SOL_DELTA);
  const virtualTokenReserve = tokenReserve.add(TOKEN_DELTA);

  const invariant = virtualSolReserve.mul(virtualTokenReserve);

  const newVirtualTokenReserves = virtualTokenReserve.sub(outputTokens);

  const newVirtualSolReserves = invariant
    .div(newVirtualTokenReserves)
    .add(new BN(1));

  const inputSol = newVirtualSolReserves.sub(virtualSolReserve);

  return inputSol;
};

export const calculateOutputSol = (
  inputTokens: BN,
  solReserve: BN,
  tokenReserve: BN
) => {
  const virtualSolReserve = solReserve.add(SOL_DELTA);
  const virtualTokenReserve = tokenReserve.add(TOKEN_DELTA);

  const invariant = virtualSolReserve.mul(virtualTokenReserve);

  const newVirtualTokenReserves = virtualTokenReserve.add(inputTokens);

  const newVirtualSolReserves = invariant
    .div(newVirtualTokenReserves)
    .add(new BN(1));

  const outputSol = virtualSolReserve.sub(newVirtualSolReserves);

  return outputSol;
};

export const calculateSlippage = (amountIn: string, slippageBps: number) => {
  const amount = Number(amountIn);
  return (amount - amount * (slippageBps / 100)).toString();
};
