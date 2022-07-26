import styled from 'styled-components'
import React from 'react'
import { Devider } from '../../Devider/Devider'
import { MenuItems } from '../MenuItems/MenuItems'

export const RestaurantDetail: React.FC = () => {
  return (
    <Container>
      <Details>
        <Image source={require('../../../assets/images/bg2.jpg')} />
        <Title>Random Restaurant</Title>
        <About>Thai · Comfort Food · $$ · 4 ⭐ (2000+)</About>
      </Details>
      <Devider height={2} color="grey" />
      <MenuItems />
    </Container>
  )
}

const About = styled.Text`
  padding: 0px 10px 20px 10px;
  font-size: 10px;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  padding: 10px 10px 5px 10px;
`

const Image = styled.Image`
  width: 100%;
  height: 150px;
`

const Details = styled.View``

const Container = styled.View``
