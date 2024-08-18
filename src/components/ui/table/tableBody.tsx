import { cn } from "@/utils/cn";

export function TableBody({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <tbody className={cn("[&_tr:last-child]:border-0", className)}>
        {children}
      </tbody>
    );
  }