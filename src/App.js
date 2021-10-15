import "./App.css";
import { Suspense } from "react";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import Biography from "./components/biography/Biography";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Photo from "./components/photo/Photo";
import Kelechek from "./components/photo/components/kelechek/Kelechek";
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
          <Route path="/"></Route>
          <Route path="/delivery">d </Route>
          <Route path="/taxi-for-business">d </Route>
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
