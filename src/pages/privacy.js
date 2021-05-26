import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import privacyStyles from "../styles/pages/subpage.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Cookies() {
  const { privacyData } = useSiteMetaData()
  return (
    <Layout page="privacy" bgColor={privacyData.background_color}>
      <section className={privacyStyles.subpage_blurb}>
        <h2>
          <div
            dangerouslySetInnerHTML={{ __html: privacyData.description }}
          ></div>
        </h2>
      </section>
      <Helmet>
        <title>Ni piškotkov.</title>
        <meta property="og:image" content="https://www.blebet.si/blebet-privacy.jpg" />
        <meta property="og:image:secure_url" content="https://www.blebet.si/blebet-privacy.jpg" />
        <meta property="og:description" content="Spletišče Blebet ne uporablja piškotkov." />
        <meta name="description" content="Spletišče Blebet ne uporablja piškotkov." />
      </Helmet>
    </Layout>
  )
}
