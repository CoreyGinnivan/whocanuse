import React from 'react'
import PropTypes from 'prop-types'
import SEO from '../components/seo'

const Layout = ({ children, backgroundHex }) => (
  <React.Fragment>
    <SEO title="WhoCanUse" backgroundHex={backgroundHex} />
    <div>{children}</div>
  </React.Fragment>
)

export default Layout

Layout.propTypes = {
  backgroundHex: PropTypes.string,
  children: PropTypes.node,
}
