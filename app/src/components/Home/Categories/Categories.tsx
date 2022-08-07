import styled from 'styled-components/native'
import React, { useEffect, useState } from 'react'
import { Category } from './Category/Category'
import { client, urlFor } from '../../../SanityClient'
import { CategoriesProps } from './Categories.model'

export const Categories: React.FC<CategoriesProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const categoryQuery = '*[_type == "category"]'

    client
      .fetch(categoryQuery)
      .then((data) => setCategories(data))
      .catch((err) => console.log(err))
  }, [])

  const handleCategoryChange = (category: string) => {
    selectedCategory === category
      ? setSelectedCategory('')
      : setSelectedCategory(category)
  }

  return (
    <Container>
      <ScrollWrap horizontal>
        {categories.map((category, index) => (
          <Category
            handleCategoryChange={handleCategoryChange}
            key={`category-${index}`}
            ImageSRC={urlFor(category.mainImage).url()}
            name={category.name}
          />
        ))}
      </ScrollWrap>
    </Container>
  )
}

const ScrollWrap = styled.ScrollView`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.secondaryBg};
  margin-top: 10px;
  margin-left: -10px;
`

const Container = styled.View`
  padding-left: 10px;
`
