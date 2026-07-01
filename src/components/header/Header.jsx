import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/me.webp";
import HeaderSocials from "./HeaderSocials";
import ToptalBadge from "../ToptalBadge";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Baibhav KC</h1>
        <h5 className="text-light">Senior Frontend Developer</h5>
        <a className="mt-2 inline-block" href="https://www.toptal.com/developers/resume/baibhav-kc#vZ1OVv" target="_blank" rel="noopener noreferrer">
          Hire me on Toptal
        </a>
        <ToptalBadge />
        <CTA />
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#footer" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
