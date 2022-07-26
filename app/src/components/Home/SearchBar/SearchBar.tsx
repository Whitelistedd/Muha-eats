import styled from 'styled-components/native'
import React, { useState } from 'react'
import {
  AdjustmentsIcon,
  ClockIcon,
  LocationMarkerIcon,
} from 'react-native-heroicons/solid'
import { SearchBarProps } from './SearchBar.model'

export const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  const [SearchTerm, setSearchTerm] = useState('')

  const handleOnChangeSearch = (text) => {
    setSearchTerm(text)
  }

  const handleSearch = () => {
    setSearch(SearchTerm)
  }

  return (
    <Container>
      <Search>
        <SearchSVG size={20} />
        <SearchInput
          value={SearchTerm}
          placeholder="Search"
          placeholderTextColor={'grey'}
          onChangeText={(text) => handleOnChangeSearch(text)}
        />
        <SearchButton onPress={handleSearch}>
          <SearchButtonView>
            <ClockIcon size={13} color="black" />
            <SearchButtonTitle>Search</SearchButtonTitle>
          </SearchButtonView>
        </SearchButton>
      </Search>
      <FilterIcon size={20} color="black" />
    </Container>
  )
}

const FilterIcon = styled(AdjustmentsIcon)`
  margin-left: 5px;
`

const SearchButtonTitle = styled.Text`
  font-size: 12px;
  margin-left: 2px;
`

const SearchButtonView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const SearchButton = styled.TouchableOpacity`
  color: black;
  background-color: white;
  padding: 8px 10px;
  border-radius: 20px;
`

const SearchSVG = styled(LocationMarkerIcon)`
  color: black;
  margin-right: 5px;
`

const SearchInput = styled.TextInput`
  height: 30px;
  flex: 1;
`

const Search = styled.View`
  border-radius: 50px;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  padding: 10px;
  background: rgba(225, 225, 225, 0.9);
`

const Container = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
`
