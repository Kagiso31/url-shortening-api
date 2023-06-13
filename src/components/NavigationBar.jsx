import logo from "../images/logo.svg";
import { useState } from "react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((current) => !current);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a className="logo" href="/">
          <img src={logo} alt="Shortly logo" />
        </a>

        <button
          type="button"
          onClick={handleClick}
          className="btn-hamburger mobile-only"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={isOpen ? "menu mobile-only open" : "menu mobile-only"}>
          <ul className="menu-list">
            <li className="menu-link">
              <a href="#">Features</a>
            </li>
            <li className="menu-link">
              <a href="#">Pricing</a>
            </li>
            <li className="menu-link">
              <a href="#">Resources</a>
            </li>
            <hr />
            <li className="menu-link">
              <a href="#">Login</a>
            </li>
          </ul>
          <button type="button" className="btn btn-menu">
            Sign Up
          </button>
        </div>

        <div className="links-container desktop-only">
          <ul className="links-list">
            <li className="link">
              <a href="#">Features</a>
            </li>
            <li className="link">
              <a href="#">Pricing</a>
            </li>
            <li className="link">
              <a href="#">Resources</a>
            </li>
            <li className="link">
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
        <button type="button" className="btn btn-nav desktop-only">
          Sign Up
        </button>
      </nav>
    </header>
  );
};

export default NavigationBar;
