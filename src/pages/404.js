import React from "react"
import Layout from "../components/Layout"
import notFoundStyles from "../styles/pages/404.module.scss"

export default function NotFound() {
  return (
    <Layout page="404" bgColor="#9d3d85">
      <div className={notFoundStyles.notFound__container}>
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={notFoundStyles.notFound__message}>
            Stran ne obstaja.
          </h2>{" "}
          <h2 className={notFoundStyles.notFound__message}>
            Mogoče nikoli ni obstajala, ali pa samo ne obstaja več.
          </h2>
          <h2 className={notFoundStyles.notFound__message}>
            Mogoče nekoč bo obstajala? Mogoče nikoli. Verjetno nikoli.
          </h2>
        </a>
      </div>
    </Layout>
  )
}
