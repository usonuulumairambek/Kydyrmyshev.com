import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./contakts.css";
import { useTranslation } from "react-i18next";
import "./../../utils/i18next";
function Contacts() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      {/* <form action="./telegram.php" method="POST"> */}
      <div data-aos="zoom-in" className="home__contacts">
        <form action="" method="POST">
          <legend>{t("contact.us")}</legend>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id
              name="name"
              placeholder={t("contact.name")}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id
              name="phone"
              placeholder={t("contact.phone")}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id
              name="email"
              placeholder={t("contact.email")}
            />
          </div>
          <div className="form-group">
            <textarea
              name="msg"
              className="form-control"
              placeholder={t("contact.message")}
              defaultValue={""}
            />
          </div>
        </form>
        <button className="form__btn">{t("contact.button")}</button>
      </div>
    </div>
  );
}
export default Contacts;