import './App.css';
import Header from './components/Header/Header'
import Home from './components/Header/home/Home';
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
        <Route path="/biography">
          <Biography />
        </Route>
        <Route path="/photos">
        <Photo />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
