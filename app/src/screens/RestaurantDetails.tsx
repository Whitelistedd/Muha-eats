import styled from 'styled-components/native'
import React from 'react'

import { RestaurantDetail } from '../components/RestaurantDetails/RestaurantDetail/RestaurantDetail'
import { BottomNav } from '../components/BottomNav/BottomNav'

export default function RestaurantDetails() {
  return (
    <Container>
      <Wrap>
        <RestaurantDetail />
      </Wrap>
      <BottomNav />
    </Container>
  )
}

const Wrap = styled.View`
  height: 100%;
`

const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.bg};
`
