import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "../styles/components/header.module.scss"
import fbLogo from "../assets/logo-facebook.png"
import fbLogoW from "../assets/logo-facebook-white.png"
import instaLogo from "../assets/logo-instagram.png"
import instaLogoW from "../assets/logo-instagram-white.png"

export default function Header(props) {
  return (
    <header
      style={{ backgroundColor: props.bgColorHeader }}
      className={`${headerStyles.header} ${(props.page === "info" ||
        props.page === "subscribe" ||
        props.page === "privacy") &&
        headerStyles.sub_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/" className={headerStyles.blogname}>
          <h1>{props.title}</h1>
        </Link>
        <div className={headerStyles.subpage__nav}>
          <div>
            <h2>
              <Link
                to={props.page === "info" ? "/" : "/info"}
                activeClassName={headerStyles.navItemActive}
              >
                {props.page === "info" ? "Ni fore." : "Kaj je fora?"}
              </Link>
            </h2>
          </div>
          <div>
            <h2>
              <Link
                to={props.page === "subscribe" ? "/" : "/subscribe"}
                activeClassName={headerStyles.navItemActive}
              >
                {props.page === "subscribe"
                  ? "Daj mi mail."
                  : "Nove objave?"}
              </Link>
            </h2>
          </div>
          <div>
            <h2>
              <Link
                to={props.page === "privacy" ? "/" : "/privacy"}
                activeClassName={headerStyles.navItemActive}
              >
                {props.page === "privacy" ? "Ni piškotkov." : "Piškotki?"}
              </Link>
            </h2>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div>
          <ul>
            <li>
              <a
                href={`https://instagram.com/blebetalka`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    props.page === "privacy" ||
                    props.page === "info" ||
                    props.page === "subscribe"
                      ? instaLogoW
                      : instaLogo
                  }
                  alt="insta-logo"
                  className={headerStyles.socialIcon}
                />
              </a>
              <a
                href={`https://www.facebook.com/blebetalka`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    props.page === "privacy" ||
                    props.page === "info" ||
                    props.page === "subscribe"
                      ? fbLogoW
                      : fbLogo
                  }
                  alt="facebook-logo"
                  className={headerStyles.socialIcon}
                  color="red"
                />
              </a>
            </li>
            <li>
              <a href={`mailto:ursa@blebet.si`}> {`ursa@blebet.si`}</a>
            </li>
            <li>&copy; {new Date().getFullYear()} Urša Kačar</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
