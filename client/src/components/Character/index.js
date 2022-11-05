import classNames from "classnames";
import styles from "./Character.module.css";

export const Character = ({
  className,
  character: { name, id, status, species, origin, image },
}) => (
  <div
    className={classNames(className, styles.character__container)}
    data-testid="character"
  >
    <div>
      <p className={styles.title}>{name}</p>
      <h2>Character number {id}</h2>
      <h3>Status: {status}</h3>
      <h3>Species {species}</h3>
      <h3>Origin {origin}</h3>
    </div>
    <img className={styles.character__image} src={image} alt={name} />
  </div>
);
