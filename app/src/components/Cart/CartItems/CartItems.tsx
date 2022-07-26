import React, { useEffect } from 'react'
import { useAppSelector } from 'src/redux/store/store'
import styled from 'styled-components/native'
import { CartItem } from './CartItem/CartItem'

export const CartItems: React.FC = () => {
  const cartItemsList = useAppSelector((state) => state.cartItems)

  useEffect(() => {}, [cartItemsList])

  return (
    <Container>
      <Wrap>
        {cartItemsList.map((cartItem, index) => (
          <CartItem
            key={cartItem + `${index}`}
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
  flex: 1;
`

const Container = styled.View`
  height: 100%;
  flex: 1;
`
