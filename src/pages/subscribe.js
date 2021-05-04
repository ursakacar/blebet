import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import subscriptionStyles from "../styles/pages/subpage.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import Subscribe from '../components/Subscribe'

export default function Subscription() {
  const { subscriptionData } = useSiteMetaData()
  return (
    <Layout page="subscribe" bgColor={subscriptionData.background_color}>
      <section className={subscriptionStyles.subpage_blurb}>
        <h2>
        <div dangerouslySetInnerHTML={{__html: subscriptionData.description}}></div>
        </h2>
        <Subscribe />
      </section>
      <Helmet>
        <title>Prijava na nove objave</title>
        <meta property="og:image" content="https://www.blebet.si/blebet-subscribe2.jpg" />
        <meta property="og:image:secure_url" content="https://www.blebet.si/blebet-subscribe2.jpg" />
        <meta property="og:description" content="Zaupaj mi svoj elektronski naslov in postani prvi obveščenec, ko se na Blebetu manifestira frišna objava." />
        <meta name="description" content="Zaupaj mi svoj elektronski naslov in postani prvi obveščenec, ko se na Blebetu manifestira frišna objava." />
      </Helmet>
    </Layout>
  )
}