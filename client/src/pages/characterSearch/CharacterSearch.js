import React, { useRef, useState } from 'react'
import axios from 'axios';

import './characterSearch.css'
import { Character } from '../../componenets/Character';

const CharacterSearch = () => {

  const inputRef = useRef('');
  const [charcterData, setCharcterData] = useState(false);

  const getCharacterById = () => {
    axios.get(`http://localhost:4000/singleCharacter/${inputRef.current.value}`)
      .then(res => {
        setCharcterData(res.data);
      })
  }

  return (
    <div >
      <input type="number" min="1" max="800" ref={inputRef} />
      <button type="submit" onClick={() => getCharacterById()}>Enter</button>

      {charcterData &&
        <Character
          name={charcterData.name}
          id={charcterData.id}
          status={charcterData.status}
          species={charcterData.species}
          origin={charcterData.origin}
          image={charcterData.image}
        />
      }
    </div>
  )
}

export default CharacterSearch;