"use client";

import type { WalletName } from "@solana/wallet-adapter-base";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { WalletIcon } from "./WalletIcon";
import useMounted from "@/hooks/use-mounted";

type Props = React.ComponentProps<typeof Button> & {
  walletIcon?: string;
  walletName?: WalletName;
};

export function BaseWalletConnectionButton({
  walletIcon,
  walletName,
  ...props
}: Props) {
  const mounted = useMounted();
  return (
    <Button
      {...props}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground"
      startIcon={
        mounted && walletIcon && walletName ? (
          <WalletIcon
            wallet={{ adapter: { icon: walletIcon, name: walletName } }}
          />
        ) : undefined
      }
    />
  );
}
