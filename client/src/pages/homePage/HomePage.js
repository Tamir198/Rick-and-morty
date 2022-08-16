
import styles from './homePage.module.css'

import { HomeMainContent } from '../../componenets/home/homeMainContent'
import { HomeTopDescription } from '../../componenets/home/homeTopDescription'


const HomePage = () => {
  return (
    <>
      <HomeTopDescription />
      <HomeMainContent/>
    </>
  )
}

export default HomePage