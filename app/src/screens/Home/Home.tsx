import React, { useState } from 'react'
import styled from 'styled-components/native'
import { useEffect } from 'react'

import { SearchBar } from '../../components/Home/SearchBar/SearchBar'
import { Categories } from '../../components/Home/Categories/Categories'
import { BottomNav } from '../../components/BottomNav/BottomNav'
import { RestaurantItems } from '../../components/Home/RestaurantItems/RestaurantItems'
import { Loading } from '../../components/Loading/Loading'
import { restaurantsType } from '../../components/Home/RestaurantItems/RestaurantItems.model'
import { Selections } from '../../components/Home/Selections/Selections'
import { client } from '../../SanityClient'
import { RefreshControl } from 'react-native'
import { HomeProps } from './Home.model'
import { themeType } from 'src/theme'

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState<restaurantsType[]>([])
  const [filteredRestaurants, setFilteredRestaurants] = useState<
    restaurantsType[]
  >([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('Доставка')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [fetching, setFetching] = useState(false)

  const fetchRestaurants = async () => {
    setFetching(true)
    try {
      let Restaurantquery =
        "*[_type == 'restaurants'] {name, mainImage,eta,menuItems,categories}"
      const response = await client.fetch(Restaurantquery)
      setRestaurants(response)
      setFilteredRestaurants(
        selectedCategory
          ? restaurants.filter((restaurant) =>
              search
                ? restaurant.categories.includes(selectedCategory) &&
                  restaurant.name.includes(search)
                : restaurant.categories.includes(selectedCategory)
            )
          : response
      )
      setFetching(false)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchRestaurants()
  }, [filter, selectedCategory])

  const refetch = () => {
    fetchRestaurants()
  }

  useEffect(() => {
    setFilteredRestaurants(
      restaurants.filter((restaurant) => restaurant.name.includes(search))
    )
  }, [search])

  return (
    <Container>
      <Wrap>
        <Header>
          <Selections filter={filter} setFilter={setFilter} />
          <SearchBarWrap>
            <SearchBar setSearch={setSearch} />
          </SearchBarWrap>
        </Header>
        <Body
          refreshControl={
            <RefreshControl refreshing={fetching} onRefresh={refetch} />
          }
        >
          <FoodContainer>
            <Categories
              setSelectedCategory={setSelectedCategory}
              selectedCategory={selectedCategory}
            />
            {!fetching ? (
              <RestaurantItems
                navigation={navigation}
                restaurants={filteredRestaurants}
              />
            ) : (
              <Loading />
            )}
          </FoodContainer>
        </Body>
        <Nav>
          <BottomNav navigation={navigation} />
        </Nav>
      </Wrap>
    </Container>
  )
}

const Nav = styled.View`
  padding-top: 20px;
`

const FoodContainer = styled.View`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  background-color: transparent;
`

const Body = styled.ScrollView<{ theme: themeType }>`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.secondaryBg};
`

const SearchBarWrap = styled.View`
  padding-bottom: 15px;
`

const Header = styled.View<{ theme: themeType }>`
  background-color: ${({ theme }) => theme.secondaryBg};
`

const Wrap = styled.View<{ theme: themeType }>`
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
`

const Container = styled.SafeAreaView<{ theme: themeType }>`
  padding: 0px 10px;
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
`

export default Home
