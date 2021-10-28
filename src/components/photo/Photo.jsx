import React, { useEffect } from "react";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import "./photo.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Kelechek from "./components/kelechek/Kelechek";
import News from "./components/news/News";
import PersonaPhotos from "./components/personal-photos/PersonaPhotos";
import Slide from "./components/kelechek/Kelechek";
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
                  <NavLink to="/delivery"></NavLink>
                </li>{" "}
                <li>
                  <NavLink to="/wef-global">Wef global</NavLink>
                </li>{" "}
                <li>
                  <NavLink to="/delivery"></NavLink>
                </li>{" "}
                <li>
                  <NavLink to="/personal-photos">Личные фотографии</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="">
          {/* <Header /> */}
          <Switch>
            <Route path="/photos">
              <Slide />
            </Route>
            <Route path="/bakubat-kelechek">
              <Kelechek />
            </Route>
            <Route path="/wef-global">
              <News />
            </Route>
            <Route path="/personal-photos">
              <PersonaPhotos />
            </Route>
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
