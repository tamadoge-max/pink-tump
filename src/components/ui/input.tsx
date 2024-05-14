import * as React from "react";

import { cn } from "@/lib/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  baseUnit?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, baseUnit, type, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-md border border-input-border bg-input px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        {baseUnit ? (
          <div
            className={`absolute inset-y-0 end-0 flex items-center pe-3 text-xs text-muted`}
          >
            {baseUnit}
          </div>
        ) : null}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
