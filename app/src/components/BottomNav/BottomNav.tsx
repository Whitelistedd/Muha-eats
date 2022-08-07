import styled from 'styled-components/native'
import React from 'react'
import {
  HomeIcon,
  ReceiptTaxIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from 'react-native-heroicons/solid'
import { TouchableOpacity } from 'react-native'
import { BottomNavProps } from './BottomNav.model'
import { TouchableHighlight } from 'react-native-gesture-handler'

const BottomNavList = [
  { name: 'Home', icon: <HomeIcon color={'black'} /> },
  { name: 'Orders', icon: <ReceiptTaxIcon color={'black'} /> },
  { name: 'Cart', icon: <ShoppingBagIcon color={'black'} /> },
  { name: 'Account', icon: <UserCircleIcon color={'black'} /> },
]

export const BottomNav: React.FC<BottomNavProps> = ({
  className,
  navigation,
}) => {
  return (
    <Container className={className}>
      {BottomNavList.map((navItem, index) => (
        <TouchableHighlight
          onPress={() => {
            navigation.navigate(`${navItem.name}`)
          }}
          key={`bottom-nav-number-${index}`}
        >
          <NavItem>
            {navItem.icon}
            <Title>{navItem.name}</Title>
          </NavItem>
        </TouchableHighlight>
      ))}
    </Container>
  )
}

const Title = styled.Text``

const NavItem = styled.View`
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
