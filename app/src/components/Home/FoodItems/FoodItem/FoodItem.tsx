import { HeartIcon } from 'react-native-heroicons/outline'
import styled from 'styled-components/native'
import React from 'react'
import { FoodItemProps } from '../FoodItem.model'
import { TouchableOpacity } from 'react-native'

export const FoodItem: React.FC<FoodItemProps> = ({ name, eta, ImageSRC }) => {
  return (
    <TouchableOpacity>
      <Container>
        <ImageWrap>
          <Heart color="white" size={20} />
          <Image source={{ uri: ImageSRC }} />
        </ImageWrap>
        <About>
          <Name>{name}</Name>
          <ETA>{eta}min</ETA>
        </About>
      </Container>
    </TouchableOpacity>
  )
}

const Heart = styled(HeartIcon)`
  position: absolute;
  align-self: flex-end;
  box-shadow: 0px 0px 3px black;
  z-index: 5;
  top: 5px;
  right: 5px;
`

const ETA = styled.Text`
  font-size: 10px;
  color: grey;
`

const Name = styled.Text``

const Image = styled.Image`
  height: 150px;
  width: 100%;
`

const About = styled.View`
  display: flex;
  padding: 10px 0px;
  justify-content: center;
`

const ImageWrap = styled.View`
  display: flex;
  position: relative;
`

const Container = styled.View`
  background-color: ${({ theme }) => theme.secondaryBg};
  flex: 1;
  width: 100%;
  margin-top: 10px;
  padding: 10px 10px 0px 10px;
  overflow: hidden;
`
