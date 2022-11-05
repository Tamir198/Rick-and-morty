import { Character } from "components";
import { Character as CharacterModel } from "models";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacterById } from "redux/actions";

import styles from "./characterSearch.module.css";
import { searchCharacterById } from "redux/reducers/character";

const CharacterSearch = () => {
  const dispatch = useDispatch();
  const { id: characterId, data } = useSelector(
    (state) => state.characters.currentCharacter
  );

  return (
    <>
      <h1 className="title--green centered-text">
        Enter A number - get a character
      </h1>
      <div className={styles.searchBar__container}>
        {/* TODO: add validation */}
        <input
          type="number"
          value={characterId}
          onChange={({ target: { value } }) =>
            dispatch(searchCharacterById(value))
          }
          placeholder="1-800"
          min="1"
          max="800"
        />
        <button
          type="submit"
          onClick={() => dispatch(fetchCharacterById(characterId))}
        >
          Enter
        </button>
      </div>

      {data && <Character character={new CharacterModel({ ...data })} />}
      <h1 className="centered-text title">Waba laba dab dab</h1>
    </>
  );
};

export default CharacterSearch;
