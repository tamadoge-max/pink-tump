import { create } from "zustand";
import { TokenDto } from "@/lib/data/dtos";

type TokenStoreType = {
  tokens?: TokenDto[];
  setTokens: (tokens: TokenDto[]) => void;
  addAtStart: (token: TokenDto) => void;
};

const useTokenStore = create<TokenStoreType>((set) => ({
  // Initial state
  tokens: undefined,

  // Actions
  setTokens: (tokens) => set({ tokens }),
  addAtStart: (token) => {
    set((state) => {
      return { tokens: [token, ...(state.tokens || [])] };
    });
  },
}));

export default useTokenStore;
