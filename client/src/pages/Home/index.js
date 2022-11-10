import homePageGif from "assets/homeGif.gif";
import { TopDescription } from "./TopDescription";

import styles from "./homeStyle.module.css";
import { useGeneralInfo } from "./useGeneralInfo";

const Home = () => {
  const generalInfo = useGeneralInfo();

  return (
    <>
      <TopDescription />
      <div className={styles.home__mainContent}>
        <img
          className={styles.homePage__gif}
          src={homePageGif}
          alt="Home page gif"
        />
        {generalInfo && (
          <article className="info__container">
            <p className={styles.article__title}>Ricks information</p>
            <p className={styles.article__text}>{generalInfo.ricksIfno}</p>
            <p className={styles.article__title}>Mortys information </p>
            <p className={styles.article__text}> {generalInfo.mortysInfo} </p>
          </article>
        )}
      </div>
    </>
  );
};

export default Home;
