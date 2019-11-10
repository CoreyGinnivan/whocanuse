import React from "react";
import styled from "@emotion/styled";
import { SmallText, Text } from "./typography";
import { theme } from "./theme";
import Switch from "../images/switch.svg";
import ColorPicker from '@mapbox/react-colorpickr'

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const ControlWrapper = styled("div")({
  gridArea: "3 / 2 / 4 / 3",
  display: "flex",
  flexDirection: "row",
  background: "#EEEEEE",
  border: "1px solid #FFFFFF",
  boxShadow: "0 1px 2px 0 rgba(168,168,168,0.50)",
  padding: "20px",
  borderRadius: "6px",
  minWidth: "334px",
  "&:after": {
    border: "2px solid #E6E6E6"
  },
  '@media screen and (max-width: 540px)': {
    flexDirection: "column",
  }
});

const ColorWrapper = styled("div")({
  position: "relative",
  width: "100%",
  height: "200px",
  maxWidth: '296px',
  '@media screen and (max-width: 540px)': {
    height: "180px",
    maxWidth: 'calc(100% - 25px)',
  }
});

const BackgroundWrapper = styled("div")(props => ({
  position: "absolute",
  minWidth: "120px",
  width: '100%',
  height: "100px",
  backgroundColor: "#" + props.background,
  border: "1px solid #FFFFFF",
  borderRadius: "4px",
  "&:after": {
    border: "2px solid rgba(0, 0, 0, 0.05)"
  }
}));

const ForegroundWrapper = styled("div")(props => ({
  position: "absolute",
  minWidth: "120px",
  width: '100%',
  height: "100px",
  backgroundColor: "#" + props.color,
  border: "1px solid #FFFFFF",
  borderRadius: "4px",
  zIndex: "10",
  top: "55px",
  right: '-25px',
  "&:before": {
    border: "2px solid rgba(0, 0, 0, 0.05)"
  }
}));

const HexWrapper = styled.input(props => ({
  color: props.textColour,
  position: "absolute",
  backgroundColor: "transparent",
  top: "10px",
  left: "24px",
  borderRadius: "3px",
  display: "flex",
  width: "80px",
  padding: "4px",
  fontWeight: theme.weight.bold,
  border: "1px solid #FFFFFF",
  boxShadow: "inset 0 0 0 1px #E6E6E6"
}));

const Hash = styled.div(props => ({
  color: props.textColour,
  position: "absolute",
  top: "14px",
  left: "10px"
}));

const Fields = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginLeft: '60px',
  '@media screen and (max-width: 540px)': {
    marginLeft: '0',
  }
});

const FieldWrapper = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "& + &": {
    marginTop: "20px"
  },
  span: {
    width: "74px"
  }
});

const Button = styled.button(props => ({
  backgroundColor: props.selected ? "#F1F9FF" : "#FFFFFF",
  border: props.selected ? "2px solid #0094FF" : "1px solid #E1E1E1",
  boxShadow: "0 1px 6px 0 rgba(0,0,0,0.13)",
  borderRadius: "3px",
  padding: "6px 30px",
  fontFamily: theme.fontFamily,
  fontSize: "16px",
  fontWeight: theme.weight.bold,
  color: props.selected ? theme.color.dark : theme.color.grey,
  "&:hover": {
    cursor: "pointer"
  }
}));

const TextSize = styled.input({
  textAlign: "center",
  backgroundColor: "#FFFFFF",
  border: "1px solid #E1E1E1",
  borderRadius: "3px",
  padding: "6px 0",
  width: "60px",
  fontFamily: theme.fontFamily,
  fontSize: "16px",
  fontWeight: theme.weight.bold,
  color: theme.color.dark,
  marginRight: "6px",
  cursor: "ew-resize"
});

const CheckboxWrapper = styled("label")({
  display: "flex",
  alignItems: "center",
  input: {
    marginRight: "6px"
  }
});

const SwitchIcon = styled("button")({
  position: "absolute",
  right: "-25px",
  top: "25px",
  cursor: "pointer",
  border: 0,
  background: "transparent"
});

/*----------------------------------------------------------
   Control Control Component
----------------------------------------------------------*/
function getTextColor(bgColor, lightColor, darkColor) {
  const color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
  let r, g, b;
  if (color.length === 3) {
    r = parseInt(color.substring(0, 1) + color.substring(0, 1), 16);
    g = parseInt(color.substring(1, 2) + color.substring(1, 2), 16);
    b = parseInt(color.substring(2, 3) + color.substring(2, 3), 16);
  } else {
    r = parseInt(color.substring(0, 2), 16); // hexToR
    g = parseInt(color.substring(2, 4), 16); // hexToG
    b = parseInt(color.substring(4, 6), 16); // hexToB
  }
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
}

export const Control = ({
  background,
  color,
  backgroundText,
  colorText,
  fontSize,
  maxFontSize,
  minFontSize,
  setBackground,
  setForeground,
  setFontSize,
  shadow,
  setShadow,
  bold,
  setBold
}) => {
  const getBackgroundTextColor = getTextColor(
    `${background}`,
    "#FFFFFF",
    "#000000"
  );
  const getForegroundTextColor = getTextColor(`${color}`, "#FFFFFF", "#000000");

  const [fontDragInfo, setFontDragInfo] = React.useState(null);

  const mouseMove = React.useCallback(
    e => {
      if (!fontDragInfo) {
        return;
      }
      const diff = fontDragInfo.x - e.clientX;
      if (diff === 0) {
        return;
      }

      const newFont = Math.round(Number(fontDragInfo.fontSize) + -diff / 10);
      if (newFont > maxFontSize) {
        setFontSize(maxFontSize.toString());
      } else if (newFont < minFontSize) {
        setFontSize(minFontSize.toString());
      } else {
        setFontSize(newFont.toString());
      }
    },
    [fontDragInfo, maxFontSize, minFontSize, setFontSize]
  );

  const mouseUp = React.useCallback(() => {
    setFontDragInfo(null);
  }, []);

  React.useEffect(() => {
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
    return () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    };
  });

  return (
    <ControlWrapper>
      <ColorWrapper>
        <SwitchIcon
          onClick={e => {
            setForeground(background);
            setBackground(color)
          }}>
          <img src={Switch} alt="Switch colors" />
        </SwitchIcon>
        <BackgroundWrapper background={background}>
          <Hash textColour={getBackgroundTextColor}>#</Hash>
          <HexWrapper
            type="text"
            textColour={getBackgroundTextColor}
            value={backgroundText}
            onChange={e => {
              setBackground(e.target.value);
            }}
          />
        </BackgroundWrapper>
        <ForegroundWrapper color={color}>
          <Hash textColour={getForegroundTextColor}>#</Hash>
          <HexWrapper
            type="text"
            textColour={getForegroundTextColor}
            value={colorText}
            onChange={e => {
              setForeground(e.target.value);
            }}
          />
        </ForegroundWrapper>
      </ColorWrapper>
      <Fields>
        <FieldWrapper>
          <SmallText>Text Size</SmallText>
          <TextSize
            type="number"
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
    </ControlWrapper>
  );
};
