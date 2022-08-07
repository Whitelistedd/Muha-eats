const fetchRestaurants = async () => {
  let loading = false
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
