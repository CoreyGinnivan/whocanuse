import React, { Component } from 'react'
import { Text, MediumText, Heading } from './typography';
import styled from '@emotion/styled';
import Avatar from "../images/avatar.png"

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const AboutWrapper = styled('div')({
  marginTop: '90px',
  flexGrow: 1,
  background: '#f6f8fa'
})

const Content = styled('div')({
  padding: '70px 0',
  width: '90vw',
  maxWidth: '940px',
  margin: '0 auto',
  overflow: 'hidden',
})

const Info = styled('section')({
  float: 'left',
  width: '45%',
  '@media screen and (max-width: 960px)': {
    float: 'none',
    width: '100%',
  }
})

const FAQ = styled('section')({
  float: 'right',
  width: '45%',
  'p': {
    marginBottom: '20px',
  },
  '@media screen and (max-width: 960px)': {
    float: 'none',
    width: '100%',
  }
})

const Author = styled('section')({
  float: 'left',
  width: '45%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  flexWrap: 'nowrap',
  'p, a': {
    display: 'flex',
    alignItems: 'center'
  },
  'img': {
    margin: '0 5px 0 10px'
  },
  '@media screen and (max-width: 960px)': {
    float: 'none',
    width: '100%',
  }
})

/*----------------------------------------------------------
   Actions and Sharing Bar
----------------------------------------------------------*/


export class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <Content>
          <Info style={{ marginBottom: '20px' }}>
            <Heading margin="0 0 20px 0">What is whocanuse.com?</Heading>
            <Text>Whocanuse.com both an easy to use color contrast tool, and a way to bring attention and understanding to how color contrast affects different users.</Text>

            <Text>The WCAG (Web Content Accessbility Guidelines) is an amazing accomplishment for the web, where organisations, companies and goverernments throughout the world came together to agree on how to make the web accessible, but unfortunately the guidelines and gradings aren't really that easy to understand for most people.</Text>
            <Text>Rather than giving a grading to a collective of people, I thought I'd try and humanise them by showcasing just who is affeted by a failing grade.</Text>
          </Info>

          <FAQ>
            <MediumText>Where did you get the info from?</MediumText>
            <Text>The stats are sourced from randomsite.com or provided by Vision Australia so far</Text>

            <MediumText>How accurate is the data?</MediumText>
            <Text>Vision disabilities are never going to be the exact same for those with the same condition, so the data provided is fairly accurate based on recent sensus data, but the main objective is to give you a better understanding and breakdown of how colour rations affect different vision types</Text>

            <MediumText>Why do you only support 2 countries data?</MediumText>
            <Text>I'm a single human just doing this on the side, I'll get there though - this is an opensource project, so feel free to jump in and help <span role="img" aria-label="muscle emoji">💪</span></Text>

            <MediumText>Can I support this site?</MediumText>
            <Text>Absolutely! You can either help contribute to the codebase on GitHub or donate to my patreon account to help me keep whocanuse.com running</Text>

          </FAQ>

          <Author>
            <Text>
              Created &amp; maintained by
              <a href="https://twitter.com/coreyginnivan" target="_blank" rel="noopener noreferrer">
                <img alt="Corey" src={Avatar} width="30" height="30" />
                @CoreyGinnivan</a>
            </Text>
          </Author>
        </Content>
      </AboutWrapper>
    );
  }
}

