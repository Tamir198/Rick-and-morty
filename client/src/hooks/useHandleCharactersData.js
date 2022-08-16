import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addCharactersPage } from '../redux/reducers/charactersSlice'
import { CharacterService } from 'services/characterService'

import useAxios from './useAxios';

/** 
    * Returns the current characters page data 
    * 
    * This hook will check redux store for already existing data, if not 
    * found - send GET request to the server and update the store.
    * 
    @pageNum is the wanted page number (can be found inside AllCharacters component)
*/
const useHandleCharactersData = (pageNum) => {

  const { characters } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [charctersData, setCharctersData] = useState([]);

  useEffect(() => {
    const data = characters.find(character => character.pageNum === pageNum);

    if (data) {
      setCharctersData(data["charctersData"]);
    } else {
      CharacterService.getAll(pageNum).then(res => {
        setCharctersData(res.data.characters);
      });
      dispatch(addCharactersPage({ pageNum: pageNum - 1, charctersData }));
    }

  }, [pageNum]);

  return charctersData;
}

export default useHandleCharactersData;