import styled from 'styled-components/native'
import React from 'react'
import { MenuItem } from './MenuItem/MenuItem'
import { MenuItemsProps } from './MenuItems.model'
import { urlFor } from '../../../SanityClient'

export const MenuItems: React.FC<MenuItemsProps> = ({ MenuItemList }) => {
  return (
    <Container>
      <Wrap>
        {MenuItemList.map((menuItem) => (
          <MenuItem
            name={menuItem.foodName}
            price={menuItem.price}
            ImageSRC={urlFor(menuItem.foodImage).url()}
          />
        ))}
      </Wrap>
    </Container>
  )
}

const Wrap = styled.View`
  padding: 10px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Container = styled.ScrollView`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  background-color: white;
  position: relative;
  top: -17px;
`
