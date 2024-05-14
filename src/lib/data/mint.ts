import { eq } from "drizzle-orm";
import { db } from "../db";
import { tokens, users, seededTokens } from "../db/schema";
import { TokenDto, UserDto } from "./dtos";
import { safeValue } from "../utils/shared";

export const getToken = async (mint: string) => {
  console.log(mint);
  const [tokenUserRow] = await db
    .select()
    .from(tokens)
    .innerJoin(users, eq(tokens.creator, users.wallet))
    .leftJoin(seededTokens, eq(tokens.address, seededTokens.tokenAddress))
    .where(eq(tokens.address, mint));
  return tokenRowToDto(tokenUserRow);
};

export const tokenRowToDto = (tokenUserRow: {
  tokens: typeof tokens.$inferSelect;
  users: typeof users.$inferSelect;
  seeded_tokens?: typeof seededTokens.$inferSelect | null;
}): TokenDto => {
  const tokenRow = tokenUserRow.tokens;
  const userRow = tokenUserRow.users;
  const seededTokenRow = tokenUserRow.seeded_tokens;

  return {
    address: tokenRow.address,
    name: tokenRow.name,
    symbol: tokenRow.symbol,
    description: safeValue(tokenRow.description),
    imageUri: tokenRow.imageUri,
    isPremium: tokenRow.isPremium,
    socials: safeValue(tokenRow.socials),
    isNsfw: tokenRow.isNsfw,
    bondingCurve: tokenRow.bondingCurve,
    creator: userRowToDto(userRow),
    tokenReserve: tokenRow.tokenReserve.toString(),
    solReserve: tokenRow.solReserve.toString(),
    maxBuyWallet: tokenRow.maxBuyWallet.toString(),
    startTimeUnix: tokenRow.startTimeUnix,
    raydiumAmmId: seededTokenRow?.raydiumAmmId,
    isCompleted: tokenRow.isCompleted,
    createdAt: tokenRow.createdAt,
  };
};

export const userRowToDto = (userRow: typeof users.$inferSelect): UserDto => {
  return {
    wallet: userRow.wallet,
    username: userRow.username,
    referrer: userRow.referrer,
    pfpUrl: safeValue(userRow.pfpUrl),
    isBanned: userRow.isBanned,
    createdAt: userRow.createdAt,
  };
};
