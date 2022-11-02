import { useState } from "react";
import homePageGif from "assets/homeGif.gif";
import { GeneralInfoService } from "services/general-info-service";
import { useQuery } from "services/api/useQuery";

import styles from "./homeStyle.module.css";

export const Home = () => {
  const [generalData, setGeneralData] = useState();

  const getGeneralInfo = async () => {
    //todo change this to redux thunk + remove state
    let { data } = await GeneralInfoService.getAll();
    setGeneralData({ ricksIfno: data.ricksIfno, mortysInfo: data.mortysInfo });
  };

  //remove this after after adding redux thunk
  useQuery(getGeneralInfo, { onSuccess: (data) => setGeneralData(data) });

  return (
    <div className={styles.home__mainContent}>
      <img
        className={styles.homePage__gif}
        src={homePageGif}
        alt="Home page gif"
      />
      {generalData && (
        <article className="info__container">
          <p className={styles.article__title}>Ricks information</p>
          <p className={styles.article__text}>{generalData.ricksIfno}</p>
          <p className={styles.article__title}>Mortys information </p>
          <p className={styles.article__text}> {generalData.mortysInfo} </p>
        </article>
      )}
    </div>
  );
};
