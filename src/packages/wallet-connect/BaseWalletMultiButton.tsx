import { useWalletMultiButton } from "@solana/wallet-adapter-base-ui";
import { useMemo, useState } from "react";
import { BaseWalletConnectionButton } from "./BaseWalletConnectionButton";
import type { ButtonProps } from "./Button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WalletModal } from "./WalletModal";
import EditProfile from "@/components/edit-profile";

type Props = ButtonProps & {
  labels: Omit<
    {
      [TButtonState in ReturnType<
        typeof useWalletMultiButton
      >["buttonState"]]: string;
    },
    "connected" | "disconnecting"
  > & {
    "copy-address": string;
    copied: string;
    "change-wallet": string;
    disconnect: string;
    "edit-profile": string;
  };
};

export function BaseWalletMultiButton({ children, labels, ...props }: Props) {
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const {
    buttonState,
    onConnect,
    onDisconnect,
    publicKey,
    walletIcon,
    walletName,
  } = useWalletMultiButton({
    onSelectWallet() {
      setWalletModalOpen(true);
    },
  });
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const content = useMemo(() => {
    if (children) {
      return children;
    } else if (publicKey) {
      const base58 = publicKey.toBase58();
      return base58.slice(0, 4) + ".." + base58.slice(-4);
    } else if (buttonState === "connecting" || buttonState === "has-wallet") {
      return labels[buttonState];
    } else {
      return labels["no-wallet"];
    }
  }, [buttonState, children, labels, publicKey]);
  return (
    <>
      <WalletModal open={walletModalOpen} setOpen={setWalletModalOpen} />
      <EditProfile open={profileModalOpen} setOpen={setProfileModalOpen} />
      <DropdownMenu
        open={menuOpen}
        onOpenChange={(value) => setMenuOpen(value)}
      >
        <DropdownMenuTrigger
          asChild
          onPointerDown={(e) => {
            switch (buttonState) {
              case "no-wallet":
                e.preventDefault();
                setWalletModalOpen(true);
                break;
              case "has-wallet":
                e.preventDefault();
                if (onConnect) {
                  onConnect();
                }
                break;
              case "connected":
                setMenuOpen(true);

                break;
            }
          }}
        >
          <div>
            <BaseWalletConnectionButton
              {...props}
              aria-expanded={menuOpen}
              style={{
                pointerEvents: menuOpen ? "none" : "auto",
                ...props.style,
              }}
              walletIcon={walletIcon}
              walletName={walletName}
            >
              {content}
            </BaseWalletConnectionButton>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={async () => setProfileModalOpen(true)}
            role="menuitem"
          >
            {labels["edit-profile"]}
          </DropdownMenuItem>
          {publicKey ? (
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={async () => {
                await navigator.clipboard.writeText(publicKey.toBase58());
                setCopied(true);
                setTimeout(() => setCopied(false), 400);
              }}
              role="menuitem"
            >
              {copied ? labels["copied"] : labels["copy-address"]}
            </DropdownMenuItem>
          ) : null}
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => {
              setWalletModalOpen(true);
              setMenuOpen(false);
            }}
            role="menuitem"
          >
            {labels["change-wallet"]}
          </DropdownMenuItem>
          {onDisconnect ? (
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => {
                onDisconnect();
                setMenuOpen(false);
              }}
              role="menuitem"
            >
              {labels["disconnect"]}
            </DropdownMenuItem>
          ) : null}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
