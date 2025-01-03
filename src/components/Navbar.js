import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import { useLocale } from './context/LocaleContext';
import { NAVIGATION_LINKS } from "./navigation/content";

import "./Navbar.scss";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const { locale } = useLocale();
  const content = NAVIGATION_LINKS[locale];

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to={content.home.link} className="navbar-item" title="Logo">
            <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
          </Link>
          {/* Hamburger menu */}
          <button
            className={`navbar-burger burger ${isActive && "is-active"}`}
            aria-expanded={isActive}
            aria-label="menu"
            onClick={() => setIsActive(!isActive)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <ul
          id="navMenu"
          className={` navbar-start has-text-centered navbar-menu ${
            isActive && "is-active"
          }`}
        >
          {/* TODO: inline override of padding is a result of refactoring
                to a ul for accessibilty purposes, would like to see a css
                re-write that makes this unneccesary.
             */}
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to={content.about.link}>
              {content.about.label}
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to={content.products.link}>
              {content.products.label}
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to={content.blog.link}>
            {content.blog.label}
            </Link>
          </li>
          <li className="navbar-item" style={{ padding: "0px" }}>
            <Link className="navbar-item" to={content.contact.link}>
            {content.contact.label}
            </Link>
          </li>
          <li className="navbar-item navbar-end has-text-centered">
            <a
              className="navbar-icon"
              href="https://www.facebook.com/windroller/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={facebook} alt="Facebook" />
              </span>
            </a>
            <a
              className="navbar-icon"
              href="https://www.instagram.com/windroller_landsailing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={instagram} alt="Instagram" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
