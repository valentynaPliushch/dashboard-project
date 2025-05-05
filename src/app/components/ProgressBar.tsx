import { cn } from "@/lib/utils"; // if using ShadCN setup

type ProgressBarProps = {
  className?: string;
  value: number;
  display?: boolean;
};

export const ProgressBar = ({
  className,
  value,
  display,
}: ProgressBarProps) => {
  return (
    <div
      className={cn(
        "flex flex-row w-full h-[30px] rounded-r-full bg-midnight-600 relative",
        className
      )}
    >
      <div
        style={{ width: `${value}%` }}
        className="absolute top-0 left-0 flex items-center justify-end h-full bg-gradient-to-r from-transparent to-blue-500 rounded-r-full"
      >
        {display && `${value}%`}
      </div>
    </div>
  );
};
