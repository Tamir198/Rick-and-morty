import { useEffect, useState } from 'react'

import Character from '../character/Character';
import CharacterModel from '../../models/CharacterModel'
import styles from './AllCharacters.module.css'

import useAxios from '../../hooks/useAxios';

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
      className={`${styles.grid__item} ${styles.character__grid}`}
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
    <div className={styles.grid}>
      {renderCharacters()}
    </div>
  )
}

export default AllCharacters