import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { VisionTableWrapper } from './styled'

export class VisionTable extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    let { children } = this.props
    return (
      <VisionTableWrapper>
        <tbody>{children}</tbody>
      </VisionTableWrapper>
    )
  }
}
