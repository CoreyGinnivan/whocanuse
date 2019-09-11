import React, { Component } from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Text, SmallText } from './typography';
import { theme } from './theme';
import { Check } from './icons';

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
  background: '#FFFFFF',
  boxShadow: '0 2px 6px 0 rgba(0,0,0,0.14), 0 2px 4px 0 rgba(0,0,0,0.12)',
  borderRadius: '8px',
  padding: '14px',
  marginBottom: '10px',
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
  justifyContent: 'start',
  alignItems: 'center',
  '@media screen and (max-width: 560px)': {
    width: '100% !important',
    marginRight: 0,
    justifyContent: 'flex-start !important',
    paddingBottom: '10px 0',
    marginLeft: '0 !important',
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
  marginBottom: '20px',
  '@media screen and (max-width: 560px)': {
    display: 'none'
  }
})

const TableHeadCellWrapper = styled('tr')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
})

const Simulation = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '90px',
  height: '60px',
  background: '#663399',
  boxShadow: 'inset 0 0 3px 0 rgba(0, 0, 0, 0.16)',
  borderRadius: '6px',
  color: '#FFFFFF',
  overflow: 'hidden'
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
    const { name, number, percent, description } = this.props;
    return (
      <VisionRowWrapper>
        <VisionCellWrapper data-th="Pass Or Fail">
          <IconWrapper>
            <Check />
          </IconWrapper>
        </VisionCellWrapper>
        <VisionCellWrapper style={{ marginRight: 'auto' }} data-th="Vision Type">
          <Text bold dark>{name}
            <Text style={{ fontSize: '14px' }}>{description}</Text>
          </Text>
        </VisionCellWrapper>
        <VisionCellWrapper style={{ minWidth: '30px', marginLeft: '40px' }} data-th="% Global">
          <Text bold>{percent}%</Text>
        </VisionCellWrapper>
        <VisionCellWrapper style={{ minWidth: '160px', justifyContent: 'flex-end' }} data-th="Who can see it">
          <Text align="right">~{number}</Text>
        </VisionCellWrapper>
        <VisionCellWrapper style={{ marginLeft: '20px' }} data-th="Simulation">
          <Simulation>
            Text
          </Simulation>
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
          <TableHeadCellWrapper style={{ marginRight: 'auto', paddingLeft: '57px' }}>
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
                Who can't see it
              </SmallText>
            </td>
          </TableHeadCellWrapper>
          <TableHeadCellWrapper style={{ width: '126px', display: 'flex', justifyContent: 'center' }}>
            <td>
              <SmallText>
                Simulation
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

