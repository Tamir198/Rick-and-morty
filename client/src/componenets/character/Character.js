import styles from 'componenets/character/Character.module.css'

const Character = (props) => {
  const { name, id, status, species, origin, image } = props.character;

  return (
    <div className={styles.character__container} data-testid="character">
      <div>
        <p className={styles.title}>{name}</p>
        <h2>Character number {id}</h2>
        <h3>Status: {status}</h3>
        <h3>Species {species}</h3>
        <h3>Origin {origin}</h3>
      </div>
      <img className={styles.character__image} src={image} alt="The character image" />
    </div>
  )
}

export default Character;

