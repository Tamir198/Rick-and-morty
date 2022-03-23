import React from 'react'
import Styles from './Character.module.css'

export const Character = (props) => {
  const data = props.character;
  return (
    <div className={Styles.character__container}>
      <div>
        <h1>{data.name}</h1>
        <h2>Character number {data.id}</h2>
        <h3>Status: {data.status}</h3>
        <h3>Species {data.species}</h3>
        <h3>Origin {data.origin}</h3>
      </div>
      <img className={Styles.character__image} src={data.image} alt="The character image" />
    </div>
  )
}

