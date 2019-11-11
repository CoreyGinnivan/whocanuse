import React, { Component } from "react";
import chroma from "chroma-js";
import styled from "@emotion/styled";
import Layout from "../layout/layout";
import { Hero } from "../components/hero";
import { Heading } from "../components/typography";
import { PercentBars } from "../components/infobars";
import { VisionTable, VisionTableAlt, VisionRow, VisionRowAlt } from "../components/vision-table";
import { About } from "../components/about";
import { SmallInfoBars } from "../components/small-info-bars";
import queryString from "query-string";
import { linkPath } from "../helpers/link";

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

// Requiring function causes error during builds
// as the code tries to reference window
const module = require("module") // Error
// Wrap the require in check for window
if (typeof window !== `undefined`) {
  const module = require("module")
}

const MainLayout = styled("div")({
  display: 'flex',
  flexDirection: 'row',
  "@media screen and (max-width: 1200px)": {
    flexDirection: "column"
  }
});

const ContentWrapper = styled("div")({
  height: '100%',
  width: '50vw',
  marginLeft: '50vw',
  padding: '60px 40px 40px 0',
  "@media screen and (max-width: 1200px)": {
    width: '100%',
    marginLeft: '0',
    padding: '20px',
  }
});

const StatsWrapper = styled("div")({
  background: '#f6f8fa',
  padding: '20px',
  marginTop: '20px',
  borderRadius: '8px'
});

const InfoBarWrapper = styled("div")({
  display: "flex",
  marginTop: "15px",
  justifyContent: "space-between",
  "& + &": {
    marginTop: "10px"
  },
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

    backgroundText = qs.b || "663399";
    foregroundText = qs.c || "FFFFFF";
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
        <MainLayout>
          <Hero
            setBackground={this.setBackground}
            setForeground={this.setForeground}
            foreground={this.state.foreground}
            background={this.state.background}
            foregroundText={this.state.foregroundText}
            backgroundText={this.state.backgroundText}
            setFontSize={this.setFontSize}
            fontSize={this.state.fontSize}
            minFontSize={10}
            maxFontSize={60}
            fontSizeText={this.state.fontSizeText}
            shadow={this.state.shadow}
            setShadow={this.setShadow}
            bold={this.state.bold}
            setBold={this.setBold}
          />
          <ContentWrapper>
            <Heading align="left">Who can use this color combination?</Heading>
            <StatsWrapper>
              <InfoBarWrapper>
                <PercentBars
                  positivePercent="83"
                  neutralPercent="14"
                  negativePercent="3"
                />
              </InfoBarWrapper>
              <SmallInfoBars
                foreground={this.state.foreground}
                background={this.state.background}
              />
            </StatsWrapper>
            <VisionTable>
              <VisionRow
                name="Regular Vision (Trichromatic)"
                description="Can distinguish all three primary color, little to no blurriness"
                percent="84"
                number="1,000,000"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastThreshold={4.5}
              />
              <VisionRow
                name="Protanomaly"
                simType="protanomaly"
                description="Trouble distinguishing reds"
                percent="3"
                number="1,000,000"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastThreshold={4.5}
              />
              <VisionRow
                name="Protanopia"
                simType="protanopia"
                description="Red blind - Can’t see reds at all"
                percent="2"
                number="1,000,000"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastThreshold={4.5}
              />
              <VisionRow
                name="Deuteranomaly"
                simType="deuteranomaly"
                description="Trouble distinguishing greens"
                percent="2"
                number="1,000,000"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastThreshold={4.5}
              />
              <VisionRow
                name="Deuteranopia"
                simType="deuteranopia"
                description="Green blind - Can’t see greens at all"
                percent="1"
                number="1,000,000"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastThreshold={4.5}
              />
              <VisionRow
                name="Tritanomaly"
                simType="tritanomaly"
                description="Trouble distinguishing blues"
                percent="1"
                number="11,000"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastThreshold={4.5}
              />
              <VisionRow
                name="Tritanopia"
                simType="tritanopia"
                description="Blue blind - Can’t see blues at all"
                percent="4"
                number="123,000"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastThreshold={4.5}
              />
              <VisionRow
                name="Achromatomaly"
                simType="achromatomaly"
                description="Partial color blindness, sees the absence of most colors"
                percent="4"
                number="1,000,000"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastThreshold={4.5}
              />
              <VisionRow
                name="Achromatopsia"
                simType="achromatopsia"
                description="Complete color blindness, can only see shades"
                percent="4"
                number="1,000,000"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastThreshold={4.5}
              />
              <VisionRow
                name="Cataracts"
                simType="cataracts"
                description="Clouding of the lens in the eye that affects vision"
                percent="0.2"
                number="1,000,000"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastThreshold={4.5}
              />
              <VisionRow
                name="Glaucoma"
                simType="glaucoma"
                description="Slight vision loss"
                percent="0.1"
                number="1,000,000"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastThreshold={4.5}
              />
              <VisionRow
                name="Hyperopia"
                simType="hyperopia"
                description="Farsightedness - Trouble seeing things up close"
                percent="0.1"
                number="1,000,000"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastThreshold={4.5}
              />
              <VisionRow
                name="Low Vision"
                simType="lowvision"
                description="Decreased and/or blurry vision (not fixable by usual means such as glasses)"
                percent="0.1"
                number="1,000,000"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastThreshold={4.5}
              />
            </VisionTable>
            <VisionTableAlt>
              <VisionRowAlt
                name="Direct Sunlight"
                simType="sunlight"
                description="Simulating what direct sunlight on a phone/screen would be"
                percent="-"
                number="Most"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastThreshold={4.5}
              />
              <VisionRowAlt
                name="Night Shift Mode"
                simType="nightshift"
                description="Simulating what would be seen on phones/screens with night mode on"
                percent="-"
                number="Most"
                foreground={this.state.foreground}
                background={this.state.background}
                contrastThreshold={4.5}
              />
            </VisionTableAlt>
            <About />
          </ContentWrapper>
        </MainLayout>
      </Layout>
    );
  }
}

export default IndexPage;
