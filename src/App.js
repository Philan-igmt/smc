import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Pallery from "./components/gallery/Gallery";
import Services from "./components/services/Services";

function App() {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });
  return (
    <div className="App">
      <Nav />
      <Home />
      <Contact />
      <Services />
      <Pallery />
    </div>
  );
}

export default App;
