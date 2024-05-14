"use client";

import * as React from "react";

import { cn } from "@/lib/cn";
import { useRouter } from "next/navigation";

interface LinkTableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  href: string;
}

const LinkTableRow = React.forwardRef<HTMLTableRowElement, LinkTableRowProps>(
  ({ className, href, ...props }, ref) => {
    const router = useRouter();
    return (
      <tr
        ref={ref}
        onClick={(e) => router.push(href)}
        className={cn(
          "border-b transition-colors cursor-pointer hover:bg-muted/50 data-[state=selected]:bg-muted",
          className
        )}
        {...props}
      />
    );
  }
);
LinkTableRow.displayName = "LinkTableRow";

export { LinkTableRow };
