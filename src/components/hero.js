import React from "react";
import styled from "@emotion/styled";
import Logo from "./logo";
import { Control } from "./control";
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

export const Hero = ({
  foreground,
  background,
  foregroundText,
  backgroundText,
  fontSize,
  fontSizeText,
  bold,
  shadow,
  setFontSize,
  setBackground,
  setForeground
}) => {
  return (
    <Wrapper>
      <Logo color={foreground} />
      <Control
        setBackground={setBackground}
        setForeground={setForeground}
        setFontSize={setFontSize}
        fontSize={fontSizeText}
        background={background}
        color={foreground}
        backgroundText={backgroundText}
        colorText={foregroundText}
      />
      <DemoArea
        color={foreground}
        fontSize={fontSize}
        isBold={bold}
        isShadow={shadow}
      />
      <Actions background={background} foreground={foreground} />
      <Background background={background} />
    </Wrapper>
  );
};
