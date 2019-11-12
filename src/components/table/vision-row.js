import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, Heading } from "../typography";
import chroma from "chroma-js";
import blinder from "color-blind";
import {
  VisionRowWrapper,
  VisionCellWrapper,
  PercentWrapper,
  Simulation,
  SimulationFilter
} from "./styled";
import { renderPassFail } from "./renderPassFail";
import { getWcagScore } from "../getWcagScore";
import Tippy from "@tippy.js/react";
import { formatContrast } from "../small-info-bars";

export class VisionRow extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    percent: PropTypes.string,
    tooltip: PropTypes.string,
    foreground: PropTypes.string,
    background: PropTypes.string,
    class: PropTypes.string
  };
  render() {
    const {
      name,
      percent,
      description,
      foreground,
      background,
      simType,
      contrastModifier = 0,
      bold,
      fontSize
    } = this.props;
    let simulatedForeground = foreground;
    let simulatedBackground = background;
    if (simType === "protanomaly") {
      simulatedForeground = blinder
        .protanomaly(`#${foreground}`)
        .replace("#", "");
      simulatedBackground = blinder
        .protanomaly(`#${background}`)
        .replace("#", "");
    }
    if (simType === "protanopia") {
      simulatedForeground = blinder
        .protanopia(`#${foreground}`)
        .replace("#", "");
      simulatedBackground = blinder
        .protanopia(`#${background}`)
        .replace("#", "");
    }
    if (simType === "deuteranomaly") {
      simulatedForeground = blinder
        .deuteranomaly(`#${foreground}`)
        .replace("#", "");
      simulatedBackground = blinder
        .deuteranomaly(`#${background}`)
        .replace("#", "");
    }
    if (simType === "deuteranopia") {
      simulatedForeground = blinder
        .deuteranopia(`#${foreground}`)
        .replace("#", "");
      simulatedBackground = blinder
        .deuteranopia(`#${background}`)
        .replace("#", "");
    }
    if (simType === "tritanomaly") {
      simulatedForeground = blinder
        .tritanomaly(`#${foreground}`)
        .replace("#", "");
      simulatedBackground = blinder
        .tritanomaly(`#${background}`)
        .replace("#", "");
    }
    if (simType === "tritanopia") {
      simulatedForeground = blinder
        .tritanopia(`#${foreground}`)
        .replace("#", "");
      simulatedBackground = blinder
        .tritanopia(`#${background}`)
        .replace("#", "");
    }
    if (simType === "achromatomaly") {
      simulatedForeground = blinder
        .achromatomaly(`#${foreground}`)
        .replace("#", "");
      simulatedBackground = blinder
        .achromatomaly(`#${background}`)
        .replace("#", "");
    }
    if (simType === "achromatopsia") {
      simulatedForeground = blinder
        .achromatopsia(`#${foreground}`)
        .replace("#", "");
      simulatedBackground = blinder
        .achromatopsia(`#${background}`)
        .replace("#", "");
    }
    const contrast = chroma.contrast(simulatedForeground, simulatedBackground);

    const fontSizeNum = Number(fontSize);
    const modifiedContrast = contrast + contrast * contrastModifier;

    let { wcagGrade } = getWcagScore(fontSizeNum, bold, modifiedContrast);
    const pass = wcagGrade !== "FAIL";

    return (
      <VisionRowWrapper pass={pass}>
        <VisionCellWrapper data-th="~Population">
          <PercentWrapper pass={pass}>
            <Heading margin="0">{percent}</Heading>
            <span style={{ marginBottom: "6px" }}>%</span>
          </PercentWrapper>
        </VisionCellWrapper>
        <VisionCellWrapper
          style={{ marginRight: "auto" }}
          data-th="Vision Type"
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                flexDrection: "row",
                alignItems: "center"
              }}
            >
              <Text bold dark>
                {name}
              </Text>
              <Tippy
                content={`Contrast: ${formatContrast(contrast)}`}
                duration="0"
                arrow="true"
                placement="top"
                animation="shift-away"
              >
                {renderPassFail(wcagGrade)}
              </Tippy>
            </div>
            <Text style={{ fontSize: "14px" }}>{description}</Text>
          </div>
        </VisionCellWrapper>
        <VisionCellWrapper style={{ marginLeft: "15px" }} data-th="Simulation">
          <Simulation>
            <SimulationFilter
              className={simType}
              foreground={simulatedForeground}
              background={simulatedBackground}
              bold={bold}
            >
              Text
            </SimulationFilter>
          </Simulation>
        </VisionCellWrapper>
      </VisionRowWrapper>
    );
  }
}
