import React from "react";
import "./Home.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    //initializing materialize css JS
    M.AutoInit();
  });
  return (
    <div className="home">
      <h2 className="logo black-text center">Sibongokuhle Creative Minds</h2>
      <div className="center button">
        <button className="btn black white-text c btn-large">Contact us</button>
      </div>

      <div className="fixed-action-btn">
        <a className="btn-floating btn-large waves-effect waves-light black fixed">
          <i className="material-icons">phone</i>
        </a>
        <ul>
          <li>
            <a href="#!" className="btn btn-floating black btn-large">
              <FaFacebookF
                size="40.15px"
                color="blue"
                style={{ marginTop: "7px" }}
              />
            </a>
          </li>
          <li>
            <a href="#!" className="btn btn-floating black btn-large">
              <FaTwitter
                size="40.15px"
                color="aqua"
                style={{ marginTop: "7px" }}
              />
            </a>
          </li>
          <li>
            <a href="#!" className="btn btn-floating black btn-large">
              <FaInstagram
                size="48.15px"
                color="brown"
                className="center"
                style={{ marginTop: "5px" }}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
