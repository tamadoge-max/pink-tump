"use client";
import Image from "next/image";
import { File, Braces, Home } from "lucide-react";
import { Twitter } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { useState } from "react";
import { Navbar } from "../navbar";
import Link from "next/link";
import { Footer } from "../footer";
export const SideBar = ({ children }: { children: React.ReactNode }) => {
  const [isExpanded, setExpanded] = useState(false);

  const sideBarData = [
    {
      title: "Home",
      path: "/",
      icon: <Home color="#eb24d1" className="w-6 h-6" size={28} />,
    },
    {
      title: "Create Tokens",
      path: "/create",
      icon: <Braces color="#eb24d1" className="w-6 h-6" size={28} />,
    },
    {
      title: "Docs",
      path: "/docs",
      icon: <File color="#eb24d1" className="w-6 h-6" size={28} />,
    },
  ];

  const socialLinksData = [
    {
      title: "Twitter",
      path: "/twitter",
      icon: <Twitter color="#eb24d1" className="w-6 h-6" size={28} />,
    },
    {
      title: "Telegram",
      path: "/Telegram",
      icon: <FaTelegram color="#eb24d1" className="w-6 h-6" size={28} />,
    },
    {
      title: "Discord",
      path: "/discord",
      icon: <FaDiscord color="#eb24d1" className="w-6 h-6" size={28} />,
    },
  ];
  return (
    <div className="flex">
      <div
        className="py-5 hidden  md:flex fixed justify-between flex-col z-10 h-full bg-card transition-all duration-200"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div>
          <div className="flex items-center pl-5">
            <Image
              className={"pr-4"}
              src={"/assets/logo2.png"}
              width={50}
              height={50}
              alt="logo.png"
            />
            <span
              className={`transition-all duration-200 ${
                isExpanded
                  ? "text-xl font-bold text-pink-500 w-56 opacity-[1]"
                  : "text-xl font-bold text-pink-500 w-0 overflow-hidden opacity-0"
              }`}
            >
              PumpPink
            </span>
          </div>
          <div className="flex mt-12 flex-col">
            {sideBarData.map((navItem) => {
              return (
                <Link
                  key={navItem.title}
                  href={navItem.path}
                  className="flex pl-5 py-4 gap-5 border border-transparent transition duration-200 hover:border-y hover:border-y-primary"
                >
                  {navItem.icon}
                  <span
                    className={`transition-all duration-200 ${
                      isExpanded
                        ? "text-lg w-56 text-ellipsis whitespace-nowrap opacity-[1]"
                        : "text-lg w-0 overflow-hidden text-ellipsis whitespace-nowrap opacity-0"
                    }`}
                  >
                    {navItem.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col border-t pt-4">
          {socialLinksData.map((socialLink) => {
            return (
              <Link
                key={socialLink.title}
                href={socialLink.path}
                className="flex pl-5 py-4 gap-5 border border-transparent transition duration-200 hover:border-y hover:border-y-primary"
              >
                {socialLink.icon}
                <span
                  className={`transition-all duration-200 ${
                    isExpanded
                      ? "text-lg w-56 text-ellipsis whitespace-nowrap opacity-[1]"
                      : "text-lg w-0 overflow-hidden text-ellipsis whitespace-nowrap opacity-0"
                  }`}
                >
                  {socialLink.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      <div
        className={
          "flex ml-0 md:ml-[4.5rem] flex-col min-h-screen w-full mx-auto"
        }
      >
        <Navbar />
        <div className="px-[1rem] flex-1 my-28">{children}</div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};
