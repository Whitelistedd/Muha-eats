import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import Home from 'src/screens/Home/Home'
import RestaurantDetails from 'src/screens/RestaurantDetails/RestaurantDetails'
import Orders from 'src/screens/Orders/Orders'
import Cart from 'src/screens/Cart/Cart'

export default function RootNavigation() {
  const Stack = createStackNavigator()

  const screenOptions = {
    headerShown: false,
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Stack.Screen name="Главное" component={Home} />
        <Stack.Screen name="Заказы" component={Orders} />
        <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} />
        <Stack.Screen name="Корзина" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
