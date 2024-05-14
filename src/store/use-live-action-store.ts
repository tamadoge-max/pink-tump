import { create } from "zustand";

type LiveActionStoreType = {
  liveActions: LiveActionType[];
  setLiveActions: (tokens: LiveActionType[]) => void;
};

export type LiveActionType = {
  userPfp: string;
  action: string;
  imageUri: string;
};

const useLiveActionStore = create<LiveActionStoreType>((set) => ({
  // Initial state
  liveActions: [],

  // Actions
  setLiveActions: (liveActions) => set({ liveActions }),
}));

export default useLiveActionStore;
