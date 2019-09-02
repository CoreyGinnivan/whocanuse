import React, { Component } from "react";
import chroma from "chroma-js";
import styled from "@emotion/styled";
import Layout from "../layout/layout";
import { Hero } from "../components/hero";
import { Heading } from "../components/typography";
import { LargeInfoBar } from "../components/infobars";
import { VisionTable, VisionRow } from "../components/vision-table";
import { About } from "../components/about";
import { SmallInfoBars } from "../components/small-info-bars";
import queryString from "query-string";
import { linkPath } from "../helpers/link";

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const ContentWrapper = styled("div")({
  maxWidth: "940px",
  margin: "50px auto 0 auto",
  "@media screen and (max-width: 960px)": {
    padding: "0 20px"
  }
});

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

/*----------------------------------------------------------
   Main Layout
----------------------------------------------------------*/

class IndexPage extends Component {
  constructor(props) {
    super(props);

    let foreground = "663399";
    let background = "663399";
    let fontSize = "20";
    let foregroundText = "FFFFFF";
    let backgroundText = "663399";

    const qs = queryString.parse(window.location.search);

    backgroundText = qs.b || "FFFFFF";
    foregroundText = qs.c || "663399";
    fontSize = qs.f || "20";

    if (chroma.valid(foregroundText)) {
      foreground = foregroundText;
    }
    if (chroma.valid(backgroundText)) {
      background = backgroundText;
    }

    const style = qs.s || "";
    this.state = {
      foreground,
      foregroundText,
      background,
      backgroundText,
      fontSize,
      fontSizeText: fontSize,
      shadow: style.indexOf("s") !== -1,
      bold: style.indexOf("b") !== -1
    };
  }

  setForeground = color => {
    if (chroma.valid(color)) {
      this.setState({ foreground: color }, () => {
        window.history.pushState(
          undefined,
          "",
          `?b=${this.state.background}&f=${this.state.foreground}&t`
        );
      });
    }
    this.setState({ foregroundText: color });
  };

  setBackground = color => {
    if (chroma.valid(color)) {
      this.setState({ background: color }, () => {
        window.history.pushState(
          undefined,
          "",
          linkPath(
            this.state.background,
            this.state.foreground,
            this.state.fontSize,
            this.state.bold,
            this.state.shadow
          )
        );
      });
    }
    this.setState({ backgroundText: color });
  };

  setFontSize = fontSize => {
    if (!isNaN(Number(fontSize))) {
      this.setState({ fontSize: fontSize > 60 ? 60 : fontSize });
    }
    this.setState({ fontSizeText: fontSize });
  };

  setShadow = shadow => {
    this.setState({ shadow });
  };
  setBold = bold => {
    this.setState({ bold });
  };

  render() {
    return (
      <Layout>
        <Hero
          setBackground={this.setBackground}
          setForeground={this.setForeground}
          foreground={this.state.foreground}
          background={this.state.background}
          foregroundText={this.state.foregroundText}
          backgroundText={this.state.backgroundText}
          setFontSize={this.setFontSize}
          fontSize={this.state.fontSize}
          fontSizeText={this.state.fontSizeText}
          shadow={this.state.shadow}
          setShadow={this.setShadow}
          bold={this.state.bold}
          setBold={this.setBold}
        />
        <ContentWrapper>
          <Heading align="center">Who can use this color combination?</Heading>
          <SmallInfoBars
            foreground={this.state.foreground}
            background={this.state.background}
          />
          <InfoBarWrapper>
            <LargeInfoBar
              percent="97"
              name="Global Population (Online)"
            />
            <LargeInfoBar
              percent="80"
              name="Australian Population (Online)"
            />
          </InfoBarWrapper>
          <VisionTable>
            <VisionRow
              name="Regular Vision"
              tooltip="Majority of the population with either no or minor visual impairments that can see the average color combinations"
              percent="-"
              number="1,000,000"
            />
            <VisionRow
              name="Deuteranomaly"
              tooltip="People who have trouble seeing green colors"
              percent="-"
              number="1,000,000"
            />
            <VisionRow
              name="Protanomaly"
              tooltip="People who have trouble seeing red colors"
              percent="-"
              number="1,000,000"
            />
            <VisionRow
              name="Tritanopia"
              tooltip="People who have trouble seeing blue colors"
              percent="-"
              number="1,000,000"
            />
            <VisionRow
              name="Achromatopsia"
              tooltip="People with this condition cannot see color at all"
              percent="-"
              number="1,000,000"
            />
            <VisionRow
              name="Cataracts"
              tooltip="Clouding of the normally clear lens of the eye which will showed blurred vision"
              percent="-"
              number="11,000"
            />
            <VisionRow
              name="Low Vision"
              tooltip="Significant visual imparment that generally affects people over the age of 60"
              percent="4"
              number="123,000"
            />
            <VisionRow
              name="Astigmatism"
              tooltip="Blurry vision caused by an irregular curvature of the eye's cornea or lens"
              percent="-"
              number="1,000,000"
            />
            <VisionRow
              name="Macular Degeneration"
              tooltip="Causes loss in the centre of the field of vision and blurred vision is a key symptom"
              percent="-"
              number="1,000,000"
            />
          </VisionTable>
        </ContentWrapper>
        <About />
      </Layout>
    );
  }
}

export default IndexPage;
