import React from "react";
import { BaseWalletMultiButton } from "./BaseWalletMultiButton";
import type { ButtonProps } from "./Button";

const LABELS = {
  "change-wallet": "Change wallet",
  connecting: "Connecting ...",
  "copy-address": "Copy address",
  copied: "Copied",
  disconnect: "Disconnect",
  "has-wallet": "Connect Wallet",
  "no-wallet": "Connect Wallet",
  "edit-profile": "Edit Profile",
} as const;

export function WalletMultiButton(props: ButtonProps) {
  return <BaseWalletMultiButton {...props} labels={LABELS} />;
}
