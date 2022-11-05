import classNames from "classnames";
import { Character } from "components";
import { Character as CharacterModel } from "models";
import { useHandleCharacters } from "./useHandleCharacters";

import styles from "./AllCharacters.module.css";

export const AllCharacters = ({ pageNum }) => {
  const { characters } = useHandleCharacters({ pageNum });

  if (!characters) return "Loading";

  return (
    <div className={styles.grid}>
      {characters.map((character) => {
        return (
          <Character
            key={character.id}
            className={classNames(styles.grid__item, styles.character__grid)}
            character={new CharacterModel({ ...character })}
          />
        );
      })}
    </div>
  );
};
