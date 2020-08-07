import React from "react";
import "./Team.css";
import { v4 as uuidv4 } from "uuid";

import one from "./images/one.jpeg";
import two from "./images/two.jpeg";
import hree from "./images/hree.jpeg";
import four from "./images/four.jpeg";
import five from "./images/five.jpeg";
import six from "./images/six.jpeg";
import seven from "./images/seven.jpeg";

function Team() {
  const team = [
    {
      src: one,
      desc: "",
      id: uuidv4(),
    },
    {
      src: two,
      desc: "",
      id: uuidv4(),
    },
    {
      src: hree,
      desc: "",
      id: uuidv4(),
    },
    {
      src: four,
      desc: "",
      id: uuidv4(),
    },
    {
      src: five,
      desc: "",
      id: uuidv4(),
    },
    {
      src: six,
      desc: "",
      id: uuidv4(),
    },
    {
      src: seven,
      desc: "",
      id: uuidv4(),
    },
  ];

  const people = team.map((person) => (
    <div key={person.id} className="card">
      <div className="card-image">
        <img src={person.src} className="card-imagee" />
      </div>
      <div className="card-content">
        {/* <span className="card-title">{service.name}</span> */}
        <p>{person.desc}</p>
      </div>
    </div>
  ));

  return <div className="Deteam center">{people}</div>;
}

export default Team;
