import React, { Component } from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Text, SmallText, Heading } from './typography';
import { theme } from './theme';
import chroma from "chroma-js";
import blinder from 'color-blind';

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/



const VisionTableWrapper = styled('table')({
  marginTop: '40px',
  display: 'flex',
  flexDirection: 'column',
  'tbody > tr:last-child': {
    borderBottom: 0
  },
  'tbody': {
    boxShadow: '0 2px 6px 0 rgba(0,0,0,0.14), 0 2px 4px 0 rgba(0,0,0,0.12)',
    borderRadius: '8px',
    overflow: 'hidden'
  }
})



const VisionRowWrapper = styled("tr")(({ pass }) => ({
  display: 'flex',
  flexDirection: 'row',
  background: '#FFFFFF',
  borderBottom: '1px solid #f1f1f1',
  backgroundColor: pass ? theme.color.white : theme.color.lightred,
  padding: '14px',
  alignItems: 'center',
  '@media screen and (max-width: 560px)': {
    flexDirection: 'column',
  },
  'p': {
    color: pass ? null : theme.color.red,
  },
}));


const VisionCellWrapper = styled("td")(({ pass }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'flex-start',
  '@media screen and (max-width: 560px)': {
    width: '100% !important',
    marginRight: 0,
    justifyContent: 'flex-start !important',
    paddingBottom: '10px',
    marginLeft: '0 !important',
    flexDirection: 'row',
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
}));

const PercentWrapper = styled("div")(({ pass }) => ({
  display: 'flex',
  color: pass ? theme.color.green : theme.color.red,
  justifyContent: 'center',
  width: '80px',
  alignItems: 'center',
  height: '60px',
  padding: '5px',
  marginRight: '10px',
  'h1': {
    color: pass ? theme.color.green : theme.color.red,
  },
  '@media screen and (max-width: 560px)': {
    justifyContent: 'flex-start',
    width: 'auto',
    height: 'auto',
  }
}));

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
  position: 'relative',
  width: '90px',
  height: '60px',
  userSelect: 'none',
  borderRadius: '6px',
  overflow: 'hidden',
  boxShadow: '0 0 0px 1px rgba(0,0,0,0.1)',
})

const SimulationFilter = styled('div')(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: "absolute",
  top: '-10px',
  left: '-10px',
  width: '110px',
  height: '80px',
  background: '#' + props.background,
  color: '#' + props.foreground,
  userSelect: 'none'
}))


/*----------------------------------------------------------
   Vision Table
----------------------------------------------------------*/


export class VisionRow extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    percent: PropTypes.string,
    tooltip: PropTypes.string,
    foreground: PropTypes.string,
    background: PropTypes.string,
    class: PropTypes.string,
  }
  render() {
    const { name, number, percent, description, foreground, background, simType, contrastThreshold } = this.props;

    let simulatedForeground = foreground
    let simulatedBackground = background

    if (simType === 'protanomaly') {
      simulatedForeground = blinder.protanomaly(`#${foreground}`).replace('#', '')
      simulatedBackground = blinder.protanomaly(`#${background}`).replace('#', '')
    }

    if (simType === 'protanopia') {
      simulatedForeground = blinder.protanopia(`#${foreground}`).replace('#', '')
      simulatedBackground = blinder.protanopia(`#${background}`).replace('#', '')
    }

    if (simType === 'deuteranomaly') {
      simulatedForeground = blinder.deuteranomaly(`#${foreground}`).replace('#', '')
      simulatedBackground = blinder.deuteranomaly(`#${background}`).replace('#', '')
    }

    if (simType === 'deuteranopia') {
      simulatedForeground = blinder.deuteranopia(`#${foreground}`).replace('#', '')
      simulatedBackground = blinder.deuteranopia(`#${background}`).replace('#', '')
    }

    if (simType === 'tritanomaly') {
      simulatedForeground = blinder.tritanomaly(`#${foreground}`).replace('#', '')
      simulatedBackground = blinder.tritanomaly(`#${background}`).replace('#', '')
    }

    if (simType === 'tritanopia') {
      simulatedForeground = blinder.tritanopia(`#${foreground}`).replace('#', '')
      simulatedBackground = blinder.tritanopia(`#${background}`).replace('#', '')
    }

    if (simType === 'achromatomaly') {
      simulatedForeground = blinder.achromatomaly(`#${foreground}`).replace('#', '')
      simulatedBackground = blinder.achromatomaly(`#${background}`).replace('#', '')
    }

    if (simType === 'achromatopsia') {
      simulatedForeground = blinder.achromatopsia(`#${foreground}`).replace('#', '')
      simulatedBackground = blinder.achromatopsia(`#${background}`).replace('#', '')
    }


    const contrast = chroma.contrast(simulatedForeground, simulatedBackground);
    const pass = contrast >= contrastThreshold

    return (
      <VisionRowWrapper pass={pass}>
        <VisionCellWrapper data-th="Pass Or Fail">
          <PercentWrapper pass={pass}>
            <Heading>
              {percent}
            </Heading>
            <span style={{ marginBottom: '10px' }}>
              %
            </span>
          </PercentWrapper>
        </VisionCellWrapper>
        <VisionCellWrapper style={{ marginRight: 'auto' }} data-th="Vision Type">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Text bold dark>
              {name}
            </Text>
            <Text style={{ fontSize: '14px' }}>
              {description}
            </Text>
          </div>
        </VisionCellWrapper>
        <VisionCellWrapper style={{ justifyContent: 'flex-end', marginLeft: '40px' }} data-th="Who can see it">
          <Text style={{ fontSize: '14px', fontWeight: pass ? null : '600', textAlign: 'right' }}>
            ~{number}
            <span style={{ display: pass ? 'none' : 'inline-block' }}>&nbsp;can't</span>
          </Text>
        </VisionCellWrapper>
        <VisionCellWrapper style={{ marginLeft: '20px' }} data-th="Simulation">
          <Simulation>
            <SimulationFilter className={simType} foreground={simulatedForeground} background={simulatedBackground}>
              Text
            </SimulationFilter>
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
          <TableHeadCellWrapper style={{ marginRight: 'auto', paddingLeft: '105px' }}>
            <td>
              <SmallText>
                Vision Type
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


export class VisionRowAlt extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    percent: PropTypes.string,
    tooltip: PropTypes.string,
    foreground: PropTypes.string,
    background: PropTypes.string,
    class: PropTypes.string,
  }
  render() {
    const { name, number, percent, description, foreground, background, simType, pass } = this.props;
    return (
      <VisionRowWrapper pass={pass}>
        <VisionCellWrapper style={{ marginRight: 'auto' }} data-th="Vision Type">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Text bold dark>
              {name}
            </Text>
            <Text style={{ fontSize: '14px' }}>
              {description}
            </Text>
          </div>
        </VisionCellWrapper>
        <VisionCellWrapper style={{ justifyContent: 'flex-end', marginLeft: '20px' }} data-th="Simulation">
          <Simulation>
            <SimulationFilter className={simType} foreground={foreground} background={background}>
              Text
            </SimulationFilter>
          </Simulation>
        </VisionCellWrapper>
      </VisionRowWrapper >
    );
  }
}


export class VisionTableAlt extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  render() {
    let { children } = this.props;
    return (
      <VisionTableWrapper>
        <TableHeaderWrapper>
          <TableHeadCellWrapper style={{ marginRight: 'auto', paddingLeft: '12px' }}>
            <td>
              <SmallText>
                Situational Vision Events
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

