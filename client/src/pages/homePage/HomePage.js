

import { HomeMainContent } from 'componenets/home/homeMainContent'
import { HomeTopDescription } from 'componenets/home/homeTopDescription'

import styles from './homePage.module.css'

const HomePage = () => {
  return (
    <>
      <HomeTopDescription />
      <HomeMainContent/>
    </>
  )
}

export default HomePage