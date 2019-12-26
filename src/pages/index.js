import React, { Component } from 'react'
import chroma from 'chroma-js'
import styled from '@emotion/styled'
import Layout from '../layout/layout'
import { Hero } from '../components/hero'
import { Heading } from '../components/typography'
import { VisionTable } from '../components/table/vision-table'
import { VisionTableAlt } from '../components/table/vision-table-alt'
import { VisionRow } from '../components/table/vision-row'
import { VisionRowAlt } from '../components/table/vision-row-alt'
import { About } from '../components/about'
import { SmallInfoBars } from '../components/small-info-bars'
import queryString from 'query-string'
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
  width: '50vw',
  marginLeft: '50vw',
  padding: '60px 40px 40px 0',
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

class IndexPage extends Component {
  constructor(props) {
    super(props)

    let foreground = 'FFFFFF'
    let background = '663399'
    let fontSize = '20'
    let foregroundText = 'FFFFFF'
    let backgroundText = '663399'
    this.state = {
      foreground,
      foregroundText,
      background,
      backgroundText,
      fontSize,
      fontSizeText: fontSize,
    }
  }

  componentDidMount() {
    const qs =
      typeof window === 'undefined'
        ? {}
        : queryString.parse(window.location.search)

    this.setForeground(qs.c, false)
    this.setBackground(qs.b, false)
    const fontSize = (Number(qs.f) || '20').toString()

    const style = qs.s || ''
    this.setState({
      shadow: style.indexOf('s') !== -1,
      bold: style.indexOf('b') !== -1,
      fontSize,
    })
  }

  setForeground = (color, setTextOnInvalid = true) => {
    if (chroma.valid(color)) {
      this.setState({ foreground: color, foregroundText: color }, () => {
        this.updatePath()
      })
    }
    if (setTextOnInvalid) {
      this.setState({ foregroundText: color })
    }
  }

  setBackground = (color, setTextOnInvalid = true) => {
    if (chroma.valid(color)) {
      this.setState({ background: color, backgroundText: color }, () => {
        this.updatePath()
      })
    }
    if (setTextOnInvalid) {
      this.setState({ backgroundText: color })
    }
  }

  setFontSize = fontSize => {
    if (!isNaN(Number(fontSize))) {
      this.setState({ fontSize: fontSize > 60 ? 60 : fontSize })
    }
    this.setState({ fontSizeText: fontSize })
  }

  setShadow = shadow => {
    this.setState({ shadow })
  }
  setBold = bold => {
    this.setState({ bold })
  }

  updatePath() {
    if (typeof window === 'undefined') {
      return
    }
    window.history.replaceState(
      undefined,
      '',
      linkPath(
        this.state.background,
        this.state.foreground,
        this.state.fontSize,
        this.state.bold,
        this.state.shadow,
      ),
    )
  }

