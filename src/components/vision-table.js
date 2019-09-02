import React, { Component } from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Text, SmallText } from './typography';
import { theme } from './theme';
import { Check } from './icons';
import Tippy from "@tippy.js/react";

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/


const VisionTableWrapper = styled('table')(props => ({
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'column'
}))


const VisionRowWrapper = styled('tr')(props => ({
  display: 'flex',
  flexDirection: 'row',
  borderBottom: `1px solid ${theme.color.lightgrey}`,
  borderCollapse: 'collapse',
  padding: '10px 0',
  alignItems: 'center',
  '@media screen and (max-width: 560px)': {
    flexDirection: 'column',
  },
  '&:last-child': {
    borderBottom: 0
  }
}))

const VisionCellWrapper = styled('td')(props => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  '@media screen and (max-width: 560px)': {
    width: '100% !important',
    marginRight: 0,
    justifyContent: 'flex-start !important',
    '&:before': {
      content: 'attr(data-th)',
      display: 'inline-block',
      fontWeight: theme.weight.bold,
      fontSize: '12px',
      padding: '10px 0',
      textTransform: 'uppercase',
      color: theme.color.grey,
      textAlign: 'left',
      minWidth: '150px',
      alignItems: 'center',
    },
  }
}))


const IconWrapper = styled('div')({
  display: 'flex',
  backgroundColor: theme.color.lightgreen,
  padding: '5px',
  marginRight: '10px',
  borderRadius: '50px'
})


const TableHeaderWrapper = styled('thead')({
  display: 'flex',
  borderBottom: `1px solid ${theme.color.lightgrey}`,
  paddingBottom: '10px',
  '@media screen and (max-width: 560px)': {
    display: 'none'
  }
})

const TableHeadCellWrapper = styled('tr')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})


/*----------------------------------------------------------
   Vision Table
----------------------------------------------------------*/

export class VisionRow extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    percent: PropTypes.string,
    tooltip: PropTypes.string,
  }
  render() {
    const { name, number, percent, tooltip } = this.props;
    return (
      <VisionRowWrapper>
        <VisionCellWrapper style={{ marginRight: 'auto' }} data-th="Vision Type">
          <IconWrapper>
            <Check />
          </IconWrapper>
          <Tippy content={tooltip} duration="0" arrow="true" placement="top" animation="shift-away">
            <Text bold dark style={{ marginRight: 'auto' }}>{name}</Text>
          </Tippy>
        </VisionCellWrapper>
        <VisionCellWrapper data-th="% Global">
          <Text bold>{percent}%</Text>
        </VisionCellWrapper>
        <VisionCellWrapper style={{ width: '160px', justifyContent: 'flex-end' }} data-th="Who can see it">
          <Text align="right">~{number}</Text>
        </VisionCellWrapper>
      </VisionRowWrapper >
    );
  }
}


export class VisionTable extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    let { children } = this.props;
    return (
      <VisionTableWrapper>
        <TableHeaderWrapper>
          <TableHeadCellWrapper style={{ marginRight: 'auto', paddingLeft: '36px' }}>
            <td>
              <SmallText>
                Vision Type
              </SmallText>
            </td>
          </TableHeadCellWrapper>
          <TableHeadCellWrapper>
            <td>
              <SmallText>
                % Global
              </SmallText>
            </td>
          </TableHeadCellWrapper>
          <TableHeadCellWrapper style={{ width: '160px', display: 'flex', justifyContent: 'flex-end' }}>
            <td>
              <SmallText>
                Who can see it
              </SmallText>
            </td>
          </TableHeadCellWrapper>
        </TableHeaderWrapper>
        <tbody>
          {children}
        </tbody>
      </VisionTableWrapper>
    );
  }
}

