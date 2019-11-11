import React, { Component } from "react";
import chroma from "chroma-js";
import styled from "@emotion/styled";
import { theme } from "../components/theme";

import PropTypes from "prop-types";
import { SmallText, Heading } from "../components/typography";
import Tippy from "@tippy.js/react";

const InfoBarWrapper = styled("div")({
  display: "flex",
  marginTop: "30px",
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
  'h1': {
    color: pass ? theme.color.green : theme.color.red,
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

const renderCheckMark = pass =>
  pass ? (
    <Heading>Pass</Heading>
  ) : (
      <Heading>Fail</Heading>
    );

class SmallInfoBar extends Component {
  static propTypes = {
    name: PropTypes.string,
    tooltip: PropTypes.string
  };
  render() {
    const { name, tooltip, pass } = this.props;
    return (
      <Tippy content={tooltip} duration="0" arrow="true" placement="top" animation="shift-away">
        <SmallInfoBarWrapper pass={pass}>
          <SmallText style={{ marginBottom: '5px' }}>{name}</SmallText>
          {renderCheckMark(pass)}
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
      <Tippy content={tooltip} duration="0" arrow="true" placement="top" animation="shift-away">
        <SmallInfoBarWrapper pass={pass}>
          <SmallText style={{ marginBottom: '5px' }}>Contrast Ratio</SmallText>
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

export class SmallInfoBars extends Component {
  render() {
    const { foreground, background } = this.props;
    const constast = chroma.contrast(foreground, background);

    return (
      <InfoBarWrapper>
        <RatioStat
          pass={constast >= 4.5}
          tooltip="The difference in luminance or color that makes an object distinguishable - a higher number is better"
          name={`${formatContrast(constast)}`}
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
