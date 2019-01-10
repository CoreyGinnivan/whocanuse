import React from 'react';
import styled from '@emotion/styled';
import Logo from '../components/logo';
import '../layout/layout.css'



/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const Wrapper = styled('div')({
  display: 'flex',
  width: '100vw',
  height: '100vh',
  backgroundColor: '#490980',
  justifyContent: 'center',
  alignItems: 'center'
})


/*----------------------------------------------------------
   Main Layout
----------------------------------------------------------*/

const IndexPage = () => (
  <Wrapper>
    <Logo />
  </Wrapper>
)

export default IndexPage
