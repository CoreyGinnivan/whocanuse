import { Component } from 'react'
import {
  Flex,
  Box,
  Text,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react'
import PropTypes from 'prop-types'
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

    let wcagPercent
    let wcagColor
    let trackColor
    let bgColor

    if (wcagGrade === 'AAA') {
      wcagPercent = '100'
      wcagColor = 'green.500'
      trackColor = 'gray.200'
      bgColor = 'white'
    } else if (wcagGrade === 'AA') {
      wcagPercent = '50'
      wcagColor = 'green.500'
      trackColor = 'gray.200'
      bgColor = 'white'
    } else if (wcagGrade === 'FAIL') {
      wcagPercent = '50'
      wcagColor = 'red.500'
      trackColor = 'red.500'
      bgColor = 'red.50'
    }

    return (
      <VisionRowWrapper pass={pass}>
        <VisionCellWrapper style={{ marginRight: '15px' }}>
          <Flex
            justifyItems="center"
            alignItems="center"
            w="48px"
            h="48px"
            position="relative"
          >
            <CircularProgress
              zIndex={1}
              value={wcagPercent}
              color={wcagColor}
              trackColor={trackColor}
            >
              <Tippy
                content={`Contrast: ${formatContrast(contrast)}`}
                duration="0"
                arrow={true}
                placement="top"
                animation="shift-away"
              >
                <CircularProgressLabel>
                  {renderPassFail(wcagGrade)}
                </CircularProgressLabel>
              </Tippy>
            </CircularProgress>
            <Box
              bgColor={bgColor}
              position="absolute"
              top="2px"
              left="2px"
              right="2px"
              bottom="2px"
              borderRadius="full"
            />
          </Flex>
        </VisionCellWrapper>
        <VisionCellWrapper
          style={{ marginRight: 'auto' }}
          data-th="Situational Vision Event"
        >
          <Flex flexDirection="column">
            <Flex flexDirection="row" alignItems="center">
              <Text fontSize="md" fontWeight={700}>
                {name}
              </Text>
            </Flex>
            <Text fontSize="13px" fontWeight="medium" color="gray.500">
              {description}
            </Text>
          </Flex>
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
              fontSize={fontSize}
            >
              What I see
            </SimulationFilter>
          </Simulation>
        </VisionCellWrapper>
      </VisionRowWrapper>
    )
  }
}
