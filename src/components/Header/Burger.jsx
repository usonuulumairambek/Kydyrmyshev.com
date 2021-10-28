import React from "react";
import './burger.css'
import ButgerImg from "./../Header/images/hamburger-menu.png";
import styled from 'styled-components'
function Burger({open, setOpen}) {
  const StyledBurger = styled.button`
    background: #fff;
    border: none;
    cursor: pointer;
    z-index: 100;
    div {
      width: 2rem;
      height: 0.25rem;
      background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

 
    }
  `;

  return (
    <div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <img
          open={open}
          onClick={() => setOpen(!open)}
          src={ButgerImg}
          alt=""
        />
      </StyledBurger>
    </div>
  );
}

export default Burger;
