import React from "react"
import Layout from "../components/Layout"
import cookiesStyles from "../styles/pages/subpage.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Cookies() {
  const { cookiesData } = useSiteMetaData()
  return (
    <Layout page="cookies" bgColor={cookiesData.background_color}>
      <section className={cookiesStyles.subpage_blurb}>
        <h2>
          <div
            dangerouslySetInnerHTML={{ __html: cookiesData.description }}
          ></div>
        </h2>
      </section>
    </Layout>
  )
}
