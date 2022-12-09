import React from 'react'
import { SmallText } from '../typography'
import { Fields, FieldWrapper, TextSize, CheckboxWrapper } from './styled'
import { getKeyedTranslations } from '../../helpers/i18n'
const t = getKeyedTranslations("demo")

export const Config = ({
  fontSize,
  setFontDragInfo,
  setFontSize,
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
          <SmallText htmlFor="bold">{t("bold")}</SmallText>
        </CheckboxWrapper>
      </FieldWrapper>
    </Fields>
  )
}
