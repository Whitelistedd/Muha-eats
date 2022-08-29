import React from 'react'
import styled from 'styled-components/native'
import { DeliveryMethodProps } from '../DeliveryMethods.model'
import Lottie from 'lottie-react-native'

export const DeliveryMethod: React.FC<DeliveryMethodProps> = ({
  deliveryType,
  icon,
  SelectedDeliveryMethod,
  handleDeliveryChange,
  index,
}) => {
  return (
    <Container
      onPress={() => handleDeliveryChange(deliveryType)}
      index={index}
      SelectedDeliveryMethod={SelectedDeliveryMethod}
      deliveryType={deliveryType}
    >
      <Icon source={icon} autoPlay loop />
      <DeliveryType
        SelectedDeliveryMethod={SelectedDeliveryMethod}
        deliveryType={deliveryType}
      >
        {deliveryType}
      </DeliveryType>
    </Container>
  )
}

const DeliveryType = styled.Text<{
  SelectedDeliveryMethod: string
  deliveryType: string
}>`
  font-weight: 700;
  flex: 1;
  text-align: center;
  color: ${(props) =>
    props.SelectedDeliveryMethod === props.deliveryType ? 'white' : 'black'};
`

const Icon = styled(Lottie)`
  width: 40px;
  height: 40px;
`

const Container = styled.TouchableOpacity<{
  SelectedDeliveryMethod: string
  deliveryType: string
  index: number
}>`
  display: flex;
  flex: 1;
  padding: 10px;
  margin: 0px ${(props) => (props.index === 1 ? 8 : 0)}px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  color: blue;
  background-color: ${(props) =>
    props.SelectedDeliveryMethod === props.deliveryType ? '#2fb90d' : 'white'};
`
