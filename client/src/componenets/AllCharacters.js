import { useEffect, useState } from 'react'
import Character from './Character';
import CharacterModel from '../models/CharacterModel'
import Styles from './AllCharacters.module.css'

import useAxios from '../hooks/useAxios';

const AllCharacters = (props) => {
  const { pageNum } = props;
  const { fetchData } = useAxios();
  const [charctersData, setCharctersData] = useState([]);

  useEffect(() => {
      fetchData(`allCharacters/${pageNum}`).then(res => {
        setCharctersData(res.data.characters);
      });
    
  }, [pageNum]);

  const renderCharacters = () => {
    return charctersData.map(item => <Character
      key={item.id}
      className={`${Styles.grid__item} ${Styles.character__grid}`}
      character={new CharacterModel(
        item.name,
        item.id,
        item.status,
        item.species,
        item.origin,
        item.image
      )}>
    </Character>)
  }

  return (
    <div className={Styles.grid}>
      {renderCharacters()}
    </div>
  )
}

export default AllCharacters