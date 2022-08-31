import styled from 'styled-components/native'
import React from 'react'
import { PopUpButtonProps } from './PopUpButton.model'

export const PopUpButton: React.FC<PopUpButtonProps> = ({
  navigation,
  navigateTo,
  textList,
  style,
  onPress,
}) => {
  return (
    <Container
      style={{ ...style }}
      onPress={() => {
        navigateTo ? navigation.navigate(navigateTo) : onPress()
      }}
    >
      {textList.map((text, index) => (
        <Text key={text + index}>{text}</Text>
      ))}
    </Container>
  )
}

const Text = styled.Text`
  color: white;
`

const Container = styled.TouchableOpacity`
  background-color: green;
  height: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin: 5px 10px 0px 10px;
  z-index: 0;
`
