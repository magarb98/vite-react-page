import React from "react";
import twitter from "../../public/twitter.png";
import facebook from "../../public/facebook.png";
import instagram from "../../public/instagram.png";
import github from "../../public/github.png";

export default function Footer() {
  return (
    <footer>
      <a href="">
        <img src={twitter} alt="" />
      </a>
      <a href="">
        <img src={facebook} alt="" />
      </a>
      <a href="">
        <img src={instagram} alt="" />
      </a>
      <a href="https://github.com/magarb98">
        <img src={github} alt="" />
      </a>
    </footer>
  );
}
