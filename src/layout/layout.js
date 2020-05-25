import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'

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
        <SEO title="WhoCanUse" />
        <div>{children}</div>
      </React.Fragment>
    )}
  />
)

export default Layout
