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
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact} />
        <Route path="/tours" component={Tours}/>
      </Switch>





    </>
  );
}

export default App;




