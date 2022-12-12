import { getKeyedTranslations } from '../helpers/i18n'
const t = getKeyedTranslations('wcag')

function formatWcagGuidelines(AAContrast, AAAContrast) {
  return t('hint.requiredContrast')
    .replace('%AAContrast%', AAContrast)
    .replace('%AAAContrast%', AAAContrast)
}

export function getWcagScore(fontSizeNum, bold, contrast) {
  let wcagGrade
  let tooltip

  // Large text
  if (fontSizeNum >= 24 || (fontSizeNum >= 18.66 && bold)) {
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
    tooltip = t('hint.minFontSize')
  }
  return { wcagGrade, tooltip }
}
