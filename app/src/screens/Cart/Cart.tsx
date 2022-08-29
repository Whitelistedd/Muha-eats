import styled from 'styled-components/native'
import React from 'react'
import { themeType } from 'src/theme'
import { CartProps } from './Cart.model'
import { CartItems } from 'src/components/Cart/CartItems/CartItems'
import { useAppSelector } from 'src/redux/store/store'
import Lottie from 'lottie-react-native'
import { Text } from 'react-native'
import { GoBack } from 'src/components/GoBack/GoBack'
import { PopUpButton } from 'src/components/PopUpButton/PopUpButton'
import { DeliveryMethods } from 'src/components/Cart/DeliveryMethods/DeliveryMethods'

const Cart: React.FC<CartProps> = ({ navigation }) => {
  const cartQuantity = useAppSelector((state) => state.quantity)
  const cartTotal = useAppSelector((state) => state.total)
  const SelectedDeliveryMethod = useAppSelector((state) => state.deliveryMethod)

  return (
    <Container>
      <Wrap>
        <GoBack navigation={navigation} />
        <NavBar>
          <Title>Корзино</Title>
        </NavBar>
        {cartQuantity !== 0 ? (
          <>
            <ScrollView>
              <SubTitle>Заказ</SubTitle>
              <CartItems />
              <CostWrap>
                <Cost>{SelectedDeliveryMethod}</Cost>
                <Cost>{SelectedDeliveryMethod === 'Доставка' ? 500 : 0}₽</Cost>
              </CostWrap>
              <SubTitle>Получениe</SubTitle>
              <DeliveryMethods />
            </ScrollView>
            <PopUpButton
              style={{ backgroundColor: '#2fb90d' }}
              textList={['Оформить Доставку', `${cartTotal} ₽`]}
              navigateTo={'Корзина'}
              navigation={navigation}
            />
          </>
        ) : (
          <>
            <EmptyCartAnimation>
              <Lottie
                source={require('src/assets/animation/emptyBox.json')}
                autoPlay
                loop
              />
            </EmptyCartAnimation>
            <Title>Корзино пуста</Title>
            <EmptyCartButton onPress={() => navigation.navigate('Главное')}>
              <EmptyCartText>Вернуться к выбору товаров </EmptyCartText>
            </EmptyCartButton>
          </>
        )}
      </Wrap>
    </Container>
  )
}

const Cost = styled.Text`
  font-size: 17px;
`

const CostWrap = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: #bdbdbd5a;
  border-width: 0px;
  border-bottom-width: 2px;
  margin-bottom: 10px;
  padding-bottom: 10px;
`

const SubTitle = styled.Text`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 20px;
`

const Title = styled.Text`
  font-weight: 700;
  font-size: 18px;
  width: 100%;
  text-align: center;
`

const NavBar = styled.View`
  display: flex;
  align-items: center;
  padding-bottom: 30px;
`

const EmptyCartText = styled.Text`
  text-align: center;
  flex: 1;
`

const EmptyCartButton = styled.TouchableOpacity`
  background-color: #8080802d;
  height: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 10px 0px 10px;
`

const EmptyCartAnimation = styled.View`
  flex: 1;
  display: flex;
`

const ScrollView = styled.ScrollView`
  padding: 0 15px;
`

const Wrap = styled.View`
  height: 100%;
  flex: 1;
`

const Container = styled.SafeAreaView<{ theme: themeType }>`
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
`

export default Cart
