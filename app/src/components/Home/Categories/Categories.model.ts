import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export type category = {
  mainImage: SanityImageSource
  name: string
}

export interface CategoryProps {
  ImageSRC: string
  name: string
  handleCategoryChange: (category: string) => void
}

export interface CategoriesProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}
