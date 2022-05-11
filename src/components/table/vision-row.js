import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Text, Flex } from '@chakra-ui/react'
import chroma from 'chroma-js'
import blinder from 'color-blind'
import {
  VisionRowWrapper,
  VisionCellWrapper,
  Simulation,
  SimulationFilter,
} from './styled'
import { renderPassFail } from './renderPassFail'
import { getWcagScore } from '../getWcagScore'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { formatContrast } from '../small-info-bars'

export const VisionRow = ({
  name,
  percent,
  description,
  foreground,
  background,
  simType,
  contrastModifier = 0,
  bold,
  fontSize,
}) => {
  let simulatedForeground = foreground
  let simulatedBackground = background
  if (simType === 'protanomaly') {
    simulatedForeground = blinder.protanomaly(foreground)
    simulatedBackground = blinder.protanomaly(background)
  }
  if (simType === 'protanopia') {
    simulatedForeground = blinder.protanopia(foreground)
    simulatedBackground = blinder.protanopia(background)
  }
  if (simType === 'deuteranomaly') {
    simulatedForeground = blinder.deuteranomaly(foreground)
    simulatedBackground = blinder.deuteranomaly(background)
  }
  if (simType === 'deuteranopia') {
    simulatedForeground = blinder.deuteranopia(foreground)
    simulatedBackground = blinder.deuteranopia(background)
  }
  if (simType === 'tritanomaly') {
    simulatedForeground = blinder.tritanomaly(foreground)
    simulatedBackground = blinder.tritanomaly(background)
  }
  if (simType === 'tritanopia') {
    simulatedForeground = blinder.tritanopia(foreground)
    simulatedBackground = blinder.tritanopia(background)
  }
  if (simType === 'achromatomaly') {
    simulatedForeground = blinder.achromatomaly(foreground)
    simulatedBackground = blinder.achromatomaly(background)
  }
  if (simType === 'achromatopsia') {
    simulatedForeground = blinder.achromatopsia(foreground)
    simulatedBackground = blinder.achromatopsia(background)
  }
  const contrast = chroma.contrast(simulatedForeground, simulatedBackground)

  const fontSizeNum = Number(fontSize)
  const modifiedContrast = contrast + contrast * contrastModifier

  let { wcagGrade } = getWcagScore(fontSizeNum, bold, modifiedContrast)
  const pass = wcagGrade !== 'FAIL'

  let wcagPercent
  let wcagColor

  if (wcagGrade === 'AA') {
    wcagPercent = '50'
    wcagColor = 'green.500'
  }
  if (wcagGrade === 'AAA') {
    wcagPercent = '100'
    wcagColor = 'green.500'
  }
  if (wcagGrade === 'FAIL') {
    wcagPercent = '0'
    wcagColor = 'red.500'
  }

  return (
    <VisionRowWrapper pass={pass}>
      <VisionCellWrapper style={{ marginRight: '15px' }}>
        <CircularProgress value={wcagPercent} color={wcagColor}>
          <CircularProgressLabel>
            {renderPassFail(wcagGrade)}
          </CircularProgressLabel>
        </CircularProgress>
      </VisionCellWrapper>
      <VisionCellWrapper style={{ marginRight: 'auto' }} data-th="Vision Type">
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              flexDrection: 'row',
              alignItems: 'center',
            }}
          >
            <Text fontSize="md" fontWeight={700}>
              {name}
            </Text>
            <Tippy
              content={`Contrast: ${formatContrast(contrast)}`}
              duration="0"
              arrow={true}
              placement="top"
              animation="shift-away"
            ></Tippy>
          </div>
          <Text fontSize="sm">{description}</Text>
        </div>
      </VisionCellWrapper>
      <VisionCellWrapper style={{ marginLeft: '15px' }}>
        <Simulation>
          <SimulationFilter
            className={simType}
            foreground={simulatedForeground}
            background={simulatedBackground}
            bold
            fontSize={13}
          >
            What I see
          </SimulationFilter>
        </Simulation>
        <Flex fontSize="xs" mt={2} ml="auto">
          <Text fontWeight={700} mr={1}>
            {percent}%
          </Text>
          <Text>affected</Text>
        </Flex>
      </VisionCellWrapper>
    </VisionRowWrapper>
  )
}
