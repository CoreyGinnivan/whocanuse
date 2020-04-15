import React from 'react'
import styled from '@emotion/styled'
import { Logo } from './logo'
import { Control } from './control/control'
import { Background } from './background'
import { DemoArea } from './demo-area'
import { Ad } from './ad'

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const Wrapper = styled('div')({
  display: 'grid',
  gridTemplateColumns: '40px 1fr 40px',
  gridTemplateRows: '100px 1fr 230px 40px 30px 90px',
  height: '100vh',
  position: 'fixed',
  width: '40%',
  padding: '40px',
  '@media screen and (max-width: 1200px)': {
    height: 'auto',
    gridTemplateColumns: '20px 1fr 20px',
    gridTemplateRows: '100px 1fr 1fr 40px 30px 90px',
    position: 'relative',
    width: 'auto',
    padding: '20px',
  },
  '@media screen and (max-height: 760px)': {
    gridTemplateRows: '80px 1fr 230px 10px 20px 90px',
  },
})

/*----------------------------------------------------------
   Hero Section
----------------------------------------------------------*/

export const Hero = ({
  foreground,
  background,
  fontSize,
  maxFontSize,
  minFontSize,
  fontSizeText,
  bold,
  setBold,
  setFontSize,
  setBackground,
  setForeground,
}) => {
  return (
    <Wrapper>
      <Logo color={foreground.color.hex()} />
      <DemoArea
        color={foreground.color.hex()}
        fontSize={fontSize}
        isBold={bold}
      />
      <Control
        setBackground={setBackground}
        setForeground={setForeground}
        setFontSize={setFontSize}
        fontSize={fontSizeText}
        maxFontSize={maxFontSize}
        minFontSize={minFontSize}
        background={background}
        foreground={foreground}
        bold={bold}
        setBold={setBold}
      />
      <Ad />
      <Background background={background.color.hex()} />
    </Wrapper>
  )
}
