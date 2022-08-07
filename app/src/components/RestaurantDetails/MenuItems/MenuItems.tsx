import styled from 'styled-components/native'
import React from 'react'
import { MenuItem } from './MenuItem/MenuItem'
import { MenuItemsProps } from './MenuItems.model'
import { urlFor } from '../../../SanityClient'

export const MenuItems: React.FC<MenuItemsProps> = ({ MenuItemList }) => {
  return (
    <Container>
      <ScrollView>
        <Wrap>
          {MenuItemList?.map((menuItem, index) => (
            <MenuItem
              key={`menuItem-number-${index}`}
              id={menuItem.id}
              name={menuItem.foodName}
              price={menuItem.price}
              ImageSRC={urlFor(menuItem.foodImage).url()}
            />
          ))}
        </Wrap>
      </ScrollView>
    </Container>
  )
}

const Wrap = styled.View`
  padding: 10px;
  justify-content: space-between;
  display: flex;
  height: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`

const ScrollView = styled.ScrollView`
  height: 100%;
  flex: 1;
  border-radius: 20px;
`

const Container = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: white;
  position: relative;
  top: -17px;
`
