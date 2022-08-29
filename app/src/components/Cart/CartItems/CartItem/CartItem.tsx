import React, { useEffect, useState } from 'react'
import { QuantityView } from 'src/components/QuantityView/QuantityView'
import { FormatedMenuItemType } from 'src/components/RestaurantDetails/MenuItems/MenuItems.model'
import { addProduct, removeProduct } from 'src/redux/Slices/Cart/CartSlice'
import { AppDispatch, useAppSelector } from 'src/redux/store/store'
import styled from 'styled-components/native'
import { CartItemProps } from '../CartItems.model'

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  imageSRC,
  price,
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
    dispatch(removeProduct(item))
    setQuantity((prev) => prev - 1)
  }

  return (
    <Container>
      <FoodImage source={{ uri: imageSRC }} />
      <Details>
        <About>
          <Name>{name}</Name>
          <Price>{price * quantity}₽</Price>
        </About>
        <QuantityView
          buttonStyle={{
            width: '23px',
            height: '23px',
            padding: '4px',
            margin: '8px',
            borderRadius: '5px',
          }}
          style={{ justifyContent: 'flex-start' }}
          price={price}
          handleRemoveItem={handleRemoveItem}
          handleAddItem={handleAddItem}
          name={name}
          id={id}
          ImageSRC={imageSRC}
          quantity={quantity}
        />
      </Details>
    </Container>
  )
}

const Name = styled.Text`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
`

const Price = styled.Text`
  display: flex;
  flex-wrap: wrap;
  font-size: 17px;
`

const About = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`

const Details = styled.View`
  margin-left: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const FoodImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 15px;
`

const Container = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  flex: 1;
  padding-bottom: 20px;
  border: #bdbdbd5a;
  border-width: 0px;
  border-bottom-width: 2px;
`
