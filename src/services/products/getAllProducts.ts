import { IProduct } from "@/interfaces/IProduct";
import { fetchWrapper } from "@/utils/fetchWrapper";

export const requestProducts = async (
  page: number,
  pageSize: number
) => {
  try {
    const products: IProduct[] | any = await fetchWrapper(
      `products/list?page=${page}&pageSize=${pageSize}`,
      {
        method: "GET",
      }
    );

    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};
