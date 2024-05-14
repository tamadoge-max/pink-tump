import { desc, eq } from "drizzle-orm";
import { db } from "../db";
import { candlesticks, trades, users } from "../db/schema";
import { CandleDto, TradeDto } from "./dtos";
import { userRowToDto } from "./mint";

export const getLatestTrades = async (mint: string): Promise<TradeDto[]> => {
  const tradesUsersRow = await db
    .select()
    .from(trades)
    .innerJoin(users, eq(trades.user, users.wallet))
    .where(eq(trades.tokenAddress, mint))
    .orderBy(desc(trades.id))
    .limit(20);

  return tradesUsersRow.map((tradeUserRow) => tradeUserRowToDto(tradeUserRow));
};

export const tradeUserRowToDto = (row: {
  trades: typeof trades.$inferSelect;
  users: typeof users.$inferSelect;
}): TradeDto => {
  const tradeRow = row.trades;
  const userRow = row.users;
  return {
    id: tradeRow.id,
    user: userRowToDto(userRow),
    tokenAddress: tradeRow.tokenAddress,
    tradeType: tradeRow.tradeType,
    amountIn: tradeRow.amountIn.toString(),
    amountOut: tradeRow.amountOut.toString(),
    solReserve: tradeRow.solReserve.toString(),
    tokenReserve: tradeRow.tokenReserve.toString(),
    usdPerToken: tradeRow.usdPerToken.toString(),
    transactionSignature: tradeRow.transactionSignature,
    timestamp: tradeRow.timestamp,
  };
};

export const getCandles = async (mint: string): Promise<CandleDto[]> => {
  const candles = await db
    .select()
    .from(candlesticks)
    .where(eq(candlesticks.tokenAddress, mint));

  return candles.map((candle) => ({
    id: candle.id,
    tokenAddress: candle.tokenAddress,
    open: candle.open.toString(),
    close: candle.close.toString(),
    high: candle.high.toString(),
    low: candle.low.toString(),
    volume: candle.volume.toString(),
    timestamp: candle.timestamp,
  }));
};
