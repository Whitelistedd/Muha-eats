import styled from 'styled-components/native'
import React from 'react'

import { RestaurantDetail } from 'src/components/RestaurantDetails/RestaurantDetail/RestaurantDetail'
import { MenuItems } from 'src/components/RestaurantDetails/MenuItems/MenuItems'
import { RestaurantDetailsProps } from './RestaurantDetails.model'
import { themeType } from 'src/theme'
import { CartButton } from 'src/components/RestaurantDetails/CartButton/CartButton'
import { useAppSelector } from 'src/redux/store/store'
import { AnimationView } from 'src/components/AnimationView/AnimationView'
import { GoBack } from 'src/components/GoBack/GoBack'

const RestaurantDetails: React.FC<RestaurantDetailsProps> = ({
  route,
  navigation,
}) => {
  const { name, image, menuItems } = route.params

  const cartQuantity = useAppSelector((state) => state.quantity)

  return (
    <Container>
      <Wrap>
        <GoBack navigation={navigation} />
        <RestaurantDetail name={name} image={image} />
        <MenuItems MenuItemList={menuItems} />
        {cartQuantity !== 0 && (
          <Cart>
            <AnimationView endValue={60} animation={'height'} duration={300}>
              <CartButton navigation={navigation} />
            </AnimationView>
          </Cart>
        )}
      </Wrap>
    </Container>
  )
}

const Cart = styled.SafeAreaView<{ theme: themeType }>`
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
