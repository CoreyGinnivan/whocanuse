import React from 'react'
import SEO from '../components/seo'

const Layout = ({ children }) => (
  <React.Fragment>
    <SEO title="WhoCanUse" />
    <div>{children}</div>
  </React.Fragment>
)

export default Layout
