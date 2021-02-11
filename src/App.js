import React from 'react'
import GlobalStyle from './styles/GlobalStyles' 
import About from './components/About'
import Contact from './components/Contact'

import Home from './components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/contact" exact >
          <Contact />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
      </Switch>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
