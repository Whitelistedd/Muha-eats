import React from 'react'
import styled from 'styled-components/native'

export const OrderButton: React.FC = () => {
  return (
    <Container>
      <PriceWrap>
        <Price>1324 ₽</Price>
        <Total>Итого</Total>
      </PriceWrap>
      <Button></Button>
    </Container>
  )
}

const Button = styled.View``

const Total = styled.Text``

const Price = styled.Text`
  font-size: 25px;
`

const PriceWrap = styled.View``

const Container = styled.View`
  margin-top: auto;
  bottom: 0;
  z-index: 1000;
`
