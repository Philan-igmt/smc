import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Pallery from "./components/gallery/Gallery";
import Services from "./components/services/Services";
import About from "./components/about/About";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* <Home /> */}
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/services" exact component={Services} />
          <Route path="/gallery" exact component={Pallery} />
          <Route path="/contact" exact component={Contact} />
          <About />
          {/* <Services />
          <Pallery />
          <Contact /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
