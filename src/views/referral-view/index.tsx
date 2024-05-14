import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { Search } from "lucide-react";
import { ReferralTable } from "./components/referral-table";

export const ReferralView = () => {
  return (
    <section className="max-w-[1280px] mx-auto my-10">
      <div className="flex flex-col gap-10">
        <div className="p-8 flex flex-col gap-3 rounded-3xl bg-secondary">
          <h1 className="text-2xl">
            Invite your friends. Earn cryptocurrency together
          </h1>
          <p className="text-sm">
            Earn a certain commission reward from your friends through
            invitation on OreoSwap and 0.5% of their earnings from Stake and
            Farm programs.
          </p>
        </div>
        <div className="flex gap-10">
          <div className="p-8 flex flex-col w-full border gap-3 rounded-3xl bg-card">
            <p className="text-sm">Farms Referral</p>
            <h1 className="text-2xl">0 OREO</h1>
            <Button className="w-fit">Withdraw</Button>
          </div>
          <div className="p-8 flex flex-col gap-3 w-full rounded-3xl bg-card border">
            <h1 className="text-2xl">My Referral Link</h1>
            <div className="flex w-full bg-secondary px-4 py-3 rounded-2xl items-center justify-between ">
              <p className="text-lg ">https://oreoswap.finance</p>
              <Button>
                <Copy />
              </Button>
            </div>
          </div>
        </div>
        <div className="p-8 flex flex-col gap-3 rounded-3xl bg-card border">
          <div className="flex justify-between">
            <div className="flex flex-col gap-3">
              <p className="text-md">Referral List</p>
              <p className="text-sm">All your referral friends in one place</p>
            </div>
            <div className="flex w-fit items-center justify-between ">
              <input
                className="text-md  px-4 py-3  bg-secondary rounded-l-2xl rounded-r-none"
                placeholder="Search"
              />

              <Button className="px-4 py-6 rounded-r-2xl rounded-l-none">
                <Search />
              </Button>
            </div>
          </div>
          <ReferralTable />
        </div>
      </div>
    </section>
  );
};
