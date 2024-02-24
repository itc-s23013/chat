import React from 'react'

const Recipe = props => {
  console.log(props)
  // props.ingredients が存在しない場合に空配列を代入
  const ingredients = props.ingredients || []

  return (
    <div>
      <h1>{props.title}</h1>
      <ol>
        {ingredients.map(ingredient => (
          <li key={ingredient.id}>{ingredient.text}</li>
        ))}
      </ol>
      <p>{props.calories} cal</p>
      <img src={props.image} alt='' />
    </div>
  )
}

export default Recipe
