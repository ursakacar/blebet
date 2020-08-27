import React from "react"
import Layout from "../components/Layout"
import infoStyles from "../styles/pages/subpage.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import Subscribe from '../components/Subscribe'

export default function Info() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout page="info" bgColor={infoData.background_color}>
      <section className={infoStyles.subpage_blurb}>
        <h2>
          <div dangerouslySetInnerHTML={{__html: infoData.description}}></div>
        </h2>
      </section>
    </Layout>
  )
}