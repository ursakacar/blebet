import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"
import useBlogData from "../static_queries/useBlogData"
import blogTemplateStyles from "../styles/templates/blog.module.scss"
//this component handles the blur img & fade-ins
import Img from "gatsby-image"

export default function Blog(props) {
  const data = props.data.markdownRemark
  const allBlogData = useBlogData()
  const nextSlug = getNextSlug(data.fields.slug)
  const previousSlug = getPreviousSlug(data.fields.slug)

  function getNextSlug(slug) {
    const allSlugs = allBlogData.map(blog => {
      return blog.node.fields.slug
    })
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
    if (nextSlug !== undefined && nextSlug !== "") {
      return nextSlug
    } else {
      return allSlugs[0]
    }
  }

  function getPreviousSlug(slug) {
    const allSlugs = allBlogData.map(blog => {
      return blog.node.fields.slug
    })
    const previousSlug = allSlugs[allSlugs.indexOf(slug) - 1]
    if (previousSlug !== undefined && previousSlug !== "") {
      return previousSlug
    } else {
      const slugLength = allSlugs.length
      return allSlugs[slugLength - 1]
    }
  }

  return (
    <Layout bgColorHeader={data.frontmatter.header_background_color}>
      <Helmet>
        <title>{data.frontmatter.post_title}</title>
        <meta name="author" content={data.frontmatter.post_author}></meta>
        <meta
          name="description"
          content={data.frontmatter.post_description}
        ></meta>
        <meta name="keywords" content={data.frontmatter.post_keywords}></meta>
      </Helmet>
      <article className={blogTemplateStyles.blog}>
        <figure className={blogTemplateStyles.blog__hero}>
          <Link to="/subscription">
            <Img
              fluid={data.frontmatter.hero_image.childImageSharp.fluid}
              alt={data.frontmatter.post_title}
            />
          </Link>
          <div className={blogTemplateStyles.blog__photocredit}>
            <a
              href={`https://unsplash.com/${data.frontmatter.photo_credit_handle}`}
              className="photo__credit"
              target="_blank"
              rel="noopener nofollow noreferrer"
            >
              Fotka: {data.frontmatter.photo_credit} / Unsplash
            </a>
          </div>
        </figure>
        <div className={blogTemplateStyles.blog__info}>
          <h1>{data.frontmatter.post_title}</h1>
          <h3>{data.frontmatter.date}</h3>
        </div>
        <div
          className={blogTemplateStyles.blog__body}
          dangerouslySetInnerHTML={{ __html: data.html }}
        ></div>
        <div className={blogTemplateStyles.blog__footer}>
          <Link to={`blog/${nextSlug}`}>
            <div>prejšnja</div>
          </Link>
          <Link
            to="/subscription"
            className={blogTemplateStyles.blog__footersubscribe}
          >
            prijava na nove objave
          </Link>
          <Link to={`blog/${previousSlug}`}>
            <div>naslednja</div>
          </Link>
        </div>
        <div>
          <h4></h4>
        </div>
      </article>
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        post_author
        post_title
        post_description
        post_keywords
        date(formatString: "DDMMYYYY")
        photo_credit
        photo_credit_handle
        header_background_color
        hero_image {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`
