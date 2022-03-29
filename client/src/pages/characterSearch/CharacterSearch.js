import { useRef, useState } from 'react'

import Character from '../../componenets/Character';
import CharacterModel from '../../models/CharacterModel';
import useAxios from '../../hooks/useAxios';

import styles from './characterSearch.module.css'

const CharacterSearch = () => {

  const inputRef = useRef();
  const [charcterData, setCharcterData] = useState();
  const { fetchData } = useAxios();

  const getCharacterById = async () => {
    const pageNumber = inputRef.current.value;
    if (pageNumber > 800) return;

    await fetchData(`singleCharacter/${pageNumber}`).then(res => {
      setCharcterData(res.data);
    }
    )
  }

  return (
    <div>
      <h1 className="title--green centered-text">Enter A number - get a character</h1>
      <div className={styles.searchBar__container}>
        <input type="number" placeholder="1-800" min="1" max="800" ref={inputRef} />
        <button type="submit" onClick={getCharacterById}>Enter</button>
      </div>

      {charcterData &&
        <Character character={new CharacterModel(
          charcterData.name,
          charcterData.id,
          charcterData.status,
          charcterData.species,
          charcterData.origin,
          charcterData.image
        )} />
      }
      <h1 className="centered-text title">Waba laba dab dab</h1>
    </div>


  )
}

export default CharacterSearch;