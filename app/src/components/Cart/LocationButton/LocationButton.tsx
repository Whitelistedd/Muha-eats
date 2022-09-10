import React from 'react'
import { ChevronRightIcon, HomeIcon } from 'react-native-heroicons/solid'
import styled from 'styled-components/native'
import { LocationButtonProps } from './LocationButton.model'

export const LocationButton: React.FC<LocationButtonProps> = ({ style }) => {
  return (
    <Container style={{ ...style }}>
      <StyledHomeIcon />
      <Details>
        <Location>Красная площадь, 9</Location>
        <Description>Укажите детали для курьера</Description>
      </Details>
      <StyledChevronRightIcon />
    </Container>
  )
}

const StyledChevronRightIcon = styled(ChevronRightIcon)`
  margin-left: auto;
  color: black;
`

const Description = styled.Text`
  font-size: 13px;
`

const Location = styled.Text`
  font-weight: 600;
  font-size: 17px;
`

const Details = styled.View`
  margin-left: 20px;
`

const StyledHomeIcon = styled(HomeIcon)`
  color: black;
`

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`
