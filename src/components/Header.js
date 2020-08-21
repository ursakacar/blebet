import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

export default function Header(props) {
  return (
    <header
      className={`${headerStyles.header} ${(props.page === 'info' || props.page === 'cookies') &&
        headerStyles.sub_page}`}
    >
      <nav
        className={headerStyles.header__nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <h1>{props.title}</h1>
        </Link>
        <div
        className={headerStyles.subpage__nav}
        >
          <div>
            <h2>
              <Link
                to={
                  props.page === 'info'
                  ? "/"
                  : "/info"
                }
                activeClassName={headerStyles.navItemActive}
                >
                {props.page === 'info'
                  ? "• Ni fore."
                  : "• Kaj je fora?"}
              </Link>
            </h2>
          </div>
          <div>
            <h2>
              <Link
                to={
                  props.page === 'cookies'
                  ? "/"
                  : "/cookies"
                }
                activeClassName={headerStyles.navItemActive}
                >
                {props.page === 'cookies'
                  ? "• Zastonj piškotki!"
                  : "• Ta stran uporablja piškotke."}
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
            <a href={`https://instagram.com/4050.32`} target ="_blank">
              Instič: @4050.32
            </a>
          </li>
          <li>
              <a href={`mailto:ursa@blebet.si`}> {`ursa@blebet.si`}</a>
          </li>
              <li>&copy; Urša Kačar 2020</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}