import classNames from "classnames";
import { Character } from "components";
import { Character as CharacterModel } from "models";
import { useHandleCharacters } from "./useHandleCharacters";

import styles from "./AllCharacters.module.css";

export const AllCharacters = ({ pageNum }) => {
  const charactersData = useHandleCharacters({ pageNum });

  return (
    <div className={styles.grid}>
      {charactersData.map(({ id, ...rest }) => (
        <Character
          key={id}
          className={classNames(styles.grid__item, styles.character__grid)}
          character={new CharacterModel({ id, ...rest })}
        />
      ))}
    </div>
  );
};
