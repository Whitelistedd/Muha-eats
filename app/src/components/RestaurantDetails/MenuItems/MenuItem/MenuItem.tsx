import styled from 'styled-components/native'
import React from 'react'
import { MenuItemProps } from '../MenuItems.model'
import { AppDispatch } from 'src/redux/store/store'
import { addProduct } from 'src/redux/Slices/Cart/CartSlice'

export const MenuItem: React.FC<MenuItemProps> = ({
  id,
  name,
  price,
  ImageSRC,
}) => {
  const dispatch = AppDispatch()

  const handleAddItem = (item) => {
    dispatch(addProduct(item))
  }

  console.log(id)

  return (
    <Container>
      <About>
        <Image source={{ uri: ImageSRC }} />
        <Price>{price}₽</Price>
        <Name>{name}</Name>
      </About>
      <TouchableOpacity>
        <Button>
          <AddIcon source={require('src/assets/icons/add.png')} />
          <Text>Добавить</Text>
        </Button>
      </TouchableOpacity>
    </Container>
  )
}

const AddIcon = styled.Image`
  width: 13px;
  height: 13px;
  margin-right: 5px;
`

const Text = styled.Text`
  font-size: 13px;
  text-align: center;
`

const Button = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const TouchableOpacity = styled.TouchableOpacity`
  width: 100%;
  padding: 5px;
  background-color: white;
  border-radius: 17px;
`

const Image = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 10px;
  background-color: white;
  border-radius: 17px;
`

const Price = styled.Text`
  font-size: 14px;
  font-weight: 700;
  margin: 5px 0px;
  padding: 0px 5px;
`

const Name = styled.Text`
  font-size: 11px;
  padding: 0px 5px;
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
