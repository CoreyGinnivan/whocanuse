import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "../typography";
import chroma from "chroma-js";
import { renderPassFail } from "./renderPassFail";
import {
  VisionRowWrapper,
  VisionCellWrapper,
  PercentWrapper,
  Simulation,
  SimulationFilter
} from "./styled";

export class VisionRowAlt extends Component {
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
      description,
      foreground,
      background,
      simType,
      contrastThreshold
    } = this.props;
    let simulatedForeground = foreground;
    let simulatedBackground = background;
    const contrast = chroma.contrast(simulatedForeground, simulatedBackground);
    const pass = contrast >= contrastThreshold;
    return (
      <VisionRowWrapper pass={pass}>
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
              {renderPassFail(pass)}
            </div>
            <Text style={{ fontSize: "14px" }}>{description}</Text>
          </div>
        </VisionCellWrapper>
        <VisionCellWrapper
          style={{ justifyContent: "flex-end", marginLeft: "20px" }}
          data-th="Simulation"
        >
          <Simulation>
            <SimulationFilter
              className={simType}
              foreground={simulatedForeground}
              background={simulatedBackground}
            >
              Text
            </SimulationFilter>
          </Simulation>
        </VisionCellWrapper>
      </VisionRowWrapper>
    );
  }
}
