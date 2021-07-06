import React from "react";
import logo from "../../resources/fewcentsLogo.png"

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="leftSide">
              <img src={logo} alt="Logo"/>
        </div>
        <div className="rightSide">
          <div className="links">
            <a href="/feedback">Feedback</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
