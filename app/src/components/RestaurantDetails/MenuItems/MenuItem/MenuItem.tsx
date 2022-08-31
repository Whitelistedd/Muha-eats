import styled from 'styled-components/native'
import React, { useEffect, useState } from 'react'
import { FormatedMenuItemType, MenuItemProps } from '../MenuItems.model'
import { AppDispatch, useAppSelector } from 'src/redux/store/store'
import { addProduct, removeProduct } from 'src/redux/Slices/Cart/CartSlice'
import { QuantityView } from 'src/components/QuantityView/QuantityView'

export const MenuItem: React.FC<MenuItemProps> = ({
  id,
  name,
  price,
  ImageSRC,
}) => {
  const [quantity, setQuantity] = useState(0)
  const dispatch = AppDispatch()
  const cartItemsList = useAppSelector((state) => state.cartItems)

  useEffect(() => {
    const getQuantity = () => {
      const item = cartItemsList.find((item) => item.id === id)
      setQuantity(item ? item.quantity : 0)
    }
    getQuantity()
  }, [])

  const handleAddItem = (item: FormatedMenuItemType) => {
    dispatch(addProduct(item))
    setQuantity((prev) => prev + 1)
  }

  const handleRemoveItem = (item: FormatedMenuItemType) => {
    if (quantity !== 0) {
      dispatch(removeProduct(item))
      setQuantity((prev) => prev - 1)
    }
  }

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
        <QuantityView
          price={price}
          handleRemoveItem={handleRemoveItem}
          handleAddItem={handleAddItem}
          name={name}
          id={id}
          ImageSRC={ImageSRC}
          quantity={quantity}
        />
      )}
    </Container>
  )
}

const PriceWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

const Image = styled.Image`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  background-color: white;
`

const Price = styled.Text`
  font-size: 17px;
  margin: 5px 0px;
  padding: 0px 5px;
`

const Name = styled.Text`
  font-size: 16px;
  margin: 5px 0px;
`

const About = styled.View`
  width: 100%;
  margin-bottom: 5px;
`

const Container = styled.View`
  padding: 0px;
  display: flex;
  min-height: 270px;
  border-radius: 17px;
  padding: 8px;
  margin-bottom: 13px;
  width: 165px;
  flex-direction: column;
  background-color: #f4f4f3;
  align-items: center;
  justify-content: space-between;
`
