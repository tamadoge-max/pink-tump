import { create } from "zustand";
import { persist } from "zustand/middleware";

export const PRIORITY_RATE = 1_500_000;

export const SLIPPAGE = 500;

interface ChainConfig {
  priorityFee: number;
  slippage: number;
  setPriorityFee: (fee: number) => void;
  setSlippage: (slippage: number) => void;
}

export const useChainConfigStore = create<ChainConfig>()(
  persist(
    (set) => ({
      priorityFee: PRIORITY_RATE,
      slippage: SLIPPAGE,
      setPriorityFee: (fee: number) => set({ priorityFee: fee }),
      setSlippage: (slippage: number) => set({ slippage }),
    }),
    {
      name: "config.v0",
    }
  )
);
