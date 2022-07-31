import styled from 'styled-components/native'
import React from 'react'
import { MenuItemProps } from '../MenuItems.model'

export const MenuItem: React.FC<MenuItemProps> = ({
  name,
  price,
  ImageSRC,
}) => {
  return (
    <Container>
      <ImageContainer>
        <Image source={{ uri: ImageSRC }} />
      </ImageContainer>
      <About>
        <Price>{price}₽</Price>
        <Name>{name}</Name>
      </About>
    </Container>
  )
}

const PurchaseButton = styled

const Image = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-color: white;
  border-radius: 20px;
`

const ImageContainer = styled.View`
  width: 100%;
  height: 170px;
  max-height: 200px;
`

const Price = styled.Text`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 3px;
`

const Name = styled.Text`
  font-size: 11px;
`

const About = styled.View`
  padding: 5px;
  width: 100%;
`

const Container = styled.View`
  padding: 5px;
  display: flex;
  border-radius: 20px;
  margin-bottom: 13px;
  width: 175px;
  flex-direction: column;
  background-color: #f4f4f3;
  align-items: center;
  justify-content: flex-start;
`
