import React from 'react';
import About from "./pages/about"
import Home from "./pages/home"
import Contact from "./pages/contact"
import Tours from "./pages/tours"

import {
  Switch,
  Route,

} from "react-router-dom";


import "../node_modules/destyle.css"

function App() {

  return (
    <>


      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/tours">
          <Tours />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>





    </>
  );
}

export default App;




