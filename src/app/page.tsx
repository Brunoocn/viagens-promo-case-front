import { ProductsTable } from "@/components/products/table";
import { Header } from "@/components/ui/header";
import { Pagination } from "@/components/ui/pagination";
import { requestProducts } from "@/services/products/getAllProducts";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const ITEMS_PER_PAGE: number = 10;
  const page = Number(searchParams?.page) || 1;
  const products = await requestProducts(page, ITEMS_PER_PAGE);
  const totalCountProducts = products.paging.total;

  return (
    <>
      <Header>
        <Image src="/logo-vp.svg" alt="Viagens Promo" width={150} height={50} />
      </Header>
      <main className="">
        <div className="flex flex-col p-8">
          <ProductsTable products={products.list} />
          <Pagination totalCount={totalCountProducts || 10} />
        </div>
      </main>
    </>
  );
}
