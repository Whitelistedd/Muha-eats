import styled from 'styled-components/native'
import LottieView from 'lottie-react-native'
import React from 'react'

export const Loading: React.FC = () => {
  return (
    <Container>
      <StyledLottieView
        source={require('../../assets/animation/loading.json')}
        autoPlay
        loop
      />
    </Container>
  )
}

const StyledLottieView = styled(LottieView)`
  width: 200px;
`

const Container = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`
