import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"
import fbLogo from "../assets/logo-facebook.png"
import fbLogoW from "../assets/logo-facebook-white.png"
import instaLogo from "../assets/logo-instagram.png"
import instaLogoW from "../assets/logo-instagram-white.png"

export default function Header(props) {
  return (
    <header
      style={{ backgroundColor: props.bgColorHeader }}
      className={`${headerStyles.header} ${(props.page === "info" ||
        props.page === "subscription" ||
        props.page === "cookies") &&
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
                to={props.page === "subscription" ? "/" : "/subscription"}
                activeClassName={headerStyles.navItemActive}
              >
                {props.page === "subscription"
                  ? "Daj mi mail."
                  : "Nove objave?"}
              </Link>
            </h2>
          </div>
          <div>
            <h2>
              <Link
                to={props.page === "cookies" ? "/" : "/cookies"}
                activeClassName={headerStyles.navItemActive}
              >
                {props.page === "cookies" ? "Ni piškotkov." : "Piškotki?"}
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
                    props.page === "cookies" ||
                    props.page === "info" ||
                    props.page === "subscription"
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
                    props.page === "cookies" ||
                    props.page === "info" ||
                    props.page === "subscription"
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
            <li>&copy; Urša Kačar 2021</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
