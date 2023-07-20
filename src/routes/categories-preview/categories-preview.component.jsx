import { useContext } from 'react'

import { CategoriesContext } from '../../components/contexts/categories.context.jsx'
import CategoryPreview from '../../components/category-preview/category-preview.component.jsx'

import { CategoryPreviewContainer } from './categories-preview.styles.jsx'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)
  return (
    <CategoryPreviewContainer>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title]
        return <CategoryPreview key={title} title={title} products={products} />
      })}
    </CategoryPreviewContainer>
  )
}

export default CategoriesPreview
