import React from 'react'
import styled from '@emotion/styled';
import Layout from '../layout/layout'
import Hero from '../components/hero';
import { Heading } from '../components/typography';
import { SmallInfoBar, LargeInfoBar } from '../components/infobars';
import { VisionTable, VisionRow } from '../components/vision-table';
import { About } from '../components/about';

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const ContentWrapper = styled('div')({
  maxWidth: '940px',
  margin: '50px auto 0 auto',
  '@media screen and (max-width: 960px)': {
    padding: '0 20px'
  }
})

const InfoBarWrapper = styled('div')({
  display: 'flex',
  marginTop: '30px',
  '& + &': {
    marginTop: '10px',
  },
  justifyContent: 'space-between',
  '@media screen and (max-width: 780px)': {
    flexDirection: 'column',
  }
})



/*----------------------------------------------------------
   Main Layout
----------------------------------------------------------*/

const IndexPage = () => (
  <Layout>
    <Hero foreground="FFFFFF" background="663399" fontSize="18" shadow bold />
    <ContentWrapper>
      <Heading align="center">Who can use this color combination?</Heading>
      <InfoBarWrapper>
        <LargeInfoBar percent="97" name="Global Population (Online)" />
        <LargeInfoBar percent="80" name="Australian Population (Online)" />
      </InfoBarWrapper>
      <InfoBarWrapper>
        <SmallInfoBar tooltip="The difference in luminance or color that makes an object distinguishable - a higher number is better" name="4.51:1 Contrast Ratio" />
        <SmallInfoBar tooltip="WCAG (Web Content Accessibility Guidelines) minimum required for general accessibility contrast ratios" name="WCAG AA" />
        <SmallInfoBar tooltip="WCAG (Web Content Accessibility Guidelines) that covers most vision type cases" name="WCAG AAA" />
      </InfoBarWrapper>
      <VisionTable>
        <VisionRow name="Regular Vision" tooltip="Majority of the population with either no or minor visual impairments that can see the average color combinations" percent="89" number="6,760,000" />
        <VisionRow name="Deuteranomaly" tooltip="People who have trouble seeing green colors" percent="89" number="6,760,000" />
        <VisionRow name="Protanomaly" tooltip="People who have trouble seeing red colors" percent="89" number="6,760,000" />
        <VisionRow name="Tritanopia" tooltip="People who have trouble seeing blue colors" percent="89" number="6,760,000" />
        <VisionRow name="Achromatopsia" tooltip="People with this condition cannot see color at all" percent="89" number="6,760,000" />
        <VisionRow name="Cataracts" tooltip="Clouding of the normally clear lens of the eye which will showed blurred vision" percent="89" number="11,000" />
        <VisionRow name="Low Vision" tooltip="Significant visual imparment that generally affects people over the age of 60" percent="4" number="123,000" />
        <VisionRow name="Astigmatism" tooltip="Blurry vision caused by an irregular curvature of the eye's cornea or lens" percent="89" number="6,760,000" />
        <VisionRow name="Macular Degeneration" tooltip="Causes loss in the centre of the field of vision and blurred vision is a key symptom" percent="89" number="6,760,000" />
      </VisionTable>
    </ContentWrapper>
    <About />
  </Layout>
)

export default IndexPage
