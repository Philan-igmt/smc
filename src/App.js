import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import "./App.css";
import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";

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
    </div>
  );
}

export default App;
