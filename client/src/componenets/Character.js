import React from 'react'

export const Character = (props) => {
  return (
    <div className="character__container">
      <h1>{props.name}</h1>
      <h2>Character number {props.id}</h2>
      <h3>Status: {props.status}</h3>
      <h3>Species {props.species}</h3>
      <h3>Origin {props.origin}</h3>
      <img src={props.image} alt="The character image" />
    </div>
  )
}
