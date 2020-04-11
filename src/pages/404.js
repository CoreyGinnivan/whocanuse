import React from 'react'
import styled from '@emotion/styled'
import Layout from '../layout/layout'
import { keyframes } from '@emotion/core'
import { Logo } from '../components/logo'

const Rainbow = keyframes`
  0% {
    background-position: 0% 82%
  };
  50% {
    background-position: 100% 19%
  };
  100% {
    background-position: 0% 82%
  };
`

const TrippyWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
  color: '#FFFFFF',
  textShadow: '0 1px 4px rgba(0,0,0,0.3)',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  position: 'absolute',
  background:
    'linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3)',
  backgroundSize: '1800% 1800%',
  animationName: `${Rainbow}`,
  animationDuration: '40s',
  animationRimingFunction: 'ease',
  animationIterationCount: 'infinite',
  a: {
    color: '#000',
    textDecoration: 'none',
    borderRadius: '10px',
    padding: '20px',
    marginTop: '20px',
    textShadow: 'none',
    background: 'rgba(255,255,255,0.8)',
    backdropFilter: 'saturate(180%) blur(20px)',
  },
  'a:hover': {
    background: 'rgba(255,255,255,1)',
  },
})

const NotFoundPage = () => (
  <Layout>
    <TrippyWrapper>
      <Logo style={{ marginBottom: '100px' }} />
      <h1 style={{ marginBottom: '20px' }}>Mother of gerd...</h1>
      <p>
        You've stumbled across a place you shouldn't have. If you think this
        should be a page, please get in touch!
      </p>
      <a href="/">Take me home!</a>
    </TrippyWrapper>
  </Layout>
)

export default NotFoundPage
