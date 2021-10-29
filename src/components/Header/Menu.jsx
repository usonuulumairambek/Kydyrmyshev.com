import React from "react";
import ins from "./images/ins.svg";
import fb from "./images/fb.png";
import { useTranslation } from "react-i18next";
import "./../../utils/i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./menu.css";
function Menu({ open, setOpen }) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  const StyledMenu = styled.nav`
    display: flex;
    width: 50%;
    background: #1e21a4;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-200%)")};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 1s ease-in-out;
    @media (max-width: 576px) {
      width: 50%;
    }

    a {
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 100;
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: 576px) {
        font-size: 20px;
        text-align: center;
      }

      &:hover {
        color: #d51f48;
      }
    }
  `;

  return (
    <div>
      <StyledMenu open={open}>
        <div className="navbar">
          <div className="header__navbar-item">
            <Link onClick={() => setOpen(!open)} to="/home">
              {t("header.header_nav1")}
            </Link>
          </div>
          <div className="header__navbar-item">
            <Link onClick={() => setOpen(!open)} to="/biography">
              {t("header.header_nav2")}
            </Link>
          </div>
          <div className="header__navbar-item">
            <Link onClick={() => setOpen(!open)} to="/program">
              {t("header.header_nav4")}
            </Link>
          </div>
          <div className="header__navbar-item">
            <Link onClick={() => setOpen(!open)} to="/Charity">
              {t("header.header_nav5")}
            </Link>
          </div>{" "}
          <div className="header__navbar-item">
            <Link onClick={() => setOpen(!open)} to="/sport">
              {t("header.header_nav6")}
            </Link>
          </div>{" "}
          <div className="header__navbar-item">
            <Link onClick={() => setOpen(!open)} to="/photos">
              {t("header.header_nav3")}
            </Link>
          </div>{" "}
          <div className="navbar__social">
            <div className="navbar__social-inss">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/kydyrmyshev_ruslan/"
              >
                <img src={ins} alt="" />
              </a>
            </div>
            <div className="navbar__social-fb">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100008320635922"
              >
                <img src={fb} alt="" />
              </a>
            </div>
          </div>
        </div>
      </StyledMenu>
    </div>
  );
}

export default Menu;
