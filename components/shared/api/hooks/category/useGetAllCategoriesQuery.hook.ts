import { useQuery } from '@tanstack/react-query'

import { CategoryApiService } from '@/components/shared'

export const useGetAllCategoriesQuery = () => {
  return useQuery({
    queryKey: ['getAllCategories'],
    queryFn: async () => await CategoryApiService.getAllCategories(),
  })
}
