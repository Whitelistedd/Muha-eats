export type foodItemType = {
  name: string
  eta: string
  image_url: string
  price: string
  review_count: string
  rating: string
  categories: string
}

export interface FoodItemProps {
  name: string
  eta: string
  ImageSRC: string
}

export interface FoodItemsProps {
  foodItems: Array<foodItemType>
  navigation: any
}
