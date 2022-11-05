import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "redux/actions";
/** 
    * Returns the current characters page data 
    * 
    * This hook will check redux store for already existing data, if not 
    * found - send GET request to the server and update the store.
    * 
    @pageNum is the wanted page number (can be found inside AllCharacters component)
*/
export const useHandleCharacters = ({ pageNum }) => {
  const { characters } = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!characters[pageNum]) {
      dispatch(fetchCharacters(pageNum));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNum]);

  return { characters: characters[pageNum] };
};
