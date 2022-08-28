import React from 'react'
import styled from 'styled-components/native'
import { QuantityButton } from './QuantityButton/QuantityButton'
import { QuantityViewProps } from './QuantityView.model'

export const QuantityView: React.FC<QuantityViewProps> = ({
  id,
  name,
  price,
  ImageSRC,
  quantity,
  handleAddItem,
  handleRemoveItem,
  style,
  buttonStyle,
}) => {
  return (
    <QuantityContainer style={{ ...style }}>
      <QuantityButton
        type="remove"
        handleRemoveItem={handleRemoveItem}
        handleAddItem={handleAddItem}
        name={name}
        buttonStyle={buttonStyle}
        id={id}
        price={price}
        ImageSRC={ImageSRC}
      />
      <Quantity buttonStyle={buttonStyle}>{quantity}</Quantity>
      <QuantityButton
        type="add"
        handleRemoveItem={handleRemoveItem}
        handleAddItem={handleAddItem}
        name={name}
        buttonStyle={buttonStyle}
        id={id}
        price={price}
        ImageSRC={ImageSRC}
      />
    </QuantityContainer>
  )
}

const Quantity = styled.Text<{
  buttonStyle?: { margin: string }
}>`
  font-size: 17px;
  margin: 5px 0px;
  padding: 0px 5px;
  margin: ${(props) => (props.buttonStyle ? props.buttonStyle.margin : '0px')};
`

const QuantityContainer = styled.View`
  width: 100%;
  padding: 5px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 17px;
`
