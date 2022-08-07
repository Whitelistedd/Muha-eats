export interface CategoryProps {
  ImageSRC: string
  name: string
  handleCategoryChange: (category: string) => void
}

export interface CategoriesProps {
  selectedCategory: string
  setSelectedCategory: (category: string) => void
}
