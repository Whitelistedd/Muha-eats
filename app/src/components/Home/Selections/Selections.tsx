import styled from 'styled-components/native'
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
      <Selection onPress={() => handleFilter('Доставка')} filter={filter}>
        <Delivery filter={filter}>Доставка</Delivery>
      </Selection>
      <Selection onPress={() => handleFilter('Навынос')} filter={filter}>
        <PickUp filter={filter}>Навынос</PickUp>
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
    filter === 'Доставка' ? 'black' : 'white'};
  color: ${({ filter }) => (filter === 'Доставка' ? 'white' : 'black')};
  font-weight: 700;
  padding: 5px 15px;
  font-size: 12px;
`

const PickUp = styled(Delivery)<{ filter: string }>`
  background-color: ${({ filter }) =>
    filter === 'Навынос' ? 'black' : 'white'};
  color: ${({ filter }) => (filter === 'Навынос' ? 'white' : 'black')};
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
