import { cn } from "@/lib/cn";

type Props = {
  className?: string;
};

const PulseDot = ({ className }: Props) => {
  return (
    <span className={cn(className, "relative flex h-2 w-2")}>
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-muted opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-muted"></span>
    </span>
  );
};

export default PulseDot;
