import styled from 'styled-components/native'
import React from 'react'

import { RestaurantDetail } from 'src/components/RestaurantDetails/RestaurantDetail/RestaurantDetail'
import { BottomNav } from 'src/components/BottomNav/BottomNav'
import { MenuItems } from 'src/components/RestaurantDetails/MenuItems/MenuItems'
import { RestaurantDetailsProps } from './RestaurantDetails.model'

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
        <Nav>
          <BottomNav navigation={navigation} />
        </Nav>
      </Wrap>
    </Container>
  )
}

const Nav = styled.SafeAreaView``

const Wrap = styled.View`
  height: 100%;
`

const Container = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.bg};
`

export default RestaurantDetails
