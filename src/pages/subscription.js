import React from "react"
import Layout from "../components/Layout"
import Helmet from "react-helmet"
import subscriptionStyles from "../styles/pages/subpage.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import Subscribe from '../components/Subscribe'
import subscribeImage from "../assets/blebet-subscribe2.jpg"

export default function Subscription() {
  const { subscriptionData } = useSiteMetaData()
  return (
    <Layout page="subscription" bgColor={subscriptionData.background_color}>
      <section className={subscriptionStyles.subpage_blurb}>
        <h2>
        <div dangerouslySetInnerHTML={{__html: subscriptionData.description}}></div>
        </h2>
        <Subscribe />
      </section>
      <Helmet>
        <title>Prijava na nove objave</title>
        <meta property="og:image" content={subscribeImage} />
        <meta property="og:description" content="Zaupajte mi svoj elektronski naslov in postanite prvi obveščenec, ko se na Blebetu manifestira frišna objava." />
        <meta name="description" content="Zaupajte mi svoj elektronski naslov in postanite prvi obveščenec, ko se na Blebetu manifestira frišna objava." />
      </Helmet>
    </Layout>
  )
}