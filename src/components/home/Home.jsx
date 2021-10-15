import React, {useEffect} from 'react';
import "./home.css";
import homeImg from "./images/homeImg.jpg";
import Aos from 'aos';
import "aos/dist/aos.css";
import Contacts from '../contacts/Contacts';
import { useTranslation } from "react-i18next";
import "./../../utils/i18next";


function Home() {
  const { t, i18n } = useTranslation();
  const changeLanguage =(lang)=>{
    i18n.changeLanguage(lang);
  }
    useEffect(() => {
        Aos.init({duration:2000 });
       }, [])
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <div  data-aos="fade-up" className="home__container-info">
            <h1 className="home__container-tittle">{t("home.home_name")}</h1>
            <p className="home__container-subtittle">
            {t("home.home_about")}
            </p>
          </div>
          <div  data-aos="flip-up" className="home__container-photo">
            <img src={homeImg} alt="" />
          </div>
        </div>
      </div>
      <Contacts />
      <div className="home__footer">
        <p>©2021 Ruslan Kydyrmyshev</p>
      </div>
    </div>
  );
}

export default Home;
