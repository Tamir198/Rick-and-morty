import React from 'react'

export const Character = (props) => {
  return (
    <div className="character__container">
      <h4>{props.name}</h4>
      <p>Character number {props.id}</p>
      <p>status {props.status}</p>
      <p>species {props.species}</p>
      <p>origin {props.origin}</p>
      <img src={props.image} alt="The character image" />
    </div>
  )
}
