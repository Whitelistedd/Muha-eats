import React from 'react'
import styled from 'styled-components/native'
import { QuantityButtonProps } from '../QuantityView.model'

export const QuantityButton: React.FC<QuantityButtonProps> = ({
  id,
  name,
  price,
  ImageSRC,
  buttonStyle,
  type,
  handleAddItem,
  handleRemoveItem,
}) => {
  return (
    <Container
      onPress={() => {
        type === 'remove'
          ? handleRemoveItem({ id, name, price, ImageSRC })
          : handleAddItem({ id, name, price, ImageSRC })
      }}
    >
      <QuantityWrap buttonStyle={buttonStyle}>
        <QuantityIcons
          buttonStyle={buttonStyle}
          source={
            type === 'remove'
              ? require('src/assets/icons/minus.png')
              : require('src/assets/icons/add.png')
          }
        />
      </QuantityWrap>
    </Container>
  )
}

const QuantityIcons = styled.Image<{
  buttonStyle?: { width: string; height: string; margin: string }
}>`
  width: ${(props) => (props.buttonStyle ? props.buttonStyle.width : '20px')};
  height: ${(props) => (props.buttonStyle ? props.buttonStyle.height : '16px')};
`

const QuantityWrap = styled.View<{ buttonStyle?: { padding: string } }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: ${(props) =>
    props.buttonStyle && props.buttonStyle.padding
      ? props.buttonStyle.padding
      : '16px'};
  border-radius: 17px;
`

const Container = styled.TouchableOpacity``
