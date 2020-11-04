import React from 'react';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Pagina404 from './pages/pagina404'
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contato from './pages/contato';
import Projetos from './pages/projetos';
import { AnimatePresence } from 'framer-motion';
import Landing from './pages/landing'

function App() {

  return (
    <div className="App">
    <Router> 
    <Route
        render={({ location }) => (
    <AnimatePresence initial={false} exitBeforeEnter>
    <Switch location={location} key={location.pathname}>
    <Route  exact path="/" component={Landing} />

      <Route  path="/home" component={Home} />


      <Route  path="/contato" component={Contato} />


      <Route  path="/projetos" component={Projetos} />

      <Route path="/sobre" component={Sobre} />

      <Route component={Pagina404} />
      
    </Switch>
    </AnimatePresence>
        )}
        />
  </Router>
  </div>
  );
}

export default App;
