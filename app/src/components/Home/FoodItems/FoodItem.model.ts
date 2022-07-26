export type foodItemType = {
  name: string
  eta: string
  ImageSRC: string
}

export interface FoodItemProps {
  name: string
  eta: string
  ImageSRC: string
}

export interface FoodItemsProps {
  foodItems: Array<foodItemType>
}
