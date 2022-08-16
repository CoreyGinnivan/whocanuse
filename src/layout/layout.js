import React from 'react'
import SEO from '../components/seo'

const Layout = ({ children, background }) => (
  <React.Fragment>
    <SEO title="WhoCanUse" background={background} />
    <div>{children}</div>
  </React.Fragment>
)

export default Layout
