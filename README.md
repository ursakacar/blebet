<h1 align="center">
  Blebet
</h1>


## Project Structure 

- Site-level configuration is stored in `config.json` so it can be exposed to Forestry. This file is loaded in the `gatsby-config.js` to configure Gatsby and all it to be accessible via siteMetaData in your graphql queries.
- Access any of Gatsby's [browser api's](https://www.gatsbyjs.org/docs/browser-apis/) via the `gatsby-browser.js`, or load global styles etc.
- Add and access plugin options or siteMetaData via `gatsby-config.js`
- Access Gatsby's [node api's](https://www.gatsbyjs.org/docs/node-apis/) via `gatsby-node.js`. This is where the creation of new blog pages or nodes is handled. 
- Edit styles via `src/styles/...`
- `content/`contains all your markdown blog posts, images & data files (e.g. info page data). 
- `src/pages` is a very important and required directory for Gatsby. This is where all your pages for the site live. 
- Blog posts are built from a template that can be accessed at `src/templates`. 
- The pages & template are comprised of components from `src/components`.

  Built with [Brevifolia](https://www.gatsbyjs.org/starters/kendallstrautman/brevifolia-gatsby-forestry/)