import React from 'react'
import { SmallText, Text } from '../typography'
import { Fields, FieldWrapper, TextSize, CheckboxWrapper } from './styled'

export const Config = ({
  fontSize,
  setFontDragInfo,
  setFontSize,
  maxFontSize,
  minFontSize,
  bold,
  setBold,
}) => {
  return (
    <Fields>
      <FieldWrapper>
        <TextSize
          type="number"
          name="text size"
          min="10"
          max="60"
          value={fontSize}
          onMouseDown={e => {
            setFontDragInfo({ x: e.clientX, fontSize })
          }}
          onChange={e => {
            setFontSize(e.target.value)
          }}
          onBlur={() => {
            const fontNumber = Number(fontSize)
            if (isNaN(fontNumber)) {
              return
            }
            if (fontNumber > maxFontSize) {
              return setFontSize(maxFontSize.toString())
            }
            if (fontNumber < minFontSize) {
              return setFontSize(minFontSize.toString())
            }
          }}
        />
        <SmallText>px</SmallText>
      </FieldWrapper>
      <FieldWrapper>
        <CheckboxWrapper>
          <input
            type="checkbox"
            id="bold"
            name="bold"
            checked={bold}
            onChange={() => setBold(!bold)}
          />
          <Text bold dark htmlFor="bold">
            Bold
          </Text>
        </CheckboxWrapper>
      </FieldWrapper>
    </Fields>
  )
}
