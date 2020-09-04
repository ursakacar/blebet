import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query getMetadata {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          repoUrl
          siteUrl
          infoData {
            description
            background_color
          }
          subscriptionData {
            description
            background_color
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}