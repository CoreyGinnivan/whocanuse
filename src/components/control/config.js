import React from "react";
import { SmallText, Text } from "../typography";
import {
  ControlWrapper,
  ColorWrapper,
  SwitchIcon,
  Fields,
  FieldWrapper,
  TextSize,
  CheckboxWrapper
} from "./styled";

export const Config = ({
  fontSize,
  setFontDragInfo,
  setFontSize,
  maxFontSize,
  minFontSize,
  bold,
  setBold,
  shadow,
  setShadow
}) => {
  return (
    <Fields>
      <FieldWrapper>
        <SmallText>Text Size</SmallText>
        <TextSize
          type="number"
          name="text size"
          min="10"
          max="60"
          value={fontSize}
          onMouseDown={e => {
            setFontDragInfo({ x: e.clientX, fontSize });
          }}
          onChange={e => {
            setFontSize(e.target.value);
          }}
          onBlur={() => {
            const fontNumber = Number(fontSize);
            if (isNaN(fontNumber)) {
              return;
            }
            if (fontNumber > maxFontSize) {
              return setFontSize(maxFontSize.toString());
            }
            if (fontNumber < minFontSize) {
              return setFontSize(minFontSize.toString());
            }
          }}
        />
        <Text bold>px</Text>
      </FieldWrapper>
      <FieldWrapper>
        <SmallText>Styles</SmallText>
        <CheckboxWrapper style={{ marginRight: "20px" }}>
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
        <CheckboxWrapper>
          <input
            type="checkbox"
            id="shadow"
            name="shadow"
            checked={shadow}
            onChange={() => setShadow(!shadow)}
          />
          <Text bold dark htmlFor="shadow">
            Shadow
          </Text>
        </CheckboxWrapper>
      </FieldWrapper>
    </Fields>
  );
};
