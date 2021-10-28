import "./App.css";
import { Suspense } from "react";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import Biography from "./components/biography/Biography";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Photo from "./components/photo/Photo";
import Kelechek from "./components/photo/components/kelechek/Kelechek";
import Program from "./components/program/Program";
import Charity from "./components/charity/Charity";
import Sport from "./components/sport/Sport";
function App() {
  return (
    <Suspense fallback={"Loader"}>
      {" "}
      <BrowserRouter>
        <div className="App">
          <Header />
        </div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/biography" exact>
            <Biography />
          </Route>
          <Route path="/photos" exact>
            <Photo />
          </Route>
          <Route path="/bakubat-kelechek">
            <Kelechek />
          </Route>
          <Route path="/program">
            <Program />
          </Route>
          <Route path="/Charity">
            <Charity />
          </Route>
          <Route path="/sport">
            <Sport />
          </Route>
          <Route path="/by-driver">d </Route>
          <Route path="/couriers">d </Route>
          <Route path="/vacancies">d </Route>
          <Route path="/partners">d </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}
export default App;
