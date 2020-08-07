import React from "react";
import "./Services.css";

function Services() {
  const data = [
    {
      name: "PHOTOGRAPHY",
      src:
        "https://brakpanherald.co.za/wp-content/uploads/sites/27/2018/09/TS-Night-Photography.jpg",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde rerum suscipit deserunt quod quo voluptatibus similique rem, nobis voluptates?",
    },
    {
      name: "VIDEOS",
      src:
        "https://coda.newjobs.com/api/imagesproxy/ms/niche/images/can/film.jpg",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde rerum suscipit deserunt quod quo voluptatibus similique rem, nobis voluptates?",
    },
    {
      name: "EDITING",
      src:
        "https://7labs.io/wp-content/uploads/2020/01/Budget-video-editing-tools-for-Mac-PC-Filmora-9-vs-FilmoraPro.jpg",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde rerum suscipit deserunt quod quo voluptatibus similique rem, nobis voluptates?",
    },
    {
      name: "MODELLING",
      src:
        "https://pageantvote.net/system/pageants/thumbs/000/001/088/original/2.png?1590575385",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde rerum suscipit deserunt quod quo voluptatibus similique rem, nobis voluptates?",
    },

    {
      name: "LIFE EVENT PRODUCTION",
      src:
        "https://i.pinimg.com/originals/a6/88/59/a688599a455f3a1facbed47c55af6624.jpg",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde rerum suscipit deserunt quod quo voluptatibus similique rem, nobis voluptates?",
    },
    {
      name: "PERFOMANCE AND CELEBRATION",
      src:
        "https://www.capetownmagazine.com/media_lib/preview/0ddf90c22ab4adf2c94e3590bd6fbdcf.preview.jpg",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde rerum suscipit deserunt quod quo voluptatibus similique rem, nobis voluptates?",
    },
  ];

  const services = data.map((service) => (
    <div key={service.name} className="card">
      <div className="card-image">
        <img src={service.src} className="card-imagee" />
      </div>
      <div className="card-content">
        <span className="card-title">{service.name}</span>
        <p>{service.desc}</p>
      </div>
    </div>
  ));
  return (
    <div>
      <div className="services center">
        <h2 className="serv">Services</h2>
      </div>
      <div className="servi">{services}</div>
    </div>
  );
}

export default Services;
