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
  width: 20px;
  height: 20px;
`

const Button = styled.TouchableOpacity``

const Container = styled.SafeAreaView`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 0;
  margin: 1px 15px;
  border-radius: 50%;
  z-index: 10;
`
