import { cn } from "@/utils/cn";

export function TableCell({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return (
      <td className={cn("p-3 align-middle text-neutral-100", className)}>
        {children}
      </td>
    );
  }
  