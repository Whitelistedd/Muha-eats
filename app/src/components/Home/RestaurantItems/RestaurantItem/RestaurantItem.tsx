import { HeartIcon } from 'react-native-heroicons/outline'
import styled from 'styled-components/native'
import React from 'react'
import { RestaurantItemProps } from '../RestaurantItems.model'
import { themeType } from 'src/theme'

export const RestaurantItem: React.FC<RestaurantItemProps> = ({
  name,
  ImageSRC,
}) => {
  return (
    <Container
      style={[
        {
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,
        },
      ]}
    >
      <Wrap>
        <ImageWrap>
          <HeartWrap>
            <Heart color="white" size={20} />
          </HeartWrap>
          <Image source={{ uri: ImageSRC }} />
        </ImageWrap>
        <About>
          <Name>{name}</Name>
        </About>
      </Wrap>
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
`

const About = styled.View`
  display: flex;
  padding: 15px 10px;
  justify-content: center;
`

const ImageWrap = styled.View`
  display: flex;
  position: relative;
`

const Wrap = styled.View<{ theme: themeType }>`
  background-color: ${({ theme }) => theme.secondaryBg};
  flex: 1;
  width: 90%;
  height: 100%;
  min-height: 180px;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0px;
  margin-left: auto;
  margin-right: auto;
`

const Container = styled.View``
