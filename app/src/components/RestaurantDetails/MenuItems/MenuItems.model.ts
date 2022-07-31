import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export type MenuItemType = {
  foodImage: SanityImageSource
  foodName: string
  price: number
}

export interface MenuItemsProps {
  MenuItemList: Array<MenuItemType>
}

export interface MenuItemProps {
  name: string
  price: number
  ImageSRC: string
}
