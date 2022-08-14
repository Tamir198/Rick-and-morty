import React from 'react'
import { useState, useEffect } from 'react'
import useAxios from '../../hooks/useAxios'
import homePageGif from 'assets/homeGif.gif'
import styles from './homeStyle.module.css'

export const HomeMainContent = () => {
  const [generalData, setgeneralData] = useState();
  const { fetchData } = useAxios();

  useEffect(() => {
    fetchData(`/generalInfo`)
      .then(res => res.data.x)
      .then(res => {
        setgeneralData({ ricksIfno: res.ricksIfno, mortysInfo: res.mortysInfo })
      })
  }, [])


  return (
    <div className={styles.home__mainContent}>
      <img className={styles.homePage__gif} src={homePageGif} alt="Home page gif" />
      {generalData &&
        <article className='info__container'>
          <p className={styles.article__title}>Ricks information</p>
          <p className={styles.article__text}>{generalData.ricksIfno}</p>
          <p className={styles.article__title}>Mortys information </p>
          <p className={styles.article__text}> {generalData.mortysInfo} </p>
        </article>
      }
    </div>
  )
}
