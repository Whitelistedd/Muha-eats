import styled from 'styled-components/native'
import React from 'react'
import {
  HomeIcon,
  ReceiptTaxIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserCircleIcon,
} from 'react-native-heroicons/solid'
import { TouchableOpacity } from 'react-native'

export const BottomNav: React.FC = () => {
  return (
    <Container>
      <TouchableOpacity>
        <NavItem>
          <HomeIcon size={30} color={'black'} />
          <Title>Home</Title>
        </NavItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <NavItem>
          <SearchIcon size={30} color={'black'} />
          <Title>Browse</Title>
        </NavItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <NavItem>
          <ShoppingBagIcon size={30} color={'black'} />
          <Title>Grocery</Title>
        </NavItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <NavItem>
          <ReceiptTaxIcon size={30} color={'black'} />
          <Title>Orders</Title>
        </NavItem>
      </TouchableOpacity>
      <TouchableOpacity>
        <NavItem>
          <UserCircleIcon size={30} color={'black'} />
          <Title>Account</Title>
        </NavItem>
      </TouchableOpacity>
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
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 30px;
  padding: 5px 10px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.bg};
`
