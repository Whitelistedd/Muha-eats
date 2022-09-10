import React from 'react'
import { ChevronRightIcon } from 'react-native-heroicons/solid'
import styled from 'styled-components/native'

export const PaymentMethods: React.FC = () => {
  return (
    <Container>
      <IconWrap>
        <Image source={require('src/assets/images/sbp.png')} />
      </IconWrap>
      <PaymentName>СБП</PaymentName>
      <StyledChevronRightIcon />
    </Container>
  )
}

const StyledChevronRightIcon = styled(ChevronRightIcon)`
  color: black;
  margin-left: auto;
`

const PaymentName = styled.Text`
  font-size: 15px;
  font-weight: 600;
`

const Image = styled.Image`
  width: 20px;
  height: 25px;
  background-color: white;
`

const IconWrap = styled.View`
  background-color: white;
  padding: 5px 15px;
  border-radius: 5px;
  margin-right: 10px;
`

const Container = styled.View`
  margin-top: auto;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`
