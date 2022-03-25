import React from 'react'
import Styles from './Character.module.css'

 const Character = (props) => {
  const {name, id, status, species, origin, image} = props.character;

  return (
    <div className={Styles.character__container}>
      <div>
        <h1>{name}</h1>
        <h2>Character number {id}</h2>
        <h3>Status: {status}</h3>
        <h3>Species {species}</h3>
        <h3>Origin {origin}</h3>
      </div>
      <img className={Styles.character__image} src={image} alt="The character image" />
    </div>
  )
}

export default Character;

