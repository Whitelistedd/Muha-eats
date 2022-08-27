import styled from 'styled-components/native'
import React from 'react'

import { RestaurantDetail } from 'src/components/RestaurantDetails/RestaurantDetail/RestaurantDetail'
import { BottomNav } from 'src/components/BottomNav/BottomNav'
import { MenuItems } from 'src/components/RestaurantDetails/MenuItems/MenuItems'
import { RestaurantDetailsProps } from './RestaurantDetails.model'
import { themeType } from 'src/theme'
import { CartButton } from 'src/components/RestaurantDetails/CartButton/CartButton'

const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({
  route,
  navigation,
}) => {
  const { name, image, menuItems } = route.params

  return (
    <Container>
      <Wrap>
        <RestaurantDetail name={name} image={image} />
        <MenuItems MenuItemList={menuItems} />
      </Wrap>
      <Cart>
        <CartButton />
      </Cart>
    </Container>
  )
}

const Cart = styled.SafeAreaView<{ theme: themeType }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: transparent;
  border-top: 1px solid grey;
`

const Wrap = styled.View`
  height: 100%;
`

const Container = styled.View<{ theme: themeType }>`
  height: 100%;

  background-color: ${({ theme }) => theme.bg};
`

export default RestaurantDetails
