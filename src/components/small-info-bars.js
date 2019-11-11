import React, { Component } from "react";
import chroma from "chroma-js";
import styled from "@emotion/styled";
import { theme } from "../components/theme";

import PropTypes from "prop-types";
import { SmallText, Heading } from "../components/typography";
import Tippy from "@tippy.js/react";
import { getWcagScore } from "./getWcagScore";

const InfoBarWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between"
});

const SmallInfoBarWrapper = styled("div")(({ pass }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  borderRadius: "6px",
  width: "100%",
  marginRight: "20px",
  outline: 0,
  h1: {
    color: pass ? theme.color.green : theme.color.red
  },
  svg: {
    margin: "auto"
  },
  Check: {
    marginRight: "20px"
  },
  "&:last-of-type": {
    marginRight: 0
  },
  "@media screen and (max-width: 780px)": {
    "& + &": {
      marginLeft: "0"
    }
  }
}));

// const contrast = chroma.contrast(foreground, background);

// const renderGrading2 = ({ contrast }) => {
//   if (contrast > 7.1) {
//     return <Heading>AAA</Heading>
//   } else if (contrast > 5.1) {
//     return <Heading>AA</Heading>
//   } else {
//     return <Heading>Fail</Heading>
//   }
// };

class SmallInfoBar extends Component {
  static propTypes = {
    name: PropTypes.string,
    tooltip: PropTypes.string
  };
  render() {
    const { name, tooltip, grade } = this.props;
    const pass = grade !== "FAIL";

    return (
      <Tippy
        content={tooltip}
        duration="0"
        arrow="true"
        placement="top"
        animation="shift-away"
        followCursor="true"
      >
        <SmallInfoBarWrapper pass={pass}>
          <SmallText style={{ marginBottom: "5px" }}>{name}</SmallText>
          <Heading>{grade}</Heading>
        </SmallInfoBarWrapper>
      </Tippy>
    );
  }
}

class RatioStat extends Component {
  static propTypes = {
    name: PropTypes.string,
    tooltip: PropTypes.string
  };
  render() {
    const { name, tooltip, pass } = this.props;
    return (
      <Tippy
        content={tooltip}
        duration="0"
        arrow="true"
        placement="top"
        animation="shift-away"
        followCursor="true"
      >
        <SmallInfoBarWrapper pass={pass}>
          <SmallText style={{ marginBottom: "5px" }}>Contrast Ratio</SmallText>
          <Heading>{name}</Heading>
        </SmallInfoBarWrapper>
      </Tippy>
    );
  }
}

/*----------------------------------------------------------
   Small Info Bars
----------------------------------------------------------*/

const formatContrast = contrast => {
  return `${Math.round(contrast * 100) / 100}:1`;
};

export const SmallInfoBars = ({ foreground, background, bold, fontSize }) => {
  const contrast = chroma.contrast(foreground, background);
  const fontSizeNum = Number(fontSize);
  let { wcagGrade, tooltip } = getWcagScore(fontSizeNum, bold, contrast);

  return (
    <InfoBarWrapper>
      <RatioStat
        pass={contrast >= 4.5}
        tooltip="The difference in luminance or color that makes an object distinguishable - a higher number is better"
        name={`${formatContrast(contrast)}`}
      />
      <SmallInfoBar grade={wcagGrade} tooltip={tooltip} name="WCAG Grading" />
    </InfoBarWrapper>
  );
};
