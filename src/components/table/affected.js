/**
 * IMPORTS 
 **/

import { Text, Flex, Tooltip } from '@chakra-ui/react'
import { getKeyedTranslations } from '../../helpers/i18n'
const t = getKeyedTranslations("vision")


/**
 * FUNCS 
 **/

/**
 * Creates an SVG with one, two or three filled bars based on the provided path string.
 * @param {string} filledBarsPath String that defines the path of the filled bars  
 * @returns SVG with three filled/unfilled bars
 */
function createAffectedBarsSVG(filledBarsPath) {
  return (
    <svg width="21" height="21" xmlns="http://www.w3.org/2000/svg">
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* empty bars */}
        <path d="M5.5 16.5v-3a1 1 0 112 0v3a1 1 0 01-2 0zM9.5 16.5v-6a1 1 0 112 0v6a1 1 0 01-2 0zM13.5 16.5v-9a1 1 0 112 0v9a1 1 0 01-2 0z" />
        {/* filled bars */}
        <path d={filledBarsPath} fill="currentColor" />
      </g>
    </svg>
  )
}

/**
 * Defines the number of bars to visualise affected share
 * @param {number} percent Percentage that is affected  
 * @returns SVG to visualise affected share
 */
function AffectedBars({ percent }) {
  let filledBarsPath = ""

  if (percent > 0) // first bar
    filledBarsPath = filledBarsPath + "M5.5 16.5v-3a1 1 0 112 0v3a1 1 0 01-2 0z"

  if (percent >= 5) // first bar + second bar
    filledBarsPath = filledBarsPath + "M9.5 16.5v-6a1 1 0 112 0v6a1 1 0 01-2 0z"
  
  if (percent >= 35) // first bar + second bar + third bar
    filledBarsPath = filledBarsPath + "M13.5 16.5v-9a1 1 0 112 0v9a1 1 0 01-2 0z"

  return createAffectedBarsSVG(filledBarsPath)
}

/**
 * Component to visualise and describe the affected share
 * @param {number | null} percent Percentage that is affected  
 * @returns Component including SVG, text and tooltip
 */
function Affected({ percent }) {
  return percent ? (
    <Tooltip label={t("affected.tooltip")}>
      <Flex fontSize="xs" mt={2} alignItems="center">
        <Flex mr={1} mt={-1}>
          <AffectedBars percent={percent} />
        </Flex>
        <Text fontWeight={700} mr={1}>
          {/* eslint-disable-next-line no-irregular-whitespace */}
          {percent} %
        </Text>
        <Text>{t("affected")}</Text>
      </Flex>
    </Tooltip>
  ) : null
}


/**
 * EXPORTS 
 **/

export { Affected }
