import styled from 'styled-components/native'
import React from 'react'

import { BottomNav } from '../../components/BottomNav/BottomNav'
import { OrdersProps } from './Orders.model'
import { themeType } from 'src/theme'

const Orders: React.FC<OrdersProps> = ({ navigation }) => {
  return (
    <Container>
      <Wrap>
        <Nav>
          <BottomNav navigation={navigation} />
        </Nav>
      </Wrap>
    </Container>
  )
}

const Nav = styled.View`
  padding-top: 20px;
`

const Wrap = styled.View<{ theme: themeType }>`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
`

const Container = styled.SafeAreaView<{ theme: themeType }>`
  padding: 0px 10px;
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
`

export default Orders
