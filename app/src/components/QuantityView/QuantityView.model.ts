import { FormatedMenuItemType } from '../RestaurantDetails/MenuItems/MenuItems.model'

export interface QuantityViewProps {
  id: string
  name: string
  price: number
  ImageSRC: string
  handleRemoveItem: (item: FormatedMenuItemType) => void
  handleAddItem: (item: FormatedMenuItemType) => void
  quantity?: number
  style?: any
  buttonStyle?: {
    width: string
    height: string
    padding: string
    margin: string
  }
}

export interface QuantityButtonProps extends QuantityViewProps {
  type: string
}
