import { cn } from "@/lib/cn";

type BadgeProps = {
  text: string;
  className?: string;
};

export const NumberBadge = ({ text, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "bg-red-500 text-white text-[10px] font-black px-[6px] py-[2px] rounded-full",
        className
      )}
    >
      {text}
    </span>
  );
};
