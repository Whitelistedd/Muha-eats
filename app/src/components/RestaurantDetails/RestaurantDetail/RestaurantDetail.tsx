import styled from 'styled-components/native'
import React from 'react'

import { RestaurantDetailProps } from './RestaurantDetail.model'

export const RestaurantDetail: React.FC<RestaurantDetailProps> = ({
  name,
  image,
}) => {
  return (
    <Container>
      <Wrap source={{ uri: image }} resizeMode="cover">
        <Title>{name}</Title>
      </Wrap>
    </Container>
  )
}

const Title = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: 700;
  padding: 10px 10px 5px 10px;
`

const Wrap = styled.ImageBackground`
  height: 240px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding-bottom: 15px;
`

const Container = styled.View``
