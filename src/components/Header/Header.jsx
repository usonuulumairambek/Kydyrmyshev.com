import React, {useEffect} from 'react';
import './header.css';
import {  Link } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css";
// import SideBar from './SideBar';
const Header = () => {
    useEffect(() => {
        Aos.init({duration:2000 });
       }, [])
    return (
      
            <div className="header">
                 {/* <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} /> */}

                <div data-aos="zoom-in"  className="header__wrapper">
                    <div  className="header__tittle">
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