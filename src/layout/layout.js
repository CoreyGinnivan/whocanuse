import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

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
          <title>{data.site.siteMetadata.title}</title>
          <meta name="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="description" content="The last personal task organiser you'll ever need." />
          <meta name="keywords" content="to-do, tasks, task manager, achieve your goals, organised" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Blocks" />
          <meta property="og:title" content="The last personal task organiser you'll ever need." />
          <meta property="og:description" content="The perfect tool for the checklist-lover who juggles multiple tasks in the air at any given time." />
          <meta property="og:image" content="http://corey.ginnivan.net/images/home/blocks_600.png" />
          <meta property="og:url" content="https://www.blocks.do/" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="600" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@blocks_app" />
          <meta name="twitter:title" content="Blocks" />
          <meta name="twitter:description" content="The last personal task organiser you'll ever need. Blocks is the perfect tool for the checklist-lover who juggles multiple tasks in the air at any given time." />
          <meta name="twitter:image" content="http://corey.ginnivan.net/images/home/blocks_600.png" />
        </Helmet>
        <div>{children}</div>
      </React.Fragment>
    )} />)

export default Layout