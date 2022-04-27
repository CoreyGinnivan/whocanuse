import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SmallText } from '../typography'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import {
  VisionTableWrapper,
  TableHeaderWrapper,
  TableHeadCellWrapper,
} from './styled'

export class VisionTable extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    let { children } = this.props
    return (
      <VisionTableWrapper>
        <TableHeaderWrapper>
          <TableHeadCellWrapper style={{ paddingLeft: '6px' }}>
            <Tippy
              content="Estimated affected population"
              duration="0"
              arrow={true}
              placement="top"
              animation="shift-away"
            >
              <td>
                <SmallText>~Population</SmallText>
              </td>
            </Tippy>
          </TableHeadCellWrapper>
          <TableHeadCellWrapper
            style={{ marginRight: 'auto', paddingLeft: '15px' }}
          >
            <td>
              <SmallText>Vision Type</SmallText>
            </td>
          </TableHeadCellWrapper>
          <TableHeadCellWrapper
            style={{
              width: '126px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <td>
              <SmallText>Simulation</SmallText>
            </td>
          </TableHeadCellWrapper>
        </TableHeaderWrapper>
        <tbody>{children}</tbody>
      </VisionTableWrapper>
    )
  }
}
