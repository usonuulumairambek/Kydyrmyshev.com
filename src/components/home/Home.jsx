import React, { useEffect, useState } from "react";
import "./home.css";
import photoimg from "./images/home_photo.png";
import burch from "./images/burch.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import "./../../utils/i18next";
import Modal from "./modal/Modal";
function Home() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [ModalActive, setModalActive] = useState(false);
  return (
    <div className="home">
      <div className="home_container">
        <div className="home_container-text">
          <div className="home_container-text2">
            <div>
              <h1> {t("home.home_about")}</h1>
              {/* <h1>"ЧЫНЫГЫ ОЗГОРУУГО ИШЕН"</h1> */}
            </div>
            <div>
              <Modal active={ModalActive} setActive={setModalActive} />
            </div>
            <div className="home_container-name">
              {/* <div className="btnbtn">
                <a
                  className="modal__button"
                  onClick={() => setModalActive(true)}
                >
                  Смотреть видео
                </a>
              </div> */}

              <h3>
                Кыдырмышев <br /> <span>Руслан</span>{" "}
              </h3>
            </div>
          </div>
          <img src={burch} alt="" />
        </div>
        <div className="home_container-photo">
          <img src={photoimg} alt="" />
        </div>
      </div>
      {/* <div className="home">
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
      <div className="home__footer">
        <p>©2021 Ruslan Kydyrmyshev</p>
      </div> */}
    </div>
  );
}
export default Home;
