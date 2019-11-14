import styled from "@emotion/styled";
import { theme } from "../theme";

export const ControlWrapper = styled("div")({
  gridArea: "3 / 2 / 4 / 3",
  display: "flex",
  flexDirection: "row",
  background: "#f6f8fa",
  border: "1px solid #FFFFFF",
  boxShadow: "0 1px 2px 0 rgba(168,168,168,0.50)",
  padding: "20px",
  borderRadius: "6px",
  minWidth: "250px",
  "&:after": {
    border: "2px solid #E6E6E6"
  },
  "@media screen and (max-width: 540px)": {
    flexDirection: "column"
  }
});

export const ColorWrapper = styled("div")({
  position: "relative",
  width: "100%",
  maxWidth: "296px",
  "@media screen and (max-width: 540px)": {
    height: "180px",
    maxWidth: "calc(100% - 25px)"
  }
});

export const BackgroundWrapper = styled("div")(props => ({
  position: "absolute",
  minWidth: "120px",
  width: "100%",
  height: "100px",
  backgroundColor: "#" + props.background,
  border: "1px solid #FFFFFF",
  boxShadow: '0 0 2px 0 rgba(0,0,0,0.2)',
  borderRadius: "4px",
  "&:after": {
    border: "2px solid rgba(0, 0, 0, 0.05)"
  }
}));

export const ForegroundWrapper = styled("div")(props => ({
  position: "absolute",
  minWidth: "120px",
  width: "100%",
  height: "100px",
  backgroundColor: "#" + props.color,
  border: "1px solid #FFFFFF",
  boxShadow: '0 0 2px 0 rgba(0,0,0,0.2)',
  borderRadius: "4px",
  zIndex: "10",
  top: "55px",
  right: "-25px",
  "&:before": {
    border: "2px solid rgba(0, 0, 0, 0.05)"
  }
}));

export const HexWrapper = styled.input(props => ({
  color: props.textColour,
  position: "absolute",
  backgroundColor: "transparent",
  top: "10px",
  left: "24px",
  borderRadius: "3px",
  display: "flex",
  textTransform: 'uppercase',
  width: "80px",
  padding: "4px",
  fontWeight: theme.weight.bold,
  border: "1px solid #FFFFFF",
  boxShadow: "inset 0 0 0 1px #E6E6E6"
}));

export const Hash = styled.div(props => ({
  color: props.textColour,
  position: "absolute",
  top: "14px",
  left: "10px"
}));

export const Fields = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginLeft: "60px",
  "@media screen and (max-width: 540px)": {
    marginLeft: "0"
  }
});

export const FieldWrapper = styled("div")({
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

export const Button = styled.button(props => ({
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

export const TextSize = styled.input({
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

export const CheckboxWrapper = styled("label")({
  display: "flex",
  alignItems: "center",
  input: {
    marginRight: "6px"
  }
});

export const SwitchIcon = styled("button")({
  position: "absolute",
  right: "-25px",
  top: "25px",
  height: '26px',
  cursor: "pointer",
  border: 0,
  background: "transparent"
});
