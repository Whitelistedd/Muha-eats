import React, { useState } from 'react'
import styled from 'styled-components/native'
import { useEffect } from 'react'

import { SearchBar } from '../components/Home/SearchBar/SearchBar'
import { Categories } from '../components/Home/Categories/Categories'
import { BottomNav } from '../components/BottomNav/BottomNav'
import { RestaurantItems } from '../components/Home/RestaurantItems/RestaurantItems'
import { Loading } from '../components/Loading/Loading'
import { restaurantsType } from '../components/Home/RestaurantItems/RestaurantItems.model'
import { Selections } from '../components/Home/Selections/Selections'
import { client } from '../SanityClient'

export default function Home({ navigation }) {
  const [restaurants, setRestaurants] = useState<restaurantsType[]>([])
  const [search, setSearch] = useState('NYC')
  const [filter, setFilter] = useState('delivery')
  const [category, setCategory] = useState('FastFood')
  const [fetching, setFetching] = useState(false)

  useEffect(() => {
    setFetching(true)
    const fetchRestaurants = async () => {
      try {
        let Restaurantquery =
          "*[_type == 'restaurants'] {name, mainImage,eta,menuItems,categories}"
        const response = await client.fetch(Restaurantquery)
        setRestaurants(
          response.filter((data) => data.categories.includes(category))
        )
        setFetching(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchRestaurants()
  }, [search, filter, category])

  return (
    <Container>
      <Wrap>
        <Header>
          <Selections filter={filter} setFilter={setFilter} />
          <SearchBarWrap>
            <SearchBar setSearch={setSearch} search={search} />
          </SearchBarWrap>
        </Header>
        <Body>
          <FoodContainer>
            <Categories setCategory={setCategory} category={category} />
            {!fetching ? (
              <RestaurantItems
                navigation={navigation}
                restaurants={restaurants}
              />
            ) : (
              <Loading />
            )}
          </FoodContainer>
        </Body>
        <BottomNav />
      </Wrap>
    </Container>
  )
}

const FoodContainer = styled.ScrollView`
  display: flex;
  max-height: 100%;
  flex-direction: column;
  background-color: transparent;
`

const Body = styled.ScrollView`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.secondaryBg};
`

const SearchBarWrap = styled.View`
  padding-bottom: 15px;
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
  background-color: ${({ theme }) => theme.bg};
`
