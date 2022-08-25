import styled from 'styled-components/native'
import React from 'react'

import { RestaurantItemsProps } from './RestaurantItems.model'
import { RestaurantItem } from './RestaurantItem/RestaurantItem'
import { urlFor } from 'src/SanityClient'
import { TouchableOpacity } from 'react-native'

export const RestaurantItems: React.FC<RestaurantItemsProps> = ({
  restaurants,
  navigation,
}) => {
  return (
    <Container>
      {restaurants.map((item, index) => (
        <TouchableOpacity
          key={`restaurant-${index}`}
          onPress={() => {
            navigation.navigate('RestaurantDetails', {
              name: item.name,
              image: urlFor(item.mainImage).url(),
              menuItems: item.menuItems,
              categories: item.categories,
            })
          }}
        >
          <RestaurantItem
            ImageSRC={urlFor(item.mainImage).url()}
            name={item.name}
          />
        </TouchableOpacity>
      ))}
    </Container>
  )
}

const Container = styled.View`
  height: 100%;
`
