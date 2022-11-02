import { useState } from "react";
import { Character } from "components";
import { Character as CharacterModel } from "models";
import styles from "./characterSearch.module.css";
import { CharacterService } from "services";

const CharacterSearch = () => {
  let pageNumber = 0;
  const [characterData, setCharacterData] = useState();
  const setPageNumber = (pageNum) => {
    pageNumber = pageNum;
  };

  //todo change this to redux thunk and get rid of state
  const getCharacterById = async () => {
    const characterId = pageNumber;
    if (characterId > 800) return;

    await CharacterService.getById(characterId).then((res) => {
      setCharacterData(res.data);
    });
  };

  return (
    <>
      <h1 className="title--green centered-text">
        Enter A number - get a character
      </h1>
      <div className={styles.searchBar__container}>
        <input
          type="number"
          onChange={({ target: { value } }) => setPageNumber(value)}
          placeholder="1-800"
          min="1"
          max="800"
        />
        <button type="submit" onClick={getCharacterById}>
          Enter
        </button>
      </div>

      {characterData && (
        <Character character={new CharacterModel({ ...characterData })} />
      )}
      <h1 className="centered-text title">Waba laba dab dab</h1>
    </>
  );
};

export default CharacterSearch;
