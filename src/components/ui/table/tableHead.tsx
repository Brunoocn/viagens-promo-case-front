import { cn } from "@/utils/cn";

export function TableHead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-neutral-400",
        className
      )}
    >
      {children}
    </th>
  );
}
