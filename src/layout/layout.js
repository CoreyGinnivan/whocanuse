import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import favicon from '../images/favicon.ico'

import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeaderQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>4
          <meta name="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="description" content="Find out who can use your color combination" />
          <meta name="keywords" content="accessibility, color, contrast, tool" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Who Can Use" />
          <meta property="og:title" content="Find out who can use your color combination" />
          <meta property="og:description" content="A tool that brings attention and understanding to how color contrast can affect different people with visual impairments." />
          <meta property="og:image" content={require('!!url-loader?../images/whocanuse_600.png')} />
          <meta property="og:url" content="https://www.whocanuse.com/" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="600" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@coreyginnivan" />
          <meta name="twitter:title" content="Who Can Use" />
          <meta name="twitter:description" content="Find out who can use your color combination. Whocanuse is a tool that brings attention and understanding to how color contrast can affect different people that have visual impairments." />
          <meta name="twitter:image" content={require('!!url-loader?../images/whocanuse_600.png')} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <script async defer src="https://buttons.github.io/buttons.js"></script>
        </Helmet>
        <div>{children}</div>
      </React.Fragment>
    )} />)

export default Layout