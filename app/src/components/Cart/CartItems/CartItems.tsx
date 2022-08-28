import React from 'react'
import { useAppSelector } from 'src/redux/store/store'
import styled from 'styled-components/native'
import { CartItem } from './CartItem/CartItem'

export const CartItems: React.FC = () => {
  const cartItemsList = useAppSelector((state) => state.cartItems)

  return (
    <Container>
      <Wrap>
        {cartItemsList.map((cartItem) => (
          <CartItem
            id={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            imageSRC={cartItem.ImageSRC}
          />
        ))}
      </Wrap>
    </Container>
  )
}

const Wrap = styled.View`
  height: 100%;
  padding: 10px;
  flex: 1;
`

const Container = styled.ScrollView`
  height: 100%;
  flex: 1;
`
