import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img4 from "./images/img4.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img1 from "./images/img1.webp";
import img5 from "./images/img5.webp";
import img6 from "./images/img6.webp";
import img7 from "./images/img7.webp";
import img8 from "./images/img8.webp";
import img9 from "./images/img9.webp";
import img10 from "./images/img10.webp";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import "./photo.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Kelechek from "./components/kelechek/Kelechek";
const Photo = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <BrowserRouter>
      <div className="home">
        <div className="home__left">
          <div className="home__left-order-taxi">
            <div className="home__left-order-nav">
              <ul>
                <li>
                  <NavLink to="/bakubat-kelechek">"Бакубат келечек"</NavLink>
                </li>{" "}
                <li>
                  <NavLink to="/app">Wef global</NavLink>
                </li>{" "}
                <li>
                  <NavLink to="/delivery"></NavLink>
                </li>{" "}
                <li>
                  <NavLink to="/taxi-for-business">Личные фотографии</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="home__right">
          {/* <Header /> */}
          <Switch>
            <Route path="/bakubat-kelechek">
              <Kelechek />
            </Route>
            <Route path="/">
            </Route>
            <Route path="/delivery">d </Route>
            <Route path="/taxi-for-business">d </Route>
            <Route path="/by-driver">d </Route>
            <Route path="/couriers">d </Route>
            <Route path="/vacancies">d </Route>
            <Route path="/partners">d </Route>
            <Route path="/blog">
              <h1>Блог</h1> <br />
              Страница в процессе разработки!!!
            </Route>
            <Route path="/company">
              <h1>О компании</h1> <br />
              Страница в процессе разработки!!!
            </Route>{" "}
            <Route path="/contacts">
              <h1>Контакты</h1> <br />
              Страница в процессе разработки!!!
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Photo;
