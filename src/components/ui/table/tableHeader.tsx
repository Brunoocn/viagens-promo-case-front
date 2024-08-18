import { cn } from "@/utils/cn";

export function TableHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <thead className={cn("border-neutral-800 [&_tr]:border-b", className)}>
      {children}
    </thead>
  );
}
