import React from 'react'
import styled from '@emotion/styled'
import Logo from './logo'
import { Control } from './control/control'
import { Background } from './background'
import DemoArea from './demo-area'
import { Actions } from './actions'
import { Ad } from './ad'

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const Wrapper = styled('div')({
  display: 'grid',
  gridTemplateColumns: '40px 1fr 40px',
  gridTemplateRows: '100px 1fr 230px 40px 70px 90px',
  height: '100vh',
  position: 'fixed',
  width: '40%',
  padding: '40px',
  '@media screen and (max-width: 1200px)': {
    height: 'auto',
    gridTemplateColumns: '20px 1fr 20px',
    gridTemplateRows: '100px 1fr 1fr 20px 60px',
    position: 'relative',
    width: 'auto',
    padding: '20px',
  },
})

/*----------------------------------------------------------
   Hero Section
----------------------------------------------------------*/

export const Hero = ({
  foreground,
  background,
  foregroundText,
  backgroundText,
  fontSize,
  maxFontSize,
  minFontSize,
  fontSizeText,
  bold,
  setBold,
  shadow,
  setShadow,
  setFontSize,
  setBackground,
  setForeground,
}) => {
  return (
    <Wrapper>
      <Logo color={foreground} />
      <DemoArea
        color={foreground}
        fontSize={fontSize}
        isBold={bold}
        isShadow={shadow}
      />
      <Control
        setBackground={setBackground}
        setForeground={setForeground}
        setFontSize={setFontSize}
        fontSize={fontSizeText}
        maxFontSize={maxFontSize}
        minFontSize={minFontSize}
        background={background}
        color={foreground}
        backgroundText={backgroundText}
        colorText={foregroundText}
        bold={bold}
        setBold={setBold}
        shadow={shadow}
        setShadow={setShadow}
      />
      <Actions
        background={background}
        foreground={foreground}
        fontSize={fontSizeText}
        bold={bold}
        shadow={shadow}
      />
      <Ad />
      <Background background={background} />
    </Wrapper>
  )
}
