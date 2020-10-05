import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import Home from './container/Home/Home'
import Skills from './container/Skills/Skills'
import Navigation from './component/Navigation/Navigation'
import Works from './container/Works/Works'
import Contact from './container/Contact/Contact'

const App = (props) => {

  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/skills'>
          <Skills />
        </Route>
        <Route path='/works'>
          <Works />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
