import React from 'react'
import { SmallText } from '../typography'
import { Fields, FieldWrapper, TextSize, CheckboxWrapper } from './styled'

export const Config = ({
  fontSize,
  setFontDragInfo,
  setFontSize,
  maxFontSize,
  minFontSize,
  isBold,
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
          onMouseDown={(e) => {
            setFontDragInfo({ x: e.clientX, fontSize })
          }}
          onChange={(e) => {
            setFontSize(e.target.value)
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
            checked={isBold}
            onChange={() => setBold(!isBold)}
          />
          <SmallText htmlFor="bold">Bold</SmallText>
        </CheckboxWrapper>
      </FieldWrapper>
    </Fields>
  )
}
