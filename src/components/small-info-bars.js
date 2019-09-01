import React, { Component } from "react";
import chroma from "chroma-js";
import styled from "@emotion/styled";
import { Check, Cross } from "../components/icons";
import { theme } from "../components/theme";

import PropTypes from "prop-types";
import { MediumText } from "../components/typography";
import Tippy from "@tippy.js/react";

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

const SmallInfoBarWrapper = styled("div")(({ pass }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: pass ? theme.color.lightgreen : theme.color.lightred,
  padding: "16px",
  borderRadius: "6px",
  width: "100%",
  marginTop: "10px",
  marginRight: "20px",
  outline: 0,
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
      marginTop: "10px",
      marginLeft: "0"
    }
  }
}));

const renderCheckMark = pass =>
  pass ? (
    <Check style={{ marginRight: "10px" }} />
  ) : (
      <Cross style={{ marginRight: "10px" }} />
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
          {renderCheckMark(pass)}
          <MediumText>{name}</MediumText>
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
