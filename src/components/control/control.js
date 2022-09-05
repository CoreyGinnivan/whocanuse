import React from 'react'

import { ControlWrapper } from './styled'
import { Background } from './background'
import { Foreground } from './foreground'

/*----------------------------------------------------------
   Control Control Component
----------------------------------------------------------*/
function getTextColor(bgColor, lightColor, darkColor) {
  const color = bgColor.substring(1, 7)
  let r, g, b
  if (color.length === 3) {
    r = parseInt(color.substring(0, 1) + color.substring(0, 1), 16)
    g = parseInt(color.substring(1, 2) + color.substring(1, 2), 16)
    b = parseInt(color.substring(2, 3) + color.substring(2, 3), 16)
  } else {
    r = parseInt(color.substring(0, 2), 16) // hexToR
    g = parseInt(color.substring(2, 4), 16) // hexToG
    b = parseInt(color.substring(4, 6), 16) // hexToB
  }
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor
}

export const Control = ({
  background,
  foreground,
  setColours,
  setBold,
  bold,
  fontSize,
  setFontSize,
  maxFontSize,
  minFontSize,
}) => {
  const getBackgroundTextColor = getTextColor(
    background.color.hex(),
    '#FFFFFF',
    '#000000',
  )
  const getForegroundTextColor = getTextColor(
    foreground.color.hex(),
    '#FFFFFF',
    '#000000',
  )

  const [isSelectingColour, setIsSelectingColour] = React.useState(false)

  return (
    <ControlWrapper>
      <Background
        background={background}
        foreground={foreground}
        getBackgroundTextColor={getBackgroundTextColor}
        setColours={setColours}
        onClick={() =>
          isSelectingColour
            ? setIsSelectingColour(false)
            : setIsSelectingColour('background')
        }
      />
      <Foreground
        foreground={foreground}
        getForegroundTextColor={getForegroundTextColor}
        setForeground={(foreground) => setColours({ foreground })}
        bold={bold}
        setBold={setBold}
        fontSize={fontSize}
        setFontSize={setFontSize}
        maxFontSize={maxFontSize}
        minFontSize={minFontSize}
        onClick={() =>
          isSelectingColour
            ? setIsSelectingColour(false)
            : setIsSelectingColour('background')
        }
      ></Foreground>
    </ControlWrapper>
  )
}
