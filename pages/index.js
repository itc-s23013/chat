import React, { useState, useEffect } from 'react'

import Recipe from './Recipe'
const Edamam = () => {
  const APPLICATION_ID = '43df669e'
  const APPLICATION_KEY = '9c55d3e0def0a4217fc88980063d2985'

  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('banana', 'orange')
  const [recipes, setRecipes] = useState([])

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APPLICATION_ID}&app_key=${APPLICATION_KEY}`
    )
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    getRecipes()
  }, [query])

  return (
    <>
      <>下に入力</>
      <form onSubmit={getSearch}>
        <input type='text' value={search} onChange={updateSearch} />
        <button type='submit'>検索</button>
      </form>
      <div>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.title}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </>
  )
}

export default Edamam
