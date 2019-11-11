import React from "react";
import Switch from "../../images/switch.svg";
import { ControlWrapper, ColorWrapper, SwitchIcon } from "./styled";
import { Background } from "./background";
import { Foreground } from "./foreground";
import { Config } from "./config";
import Helmet from "react-helmet";

/*----------------------------------------------------------
   Control Control Component
----------------------------------------------------------*/
function getTextColor(bgColor, lightColor, darkColor) {
  const color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
  let r, g, b;
  if (color.length === 3) {
    r = parseInt(color.substring(0, 1) + color.substring(0, 1), 16);
    g = parseInt(color.substring(1, 2) + color.substring(1, 2), 16);
    b = parseInt(color.substring(2, 3) + color.substring(2, 3), 16);
  } else {
    r = parseInt(color.substring(0, 2), 16); // hexToR
    g = parseInt(color.substring(2, 4), 16); // hexToG
    b = parseInt(color.substring(4, 6), 16); // hexToB
  }
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
}

export const Control = ({
  background,
  color,
  backgroundText,
  colorText,
  fontSize,
  maxFontSize,
  minFontSize,
  setBackground,
  setForeground,
  setFontSize,
  shadow,
  setShadow,
  bold,
  setBold
}) => {
  const getBackgroundTextColor = getTextColor(
    `${background}`,
    "#FFFFFF",
    "#000000"
  );
  const getForegroundTextColor = getTextColor(`${color}`, "#FFFFFF", "#000000");

  const [isSelectingColour, setIsSelectingColour] = React.useState(false);
  const [fontDragInfo, setFontDragInfo] = React.useState(null);

  const mouseMove = React.useCallback(
    e => {
      if (!fontDragInfo) {
        return;
      }
      const diff = fontDragInfo.x - e.clientX;
      if (diff === 0) {
        return;
      }

      const newFont = Math.round(Number(fontDragInfo.fontSize) + -diff / 10);
      if (newFont > maxFontSize) {
        setFontSize(maxFontSize.toString());
      } else if (newFont < minFontSize) {
        setFontSize(minFontSize.toString());
      } else {
        setFontSize(newFont.toString());
      }
    },
    [fontDragInfo, maxFontSize, minFontSize, setFontSize]
  );

  const mouseUp = React.useCallback(() => {
    setFontDragInfo(null);
  }, []);

  React.useEffect(() => {
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
    return () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", mouseUp);
    };
  });

  return (
    <ControlWrapper>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-assembly/v0.24.0/assembly.min.css"
        />
      </Helmet>
      <ColorWrapper>
        <SwitchIcon
          onClick={() => {
            setForeground(background);
            setBackground(color);
          }}
        >
          <img src={Switch} alt="Switch colors" />
        </SwitchIcon>
        <Background
          background={background}
          getBackgroundTextColor={getBackgroundTextColor}
          backgroundText={backgroundText}
          setBackground={setBackground}
          onClick={() =>
            isSelectingColour
              ? setIsSelectingColour(false)
              : setIsSelectingColour("background")
          }
        />
        <Foreground
          color={color}
          getForegroundTextColor={getForegroundTextColor}
          colorText={colorText}
          setForeground={setForeground}
          onClick={() =>
            isSelectingColour
              ? setIsSelectingColour(false)
              : setIsSelectingColour("background")
          }
        />
      </ColorWrapper>

      <Config
        fontSize={fontSize}
        setFontDragInfo={setFontDragInfo}
        setFontSize={setFontSize}
        maxFontSize={maxFontSize}
        minFontSize={minFontSize}
        bold={bold}
        setBold={setBold}
        shadow={shadow}
        setShadow={setShadow}
      />
    </ControlWrapper>
  );
};
