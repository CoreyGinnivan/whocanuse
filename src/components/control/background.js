import React from 'react'
import {
  BackgroundWrapper,
  Hash,
  HexWrapper,
  ColourControlBackground,
  SwitchIcon,
  ColourHeader,
} from './styled'
import { SmallText } from '../typography'
import chroma from 'chroma-js'
import { Sliders } from './sliders'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { hasTextSelection } from './hasTextSelection'
import Image from 'next/image'
import switchIcon from '../../images/switch.svg'

export const Background = ({
  background,
  getBackgroundTextColor,
  setBackground,
  onClick,
  foreground,
  setForeground,
}) => {
  return (
    <ColourControlBackground>
      <ColourHeader>
        {' '}
        <SmallText>Background</SmallText>
        <Tippy
          content="Switch background and text colors"
          duration="0"
          arrow={true}
          placement="top"
          animation="shift-away"
        >
          <SwitchIcon
            onClick={() => {
              setForeground(background)
              setBackground(foreground)
            }}
          >
            <Image
              src={switchIcon}
              width="14px"
              height="10px"
              alt="Switch colors"
            />
          </SwitchIcon>
        </Tippy>
      </ColourHeader>
      <BackgroundWrapper
        background={background.color.hex()}
        onClick={(e) => {
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
          value={
            background.valueKind === 'hex'
              ? background.value
              : background.color.hex().replace('#', '')
          }
          onKeyPress={(e) => {
            if (
              (e.key.match(/[^0-9a-fA-F]/) && !e.metaKey) ||
              (background.valueKind === 'hex' &&
                background.value.length >= 6 &&
                !hasTextSelection(e.currentTarget))
            ) {
              e.preventDefault()
            }
          }}
          onPaste={(e) => {
            const text = e.clipboardData.getData('Text')
            e.preventDefault()
            if (chroma.valid(text)) {
              const pastedColor = chroma(text).alpha(1)
              setBackground({
                color: pastedColor.alpha(1),
                value: pastedColor.hex().replace('#', ''),
                valueKind: 'hex',
              })
            }
          }}
          onChange={(e) => {
            const backgroundWithHash = `#${e.target.value}`
            setBackground({
              color: chroma(
                chroma.valid(backgroundWithHash)
                  ? backgroundWithHash
                  : background.color,
              ),
              value: e.target.value,
              valueKind: 'hex',
            })
          }}
        />
      </BackgroundWrapper>
      <Sliders color={background} updateColor={setBackground} />
    </ColourControlBackground>
  )
}
