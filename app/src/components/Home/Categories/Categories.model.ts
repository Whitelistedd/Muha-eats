export interface CategoryProps {
  ImageSRC: string
  name: string
  handleCategoryChange: (category: string) => void
}

export interface CategoriesProps {
  category: string
  setCategory: (category: string) => void
}
