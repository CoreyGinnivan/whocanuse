import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text } from '../typography'
import chroma from 'chroma-js'
import { renderPassFail } from './renderPassFail'
import { getWcagScore } from '../getWcagScore'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { formatContrast } from '../small-info-bars'
import {
  VisionRowWrapper,
  VisionCellWrapper,
  Simulation,
  SimulationFilter,
} from './styled'

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
    const {
      name,
      percent,
      description,
      foreground,
      background,
      simType,
      contrastModifier = 0,
      bold,
      fontSize,
    } = this.props
    let simulatedForeground = foreground
    let simulatedBackground = background
    const contrast = chroma.contrast(simulatedForeground, simulatedBackground)

    const fontSizeNum = Number(fontSize)
    const modifiedContrast = contrast + contrast * contrastModifier

    let { wcagGrade } = getWcagScore(fontSizeNum, bold, modifiedContrast)
    const pass = wcagGrade !== 'FAIL'
    return (
      <VisionRowWrapper pass={pass}>
        <VisionCellWrapper
          style={{ marginRight: 'auto' }}
          data-th="Situational Vision Event"
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              style={{
                display: 'flex',
                flexDrection: 'row',
                alignItems: 'center',
              }}
            >
              <Text bold dark>
                {name}
              </Text>
              <Tippy
                content={`Contrast: ${formatContrast(contrast)}`}
                duration="0"
                arrow={true}
                placement="top"
                animation="shift-away"
              >
                {renderPassFail(wcagGrade)}
              </Tippy>
            </div>
            <Text style={{ fontSize: '14px' }}>{description}</Text>
          </div>
        </VisionCellWrapper>
        <VisionCellWrapper
          style={{ justifyContent: 'flex-end', marginLeft: '20px' }}
          data-th="Simulation"
        >
          <Simulation>
            <SimulationFilter
              className={simType}
              foreground={simulatedForeground}
              background={simulatedBackground}
              bold={bold}
            >
              Text
            </SimulationFilter>
          </Simulation>
        </VisionCellWrapper>
      </VisionRowWrapper>
    )
  }
}
