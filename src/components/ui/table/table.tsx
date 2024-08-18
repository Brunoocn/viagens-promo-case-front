import { cn } from "@/utils/cn";

export function Table({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative w-full overflow-auto">
      <table className={cn("w-full caption-bottom text-sm", className)}>
        {children}
      </table>
    </div>
  );
}
