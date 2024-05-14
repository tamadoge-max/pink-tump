import { WSOLMint } from "@/lib/constants";
import { isPubEqual } from "@/lib/utils/pub";
import {
  TOKEN_2022_PROGRAM_ID,
  TOKEN_PROGRAM_ID,
  getAssociatedTokenAddress,
} from "@solana/spl-token";
import { useConnection } from "@solana/wallet-adapter-react";
import {
  Connection,
  LAMPORTS_PER_SOL,
  ParsedAccountData,
  PublicKey,
} from "@solana/web3.js";

enum TokenProgram {
  SPL = "spl-token",
  Token2022 = "spl-token-2022",
}

const programIdMap = {
  [TokenProgram.SPL]: TOKEN_PROGRAM_ID,
  [TokenProgram.Token2022]: TOKEN_2022_PROGRAM_ID,
};
import useSWR from "swr";

const fetcher = async ({
  connection,
  owner,
  mint,
}: {
  connection: Connection;
  owner?: PublicKey | null;
  mint?: PublicKey;
}) => {
  console.log("fetcher");
  if (!owner || !mint) throw new Error("No owner or mint provided");
  if (isPubEqual(mint, WSOLMint)) {
    const amountNum = await connection.getBalance(owner);
    const decimals = 9;

    return {
      value: {
        amount: amountNum.toString(),
        decimals,
        uiAmount: amountNum / LAMPORTS_PER_SOL,
        uiAmountString: (amountNum / LAMPORTS_PER_SOL).toFixed(4),
      },
    };
  } else {
    const parsedAccountInfo = await connection.getParsedAccountInfo(mint);
    const program =
      (parsedAccountInfo.value?.data as ParsedAccountData)?.program ||
      "spl-token";
    const programId = programIdMap[program as TokenProgram];
    const tokenAccount = await getAssociatedTokenAddress(
      mint,
      owner,
      true,
      programId
    );
    return await connection.getTokenAccountBalance(tokenAccount);
  }
};

export const useTokenBalance = (owner?: PublicKey | null, mint?: PublicKey) => {
  const { connection } = useConnection();

  const { data, error, isValidating, mutate } = useSWR(
    () =>
      owner &&
      mint && [
        "balance",
        owner.toBase58(),
        mint.toBase58(),
        connection.rpcEndpoint,
      ],
    () => fetcher({ connection, owner, mint }),
    {
      errorRetryCount: 1,
      onError: (err) => {
        console.error(`useTokenBalance: ${err}`);
      },
    }
  );

  const loading = !data && !error;

  return {
    tokenAmount: data?.value,
    loading,
    error,
    isValidating,
    mutate,
  };
};
