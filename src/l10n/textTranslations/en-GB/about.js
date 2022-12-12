import styled from '@emotion/styled'
import { Text, MediumText, Heading } from '../../../components/typography'
import { Link } from '@chakra-ui/react'

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const AboutWrapper = styled('div')({
  marginTop: '60px',
  background: '#f6f8fa',
  padding: '40px',
  borderRadius: '10px',
  h2: {
    marginTop: '3ex',
    marginBottom: '1ex',
  },
})

export default (
  <AboutWrapper>
    <Heading margin="0 0 20px 0">What is whocanuse.com?</Heading>
    <Text>
      It's a tool that brings attention and understanding to how color contrast
      can affect different people with visual impairments.
    </Text>

    <Text>
      The{' '}
      <Link fontWeight="bold" href="https://www.w3.org/TR/WCAG21/" isExternal>
        Web Content Accessibility Guidelines (WCAG)
      </Link>{' '}
      covers a wide range of recommendations for making Web content more
      accessible. Just a tiny part of making the web more accessible is
      accommodating for those with a form of blindness or low vision.
    </Text>
    <Text>
      The standard grading system is a great start, but I thought I'd try to
      humanize the people who are affected by the different grades.
    </Text>

    <MediumText>Where did you get the info from?</MediumText>
    <Text>
      The percentages are sourced from both{' '}
      <Link
        fontWeight="bold"
        href="https://www.colour-blindness.com"
        isExternal
      >
        colour-blindness.com
      </Link>{' '}
      and{' '}
      <Link
        fontWeight="bold"
        href="https://www.visionaustralia.org/"
        isExternal
      >
        Vision Australia
      </Link>
      . P.S. You're both the best, thankyou ✌️
    </Text>

    <MediumText>Your maths is off, it doesn't add up to 100%...?</MediumText>
    <Text>
      Good eyes! (haha) The population data provided are estimates for
      individual impairments, and don't cover the vast amount of visual
      impairments in the world. This is to give you not just an understanding of{' '}
      <strong>how</strong> color contrast affects different people but also{' '}
      <strong>who</strong> it can affect.
    </Text>

    <MediumText>
      I'm fascinated by how this works, can you tell me more?
    </MediumText>
    <Text>
      Of course! There's a few stages to get to this point. First we figure out
      the contrast between two HEX values. For this we're using a plugin called{' '}
      <Link fontWeight="bold" href="https://vis4.net/chromajs/" isExternal>
        Chroma.js
      </Link>{' '}
      - this does the heavy lifting for us. Once we have the ratio (and using
      font size and font weight) we can apply a grade to that specific color
      combo.
    </Text>
    <Text>
      For the color blindness options we're using another plugin aptly called{' '}
      <Link
        fontWeight="bold"
        href="https://github.com/skratchdot/color-blind"
        isExternal
      >
        Color-blind
      </Link>{' '}
      that converts our HEX codes in to ones that would be seen by people with
      the different impairments, then we can apply our same process to obtain
      the color ratios and determine their grade.
    </Text>
    <Text>
      For cataracts, glaucoma, low vision, and the situational events I've
      personally created simulations to help identify their rating.
    </Text>

    <MediumText>What does a failing grade mean?</MediumText>
    <Text>
      The grading uses a combination of color contrast, text size and text
      weight. A fail simply means that the color combination offers some visual
      strain to the person seeing it and should be avoided if possible.
    </Text>

    <MediumText>Can I help contribute?</MediumText>
    <Text>
      Absolutely! Feel free to fork the repo and submit a PR with any helpful
      additions or changes.
    </Text>
  </AboutWrapper>
)
