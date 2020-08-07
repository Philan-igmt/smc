import React from "react";
import "./Workwith.css";

function Workwith() {
  return (
    <div>
      <h4 className="center">WORK WITH US!</h4>
      <form className="contactform">
        <fieldset>
          <legend>send us a message</legend>
          <div className="input-field  ">
            <input id="name" type="text" className="validate" />
            <label htmlFor="name">
              <i className="material-icons left">account_circle</i>Name
            </label>
          </div>
          <div className="input-field ">
            <input id="email" type="email" className="validate" />
            <label htmlFor="email">
              <i className="material-icons left">email</i>Email
            </label>
          </div>
          <div className="input-field  ">
            <textarea
              name="message"
              placeholder="message..."
              id=""
              cols="60"
              rows="10"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="btn black">
              <span>send</span>
              <i className="material-icons right">send</i>
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Workwith;
