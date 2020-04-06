import React from 'react'
import {
  BackgroundWrapper,
  Hash,
  HexWrapper,
  ColourControlBackground,
  SwitchIcon,
  ColourHeader,
} from './styled'
import Switch from '../../images/switch.svg'
import { SmallText } from '../typography'
import chroma from 'chroma-js'
import { Sliders } from './sliders'
import Tippy from '@tippy.js/react'

export const Background = ({
  background,
  getBackgroundTextColor,
  backgroundText,
  setBackground,
  onClick,
}) => {
  return (
    <ColourControlBackground>
      <ColourHeader>
        <SmallText>Background</SmallText>
        <Tippy
          content="Switch background and text colors"
          duration="0"
          arrow="true"
          placement="top"
          animation="shift-away"
        >
          <SwitchIcon
          // onClick={() => {
          //   setForeground(background)
          //   setBackground(color)
          // }}
          >
            <img src={Switch} alt="Switch colors" />
          </SwitchIcon>
        </Tippy>
      </ColourHeader>
      <BackgroundWrapper
        background={background}
        onClick={e => {
          if (e.target === e.currentTarget) {
            onClick()
          }
        }}
      >
        <Hash textColour={getBackgroundTextColor}>#</Hash>
        <HexWrapper
          type="text"
          autocomplete="off"
          name="background"
          textColour={getBackgroundTextColor}
          value={backgroundText}
          onKeyPress={e => {
            if (e.key.match(/[^0-9a-fA-F]/) && !e.metaKey) {
              e.preventDefault()
            }
          }}
          onPaste={e => {
            const text = e.clipboardData.getData('Text')
            e.preventDefault()
            if (chroma.valid(text)) {
              setBackground(
                chroma(text)
                  .alpha(1)
                  .hex()
                  .replace('#', ''),
              )
            }
          }}
          onChange={e => {
            setBackground(e.target.value)
          }}
        />
      </BackgroundWrapper>
      <Sliders />
    </ColourControlBackground>
  )
}