  render() {
    return (
      <Layout>
        <MainLayout>
          <Hero
            setBackground={this.setBackground}
            setForeground={this.setForeground}
            foreground={this.state.foreground}
            background={this.state.background}
            foregroundText={this.state.foregroundText}
            backgroundText={this.state.backgroundText}
            setFontSize={this.setFontSize}
            fontSize={this.state.fontSize}
            minFontSize={10}
            maxFontSize={60}
            fontSizeText={this.state.fontSizeText}
            shadow={this.state.shadow}
            setShadow={this.setShadow}
            bold={this.state.bold}
            setBold={this.setBold}
          />
          <ContentWrapper>
            <Heading align="left">Who can use this color combination?</Heading>
            <StatsWrapper>
              <SmallInfoBars
                foreground={this.state.foreground}
                background={this.state.background}
                bold={this.state.bold}
                fontSize={this.state.fontSize}
              />
            </StatsWrapper>
            <VisionTable>
              <VisionRow
                name="Regular Vision (Trichromatic)"
                description="Can distinguish all three primary color, little to no blurriness"
                percent="68"
                foreground={this.state.foreground}
                background={this.state.background}
                bold={this.state.bold}
                fontSize={this.state.fontSize}
              />
              <VisionRow
                name="Protanomaly"
                simType="protanomaly"
                description="Trouble distinguishing reds"
                percent="1.3"
                foreground={this.state.foreground}
                background={this.state.background}
                bold={this.state.bold}
                fontSize={this.state.fontSize}
              />
              <VisionRow
                name="Protanopia"
                simType="protanopia"
                description="Red blind - Can’t see reds at all"
                percent="1.5"
                foreground={this.state.foreground}
                background={this.state.background}
                bold={this.state.bold}
                fontSize={this.state.fontSize}
              />
              <VisionRow
                name="Deuteranomaly"
                simType="deuteranomaly"
                description="Trouble distinguishing greens"
                percent="5.3"
                foreground={this.state.foreground}
                background={this.state.background}
                bold={this.state.bold}
                fontSize={this.state.fontSize}
              />
              <VisionRow
                name="Deuteranopia"
                simType="deuteranopia"
                description="Green blind - Can’t see greens at all"
                percent="1.2"
                foreground={this.state.foreground}
                background={this.state.background}
                bold={this.state.bold}
                fontSize={this.state.fontSize}
              />
              <VisionRow
                name="Tritanomaly"
                simType="tritanomaly"
                description="Trouble distinguishing blues"
                percent="0.02"
                foreground={this.state.foreground}
                background={this.state.background}
                bold={this.state.bold}
                fontSize={this.state.fontSize}
              />
              <VisionRow
                name="Tritanopia"
                simType="tritanopia"
                description="Blue blind - Can’t see blues at all"
                percent="<0.03"
                foreground={this.state.foreground}
                background={this.state.background}
                bold={this.state.bold}
                fontSize={this.state.fontSize}
              />
              <VisionRow
                name="Achromatomaly"
                simType="achromatomaly"
                description="Partial color blindness, sees the absence of most colors"
                percent="<0.1"
                foreground={this.state.foreground}
                background={this.state.background}
                bold={this.state.bold}
                fontSize={this.state.fontSize}
              />
              <VisionRow
                name="Achromatopsia"
                simType="achromatopsia"
                description="Complete color blindness, can only see shades"
                percent="<0.1"
                foreground={this.state.foreground}
                background={this.state.background}
                bold={this.state.bold}
                fontSize={this.state.fontSize}
              />
              <VisionRow
                name="Cataracts"
                simType="cataracts"
                description="Clouding of the lens in the eye that affects vision"
                percent="33"
                foreground={this.state.foreground}
                background={this.state.background}
                bold={this.state.bold}
                fontSize={this.state.fontSize}
                contrastModifier={-0.2}
              />
              <VisionRow
                name="Glaucoma"
                simType="glaucoma"
                description="Slight vision loss"
                percent="2"
                foreground={this.state.foreground}
                background={this.state.background}
                bold={this.state.bold}
                fontSize={this.state.fontSize}
              />
              <VisionRow
                name="Low Vision"
                simType="lowvision"
                description="Decreased and/or blurry vision (not fixable by usual means such as glasses)"
                percent="31"
                foreground={this.state.foreground}
                background={this.state.background}
                bold={this.state.bold}
                fontSize={this.state.fontSize}
                contrastModifier={-0.2}
              />
            </VisionTable>
            <VisionTableAlt>
              <VisionRowAlt
                name="Direct Sunlight"
                simType="sunlight"
                description="Simulating what direct sunlight on a phone/screen would be"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastModifier={-0.4}
                bold={this.state.bold}
                fontSize={this.state.fontSize}
              />
              <VisionRowAlt
                name="Night Shift Mode"
                simType="nightshift"
                description="Simulating what would be seen on phones/screens with night mode on"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastModifier={-0.1}
                bold={this.state.bold}
                fontSize={this.state.fontSize}
              />
            </VisionTableAlt>
            <About />
          </ContentWrapper>
        </MainLayout>
      </Layout>
    )
  }
}

export default IndexPage
