import React from "react";
import { TiThMenu } from "react-icons/ti";

const Header = ({ isOpen }) => {
  return (
    <div className="header">
      <div className="header__container w-100 d-flex align-items-center">
        <div className="header__title">CUBO</div>

        <div className="d-flex">
          {/* <div className="sidebar__toggle">
                        <div className="sidebar__toggle__toggle-inner"/>
                    </div> */}
          <TiThMenu
            className="header__menu"
            size="1.5em"
            onClick={() => isOpen()}
          />
        </div>

        {/* <div>
                    <Link className="header__link">Home</Link>
                    <Link className="header__link">About Us</Link>
                    <Link className="header__link">Services</Link>
                    <Link className="header__link">Contact us</Link>
                    <i >s</i>
                </div> */}
        {/* <div>
          <button className="header__button">Get Started</button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
