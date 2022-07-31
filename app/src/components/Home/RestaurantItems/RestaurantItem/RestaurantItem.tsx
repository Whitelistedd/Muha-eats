import { HeartIcon } from 'react-native-heroicons/outline'
import styled from 'styled-components/native'
import React from 'react'
import { RestaurantItemProps } from '../RestaurantItems.model'

export const RestaurantItem: React.FC<RestaurantItemProps> = ({
  name,
  ImageSRC,
}) => {
  return (
    <Container>
      <ImageWrap>
        <HeartWrap>
          <Heart color="white" size={20} />
        </HeartWrap>
        <Image source={{ uri: ImageSRC }} />
      </ImageWrap>
      <About>
        <Name>{name}</Name>
      </About>
    </Container>
  )
}

const Heart = styled(HeartIcon)``

const HeartWrap = styled.View`
  position: absolute;
  align-self: flex-end;
  box-shadow: 0px 0px 3px black;
  z-index: 5;
  top: 10px;
  padding: 5px;
  border-radius: 50%;
  background-color: #0f0f0fae;
  right: 10px;
`

const Name = styled.Text`
  font-size: 20px;
  font-weight: 700;
`

const Image = styled.Image`
  min-height: 150px;
  width: 100%;
  border-radius: 16px;
`

const About = styled.View`
  display: flex;
  padding: 5px 0px;
  justify-content: center;
`

const ImageWrap = styled.View`
  display: flex;
  position: relative;
`

const Container = styled.View`
  background-color: ${({ theme }) => theme.secondaryBg};
  flex: 1;
  width: 90%;
  height: 100%;
  min-height: 180px;
  border-radius: 16px;
  margin: 10px 0px;
  margin-left: auto;
  margin-right: auto;
`