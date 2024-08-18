import { cn } from "@/utils/cn";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={cn(
        `rounded-md px-4 text-sm font-bold outline-none shadow-sm
    focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500
    active:opacity-80`,
        className
      )}
    >
      {children}
    </button>
  );
}
