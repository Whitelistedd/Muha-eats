import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export type MenuItemType = {
  _key: string
  foodImage: SanityImageSource
  foodName: string
  price: number
}

export interface MenuItemsProps {
  MenuItemList: Array<MenuItemType>
}

export interface MenuItemProps {
  id: string
  name: string
  price: number
  ImageSRC: string
}
