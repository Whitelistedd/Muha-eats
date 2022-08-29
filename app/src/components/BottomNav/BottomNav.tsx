import styled from 'styled-components/native'
import React from 'react'
import {
  HomeIcon,
  ReceiptTaxIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from 'react-native-heroicons/solid'
import { BottomNavProps } from './BottomNav.model'
import { themeType } from 'src/theme'
import { TouchableOpacity } from 'react-native'

const BottomNavList = [
  { name: 'Главное', icon: <HomeIcon color={'black'} /> },
  { name: 'Заказы', icon: <ReceiptTaxIcon color={'black'} /> },
  { name: 'Корзина', icon: <ShoppingBagIcon color={'black'} /> },
  { name: 'Личное', icon: <UserCircleIcon color={'black'} /> },
]

export const BottomNav: React.FC<BottomNavProps> = ({
  className,
  navigation,
}) => {
  return (
    <Container className={`${className}`}>
      {BottomNavList.map((navItem, index) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(`${navItem.name}`)
          }}
          key={`bottom-nav-number-${index}`}
        >
          <NavItem>
            {navItem.icon}
            <Title>{navItem.name}</Title>
          </NavItem>
        </TouchableOpacity>
      ))}
    </Container>
  )
}

const Title = styled.Text``

const NavItem = styled.View<{ theme: themeType }>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.primaryFontColor};
`

const Container = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  background-color: ${({ theme }) => theme.bg};
`
