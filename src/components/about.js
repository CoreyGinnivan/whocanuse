import React, { Component } from 'react'
import { Text, MediumText, Heading } from './typography';
import styled from '@emotion/styled';
import Avatar from "../images/avatar.png"

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const AboutWrapper = styled('div')({
  marginTop: '60px',
  background: '#f6f8fa',
  padding: '40px',
  borderRadius: '10px',
  'h2': {
    marginTop: '30px',
    marginBottom: '5px'
  }
})


const Author = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'nowrap',
  margin: '14px 0',
  'p, a': {
    display: 'flex',
    alignItems: 'center'
  },
  'img': {
    margin: '0 5px 0 10px'
  }
})

/*----------------------------------------------------------
   Actions and Sharing Bar
----------------------------------------------------------*/


export class About extends Component {
  render() {
    return (
      <div>
        <AboutWrapper>
          <Heading margin="0 0 20px 0">What is whocanuse.com?</Heading>
          <Text>Whocanuse.com both an easy to use color contrast tool, and a way to bring attention and understanding to how color contrast affects different users.</Text>

          <Text>The WCAG (Web Content Accessbility Guidelines) is a helpful resource for the web, where organisations, companies and goverernments throughout the world came together to agree on how to make the web more accessible. Unfortunately the guidelines and gradings aren't really that easy to understand.</Text>
          <Text>However rather than giving a generic grade, I thought I'd try and humanise the people who are affeted by a failing grade.</Text>

          <MediumText>Where did you get the info from?</MediumText>
          <Text>The percentages are sourced from both <a href="www.colour-blindness.com" target="_blank" rel="noopener noreferrer">colour-blindness.com</a> and <a href="https://www.visionaustralia.org/" target="_blank" rel="noopener noreferrer">Vision Australia</a>.</Text>

          <MediumText>Your maths is off, it doesn't add up to 100%...?</MediumText>
          <Text>Good eyes! (hehe) The percentages are there to give you an idea of how much of the population is affected. Many people will fall in to multiple vision types there's no way to accurately show the complete data.</Text>

          <MediumText>How accurate is the data?</MediumText>
          <Text>Vision impairments are never going to be the exact same for those with the same conditions, so the data provided is rough estimate. However the main objective is to give you a better understanding of how color contrast affect different vision types.</Text>

          <MediumText>What does a a failing grade mean?</MediumText>
          <Text>A fail simply means that the color combination offers some visual strain to the person seeing it. You might still be able to read some of the different vision types, but your eyes are working overtime.</Text>

          <MediumText>Can I support this site?</MediumText>
          <Text>Absolutely! You can either help contribute to the codebase or sponsor me on GitHub to help me keep whocanuse.com running.</Text>

        </AboutWrapper>
        <Author>
          <div>
            <a class="github-button" href="https://github.com/sponsors/coreyginnivan" data-icon="octicon-heart" aria-label="Sponsor @coreyginnivan on GitHub">Sponsor</a>
            &nbsp;
            <a class="github-button" href="https://github.com/coreyginnivan/whocanuse/fork" data-icon="octicon-repo-forked" aria-label="Fork coreyginnivan/whocanuse on GitHub">Fork</a>
          </div>
          <Text>
            Created &amp; maintained by
            <a href="https://twitter.com/coreyginnivan" target="_blank" rel="noopener noreferrer">
              <img alt="Corey" src={Avatar} width="30" height="30" />
              @CoreyGinnivan</a>
          </Text>
        </Author>
      </div >
    );
  }
}

