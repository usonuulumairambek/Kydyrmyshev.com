import React, { useEffect } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Menu from "./Menu";
import Burger from "./Burger";
import { useTranslation } from "react-i18next";
import "./../../utils/i18next";
const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="header">
      <div data-aos="zoom-in" className="header__wrapper">
        <div className="header__navbar">
          <div className="header__tittle">
            <h1>{t("header.header_tittle")}</h1>
          </div>
          <div className="header__navbar">
            <div className="header__navbar-item">
              <Link to="/home">{t("header.header_nav1")}</Link>
            </div>
            <div className="header__navbar-item">
              <Link to="/biography">{t("header.header_nav2")}</Link>
            </div>

            <div className="header__navbar-item">
              <Link to="/program">{t("header.header_nav4")}</Link>
            </div>
            <div className="header__navbar-item">
              <Link to="/Charity">{t("header.header_nav5")}</Link>
            </div>
            <div className="header__navbar-item">
              <Link to="/sport">{t("header.header_nav6")}</Link>
            </div>
            <div className="header__navbar-item">
              <Link to="/photos">{t("header.header_nav3")}</Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="lang"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "white",
        }}
      >
        <div
          style={{ cursor: "pointer", color: "white", margin: "0 10px 0 10px" }}
          onClick={() => changeLanguage("eng")}
          href="kdn"
        >
          <img style={{width:30}} src="https://www.rabstol.net/uploads/gallery/main/229/rabstol_net_flags_57.jpg" alt="" />
        </div>
        <div
          style={{ cursor: "pointer", color: "white", margin: "0 10px 0 10px" }}
          onClick={() => changeLanguage("ru")}
          href="kdn"
        >
                    <img style={{width:30}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png" alt="" />

        </div>
        <div
          style={{ cursor: "pointer", color: "white", margin: "0 10px 0 10px" }}
          onClick={() => changeLanguage("kg")}
          href="kdn"
        >
                    <img style={{width:30}} src="
                    https://www.kartinki24.ru/uploads/gallery/main/83/kartinki24_ru_country_flags_120.jpg" alt="" />

        </div>
      </div>
      <div ref={node} className="burger">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default Header;
