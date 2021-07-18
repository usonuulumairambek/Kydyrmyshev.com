import React from 'react';
import './header.css';
import { BrowserRouter, Link } from "react-router-dom";

const Header = () => {
    return (
      
            <div className="header">
                <div className="header__wrapper">
                    <div className="header__tittle">
                        <h1>
                            Ruslan Kydyrmyshev</h1>
                    </div>
                    <div className="header__navbar">
                        <div className="header__navbar-item">
                            <Link to="/home">Home</Link>
                        </div>
                        <div className="header__navbar-item">
                            <Link to="/biography">Biography</Link>
                        </div>
                        <div className="header__navbar-item">
                            <Link to="/photos">
                                Photos
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Header;