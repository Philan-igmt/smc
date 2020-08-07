import React from "react";
import "./About.css";
import ceo from "./images/ceo.jpeg";
import Team from "./Team";

const About = () => {
  return (
    <div>
      <div className="about">
        <h2 className="abou">About us!</h2>
      </div>
      <div className="row center aboutintinfo">
        <div className="col s12 m6">
          <img className="ceo" src={ceo} alt="" />
        </div>
        <div className="col s12 m5 offset-m1">
          <p className="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            corrupti totam dolorem, nostrum ullam impedit harum illo! Tempore
            illo perferendis libero autem excepturi debitis adipisci minus
            minima doloremque necessitatibus placeat veniam voluptatibus
            quibusdam aliquam, atque quasi, sequi odio molestias ipsum fugit
            explicabo. Debitis accusantium ad sunt facilis quibusdam assumenda,
            inventore iusto. Beatae dolorum natus architecto vel omnis impedit,
            accusamus ea nemo deleniti nulla, veniam, qui quasi aspernatur quod
            velit numquam asperiores! Expedita, velit! Facere cum ipsam
            cupiditate distinctio dicta perspiciatis, repudiandae tempora
            aliquid quam ipsa illo at, placeat alias tempore dolores odio
            nostrum obcaecati blanditiis nemo nesciunt doloremque eos saepe sed!
            Quos eligendi non nulla sint iure magnam obcaecati ab quibusdam
            itaque, vitae earum molestiae possimus veniam dicta facilis natus
            explicabo quae cum illum eum! Animi officiis natus, ullam doloribus,
            quo exercitationem perspiciatis facilis illo perferendis eaque,
            corporis quisquam cumque saepe. Aut, doloremque voluptatum mollitia
            deserunt magnam voluptatibus. Aliquam molestiae itaque praesentium
            id placeat optio illo necessitatibus officia perspiciatis. Corporis
            excepturi accusamus quis id facilis? Soluta officiis voluptates
          </p>
          <div className="row center aboutintinfo">
            <div className="col s12 m4 offset-s1 center">
              <h5>mission</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                quae eos perspiciatis provident. Eaque qui beatae nobis vel
                minus illo ut, autem, cupiditate nostrum quam dicta aliquid, e
              </p>
            </div>
            <div className="col s12 m4 offset-s1 center">
              <h5>vision</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                quae eos perspiciatis provident. Eaque qui beatae nobis vel
                minus illo ut, autem, cupiditate nostrum quam dicta aliquid,
              </p>
            </div>
            <div className="col s12 m4 offset-s1 center">
              <h5>values</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                quae eos perspiciatis provident. Eaque qui beatae nobis vel
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="team">
        <h2 className="abou center">Meet the team</h2>
        <Team />
      </div>
    </div>
  );
};

export default About;
