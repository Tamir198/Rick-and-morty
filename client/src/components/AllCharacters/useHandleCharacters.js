import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCharactersPage } from "redux/reducers/charactersSlice";
import { CharacterService } from "services/character-service";

/** 
    * Returns the current characters page data 
    * 
    * This hook will check redux store for already existing data, if not 
    * found - send GET request to the server and update the store.
    * 
    @pageNum is the wanted page number (can be found inside AllCharacters component)
*/
export const useHandleCharacters = ({ pageNum }) => {
  const { characters } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [charactersData, setCharactersData] = useState([]);

  //todo extract use effect login to redux thunk + pagination
  useEffect(() => {
    const data = characters.find((character) => character.pageNum === pageNum);

    if (data) {
      setCharactersData(data["charactersData"]);
    } else {
      CharacterService.getAll(pageNum).then((res) => {
        setCharactersData(res.data.characters);
      });
      dispatch(addCharactersPage({ pageNum: pageNum - 1, charactersData }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  return charactersData;
};
