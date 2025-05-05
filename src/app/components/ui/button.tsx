import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "cursor-pointer bg-black text-white shadow-xs hover:bg-black/70 rounded-4xl",
        outline:
          "cursor-pointer border text-blue-500 border-blue-500 bg-transparent shadow-xs hover:bg-black/50 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 px-7 rounded-4xl cursor-pointer",
        main: "cursor-pointer border text-white border-midnight-600 bg-black/50 shadow-xs hover:bg-black/50 dark:bg-input/30 dark:border-input dark:hover:bg-input/50 px-7 rounded-4xl cursor-pointer",
        secondary:
          "bg-blue-500 text-white shadow-xs hover:bg-blue-500/80 rounded-4xl cursor-pointer",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        green:
          "text-white bg-green-500 underline-offset-4 hover:green-500/30 rounded-4xl cursor-pointer",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-4xl px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
