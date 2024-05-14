import * as React from "react";

import { cn } from "@/lib/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  Icon?: React.ComponentType;
}
const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ Icon, type, ...props }, ref) => {
    return (
      <div className="flex items-center">
        <div className="relative w-full">
          <input
            ref={ref}
            {...props}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            {Icon ? <Icon /> : null}
          </button>
        </div>
      </div>
    );
  }
);
CustomInput.displayName = "Input";

export { CustomInput };
