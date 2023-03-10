import React, { useRef, useEffect } from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"
import useBlogData from "../static_queries/useBlogData"
import * as blogTemplateStyles from "../styles/templates/blog.module.scss"
//this component handles the blur img & fade-ins
import Img from "gatsby-image"

export default function Blog(props) {
  console.log(props)
  const data = props.data.markdownRemark
  const allBlogData = useBlogData()
  const nextSlug = getNextSlug(data.fields.slug)
  const previousSlug = getPreviousSlug(data.fields.slug)
  const articleRef = useRef(null)

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

  useEffect(() => {
    if (window.location.href.includes("#")) {
      return
    }
    setTimeout(() => {
      articleRef.current.scrollIntoView(true)
    }, 10)
  })

  return (
    <Layout bgColorHeader={data.frontmatter.header_background_color}>
      <Helmet>
        <title>{data.frontmatter.post_title}</title>
        <meta property="og:url" content={props.location.href}></meta>
        <meta property="og:title" content={data.frontmatter.post_title}></meta>
        <meta property="og:author" content={data.frontmatter.post_author}></meta>
        <meta property="og:image" content={`${props.location.origin}${data.frontmatter.hero_image.childImageSharp.fluid.src}`}></meta>
        <meta
          property="og:description"
          content={data.frontmatter.post_description}
        ></meta>
        <meta name="keywords" content={data.frontmatter.post_keywords}></meta>
      </Helmet>
      <article className={blogTemplateStyles.blog} ref={articleRef}>
        <figure className={blogTemplateStyles.blog__hero}>
          <Link to="/subscribe">
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
              Fotka: {data.frontmatter.photo_credit}
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
          <Link
            to={`/blog/${nextSlug}`}
            className={blogTemplateStyles.blog__footernav}
          >
            <div>prejšnja</div>
          </Link>
          <Link
            to="/subscribe"
            className={blogTemplateStyles.blog__footersubscribe}
          >
            prijava na nove objave
          </Link>
          <Link
            to={`/blog/${previousSlug}`}
            className={blogTemplateStyles.blog__footernav}
          >
            <div>naslednja</div>
          </Link>
        </div>
        <div className={blogTemplateStyles.blog__footermobile}>
          <Link
            to={`/blog/${nextSlug}`}
            className={blogTemplateStyles.blog__footermobilenext}
          >
            <div>&#8672;</div>
          </Link>
          <Link
            to={`/blog/${previousSlug}`}
            className={blogTemplateStyles.blog__footermobileprev}
          >
            <div>&#8674;</div>
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
