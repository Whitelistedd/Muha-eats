import styled from 'styled-components/native'
import React, { useEffect, useState } from 'react'
import { MenuItemProps, MenuItemType } from '../MenuItems.model'
import { AppDispatch, useAppSelector } from 'src/redux/store/store'
import { addProduct, removeProduct } from 'src/redux/Slices/Cart/CartSlice'

export const MenuItem: React.FC<MenuItemProps> = ({
  id,
  name,
  price,
  ImageSRC,
}) => {
  const dispatch = AppDispatch()
  const cartItems = useAppSelector((state) => state.cartItems)
  const [quantity, setQauntity] = useState(0)

  const handleAddItem = (item: MenuItemType) => {
    dispatch(addProduct(item))
    setQauntity((prev) => prev + 1)
  }

  const handleRemoveItem = (item: MenuItemType) => {
    if (quantity !== 0) {
      dispatch(removeProduct(item))
      setQauntity((prev) => prev - 1)
    }
  }

  useEffect(() => {
    console.log(cartItems)
  }, [cartItems])

  return (
    <Container>
      <About>
        <Image source={{ uri: ImageSRC }} />
        <Name>{name}</Name>
      </About>
      {quantity === 0 ? (
        <AddItemButton
          onPress={() => {
            handleAddItem({ id, name, price, ImageSRC })
          }}
        >
          <PriceWrap>
            <Price>{price} ₽</Price>
          </PriceWrap>
        </AddItemButton>
      ) : (
        <QuantityContainer>
          <QuantityButton
            onPress={() => {
              handleRemoveItem({ id, name, price, ImageSRC })
            }}
          >
            <QuantityWrap>
              <QuantityIcons source={require('src/assets/icons/minus.png')} />
            </QuantityWrap>
          </QuantityButton>
          <Quantity>{quantity}</Quantity>
          <QuantityButton
            onPress={() => {
              handleAddItem({ id, name, price, ImageSRC })
            }}
          >
            <QuantityWrap>
              <QuantityIcons source={require('src/assets/icons/add.png')} />
            </QuantityWrap>
          </QuantityButton>
        </QuantityContainer>
      )}
    </Container>
  )
}

const QuantityIcons = styled.Image`
  width: 20px;
  height: 16px;
`

const PriceWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const QuantityWrap = styled(PriceWrap)`
  background-color: white;
  padding: 16px;
  border-radius: 17px;
`

const AddItemButton = styled.TouchableOpacity`
  width: 100%;
  padding: 5px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 17px;
`

const QuantityButton = styled.TouchableOpacity``

const Image = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 10px;
  background-color: white;
  border-radius: 17px;
`

const Price = styled.Text`
  font-size: 17px;
  margin: 5px 0px;
  padding: 0px 5px;
`

const Quantity = styled(Price)``

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

const Name = styled.Text`
  padding: 0px 5px;
  font-size: 14px;
  margin: 5px 0px;
`

const About = styled.View`
  width: 100%;
  margin-bottom: 5px;
`

const Container = styled.View`
  padding: 0px;
  display: flex;
  border-radius: 17px;
  padding: 5px;
  margin-bottom: 13px;
  width: 175px;
  flex-direction: column;
  background-color: #f4f4f3;
  align-items: center;
  justify-content: space-between;
`
