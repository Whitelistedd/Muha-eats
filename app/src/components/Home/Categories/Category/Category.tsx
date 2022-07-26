import styled from 'styled-components'
import React from 'react'
import { CategoryProps } from '../Categories.model'

export const Category: React.FC<CategoryProps> = ({
  ImageSRC,
  name,
  handleCategoryChange,
}) => {
  return (
    <Container onPress={() => handleCategoryChange(name)}>
      <Wrap>
        <Image source={{ uri: ImageSRC }} />
        <Name>{name}</Name>
      </Wrap>
    </Container>
  )
}

const Name = styled.Text`
  font-weight: 700;
`

const Image = styled.Image`
  min-height: 50px;
  width: 50px;
`

const Wrap = styled.View`
  margin-left: 10px;
  padding: 5px;
  display: flex;
  align-items: center;
`

const Container = styled.TouchableOpacity``
