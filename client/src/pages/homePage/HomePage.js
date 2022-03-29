import homePageGif from '../../assets/homeGif.gif'

import styles from './homePage.module.css'
const HomePage = () => {
  return (
    <>
      <h1 className="centered-text title--green">This is rick and morty website</h1>
      <p className='title centered-text title--details'>
        In here you can find data about specific character, or you can look up all 
        the characters in the gallery.
      </p>

      <img className={styles.homePage__gif} src={homePageGif} alt="Home page gif" />
    </>
  )
}

export default HomePage