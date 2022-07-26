import styled from 'styled-components'
import React from 'react'

import { DeviderProps } from './Devider.model'

export const Devider: React.FC<DeviderProps> = ({ height, color }) => {
  return <Container height={height} color={color}></Container>
}

const Container = styled.View<{ height: number; color?: string }>`
  min-height: ${({ height }) => (height ? `${height}` : '10')}px;
  background-color: ${({ color }) => (color ? color : 'black')};
`
