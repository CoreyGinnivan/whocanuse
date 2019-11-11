import React, { Component } from "react";
import styled from "@emotion/styled";
import { theme } from "../components/theme";
import PropTypes from "prop-types";

import { SmallText } from "../components/typography";

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const CompleteWrapper = styled("div")({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
});

const BarWrapper = styled("div")({
  display: 'flex',
  flexDirection: 'row',
  overflow: 'hidden',
  borderRadius: "10px",
  width: '100%',
  marginTop: '10px'
});

const TextWrapper = styled("div")({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%'
});

const PositiveBar = styled("div")(({ positivePercent }) => ({
  backgroundColor: theme.color.green,
  height: '10px',
  width: positivePercent + '%',
}));

const NeutralBar = styled("div")(({ neutralPercent }) => ({
  backgroundColor: theme.color.orange,
  height: '10px',
  width: neutralPercent + '%',
}));

const NegativeBar = styled("div")(({ negativePercent }) => ({
  backgroundColor: theme.color.red,
  height: '10px',
  width: negativePercent + '%',
}));



/*----------------------------------------------------------
   Large Info Bar
----------------------------------------------------------*/



export class PercentBars extends Component {
  static propTypes = {
    positivePercent: PropTypes.string,
    negativePercent: PropTypes.string,
    neutralPercent: PropTypes.string,
  };
  render() {
    const { positivePercent, negativePercent, neutralPercent } = this.props;
    return (
      <CompleteWrapper>
        <TextWrapper>
          <SmallText style={{ color: theme.color.green }}>{positivePercent}% can</SmallText>
          <SmallText style={{ color: theme.color.red }}>{negativePercent}% will struggle</SmallText>
        </TextWrapper>
        <BarWrapper>
          <PositiveBar positivePercent={positivePercent} />
          <NegativeBar negativePercent={negativePercent} />
        </BarWrapper>
      </CompleteWrapper>
    );
  }
}
