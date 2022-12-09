import chroma from 'chroma-js'
import { getWcagScore } from './getWcagScore'
import { Flex, HStack, Text } from '@chakra-ui/react'
import { getKeyedTranslations } from '../helpers/i18n'
const t = getKeyedTranslations()

/*----------------------------------------------------------
   Small Info Bars
----------------------------------------------------------*/

export const formatContrast = (contrast) => {
  return `${Math.round(contrast * 100) / 100}:1`
}

export const SmallInfoBars = ({ foreground, background, bold, fontSize }) => {
  const contrast = chroma.contrast(foreground, background)
  const fontSizeNum = Number(fontSize)
  let { wcagGrade } = getWcagScore(fontSizeNum, bold, contrast)
  const pass = contrast >= 4.5

  return (
    <HStack spacing={{ base: '8', md: '24' }}>
      <Flex justifyContent="space-between" w="full">
        <Text fontWeight="medium">{t("contrast-ratio")}</Text>
        <Text
          fontWeight="extrabold"
          color={pass ? 'green.600' : 'red.600'}
        >{`${formatContrast(contrast)}`}</Text>
      </Flex>
      <Flex justifyContent="space-between" w="full">
        <Text fontWeight="medium">{t("wcag-grading")}</Text>
        <Text fontWeight="extrabold" color={pass ? 'green.600' : 'red.600'}>
          {wcagGrade}
        </Text>
      </Flex>
    </HStack>
  )
}
