// "use client";
// import { useTheme } from "next-themes";
// import { Switch } from "./switch";
// import { Moon, Sun } from "lucide-react";
// import { useState } from "react";
// import { Theme } from "@/lib/theme";

// const ThemeModeToggler = ({ theme }: { theme: Theme }) => {
//   const changeTheme = (_theme: Theme) => {
//     const root = document.getElementsByTagName("html")[0];
//     root.classList.remove(_theme === Theme.light ? Theme.dark : Theme.light);

//     root.classList.add(_theme);
//     document.cookie = `theme=${_theme}`;
//   };
//   return (
//     <>
//       <div className="flex border rounded-xl  ">
//         <div
//           onClick={() => changeTheme(Theme.light)}
//           className=" bg-[#2774EC] cursor-pointer border-[#2774EC] border text-white rounded-l-2xl  py-1 px-3 dark:bg-white dark:text-[#2774EC]"
//         >
//           <Sun className="h-[1.2rem] fill-white w-[1.2rem] rotate-0 scale-100 transition-all  dark:fill-[#2774EC]" />
//         </div>
//         <div
//           onClick={() => changeTheme(Theme.dark)}
//           className="rounded-r-2xl cursor-pointer border-[#2774EC] border text-[#2774EC]  py-1 px-3 dark:text-white dark:bg-[#2774EC]  "
//         >
//           <Moon className=" h-[1.2rem] w-[1.2rem]  fill-[#2774EC] rotate-0 scale-100 transition-all dark:fill-white " />
//         </div>
//       </div>
//     </>
//   );
// };

// export default ThemeModeToggler;
