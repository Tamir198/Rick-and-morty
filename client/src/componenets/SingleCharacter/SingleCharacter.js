import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';

import './SingleCharacter.css'

const SingleCharacter = () => {

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

      {charcterData && <div className="character__container">
      <h4>{charcterData.name}</h4>
      <p>Character number {charcterData.id}</p>
      <p>status {charcterData.status}</p>
      <p>species {charcterData.species}</p>
      <p>origin {charcterData.origin}</p>
      <img src={charcterData.image} alt="The character image"/>
      </div>
      }
    </div>
  )
}

export default SingleCharacter;