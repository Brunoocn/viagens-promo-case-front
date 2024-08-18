"use client";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "./button";

export interface PaginationProps {
  totalCount: number;
}

export function Pagination({ totalCount }: PaginationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());

    return `${pathname}?${params.toString()}`;
  };

  const allPages = Math.ceil(totalCount / 10);

  return (
    <div className="mt-6 flex items-center justify-between">
      <span className="text-sm text-neutral-400">
        Total de {totalCount} items(s)
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="flex text-sm font-medium text-neutral-400">
          Página {currentPage} de {allPages}
        </div>
        <div className="flex items-center gap-2">
          <Link href={createPageURL(1)}>
            <Button className="flex h-8 w-8 items-center justify-center p-0 border border-neutral-700 text-neutral-300 hover:bg-neutral-700">
              <ChevronsLeft className="h-4 w-4" />
              <span className="sr-only">Primeira página</span>
            </Button>
          </Link>

          <Link
            href={createPageURL(currentPage - 1 <= 0 ? 1 : currentPage - 1)}
          >
            <Button className="flex h-8 w-8 items-center justify-center p-0 border border-neutral-700 text-neutral-300 hover:bg-neutral-700">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Próxima página</span>
            </Button>
          </Link>

          <Link
            href={createPageURL(
              currentPage + 1 >= allPages ? allPages : currentPage + 1
            )}
          >
            <Button className="flex h-8 w-8 items-center justify-center p-0 border border-neutral-700 text-neutral-300 hover:bg-neutral-700">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Página anterior</span>
            </Button>
          </Link>

          <Link href={createPageURL(allPages)}>
            <Button className="flex h-8 w-8 items-center justify-center p-0 border border-neutral-700 text-neutral-300 hover:bg-neutral-700">
              <ChevronsRight className="h-4 w-4" />
              <span className="sr-only">Última página</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
