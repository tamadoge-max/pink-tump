"use client";
import Image from "next/image";
import { Menu as MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { WalletButton } from "@/providers/solana-provider";
import { useEffect, useMemo } from "react";
import { ArrowRight, Circle } from "lucide-react";
import useLiveActionStore from "@/store/use-live-action-store";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "./Navbar.module.css";
import useTradeStore from "@/store/use-trade-store";
import useTokenStore from "@/store/use-token-store";

export const Navbar = () => {
  // liveactions from store
  // const { liveActions, setLiveActions } = useLiveActionStore();
  const trades = useTradeStore((state) => state.trades);
  const tokens = useTokenStore((state) => state.tokens);

  const liveActions = useMemo(() => {
    if (!trades?.length || !tokens?.length) return [];
    return trades.map((trade) => {
      const token = tokens.find((token) => token.address == trade.tokenAddress);
      console.log(trade.amountIn, parseInt(trade.amountIn) * 0.0000000001);
      return {
        action: `${trade.user.username} ${
          trade.tradeType == "buy" ? "Bought" : "Sold"
        } ${(
          Number(trade.tradeType == "buy" ? trade.amountIn : trade.amountOut) *
          0.000000001
        ).toFixed(4)} SOL of ${token?.symbol}`,
        imgUrl: `https://ipfs.io/ipfs/${token?.imageUri.replace(
          "ipfs://",
          ""
        )}`,
      };
    });
  }, [trades, tokens]);

  // update liveactions
  // function updatearray() {
  //   setLiveActions([
  //     {
  //       userPfp:
  //         "https://ipfs.ape.store/ipfs/QmPWPrr6oqs5ZTiR1yZHVnhn5h5xgT6BHrqLUFsiTSnxtZ?pinataGatewayToken=GHSVOi98-xVWobf-8ocYl0pZQehDgNj_PX5BIktm6Jnhl8BMmMjEA8_1MUFZIcSq",
  //       action: `Bought 0.0010 ETH of MINO`,
  //       imageUri:
  //         "https://ipfs.ape.store/ipfs/QmSzPXZFAbE27usUCAyu25Y2hjXrCUkmigF4U5ULcchRxD?pinataGatewayToken=GHSVOi98-xVWobf-8ocYl0pZQehDgNj_PX5BIktm6Jnhl8BMmMjEA8_1MUFZIcSq",
  //     },
  //     ...liveActions,
  //   ]);
  // }

  // // call the interval after a set of time for updation
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (liveActions) {
  //       console.log("I'm executed");
  //       updatearray();
  //       console.log(liveActions);
  //     }
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, [liveActions]);

  return (
    <header className="w-[-webkit-fill-available] absolute bg-card flex flex-col-reverse gap-4 md:gap-0 md:flex-row  px-[1rem] justify-between items-center align-middle py-6 z-1">
      <div className="flex overflow-hidden whitespace-nowrap md:w-fit w-[-webkit-fill-available]  relative">
        <div className="h-full top-0 absolute w-64 right-0 bg-gradient-to-r from-transparent via-transparent to-card"></div>
        <div className="flex gap-2 items-center">
          <Circle color="#eb24d1" className="w-4 h-4" size={28} />
          <span className="text-xl">Live</span>
          <ArrowRight color="#eb24d1" className="w-6 h-6" size={28} />
        </div>
        <TransitionGroup
          style={{ display: "flex", flexDirection: "row-reverse" }}
        >
          {liveActions?.map((action, index) => {
            return (
              <CSSTransition
                key={`${index}_t`}
                timeout={300}
                classNames={{
                  enter: styles["slide-in-enter"],
                  enterActive: styles["slide-in-enter-active"],
                  exit: styles["slide-in-exit"],
                  exitActive: styles["slide-in-exit-active"],
                }}
                unmountOnExit
                style={{ overflow: "hidden", cursor: "pointer" }}
              >
                <div
                  className={`flex items-center gap-2 px-6  ${
                    index !== 0 ? "border-r border-r-primary" : ""
                  }`}
                >
                  {/* <div className="relative overflow-hidden rounded-full h-6 w-6">
                    <Image
                      src={action.userPfp}
                      className="object-cover h-6 w-full top-0 left-0 absolute"
                      alt={action + ".png"}
                      width={20}
                      height={20}
                    />
                  </div> */}
                  <div className="text-sm text-ellipsis overflow-hidden">
                    {action.action}
                  </div>
                  <Image
                    src={action.imgUrl}
                    alt={action + ".png"}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </div>

      <div className="gap-2 justify-between w-full md:w-auto align-middle flex md:flex">
        <WalletButton />
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="md:hidden block align-middle" />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-2 align-middle">
              {/* <Button size="sm" className="rounded-[2rem]" variant="outline">
                <Image
                  src="/nova.png"
                  alt="logo"
                  width={20}
                  height={20}
                  className="pr-2"
                />
                ETH
              </Button> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
