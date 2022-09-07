import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { GlobalContext } from "context/GlobalState";

const Sidebar = ({ toggle, isOpen }) => {
  const { dark, toggleDark } = useContext(GlobalContext);

  const linkClasses = classNames("sidebar__format", {
    "sidebar__is-open": toggle,
  });
  const overlayClass = classNames("sidebar__overlay", {
    "sidebar__is-open-overlay": toggle,
  });
  const toggleClass = classNames("sidebar__toggle__toggle-inner", {
    sidebar__toggle__active: dark,
  });

  useEffect(() => {
    toggle
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "scroll");
  }, [toggle]);

  return (
    <div className="sidebar">
      <div className={linkClasses}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <Link to="#" className="sidebar__link">
            Home
          </Link>
          <Link to="#" className="sidebar__link">
            About Us
          </Link>
          <Link to="#" className="sidebar__link">
            Services
          </Link>
          <Link to="#" className="sidebar__link">
            Contact us
          </Link>

          <div
            className="sidebar__toggle"
            onClick={() => {
              toggleDark();
            }}
          >
            <div className={toggleClass} />
          </div>

          <div className="mt-5">
            <button className="sidebar__button">Get Started</button>
          </div>
        </div>
      </div>
      <div
        className={overlayClass}
        onClick={() => (toggle ? isOpen() : null)}
      />
    </div>
  );
};

export default Sidebar;
