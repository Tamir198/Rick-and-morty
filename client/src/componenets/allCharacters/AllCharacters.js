import Character from '../character/Character';
import CharacterModel from '../../models/CharacterModel'
import styles from './AllCharacters.module.css'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addCharactersPage } from '../../redux/reducers/charactersSlice'

import useAxios from '../../hooks/useAxios';

const AllCharacters = (props) => {
  const { pageNum } = props;
  const { fetchData } = useAxios();
  const [charctersData, setCharctersData] = useState([]);

  const { characters } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = characters.find(character => character.pageNum === pageNum);

    if(data){
      setCharctersData(data["charctersData"]);
    }else{
      fetchData(`allCharacters/${pageNum}`).then(res => {
        setCharctersData(res.data.characters);
      });
      
      dispatch(addCharactersPage({ pageNum: pageNum -1, charctersData }));
    }
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