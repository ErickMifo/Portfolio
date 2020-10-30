import React from 'react';
import Home from './pages/home';
import Sobre from './pages/sobre';
import CV from './pages/cv'
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contato from './pages/contato';
import Projetos from './pages/projetos';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <div className="App">
    <Router> 
    <Route
        render={({ location }) => (
    <AnimatePresence initial={false} exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
      <Route exact path="/" component={Home} />


      <Route  path="/contato" component={Contato} />


      <Route  path="/projetos" component={Projetos} />

      <Route  path="/cv" component={CV} />

      <Route path="/sobre" component={Sobre} />
    </Switch>
    </AnimatePresence>
        )}
        />
  </Router>
  </div>
  );
}

export default App;
