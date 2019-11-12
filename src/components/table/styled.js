import React, { Component } from "react";
import styled from "@emotion/styled";
import { theme } from "../theme";

export const VisionTableWrapper = styled("table")({
  marginTop: "40px",
  display: "flex",
  flexDirection: "column",
  "tbody > tr:last-child": {
    borderBottom: 0
  },
  tbody: {
    boxShadow: "0 2px 6px 0 rgba(0,0,0,0.14), 0 2px 4px 0 rgba(0,0,0,0.12)",
    borderRadius: "8px",
    overflow: "hidden"
  }
});

export const VisionRowWrapper = styled("tr")(({ pass }) => ({
  display: "flex",
  flexDirection: "row",
  background: "#FFFFFF",
  borderBottom: "1px solid #f1f1f1",
  backgroundColor: pass ? theme.color.white : theme.color.lightred,
  padding: "14px",
  alignItems: "center",
  "@media screen and (max-width: 560px)": {
    flexDirection: "column"
  },
  p: {
    color: pass ? null : theme.color.red
  }
}));

export const VisionCellWrapper = styled("td")(({ pass }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "flex-start",
  "@media screen and (max-width: 560px)": {
    width: "100% !important",
    marginRight: 0,
    justifyContent: "flex-start !important",
    paddingBottom: "10px",
    marginLeft: "0 !important",
    flexDirection: "row",
    "&:before": {
      content: "attr(data-th)",
      display: "inline-block",
      fontWeight: theme.weight.bold,
      fontSize: "12px",
      padding: "10px 0",
      textTransform: "uppercase",
      color: theme.color.grey,
      textAlign: "left",
      minWidth: "140px",
      alignItems: "center"
    }
  }
}));

export const PercentWrapper = styled("div")(({ pass }) => ({
  display: "flex",
  color: pass ? theme.color.green : theme.color.red,
  justifyContent: "center",
  width: "80px",
  alignItems: "center",
  height: "60px",
  padding: "5px",
  marginRight: "10px",
  h1: {
    color: pass ? theme.color.green : theme.color.red
  },
  "@media screen and (max-width: 560px)": {
    justifyContent: "flex-start",
    width: "auto",
    height: "auto"
  }
}));

export const TableHeaderWrapper = styled("thead")({
  display: "flex",
  marginBottom: "20px",
  "@media screen and (max-width: 560px)": {
    display: "none"
  }
});

export const TableHeadCellWrapper = styled("tr")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
});

export const Simulation = styled("div")({
  position: "relative",
  width: "90px",
  height: "60px",
  userSelect: "none",
  borderRadius: "6px",
  overflow: "hidden",
  boxShadow: "0 0 0px 1px rgba(0,0,0,0.1)"
});

export const SimulationFilter = styled("div")(props => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  top: "-10px",
  left: "-10px",
  width: "110px",
  height: "80px",
  background: "#" + props.background,
  color: "#" + props.foreground,
  userSelect: "none",
  fontWeight: props.bold ? "bold" : undefined
}));

export const PassFailTextWrapper = styled("div")(({ pass }) => ({
  display: "flex",
  backgroundColor: pass ? theme.color.lightgreen : theme.color.lightred,
  color: pass ? theme.color.green : theme.color.red,
  border: pass ? 0 : `1px solid ${theme.color.red}`,
  textTransform: "uppercase",
  borderRadius: "4px",
  fontSize: "11px",
  lineHeight: "14px",
  fontWeight: 600,
  padding: "1px 4px",
  marginLeft: "8px",
  cursor: 'default'
}));
