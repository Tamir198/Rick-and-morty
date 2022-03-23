import React, { useRef, useState } from 'react'
import axios from 'axios';

import './characterSearch.css'
import { Character } from '../../componenets/Character';
import CharacterModel from '../../models/CharacterModel';

const CharacterSearch = () => {

  const inputRef = useRef('');
  const [charcterData, setCharcterData] = useState(false);

  const getCharacterById = () => {
    const pageNumber = inputRef.current.value;
    if(pageNumber > 800) return;
    axios.get(`http://localhost:4000/singleCharacter/${pageNumber}`)
      .then(res => {
        setCharcterData(res.data);
      })
  }

  return (
    <div className="page__container">
      <div className="search-bar">
        <input type="number" min="1" max="800" ref={inputRef} />
        <button type="submit" onClick={() => getCharacterById()}>Enter</button>
      </div>

      {charcterData &&
        <Character character={new CharacterModel(
          charcterData.name,
          charcterData.id,
          charcterData.status,
          charcterData.species,
          charcterData.origin,
          charcterData.image
        )}
        />
      }
    </div>
  )
}

export default CharacterSearch;