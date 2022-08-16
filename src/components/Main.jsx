import React from "react";
import mail from "../assets/mail.svg";
import linked_in from "../assets/linked_in.svg";

export default function Main() {
  return (
    <div className="main">
      <h3 className="name">Bishwasta Magar</h3>
      <h5 className="role">Frontend Developer</h5>
      <h6 className="site">
        <a href="">bishwastamagar.website</a>{" "}
      </h6>
      <div className="buttons">
        <a className="email" href="">
          <img src={mail} alt="" /> Email
        </a>
        <a className="linked-in" href="">
          <img src={linked_in} alt="" /> LinkedIn
        </a>
      </div>
    </div>
  );
}
