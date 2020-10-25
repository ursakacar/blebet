import { graphql, useStaticQuery } from "gatsby"

export default function useBlogData() {
  const data = useStaticQuery(graphql`
    query getBlogData {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            id
            frontmatter {
              post_author
              post_description
              post_title
              date(formatString: "DDMMYYYY")
              photo_credit
              photo_credit_handle
              header_background_color
              hero_image {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            excerpt(pruneLength: 200)
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}
