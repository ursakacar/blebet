import React from "react"
import Header from "./Header"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import layoutStyles from "../styles/components/layout.module.scss"

export default function Layout(props) {
  const { title, description, author, keywords } = useSiteMetadata()
  return (
    <section
      className={`${layoutStyles.layout} ${(props.page === "info" ||
        props.page === "subscription" ||
        props.page === "cookies" ||
        props.page === "404") &&
        layoutStyles.sub_page}`}
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <Helmet>
        <html lang="sl" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="author" content={author} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <Header
        page={props.page}
        title={title}
        bgColorHeader={props.bgColorHeader}
      />
      <div className={layoutStyles.content}>{props.children}</div>
    </section>
  )
}
