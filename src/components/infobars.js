import React, { Component } from "react";
import styled from "@emotion/styled";
import { theme } from "../components/theme";
import PropTypes from "prop-types";

import { MediumText, Heading } from "../components/typography";

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const LargeInfoBarWrapper = styled("div")(({ pass }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: pass ? theme.color.lightgreen : theme.color.lightred,
  padding: "20px",
  borderRadius: "6px",
  width: "100%",
  outline: 0,
  'h1, h2': {
    color: pass ? theme.color.green : theme.color.red,
  },
  "& + &": {
    marginLeft: "20px"
  },
  "@media screen and (max-width: 780px)": {
    "& + &": {
      marginTop: "10px",
      marginLeft: "0"
    }
  }
}));



/*----------------------------------------------------------
   Large Info Bar
----------------------------------------------------------*/



export class LargeInfoBar extends Component {
  static propTypes = {
    name: PropTypes.string,
    percent: PropTypes.string
  };
  render() {
    const { name, percent } = this.props;
    return (
      <LargeInfoBarWrapper>
        <Heading>{percent}% {name}</Heading>
      </LargeInfoBarWrapper>
    );
  }
}
