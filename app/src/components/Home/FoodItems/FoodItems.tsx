import styled from 'styled-components'
import React from 'react'

import { FoodItemsProps } from './FoodItem.model'
import { FoodItem } from './FoodItem/FoodItem'

export const FoodItems: React.FC<FoodItemsProps> = ({ foodItems }) => {
  return (
    <>
      {foodItems.map((item, index) => (
        <FoodItem
          key={`foodItem-${index}`}
          ImageSRC={item.image_url}
          name={item.name}
          eta={'20-50'}
        />
      ))}
    </>
  )
}
