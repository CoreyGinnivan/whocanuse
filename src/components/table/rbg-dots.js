import { Box } from '@chakra-ui/react'
import blinder from 'color-blind'

export const RGBDots = ({ simType }) => {
  let red = '#ff0000'
  let green = '#00ff00'
  let blue = '#0000ff'

  let simulatedRed = red
  let simulatedGreen = green
  let simulatedBlue = blue
  if (simType === 'protanomaly') {
    simulatedRed = blinder.protanomaly(red)
    simulatedGreen = blinder.protanomaly(green)
    simulatedBlue = blinder.protanomaly(blue)
  }
  if (simType === 'protanopia') {
    simulatedRed = blinder.protanopia(red)
    simulatedGreen = blinder.protanopia(green)
    simulatedBlue = blinder.protanopia(blue)
  }
  if (simType === 'deuteranomaly') {
    simulatedRed = blinder.deuteranomaly(red)
    simulatedGreen = blinder.deuteranomaly(green)
    simulatedBlue = blinder.deuteranomaly(blue)
  }
  if (simType === 'deuteranopia') {
    simulatedRed = blinder.deuteranopia(red)
    simulatedGreen = blinder.deuteranopia(green)
    simulatedBlue = blinder.deuteranopia(blue)
  }
  if (simType === 'tritanomaly') {
    simulatedRed = blinder.tritanomaly(red)
    simulatedGreen = blinder.tritanomaly(green)
    simulatedBlue = blinder.tritanomaly(blue)
  }
  if (simType === 'tritanopia') {
    simulatedRed = blinder.tritanopia(red)
    simulatedGreen = blinder.tritanopia(green)
    simulatedBlue = blinder.tritanopia(blue)
  }
  if (simType === 'achromatomaly') {
    simulatedRed = blinder.achromatomaly(red)
    simulatedGreen = blinder.achromatomaly(green)
    simulatedBlue = blinder.achromatomaly(blue)
  }
  if (simType === 'achromatopsia') {
    simulatedRed = blinder.achromatopsia(red)
    simulatedGreen = blinder.achromatopsia(green)
    simulatedBlue = blinder.achromatopsia(blue)
  }

  return (
    <Box position="relative" w={3} h={3} ml={2}>
      <Box
        pos="absolute"
        left={0}
        top={0}
        w={1.5}
        h={1.5}
        rounded="full"
        bgColor={simulatedRed}
      />
      <Box
        pos="absolute"
        left={2}
        top={0}
        w={1.5}
        h={1.5}
        rounded="full"
        bgColor={simulatedGreen}
      />
      <Box
        pos="absolute"
        left={1}
        top={1.5}
        w={1.5}
        h={1.5}
        rounded="full"
        bgColor={simulatedBlue}
      />
    </Box>
  )
}
