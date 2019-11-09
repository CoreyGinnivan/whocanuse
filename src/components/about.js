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
  justifyContent: 'flex-end',
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
          <Text>The stats are sourced from randomsite.com or provided by Vision Australia so far</Text>

          <MediumText>Why isn't it just a pass or fail?</MediumText>
          <Text>Just like humans, our vision isn't just binary. Having 0.1 under a "passing" grade shouldn'tmake it a fail – it's not a matter of immediately struggling to be able to see something. It's *harder* for people with these vision types to see your colour combo.</Text>

          <MediumText>How accurate is the data?</MediumText>
          <Text>Vision impairments are never going to be the exact same for those with the same conditions, so the data provided is rough estimate. However the main objective is to give you a better understanding of how colour contrast affect different vision types.</Text>

          <MediumText>Can I support this site?</MediumText>
          <Text>Absolutely! You can either help contribute to the codebase or sponsor me on GitHub to help me keep whocanuse.com running.</Text>

        </AboutWrapper>
        <Author>
          <Text>
            Created &amp; maintained by
            <a href="https://twitter.com/coreyginnivan" target="_blank" rel="noopener noreferrer">
              <img alt="Corey" src={Avatar} width="30" height="30" />
              @CoreyGinnivan</a>
          </Text>
        </Author>
      </div>
    );
  }
}

