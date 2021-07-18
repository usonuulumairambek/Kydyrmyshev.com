import React from 'react';
import './home.css';
import homeImg from './images/homeImg.webp'
const Home = () => {
    return (
        <div className="home">
            <div className="home__wrapper">
                <div className="home__container">
                    <div className="home__container-info">
                        <h2>Ruslan <br /> Kydyrmyshev</h2>
                        <p>Counselor to The President of the Kyrgyz Republic <br />

                            President of the World Federation of National <br /> Wrestling @wef_global

                        </p>
                    </div>
                    <div className="home__container-photo">
                        <img src={homeImg} alt="" />
                    </div>
                </div>
            </div>
            <div className="home__contacts">
                <h3>
                    Contacts
                </h3>
                <h4>fonder@list.ru</h4>
            </div>
            <div className="home__footer">
                <p>©2021 Ruslan Kydyrmyshev</p>
            </div>
        </div>
    );
};

export default Home;