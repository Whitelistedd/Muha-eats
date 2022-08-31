import React, { useEffect } from 'react'
import { Devider } from 'src/components/Devider/Devider'
import { changeDeliveryMethod } from 'src/redux/Slices/Cart/CartSlice'
import { AppDispatch, useAppSelector } from 'src/redux/store/store'
import styled from 'styled-components/native'
import { DeliveryMethod } from './DeliveryMethod/DeliveryMethod'

const DeliveryMethodList = [
  {
    deliveryType: 'Доставка',
    icon: require('src/assets/animation/delivery.json'),
  },
  {
    deliveryType: 'Навынос',
    icon: require('src/assets/animation/pickup.json'),
  },
]

export const DeliveryMethods: React.FC = () => {
  const dispatch = AppDispatch()
  const SelectedDeliveryMethod = useAppSelector((state) => state.deliveryMethod)

  const handleDeliveryChange = (method: string) => {
    dispatch(changeDeliveryMethod(method))
  }

  useEffect(() => {
    dispatch(changeDeliveryMethod('Доставка'))
  }, [])

  return (
    <Container>
      {DeliveryMethodList.map((method, index) => (
        <DeliveryMethod
          key={method + `${index}`}
          handleDeliveryChange={handleDeliveryChange}
          SelectedDeliveryMethod={SelectedDeliveryMethod}
          deliveryType={method.deliveryType}
          icon={method.icon}
          index={index}
        />
      ))}
    </Container>
  )
}
const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
