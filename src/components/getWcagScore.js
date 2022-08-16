import { formatWcagGuidelines } from './formatWcagGuidelines'
export function getWcagScore(fontSizeNum, isBold, contrast) {
  let wcagGrade
  let tooltip

  // Large text
  if (fontSizeNum >= 24 || (fontSizeNum >= 18.66 && isBold)) {
    tooltip = formatWcagGuidelines(3, 4.5)
    if (contrast >= 4.5) {
      wcagGrade = 'AAA'
    } else if (contrast >= 3) {
      wcagGrade = 'AA'
    } else {
      wcagGrade = 'FAIL'
    }
  } else if (fontSizeNum) {
    tooltip = formatWcagGuidelines(4.5, 7)
    if (contrast >= 7) {
      wcagGrade = 'AAA'
    } else if (contrast >= 4.5) {
      wcagGrade = 'AA'
    } else {
      wcagGrade = 'FAIL'
    }
  } else {
    wcagGrade = 'FAIL'
    tooltip =
      'While it is not official, the generally accepted practice is a minimum font size of 15px to meet AA standards'
  }
  return { wcagGrade, tooltip }
}
