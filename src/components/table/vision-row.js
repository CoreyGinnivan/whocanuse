import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Tooltip,
} from '@chakra-ui/react'
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
import { RGBDots } from './rbg-dots'

export const VisionRow = ({
  name,
  percent,
  description,
  foreground,
  background,
  simType,
  contrastModifier = 0,
  isBold,
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

  let { wcagGrade } = getWcagScore(fontSizeNum, isBold, modifiedContrast)
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

  function PopIcon() {
    if (percent < 5) {
      return (
        <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <g
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M5.5 16.5v-3a1 1 0 112 0v3a1 1 0 01-2 0z"
                fill="currentColor"
              />
              <path d="M9.5 16.5v-6a1 1 0 112 0v6a1 1 0 01-2 0zM13.5 16.5v-9a1 1 0 112 0v9a1 1 0 01-2 0z" />
            </g>
          </g>
        </svg>
      )
    } else if (percent >= 5 && percent < 35) {
      return (
        <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <g
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M5.5 16.5v-3a1 1 0 112 0v3a1 1 0 01-2 0zM9.5 16.5v-6a1 1 0 112 0v6a1 1 0 01-2 0z"
                fill="currentColor"
              />
              <path d="M13.5 16.5v-9a1 1 0 112 0v9a1 1 0 01-2 0z" />
            </g>
          </g>
        </svg>
      )
    } else if (percent > 11) {
      return (
        <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <g
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5.5 16.5v-3a1 1 0 112 0v3a1 1 0 01-2 0zM9.5 16.5v-6a1 1 0 112 0v6a1 1 0 01-2 0zM13.5 16.5v-9a1 1 0 112 0v9a1 1 0 01-2 0z" />
            </g>
          </g>
        </svg>
      )
    }
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
      <VisionCellWrapper style={{ marginRight: 'auto' }} data-th="Vision Type">
        <Flex flexDirection="column">
          <Flex flexDirection="row" alignItems="center">
            <Text fontSize="md" fontWeight={700}>
              {name}
            </Text>
            <RGBDots simType={simType} />
          </Flex>
          <Text fontSize="13px" fontWeight="medium" color="gray.500">
            {description}
          </Text>
        </Flex>
      </VisionCellWrapper>
      <VisionCellWrapper style={{ marginLeft: '15px' }}>
        <Flex flexDirection="column" alignItems={{ base: 'start', md: 'end' }}>
          <Simulation>
            <SimulationFilter
              className={simType}
              foreground={simulatedForeground}
              background={simulatedBackground}
              isBold={isBold}
              fontSize={fontSize}
            >
              What I see
            </SimulationFilter>
          </Simulation>
          <Tooltip label="Rough estimation of worldwide population with this vision impairment. Can vary between genders.">
            <Flex fontSize="xs" mt={2} alignItems="center">
              <Flex mr={1} mt={-1}>
                <PopIcon />
              </Flex>
              <Text fontWeight={700} mr={1}>
                {percent}%
              </Text>
              <Text>affected</Text>
            </Flex>
          </Tooltip>
        </Flex>
      </VisionCellWrapper>
    </VisionRowWrapper>
  )
}
