const config = require("./config.json")
const infoData = require("./content/data/info.json")
const cookiesData = require("./content/data/cookies.json")

require("dotenv").config({
  path: ".env.${process.env.NODE_ENV}"
})

module.exports = {
  //this makes the site config available to forestry cms
  siteMetadata: {
    title: config.title,
    description: config.description,
    repoUrl: config.repository_url,
    about: config.about,
    primaryColor: config.primary_color,
    infoData: infoData,
    cookiesData: cookiesData
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-transformer-remark",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/content/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaultQuality: 75
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          "gatsby-remark-normalize-paths",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1000,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: "process.env.MAILCHIMP_ENDPOINT",
      },
    },
  ],
}
