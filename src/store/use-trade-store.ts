import { create } from "zustand";
import { TradeDto } from "@/lib/data/dtos";

type TradeStoreType = {
  trades?: TradeDto[];
  setTrades: (drades: TradeDto[]) => void;
  addAtStart: (token: TradeDto) => void;
};

const useTradeStore = create<TradeStoreType>((set) => ({
  // Initial state
  trades: undefined,

  // Actions
  setTrades: (trades) => set({ trades }),
  addAtStart: (trade) => {
    set((state) => {
      return { trades: [...(state.trades || []), trade] };
    });
  },
}));

export default useTradeStore;
