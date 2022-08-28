import styled from 'styled-components/native'
import React from 'react'
import { GoBackProps } from './GoBack.model'

export const GoBack: React.FC<GoBackProps> = ({ navigation }) => {
  return (
    <Container>
      <Button onPress={() => navigation.goBack()}>
        <Arrow source={require('src/assets/icons/left-arrow.png')} />
      </Button>
    </Container>
  )
}

const Arrow = styled.Image`
  width: 30px;
  height: 30px;
`

const Button = styled.TouchableOpacity`
  padding: 5px;
`

const Container = styled.SafeAreaView`
  position: absolute;
  background-color: white;
  top: 0;
  margin: 50px 15px;
  border-radius: 50%;
  z-index: 10;
`
