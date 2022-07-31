import styled from 'styled-components'
import React from 'react'
import { SelectionsProps } from './Selections.model'

export const Selections: React.FC<SelectionsProps> = ({
  setFilter,
  filter,
}) => {
  const handleFilter = (filterType: string) => {
    setFilter(filterType)
  }

  return (
    <Container>
      <Selection onPress={() => handleFilter('delivery')} filter={filter}>
        <Delivery filter={filter}>Delivery</Delivery>
      </Selection>
      <Selection onPress={() => handleFilter('pickup')} filter={filter}>
        <PickUp filter={filter}>PickUp</PickUp>
      </Selection>
    </Container>
  )
}

const Selection = styled.TouchableOpacity<{ filter: string }>`
  border-radius: 50px;
  overflow: hidden;
  display: flex;
  text-align: center;
  align-items: center;
  margin-left: 10px;
  justify-content: center;
`

const Delivery = styled.Text<{ filter: string }>`
  background-color: ${({ filter }) =>
    filter === 'delivery' ? 'black' : 'white'};
  color: ${({ filter }) => (filter === 'delivery' ? 'white' : 'black')};
  font-weight: 700;
  padding: 5px 15px;
  font-size: 12px;
`

const PickUp = styled(Delivery)<{ filter: string }>`
  background-color: ${({ filter }) =>
    filter === 'pickup' ? 'black' : 'white'};
  color: ${({ filter }) => (filter === 'pickup' ? 'white' : 'black')};
`

const Container = styled.View`
  display: flex;
  flex-direction: row;
  margin-right: -10px;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
`
