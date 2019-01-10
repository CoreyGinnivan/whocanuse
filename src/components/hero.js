import React, { Component } from "react";
import styled from "@emotion/styled";
import Logo from "./logo";
import Control from "./control";
import { Background } from "./background";
import DemoArea from "./demo-area";
import { Actions } from "./actions";

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const Wrapper = styled("div")({
  display: "grid",
  gridTemplateColumns: "auto 340px 600px auto",
  gridTemplateRows: "100px 280px 56px",
  "@media screen and (max-width: 960px)": {
    gridTemplateColumns: "20px 1fr 20px",
    gridTemplateRows: "50px 150px auto"
  }
});

/*----------------------------------------------------------
   Hero Section
----------------------------------------------------------*/

export default class Hero extends Component {
  render() {
    const {
      foreground,
      background,
      fontSize,
      bold,
      shadow,
      setBackground,
      setForeground
    } = this.props;
    return (
      <Wrapper>
        <Logo color={foreground} />
        <Control
          setBackground={setBackground}
          setForeground={setForeground}
          background={background}
          color={foreground}
        />
        <DemoArea
          color={foreground}
          size={fontSize}
          isBold={bold}
          isShadow={shadow}
        />
        <Actions />
        <Background background={background} />
      </Wrapper>
    );
  }
}
