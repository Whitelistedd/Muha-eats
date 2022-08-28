import styled from 'styled-components/native'
import React from 'react'
import { themeType } from 'src/theme'
import { CartProps } from './Cart.model'
import { CartItems } from 'src/components/Cart/CartItems/CartItems'
import { CartButton } from 'src/components/RestaurantDetails/CartButton/CartButton'

const Cart: React.FC<CartProps> = ({ navigation }) => {
  return (
    <Container>
      <Wrap>
        <NavBar>
          <Title>Kорзино</Title>
        </NavBar>
        <CartItems />
        <CartButton navigation={navigation} />
      </Wrap>
    </Container>
  )
}

const Title = styled.Text`
  font-weight: 700;
  font-size: 18px;
`

const NavBar = styled.View`
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`

const Wrap = styled.View`
  height: 100%;
`

const Container = styled.SafeAreaView<{ theme: themeType }>`
  height: 100%;
  background-color: ${({ theme }) => theme.bg};
`

export default Cart
