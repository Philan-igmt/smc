import React from "react";
import "./Contact.css";
import Workwith from "./Workwith";

const Contact = () => {
  return (
    <div>
      <div className="toppart">
        <h2 className="cont">Contact us!</h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14216.246383392145!2d30.7832167!3d-27.0282195!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9a007ea5686615e2!2sMkhondo%20Youth%20Development%20Centre!5e0!3m2!1sen!2sza!4v1596737194021!5m2!1sen!2sza"
        width="100%"
        height="400px"
      ></iframe>

      <div className="row">
        <div className="col s12 m6">
          <h4 className="center">GET IN TOUCH</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            laboriosam amet aspernatur corporis quaerat aliquam praesentium
            dolorum explicabo molestias obcaecati?
          </p>
          <div className="address">
            <a href="#!" className="btn btn-floating btn-large">
              <i className="material-icons black">room</i>
            </a>
            <div className="insideaddress">
              <h5>ADDRESS</h5>
              <h6>Lorem ipsum dolor sit amet consectetur.</h6>
            </div>
          </div>

          <div className="address">
            <a href="#!" className="btn btn-floating btn-large">
              <i className="material-icons black">phone</i>
            </a>
            <div className="insideaddress">
              <h5>PHONE</h5>
              <h6>012-232-1233 | 011-133-3425</h6>
            </div>
          </div>
          <div className="address">
            <a href="#!" className="btn btn-floating btn-large">
              <i className="material-icons left black">email </i>
            </a>
            <div className="insideaddress">
              <h5>EMAIL</h5>
              <h6>sibongokuhle@gmail.com</h6>
            </div>
          </div>
        </div>
        <div className="col s12 m6">
          <Workwith />
        </div>
      </div>
    </div>
  );
};

export default Contact;
