import './App.css';
import Header from './components/Header/Header'
import Home from './components/home/Home';
import Biography from './components/biography/Biography';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Photo from './components/photo/Photo';
function App() {
  return (
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
      </Switch>
    </BrowserRouter>
  );
}
export default App;