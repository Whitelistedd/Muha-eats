import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export type restaurantsType = {
  name: string
  eta: string
  mainImage: SanityImageSource
  categories: Array<string>
  menuItems: Array<{
    title: string
    price: number
    image: SanityImageSource
  }>
}

export interface RestaurantItemProps {
  name: string
  ImageSRC: string
}

export interface RestaurantItemsProps {
  restaurants: Array<restaurantsType>
  navigation: any
}
