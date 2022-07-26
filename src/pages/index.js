import React, { useState, useEffect } from 'react'
import chroma from 'chroma-js'
import styled from '@emotion/styled'
import Layout from '../layout/layout'
import queryString from 'query-string'
import { Hero } from '../components/hero'
import { Heading } from '../components/typography'
import { VisionTable } from '../components/table/vision-table'
import { VisionTableAlt } from '../components/table/vision-table-alt'
import { VisionRow } from '../components/table/vision-row'
import { VisionRowAlt } from '../components/table/vision-row-alt'
import { About } from '../components/about'
import { SmallInfoBars } from '../components/small-info-bars'
import { linkPath } from '../helpers/link'

import { Text } from '@chakra-ui/react'

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const MainLayout = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  '@media screen and (max-width: 1200px)': {
    flexDirection: 'column',
  },
})

const ContentWrapper = styled('div')({
  height: '100%',
  width: '60%',
  marginLeft: '40%',
  padding: '60px 40px 40px 0',
  '@media screen and (max-width: 1400px)': {
    marginLeft: '550px',
  },
  '@media screen and (max-width: 1200px)': {
    width: '100%',
    marginLeft: '0',
    padding: '20px',
  },
})

const StatsWrapper = styled('div')({
  background: '#f6f8fa',
  padding: '20px',
  marginTop: '20px',
  borderRadius: '8px',
})

/*----------------------------------------------------------
   Main Layout
----------------------------------------------------------*/

const minFontSize = 10
const maxFontSize = 60

const IndexPage = () => {
  // The resulting colour value is lossy, the user inputting FFF is a colour of FFFFFF
  // HSL is the same, [155, 0, 0] is #000000, we have lost the Hue
  const [foreground, setForeground] = useState({
    color: chroma('#FFFFFF'),
    valueKind: 'hex',
    // This can be invalid, the colour is the source of truth for the last valid colour
    value: 'FFFFFF',
  })
  const [background, setBackground] = useState({
    color: chroma('#663399'),
    valueKind: 'hex',
    // This can be invalid, the colour is the source of truth for the last valid colour
    value: '663399',
  })
  const [fontSize, setFontSize] = useState({ value: 16, text: '16' })
  const [bold, setBold] = useState(false)

  useEffect(() => {
    const qs =
      typeof window === 'undefined'
        ? {}
        : queryString.parse(window.location.search)
    if (qs.fg && chroma.valid(qs.fg) && foreground.value !== qs.fg) {
      setForeground({
        color: chroma(`#${qs.fg}`),
        value: qs.fg,
        valueKind: 'hex',
      })
    }
    if (qs.bg && chroma.valid(qs.bg) && background.value !== qs.bg) {
      setBackground({
        color: chroma(`#${qs.bg}`),
        value: qs.bg,
        valueKind: 'hex',
      })
    }

    const paramFontSize = (Number(qs.fs) || '16').toString()
    if (paramFontSize >= minFontSize && paramFontSize <= maxFontSize && paramFontSize !== fontSize) {
      setFontSize({ value: paramFontSize, text: paramFontSize })
    }

    const paramBold = qs.fw === 'b';
    if(qs.fw && paramBold !== bold) {	
      setBold(paramBold)
    }
  }, [])

  function setBackgroundCallback(color) {
    setBackground(color)
    updatePath(
      foreground.color.hex().replace('#', ''),
      background.color.hex().replace('#', ''),
      fontSize.value,
      bold,
    )
  }

  function setForegroundCallback(color) {
    setForeground(color)
    updatePath(
      foreground.color.hex().replace('#', ''),
      background.color.hex().replace('#', ''),
      fontSize.value,
      bold,
    )
  }

  function setFontSizeCallback(fontSizeText) {
    const newFontSize = !isNaN(Number(fontSizeText))
      ? fontSizeText > 60
        ? 60
        : fontSizeText
      : fontSizeText
    setFontSize({
      value: newFontSize,
      text: fontSizeText,
    })
    updatePath(
      background.color.hex().replace('#', ''),
      foreground.color.hex().replace('#', ''),
      newFontSize,
      bold,
    )
  }

  return (
    <Layout>
      <MainLayout>
        <Hero
          setBackground={setBackgroundCallback}
          setForeground={setForegroundCallback}
          foreground={foreground}
          background={background}
          setFontSize={setFontSizeCallback}
          fontSize={fontSize.value.toString()}
          fontSizeText={fontSize.text}
          minFontSize={minFontSize}
          maxFontSize={maxFontSize}
          bold={bold}
          setBold={(value) => {
            setBold(value)
            updatePath(
              background.color.hex().replace('#', ''),
              foreground.color.hex().replace('#', ''),
              fontSize.value,
              value,
            )
          }}
        />
        <ContentWrapper>
          <Heading align="left">Who can use this color combination?</Heading>
          <StatsWrapper>
            <SmallInfoBars
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
          </StatsWrapper>
          <VisionTable>
            <VisionRow
              name="Regular Vision (Trichromatic)"
              description="Can distinguish all three primary color, little to no blurriness"
              percent="68"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Protanomaly"
              simType="protanomaly"
              description="Reduced sensitivity to red - trouble distinguishing reds and greens"
              percent="1.3"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Protanopia"
              simType="protanopia"
              description="Red blind - Can’t see reds at all"
              percent="1.5"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Deuteranomaly"
              simType="deuteranomaly"
              description="Reduced sensitivity to green - Trouble distinguishing reds and greens"
              percent="5.3"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Deuteranopia"
              simType="deuteranopia"
              description="Green blind - Can’t see greens at all"
              percent="1.2"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Tritanomaly"
              simType="tritanomaly"
              description="Trouble distinguishing blues and greens, and yellows and reds"
              percent="0.02"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Tritanopia"
              simType="tritanopia"
              description="Unable to distinguish between blues and greens, purples and reds, and yellows and pinks"
              percent="0.03"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Achromatomaly"
              simType="achromatomaly"
              description="Partial color blindness, sees the absence of most colors"
              percent="0.09"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Achromatopsia"
              simType="achromatopsia"
              description="Complete color blindness, can only see shades"
              percent="0.05"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Cataracts"
              simType="cataracts"
              description="Clouding of the lens in the eye that affects vision"
              percent="33"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
              contrastModifier={-0.2}
            />
            <VisionRow
              name="Glaucoma"
              simType="glaucoma"
              description="Slight vision loss"
              percent="2"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Low Vision"
              simType="lowvision"
              description="Decreased and/or blurry vision (not fixable by usual means such as glasses)"
              percent="31"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
              contrastModifier={-0.2}
            />
          </VisionTable>
          <Text fontWeight="600" fontSize="lg" mb={4} mt={8}>
            Situational Events
          </Text>
          <VisionTableAlt>
            <VisionRowAlt
              name="Direct Sunlight"
              simType="sunlight"
              description="Simulating the effect of direct sunlight on a phone or screen"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              contrastModifier={-0.4}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRowAlt
              name="Night Shift Mode"
              simType="nightshift"
              description="Simulating the effect of night mode on a phone or screen"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              contrastModifier={-0.1}
              bold={bold}
              fontSize={fontSize.value}
            />
          </VisionTableAlt>
          <About />
        </ContentWrapper>
      </MainLayout>
    </Layout>
  )
}

export default IndexPage

function updatePath(background, foreground, fontSize, bold) {
  if (typeof window === 'undefined') {
    return
  }
  window.history.replaceState(
    undefined,
    '',
    linkPath(background, foreground, fontSize, bold),
  )
}
