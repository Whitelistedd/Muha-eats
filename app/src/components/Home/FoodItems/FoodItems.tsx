import styled from 'styled-components/native'
import React from 'react'

import { FoodItemsProps } from './FoodItem.model'
import { FoodItem } from './FoodItem/FoodItem'
import { TouchableOpacity } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'

export const FoodItems: React.FC<FoodItemsProps> = ({
  foodItems,
  navigation,
}) => {
  return (
    <>
      {foodItems.map((item, index) => (
        <TouchableHighlight
          key={`foodItem-${index}`}
          onPress={() => {
            navigation.navigate('RestaurantDetails', {
              name: item.name,
              image: item.image_url,
              price: item.price,
              reviews: item.review_count,
              rating: item.rating,
              categories: item.categories,
            })
          }}
        >
          <FoodItem ImageSRC={item.image_url} name={item.name} eta={'20-50'} />
        </TouchableHighlight>
      ))}
    </>
  )
}
