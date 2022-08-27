import styled from 'styled-components/native'
import React from 'react'
import { useAppSelector } from 'src/redux/store/store'

export const CartButton: React.FC = () => {
  const cartQuantity = useAppSelector((state) => state.quantity)
  const cartTotal = useAppSelector((state) => state.total)

  return (
    <>
      {cartQuantity !== 0 && (
        <Container>
          <Text>В корзину {cartQuantity}</Text>
          <Text>${cartTotal}</Text>
        </Container>
      )}
    </>
  )
}

const Text = styled.Text`
  color: white;
`

const Container = styled.View`
  background-color: green;
  height: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin: 5px 10px 0px 10px;
`
