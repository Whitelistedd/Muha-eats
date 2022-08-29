export interface DeliveryMethodProps {
  deliveryType: string
  icon: any
  SelectedDeliveryMethod: string
  index: number
  handleDeliveryChange: (method: string) => void
}
