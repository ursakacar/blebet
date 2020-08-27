import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
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
    // debugger
    const previousSlug = allSlugs[allSlugs.indexOf(slug) - 1]
    if (previousSlug !== undefined && previousSlug !== "") {
      return previousSlug
    } else {
      const slugLength = allSlugs.length
      return allSlugs[slugLength-1]
    }
  }

  return (
    <Layout>
      <article className={blogTemplateStyles.blog}>
        <figure className={blogTemplateStyles.blog__hero}>
          <Img
            fluid={data.frontmatter.hero_image.childImageSharp.fluid}
            alt={data.frontmatter.title}
          />
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
          <h1>{data.frontmatter.title}</h1>
          <h3>{data.frontmatter.date}</h3>
        </div>
        <div
          className={blogTemplateStyles.blog__body}
          dangerouslySetInnerHTML={{ __html: data.html }}
        ></div>
        <div className={blogTemplateStyles.blog__footer}>
          <Link
            to={`blog/${nextSlug}`}
            className={blogTemplateStyles.footer__next}
          >
            <div>prejšnja</div>
          </Link>
          <Link
            to={`blog/${previousSlug}`}
            className={blogTemplateStyles.footer__next}
          >
            <div>naslednja</div>
          </Link>
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
        title
        date(formatString: "MMYYYY")
        photo_credit
        photo_credit_handle
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
