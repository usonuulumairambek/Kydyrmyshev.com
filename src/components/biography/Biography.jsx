import React, { useEffect } from "react";
import logo from "./Img.webp";
import "./biography.css";
import Aos from "aos";
import "aos/dist/aos.css";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import { BackendModule } from "i18next";
const Biography = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  if (11 > 3) {
    return (
      <div className="biography">
        <div className="biography__photo">
          <img data-aos="zoom-in" src={logo} alt="" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="biography__text"
        >
          <h1>{t("bio.bio1")}</h1>
          <p>{t("bio.bio_text")}</p>
        </div>
      </div>
    );


  } else {
    return (
      <div className="biography">
        <div className="biography__photo">
          <img data-aos="zoom-in" src={logo} alt="" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="biography__text"
        >
          <h1>Biography</h1>
          <p>
            ds to fight the COVID 19 pandemic" from the Nasaatchi public
            foundation
          </p>
        </div>
      </div>
    );
  }
};

export default Biography;
