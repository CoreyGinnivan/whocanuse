import React, { Component } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { SmallText, Text } from "./typography";
import { theme } from "./theme";
import Switch from "../images/switch.svg";

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const ControlWrapper = styled("div")({
  gridArea: "2 / 2 / 4 / 3",
  display: "flex",
  flexDirection: "column",
  background: "#EEEEEE",
  border: "1px solid #FFFFFF",
  boxShadow: "0 1px 2px 0 rgba(168,168,168,0.50)",
  padding: "20px",
  borderRadius: "6px",
  maxWidth: "400px",
  "&:after": {
    border: "2px solid #E6E6E6"
  },
  "@media screen and (max-width: 960px)": {
    margin: "0 auto",
    gridArea: "3 / 2 / 4 / 3"
  }
});

const ColorWrapper = styled("div")({
  position: "relative",
  width: "100%",
  height: "200px"
});

const BackgroundWrapper = styled("div")(props => ({
  position: "absolute",
  width: "270px",
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
  width: "270px",
  height: "100px",
  backgroundColor: "#" + props.color,
  border: "1px solid #FFFFFF",
  borderRadius: "4px",
  zIndex: "10",
  top: "55px",
  right: 0,
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

const FieldWrapper = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  "& + &": {
    marginTop: "20px"
  },
  span: {
    width: "90px"
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

const TextSize = styled.input(props => ({
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
  marginRight: "6px"
}));

const CheckboxWrapper = styled("label")({
  display: "flex",
  alignItems: "center",
  input: {
    marginRight: "6px"
  }
});

const SwitchIcon = styled("button")({
  position: "absolute",
  right: "4px",
  top: "30px",
  cursor: "pointer",
  border: 0,
  background: "transparent"
});

/*----------------------------------------------------------
   Control Control Component
----------------------------------------------------------*/

export default class Control extends Component {
  static propTypes = {
    background: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.string
  };

  getTextColor(bgColor, lightColor, darkColor) {
    const color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
    const r = parseInt(color.substring(0, 2), 16); // hexToR
    const g = parseInt(color.substring(2, 4), 16); // hexToG
    const b = parseInt(color.substring(4, 6), 16); // hexToB
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
  }

  render() {
    let { background, color, fontSize, setBackground, setForeground, setFontSize } = this.props;

    const getBackgroundTextColor = this.getTextColor(
      `${background}`,
      "#FFFFFF",
      "#000000"
    );
    const getForegroundTextColor = this.getTextColor(
      `${color}`,
      "#FFFFFF",
      "#000000"
    );

    return (
      <ControlWrapper>
        <ColorWrapper>
          <SwitchIcon>
            <img src={Switch} alt="Switch colors" />
          </SwitchIcon>
          <BackgroundWrapper background={background}>
            <Hash textColour={getBackgroundTextColor}>#</Hash>
            <HexWrapper
              type="text"
              textColour={getBackgroundTextColor}
              defaultValue={background}
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
              defaultValue={color}
              onChange={e => {
                setForeground(e.target.value);
              }}
            />
          </ForegroundWrapper>
        </ColorWrapper>
        <FieldWrapper>
          <SmallText>Type</SmallText>
          <Button selected style={{ marginRight: "10px" }}>
            Text
          </Button>
          <Button>Icon</Button>
        </FieldWrapper>
        <FieldWrapper>
          <SmallText>Text Size</SmallText>
          <TextSize
            type="text"
            defaultValue={fontSize}
            onChange={e => {
              setFontSize(e.target.value);
            }}
          />
          <Text bold>px</Text>
        </FieldWrapper>
        <FieldWrapper>
          <SmallText>Styles</SmallText>
          <CheckboxWrapper style={{ marginRight: "30px" }}>
            <input type="checkbox" id="bold" name="bold" />
            <Text bold dark htmlFor="bold">
              Bold
            </Text>
          </CheckboxWrapper>
          <CheckboxWrapper>
            <input type="checkbox" id="shadow" name="shadow" />
            <Text bold dark htmlFor="shadow">
              Shadow
            </Text>
          </CheckboxWrapper>
        </FieldWrapper>
      </ControlWrapper>
    );
  }
}
