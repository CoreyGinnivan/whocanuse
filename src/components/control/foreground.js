import React from 'react'
import { ForegroundWrapper, Hash, HexWrapper } from './styled'
import chroma from 'chroma-js'

export const Foreground = ({
  color,
  getForegroundTextColor,
  colorText,
  setForeground,
  onClick,
}) => {
  return (
    <ForegroundWrapper
      color={color}
      onClick={e => {
        if (e.target === e.currentTarget) {
          onClick()
        }
      }}
    >
      <Hash textColour={getForegroundTextColor}>#</Hash>
      <HexWrapper
        type="text"
        name="foreground"
        textColour={getForegroundTextColor}
        value={colorText}
        onKeyPress={e => {
          if (e.key.match(/[^0-9a-fA-F]/) && !e.metaKey) {
            e.preventDefault()
          }
        }}
        onPaste={e => {
          const text = e.clipboardData.getData('Text')
          e.preventDefault()
          if (chroma.valid(text)) {
            setForeground(
              chroma(text)
                .alpha(1)
                .hex()
                .replace('#', ''),
            )
          }
        }}
        onChange={e => {
          setForeground(e.target.value)
        }}
      />
    </ForegroundWrapper>
  )
}
