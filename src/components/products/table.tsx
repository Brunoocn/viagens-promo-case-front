import { IProduct } from "@/interfaces/IProduct";

import {
  Table,
  TableRow,
  TableHeader,
  TableHead,
  TableBody,
  TableCell,
} from "../ui/table";

export async function ProductsTable({ products }: { products: IProduct[] }) {
  return (
    <Table>
      <TableHeader className="border-neutral-900">
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Preço</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((products) => {
          return (
            <TableRow key={products.id}>
              <TableCell>{products.id}</TableCell>
              <TableCell>{products.name}</TableCell>
              <TableCell>${products.price}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
