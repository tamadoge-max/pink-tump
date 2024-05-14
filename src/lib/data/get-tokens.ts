import { tokens, users, seededTokens } from "../db/schema";
import { db } from "../db";
import { eq, desc } from "drizzle-orm";
import { tokenRowToDto } from "./mint";

export const getTokens = async () => {
  const tokenRows = await db
    .select()
    .from(tokens)
    .innerJoin(users, eq(tokens.creator, users.wallet))
    .leftJoin(seededTokens, eq(tokens.address, seededTokens.tokenAddress))
    .orderBy(desc(tokens.createdAt)) // Order by createdAt in descending order
    .limit(20);

  const tokenDtos = tokenRows.map(tokenRowToDto);
  return tokenDtos;
};
