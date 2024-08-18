import { cn } from "@/utils/cn";

export function TableRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <tr
      className={cn(
        "border-b border-neutral-800 transition-colors hover:bg-neutral-900 data-[state=selected]:bg-neutral-900",
        className
      )}
    >
      {children}
    </tr>
  );
}
