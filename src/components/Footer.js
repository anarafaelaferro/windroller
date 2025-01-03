import * as React from "react";
import { Link } from "gatsby";

import LanguageSwitcher from "./LanguageSwitch";
import { useLocale } from './context/LocaleContext';
import { NAVIGATION_LINKS } from "./navigation/content";

import logo from "../img/logo-white.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";

const Footer = () => {
  const { locale } = useLocale();
  const content = NAVIGATION_LINKS[locale];

    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <img
                    src={logo}
                    alt="Kaldi"
                    style={{ height: "150px", marginBottom: "20px" }}
                  />
                </section>
              </div>
              <div className="column is-3">
              <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to={content.home.link}>
                        {content.home.label}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={content.about.link}>
                        {content.about.label}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={content.products.link}>
                        {content.products.label}
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to={content.blog.link}>
                        {content.blog.label}
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to={content.contact.link}>
                        {content.contact.label}
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-2 social">
                <a title="facebook" href="https://www.facebook.com/windroller/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/windroller_landsailing/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
