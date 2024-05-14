"use client";

import useRealtime from "@/hooks/use-realtime";

import { createContext } from "react";
import { ReadyState, SendMessage } from "react-use-websocket";

type RealtimeContextType = {
  sendMessage: SendMessage;
  readyState: ReadyState;
  lastJsonMessage: unknown;
};

export const RealtimeContext = createContext<RealtimeContextType>({
  sendMessage: () => {},
  readyState: ReadyState.UNINSTANTIATED,
  lastJsonMessage: null,
});

type RealtimeProviderProps = {
  children: React.ReactNode;
};

export const RealtimeProvider = ({ children }: RealtimeProviderProps) => {
  const realtime = useRealtime();

  return (
    <RealtimeContext.Provider value={realtime}>
      {children}
    </RealtimeContext.Provider>
  );
};
