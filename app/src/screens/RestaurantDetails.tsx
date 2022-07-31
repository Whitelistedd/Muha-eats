import styled from 'styled-components/native'
import React from 'react'

import { RestaurantDetail } from '../components/RestaurantDetails/RestaurantDetail/RestaurantDetail'
import { BottomNav } from '../components/BottomNav/BottomNav'
import { MenuItems } from '../components/RestaurantDetails/MenuItems/MenuItems'

export default function RestaurantDetails(props) {
  const { name, image, menuItems, categories } = props.route.params

  console.log(menuItems)

  return (
    <Container>
      <Wrap>
        <RestaurantDetail name={name} image={image} />
        <MenuItems MenuItemList={menuItems} />
      </Wrap>
      <BottomNav />
    </Container>
  )
}

const Wrap = styled.View`
  height: 100%;
`

const Container = styled.View`
  background-color: ${({ theme }) => theme.bg};
`
