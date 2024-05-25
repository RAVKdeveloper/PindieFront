import { APIService } from '../../api.instance'

import type { CategoriesType } from '@/components/service/types/categories.type'

class CategoryApiService extends APIService {
  private prefix = '/category'

  public async getAllCategories(): Promise<ServerResponse<CategoriesType[]>> {
    const { data } = await this.api.get<ServerResponse<CategoriesType[]>>(this.prefix)

    return data
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new CategoryApiService()
