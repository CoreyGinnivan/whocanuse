import React, { Component } from "react";
import chroma from "chroma-js";
import styled from "@emotion/styled";
import { SmallInfoBar } from "./infobars";

const InfoBarWrapper = styled("div")({
  display: "flex",
  marginTop: "30px",
  "& + &": {
    marginTop: "10px"
  },
  justifyContent: "space-between",
  "@media screen and (max-width: 780px)": {
    flexDirection: "column"
  }
});

const formatContrast = contrast => {
  return `${Math.round(contrast * 100) / 100}:1`;
};

export default class WCAGAAInfoBar extends Component {
  render() {
    const { foreground, background } = this.props;
    const constast = chroma.contrast(foreground, background);

    return (
      <InfoBarWrapper>
        <SmallInfoBar
          tooltip="The difference in luminance or color that makes an object distinguishable - a higher number is better"
          name={`${formatContrast(constast)} Contrast Ratio`}
        />
        <SmallInfoBar
          pass={constast >= 4.5}
          tooltip="WCAG (Web Content Accessibility Guidelines) minimum required for general accessibility contrast ratios"
          name="WCAG AA"
        />
        <SmallInfoBar
          pass={constast >= 7.1}
          tooltip="WCAG (Web Content Accessibility Guidelines) that covers most vision type cases"
          name="WCAG AAA"
        />
      </InfoBarWrapper>
    );
  }
}
