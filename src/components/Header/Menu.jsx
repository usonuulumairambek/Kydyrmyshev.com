import React from "react";
import ins from "./images/ins.svg";
import fb from "./images/fb.png";

import { Link } from "react-router-dom";
import styled from "styled-components";
import "./menu.css";
function Menu({ open, setOpen }) {
  const StyledMenu = styled.nav`
    display: flex;
    width: 50%;
    background: #1e2025;
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
      font-weight: bold;
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: 576px) {
        font-size: 20px;
        text-align: center;
      }

      &:hover {
        color: #343078;
      }
    }
  `;

  return (
    <div>
      <StyledMenu open={open}>
        <div className="navbar">
          <div className="header__navbar-item">
            <Link onClick={() => setOpen(!open)} to="/home">
              Home
            </Link>
          </div>
          <div className="header__navbar-item">
            <Link onClick={() => setOpen(!open)} to="/biography">
              Biography
            </Link>
          </div>
          <div className="header__navbar-item">
            <Link onClick={() => setOpen(!open)} to="/photos">
              Photos
            </Link>
          </div>
     <div className="navbar__social">
       <div className="navbar__social-inss">
        <a  target="_blank" rel="noreferrer"  href="https://www.instagram.com/kydyrmyshev_ruslan/">
          <img src={ins} alt="" />
        </a>
       </div>
       <div className="navbar__social-fb">
       <a  target="_blank" rel="noreferrer"   href="https://www.facebook.com/profile.php?id=100008320635922">
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
