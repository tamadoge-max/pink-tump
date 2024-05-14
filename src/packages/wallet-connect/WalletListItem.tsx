import { WalletReadyState } from "@solana/wallet-adapter-base";
import type { Wallet } from "@solana/wallet-adapter-react";
import type { FC, MouseEventHandler } from "react";
import React from "react";
import { Button } from "./Button";
import { WalletIcon } from "./WalletIcon";

export interface WalletListItemProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  tabIndex?: number;
  wallet: Wallet;
}

export const WalletListItem: FC<WalletListItemProps> = ({
  handleClick,
  tabIndex,
  wallet,
}) => {
  return (
    <li>
      <Button
        className="hover:bg-muted justify-start cursor-pointer py-2"
        onClick={handleClick}
        startIcon={<WalletIcon wallet={wallet} />}
        tabIndex={tabIndex}
      >
        {wallet.adapter.name}
        {wallet.readyState === WalletReadyState.Installed && (
          <span className="text-xs text-muted-foreground ml-2">Detected</span>
        )}
      </Button>
    </li>
  );
};
