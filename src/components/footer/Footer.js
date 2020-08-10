import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h6>
        Made with <i className="material-icons red-text center">favorite</i> by
        <a href="https://www.facebook.com/philani.phila.7792" target="_blank">
          {" "}
          Philani Phila
        </a>
        <p> Copyright &copy; 2020</p>
      </h6>
    </div>
  );
}

export default Footer;
