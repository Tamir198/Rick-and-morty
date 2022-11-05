import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import homePageGif from "assets/homeGif.gif";
import { fetchGeneralInfo } from "redux/actions";
import { TopDescription } from "./TopDescription";

import styles from "./homeStyle.module.css";

const Home = () => {
  //TODO: use separated hook for this
  const { generalInfo } = useSelector((state) => state.generalInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGeneralInfo());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
