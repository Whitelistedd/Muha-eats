import styled from 'styled-components/native'
import React, { useEffect, useState } from 'react'
import { Category } from './Category/Category'
import { client, urlFor } from 'src/SanityClient'
import { CategoriesProps, category } from './Categories.model'
import { themeType } from 'src/theme'

export const Categories: React.FC<CategoriesProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [categories, setCategories] = useState<category[]>([])

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

const ScrollWrap = styled.ScrollView<{ theme: themeType }>`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.secondaryBg};
  margin-top: 10px;
  margin-left: -10px;
`

const Container = styled.View`
  padding-left: 10px;
`
