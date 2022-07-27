import styled from 'styled-components/native'
import React from 'react'
import { MenuItem } from './MenuItem/MenuItem'
import { MenuItemsProps } from './MenuItems.model'

export const MenuItems: React.FC<MenuItemsProps> = ({ MenuItemList }) => {
  return (
    <Container>
      <MenuItem />
      {/* {MenuItemList.map((menuItem) => (
        <Wrap></Wrap>
      ))} */}
    </Container>
  )
}

const Wrap = styled.View``

const Container = styled.View``
