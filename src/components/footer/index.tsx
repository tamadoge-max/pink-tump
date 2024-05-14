"use client";
import { ModeToggle } from "../ui/theme-mode-toggle";
import { FaTelegram, FaDiscord, FaTwitter } from "react-icons/fa";
import OngearLogo from "../ui/OngearLogo";
import Link from "next/link";

export const Footer = () => {
  const linksdata = [
    {
      name: "Privacy Policy",
      route: "/",
    },
    {
      name: "Support",
      route: "/",
    },
    {
      name: "Technology",
      route: "/",
    },
    {
      name: "White Paper",
      route: "/",
    },
    {
      name: "Terms and conditions",
      route: "/",
    },
    {
      name: "Solutions",
      route: "/",
    },
  ];

  return (
    <div className="w-full text-sm text-gray-400 mx-auto px-[1rem] flex flex-col items-center bg-secondary py-8 mt-16">
      <div className="w-full max-w-[1280px]">
        <div className="flex flex-col gap-4 w-full py-3 justify-between md:flex-row">
          <div className="flex flex-col gap-4">
            <OngearLogo />
            <span className="w-[15rem]">
              All game copyrights, trade marks, service marks
            </span>
            <div className="inline-block w-fit rounded-full overflow-hidden">
              {/* <div className="flex items-center gap-2">
            <div className="text-sm text-primary ">English</div>
            <UkIcon />
          </div> */}
              {/* <ModeToggle /> */}
            </div>
          </div>
          <div className="flex flex-col flex-wrap gap-y-4 gap-x-20 h-28 w-full max-w-lg">
            {linksdata.map((link, index) => {
              return (
                <span key={index}>
                  <Link className="hover:underline" href={link.route}>
                    {link.name}
                  </Link>
                </span>
              );
            })}
          </div>
          <div className="flex flex-col gap-4">
            <span>Follow Us</span>
            <div className="flex gap-3">
              <div className="bg-[#2463EB] p-2 rounded-full">
                <FaTelegram />
              </div>
              <div className="bg-[#2463EB] p-2 rounded-full">
                <FaDiscord />
              </div>
              <div className="bg-[#2463EB] p-2 rounded-full">
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
