import React from 'react';
import Home from './components/home';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contato from './components/contato';
import Projetos from './components/projetos';

function App() {
  return (
    <div className="App">
    <Router> 
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>

    <Switch>
      <Route  path="/contato" component={Contato} />
    </Switch>

    <Switch>
      <Route  path="/projetos" component={Projetos} />
    </Switch>


  </Router>
  </div>
  );
}

export default App;
