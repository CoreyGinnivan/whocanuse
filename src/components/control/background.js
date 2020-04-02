import React from 'react'
import {
  BackgroundWrapper,
  Hash,
  HexWrapper,
  ColourControlWrapper,
  SwitchIcon,
  ColourHeader,
} from './styled'
import Switch from '../../images/switch.svg'
import { SmallText } from '../typography'
import chroma from 'chroma-js'

export const Background = ({
  background,
  getBackgroundTextColor,
  backgroundText,
  setBackground,
  onClick,
}) => {
  return (
    <ColourControlWrapper>
      <ColourHeader>
        <SmallText>Background</SmallText>
        <SwitchIcon
        // onClick={() => {
        //   setForeground(background)
        //   setBackground(color)
        // }}
        >
          <img src={Switch} alt="Switch colors" />
        </SwitchIcon>
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
    </ColourControlWrapper>
  )
}
