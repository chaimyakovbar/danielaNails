import { useQuery } from 'react-query'
import { queryAtom } from './ProductsList'
import { useAtom } from 'jotai'
import { useMemo } from 'react'
import { getProduct } from '../api/products'

const defaultProducts = [];


export const useProductList = () => {

  const [query] = useAtom(queryAtom)

  const queryParams = useMemo(
    () => Object.entries(query).map(([key, value]) => `${key}=${value}`).join('&'),
    [query]
  )

  const retrieveProductList = async () => {
   const response = await getProduct(queryParams)
   return response.data
  };

  const { data: productList, isError: error, isLoading, refetch } = useQuery({
    queryKey: ['productList', queryParams],
    queryFn: retrieveProductList,
  });

  return {
    isLoading,
    error,
    productList: productList || defaultProducts,
    refetch,
  };
};
