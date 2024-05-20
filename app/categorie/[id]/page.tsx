import { FC } from 'react'

import { CategoryPage } from '@/components/pages/category/category.page'

interface Props {
  params: { id: string }
}

const Category: FC<Props> = ({ params }) => {
  return (
    <main>
      <CategoryPage id={params.id} />
    </main>
  )
}

export default Category
