import * as React from 'react';
import styled from '@emotion/styled';
import Logo from './logo';
import Editor from './editor';
import { Background } from './background';
import DemoArea from './demo-area';
import { Actions } from './actions';

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const Wrapper = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'auto 340px 600px auto',
  gridTemplateRows: '100px 380px 56px',
})


/*----------------------------------------------------------
   Hero Section
----------------------------------------------------------*/


const Hero = () => (
  <Wrapper>
    <Logo color="FFF" />
    <Editor />
    <DemoArea color="FFF" size="18" bold shadow />
    <Actions />
    <Background background="512da8" />
  </Wrapper>
)

export default Hero
