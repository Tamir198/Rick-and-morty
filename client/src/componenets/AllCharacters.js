import React, { useEffect, useState } from 'react'
import Character from './Character';
import CharacterModel from '../models/CharacterModel'
import Styles from './AllCharacters.module.css'

import axios from 'axios';

const AllCharacters = () => {
  const [charctersData, setCharctersData] = useState([]);
  const pageNumber = 1;

  useEffect(async () => {
    await axios.get(`http://localhost:4000/allCharacters/${pageNumber}`)
      .then(res => {
        console.log(res.data.characters)
        setCharctersData(res.data.characters);
      })
  }, []);

  return (
    <>
      <div className="title">TODO enter galerry here</div>
      <div className={Styles.grid}>
        {charctersData.map(item => <Character
        className={`${Styles.grid__item} ${Styles.character__grid}`}
        character={
          new CharacterModel(
            item.name,
            item.id,
            item.status,
            item.species,
            item.origin,
            item.image
          )
        }>
        </Character>)}
      </div>
    </>
  )
}

export default AllCharacters