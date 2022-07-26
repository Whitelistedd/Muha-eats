import React, { useState } from 'react'
import styled from 'styled-components'
import { useEffect } from 'react'
import { YELP_KEY } from '@env'
import axios from 'axios'

import { SearchBar } from '../components/Home/SearchBar/SearchBar'
import { Categories } from '../components/Home/Categories/Categories'
import { BottomNav } from '../components/BottomNav/BottomNav'
import { FoodItems } from '../components/Home/FoodItems/FoodItems'
import { Loading } from '../components/Loading/Loading'
import { foodItemType } from '../components/Home/FoodItems/FoodItem.model'

export default function Home({ navigation }) {
  const [foodItems, setFoodItems] = useState<foodItemType[]>([])
  const [search, setSearch] = useState('NYC')
  const [filter, setFilter] = useState('delivery')
  const [category, setCategory] = useState('FastFood')
  const [loading, setLoading] = useState(false)

  const fetchRestaurants = async () => {
    try {
      setLoading(true)
      const response = await axios.get(
        `https://api.yelp.com/v3/businesses/search?term=${category}&location=${
          search ? search : 'NYC'
        }`,
        { headers: { Authorization: `Bearer ${YELP_KEY}` } }
      )
      if (!response) return
      setLoading(false)
      setFoodItems(
        response.data.businesses.filter((business) =>
          business.transactions.includes(filter)
        )
      )
    } catch (err) {
      console.log(err.response)
    }
  }

  const handleFilter = (filterType: string) => {
    setFilter(filterType)
  }

  useEffect(() => {
    fetchRestaurants()
    console.log(category.replace(' ', ''))
  }, [search, filter, category])

  return (
    <Container>
      <Wrap>
        <Header>
          <Selections>
            <Selection onPress={() => handleFilter('delivery')} filter={filter}>
              <Delivery filter={filter}>Delivery</Delivery>
            </Selection>
            <Selection onPress={() => handleFilter('pickup')} filter={filter}>
              <PickUp filter={filter}>PickUp</PickUp>
            </Selection>
          </Selections>
          <SearchBarWrap>
            <SearchBar setSearch={setSearch} search={search} />
          </SearchBarWrap>
        </Header>
        <FoodContainer>
          <Categories setCategory={setCategory} category={category} />
          {!loading ? <FoodItems foodItems={foodItems} /> : <Loading />}
        </FoodContainer>
      </Wrap>
      <BottomNav />
    </Container>
  )
}

const FoodContainer = styled.ScrollView`
  display: flex;
  max-height: 100%;
  margin-bottom: 60px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bg};
`

const SearchBarWrap = styled.View`
  padding-bottom: 15px;
`

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

const Selections = styled.View`
  display: flex;
  flex-direction: row;
  margin-right: -10px;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const Header = styled.View`
  background-color: ${({ theme }) => theme.secondaryBg};
`

const Wrap = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
`

const Container = styled.SafeAreaView`
  padding: 0px 10px;
  height: 100%;
  flex: 1;
  background-color: #ededed;

  * {
    box-sizing: border-box;
  }
`
