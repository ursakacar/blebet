import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import infoStyles from "../styles/pages/subpage.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="info" bgColor={infoData.background_color}>
      <section className={infoStyles.subpage_blurb}>
        <h2>
          <div dangerouslySetInnerHTML={{__html: infoData.description}}></div>
        </h2>
      </section>
      <Helmet>
        <title>O meni. Mogoče.</title>
        <meta property="og:image" content="https://www.blebet.si/blebet-info.jpg" />
        <meta property="og:description" content="Kdo in zakaj je Blebetalka?" />
        <meta name="description" content="Kdo in zakaj je Blebetalka?" />
      </Helmet>
    </Layout>
  )
}