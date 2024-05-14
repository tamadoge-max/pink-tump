"use client";
import { TokenDto } from "@/lib/data/dtos";
import { parseIpfsUrl } from "@/lib/utils/ipfs";
import useTokenStore from "@/store/use-token-store";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

//Home view
export const HomeView = ({ tokens: fetchedTokens }: { tokens: TokenDto[] }) => {
  const { setTokens, tokens } = useTokenStore();

  useEffect(() => {
    if (fetchedTokens && fetchedTokens.length > 0) setTokens(fetchedTokens);
  }, [fetchedTokens, setTokens]);

  return (
    <>
      <div className="text-center text-4xl font-bold my-10">
        King of the hill
      </div>

      <div className="flex justify-center">
        {tokens && <TopHillCard top={true} token={tokens[0]} />}
      </div>
      <Filters />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tokens &&
          tokens.map((token, index) => {
            return index >= 1 && <TopHillCard key={index} token={token} />;
          })}
      </div>
    </>
  );
};

// Filters for Home Page
const Filters = () => {
  return (
    <div className="flex lg:flex-row justify-between flex-col justify-center gap-[23px] pb-[38px] pt-[49px] ">
      <div>
        <input
          type="text"
          placeholder="Search token"
          className="text-white focus:caret-white rounded-[10px] border focus:border-primary transition duration-200 focus:border bg-card py-[10px] px-[22px] w-full outline-0 2xl:w-[520px]"
        />
      </div>
      <div className="flex flex-row gap-[23px]">
        <div>
          <select className="appearance-none  bg-card rounded-[10px] border focus:border-primary transition duration-200 focus:border py-[10px] px-[22px] w-full lg:w-[150px] 2xl:w-[233px]  outline-none text-[#919191]"></select>
        </div>

        <div>
          <select className="appearance-none  bg-card rounded-[10px] border focus:border-primary transition duration-200 focus:border py-[10px] px-[22px] w-full lg:w-[150px] 2xl:w-[233px]  outline-none text-[#919191]"></select>
        </div>
      </div>
    </div>
  );
};

// Dynamic card change colour on the basis of top value can true/false
const TopHillCard = ({ token, top }: { token: TokenDto; top?: boolean }) => {
  return (
    <Link href={`/launch/${token.address}`}>
      <div
        className={
          top
            ? "relative flex gap-4 border-primary border p-5 rounded-2xl"
            : "bg-card rounded-lg p-2 2xl:p-4 flex items-center gap-4 m-auto hover:border-primary transition duration-200 border-transparent border"
        }
      >
        <Image
          width={110}
          height={110}
          src={parseIpfsUrl(token.imageUri)}
          className="overflow-hidden rounded-lg"
          alt={token.name + ".img"}
        />
        <div className={top ? "w-64" : "w-60 relative"}>
          <div className="text-xl">{token.name}</div>
          <div
            className={
              top
                ? "capitalize"
                : "absolute right-0 top-0 text-primary text-[10px] 2xl:text-[12px]"
            }
          >
            {top ? "created by" : "by"}:{" "}
            <span className="underline">{token.creator.username}</span>
          </div>
          {!top && (
            <div className="text-white text-sm pt-[10px] text-ellipsis">
              {token.description}
            </div>
          )}
          {/* <div className="capitalize mt-5">market cap: 23.60K</div> */}
        </div>

        {top && (
          <div className="absolute right-0 top-0 w-15 h-15 p-5 border-primary border rounded-tr-2xl rounded-bl-2xl">
            {/* Thunder svg */}
            <svg
              stroke="currentColor"
              fill="#eb24d1"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="25"
              width="25"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
            </svg>
          </div>
        )}
      </div>
    </Link>
  );
};
