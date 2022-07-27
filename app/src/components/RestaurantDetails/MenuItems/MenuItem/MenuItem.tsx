import styled from 'styled-components/native'
import React from 'react'

export const MenuItem: React.FC = () => {
  return (
    <Container>
      <About>
        <Name>Lasagna</Name>
        <Description>with butter,lettuce.</Description>
        <Price>$20</Price>
      </About>
      <Image source={require('../../../../assets/images/bg2.jpg')} />
    </Container>
  )
}

const Image = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 10px;
`

const Price = styled.Text`
  font-size: 12px;
`

const Description = styled.Text`
  font-size: 12px;
  margin-bottom: 10px;
`

const Name = styled.Text`
  font-weight: 700;
  margin-bottom: 10px;
`

const About = styled.View``

const Container = styled.View`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
