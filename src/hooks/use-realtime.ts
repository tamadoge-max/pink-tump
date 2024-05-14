import { useToast } from "@/components/ui/use-toast";
import { CandleDto, TokenDto, TradeDto } from "@/lib/data/dtos";
import useTokenStore from "@/store/use-token-store";
import useTradeStore from "@/store/use-trade-store";
import { useEffect } from "react";
import useWebSocket from "react-use-websocket";

enum EventTypes {
  CurveCreated = "CurveCreated",
  Swap = "Swap",
  CurveFilled = "CurveFilled",
}

export const useRealtime = () => {
  const { toast } = useToast();
  const addToken = useTokenStore((state) => state.addAtStart);
  const addTrades = useTradeStore((state) => state.addAtStart);

  const { sendMessage, lastJsonMessage, readyState } = useWebSocket(
    "wss://pump-stream.fly.dev",
    {
      shouldReconnect: () => true,
      reconnectAttempts: 20,
      reconnectInterval: 10000,
      onReconnectStop: () => {
        toast({
          title: "Disconnected",
          description:
            "You have been disconnected from the server. Please refresh the page.",
          variant: "destructive",
        });
      },
      onOpen: () => {
        console.log("Connected to server");
      },
    }
  );
  // console.log()
  useEffect(() => {
    if (!lastJsonMessage) return;
    const message = lastJsonMessage as any;
    switch (message.name) {
      case EventTypes.Swap:
        addTrades(parseTradeDto(message.data.tradeDto))
        console.log(message.data.tradeDto)
        addToken(parseTokenDto(message.data.tokenDto))
        break;
      case EventTypes.CurveCreated:
        addToken(parseTokenDto(message.data));
        break;
    }
  }, [lastJsonMessage]);

  return { sendMessage, readyState, lastJsonMessage };
};

const parseTokenDto = (data: any): TokenDto => {
  return {
    ...data,
    creator: { ...data.creator, createdAt: new Date(data.creator.createdAt) },
    createdAt: new Date(data.createdAt),
  };
};

const parseTradeDto = (data: any): TradeDto => {
  return {
    ...data,
    user: { ...data.user, createdAt: new Date(data.user.createdAt) },
    timestamp: new Date(data.timestamp),
  };
};

const parseCandleDto = (data: any): CandleDto => {
  return {
    ...data,
    timestamp: new Date(data.timestamp),
  };
};

export default useRealtime;
