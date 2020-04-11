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

const InfoBarWrapper = styled('div')({
  display: 'flex',
  marginTop: '15px',
  justifyContent: 'space-between',
  '& + &': {
    marginTop: '10px',
  },
  '@media screen and (max-width: 780px)': {
    flexDirection: 'column',
  },
})

/*----------------------------------------------------------
   Main Layout
----------------------------------------------------------*/

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
  const [fontSize, setFontSize] = useState({ value: 20, text: '20' })
  const [bold, setBold] = useState(false)

  useEffect(() => {
    const qs =
      typeof window === 'undefined'
        ? {}
        : queryString.parse(window.location.search)

    if (qs.c && chroma.valid(qs.c)) {
      setForeground({
        color: chroma(`#${qs.c}`),
        value: qs.c,
        valueKind: 'hex',
      })
    }
    if (qs.b && chroma.valid(qs.b)) {
      setBackground({
        color: chroma(`#${qs.b}`),
        value: qs.b,
        valueKind: 'hex',
      })
    }

    const fontSize = (Number(qs.f) || '20').toString()

    const style = qs.s || ''
    setBold(style.indexOf('b') !== -1)
    setFontSize({ value: fontSize, text: fontSize })
  }, [])

  function setForegroundCallback(color) {
    setForeground(color)
    updatePath(
      background.color.hex().replace('#', ''),
      color.color.hex().replace('#', ''),
      fontSize.value,
      bold,
    )
  }

  function setBackgroundCallback(color) {
    setBackground(color)
    updatePath(
      color.color.hex().replace('#', ''),
      foreground.color.hex().replace('#', ''),
      fontSize.value,
      bold,
    )
  }

  function setFontSizeCallback(fontSizeText) {
    setFontSize({
      value: !isNaN(Number(fontSizeText))
        ? fontSizeText > 60
          ? 60
          : fontSizeText
        : fontSizeText,
      text: fontSizeText,
    })
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
          minFontSize={10}
          maxFontSize={60}
          bold={bold}
          setBold={setBold}
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
              description="Trouble distinguishing reds"
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
              description="Trouble distinguishing greens"
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
              description="Trouble distinguishing blues"
              percent="0.02"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Tritanopia"
              simType="tritanopia"
              description="Blue blind - Can’t see blues at all"
              percent="<0.03"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Achromatomaly"
              simType="achromatomaly"
              description="Partial color blindness, sees the absence of most colors"
              percent="<0.1"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRow
              name="Achromatopsia"
              simType="achromatopsia"
              description="Complete color blindness, can only see shades"
              percent="<0.1"
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
          <VisionTableAlt>
            <VisionRowAlt
              name="Direct Sunlight"
              simType="sunlight"
              description="Simulating what direct sunlight on a phone/screen would be"
              foreground={foreground.color.hex()}
              background={background.color.hex()}
              contrastModifier={-0.4}
              bold={bold}
              fontSize={fontSize.value}
            />
            <VisionRowAlt
              name="Night Shift Mode"
              simType="nightshift"
              description="Simulating what would be seen on phones/screens with night mode on"
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

function updatePath(background, forground, fontSize, bold) {
  if (typeof window === 'undefined') {
    return
  }
  window.history.replaceState(
    undefined,
    '',
    linkPath(background, forground, fontSize, bold),
  )
}
