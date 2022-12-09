import React from 'react'
import styled from '@emotion/styled'
import { getKeyedTranslations } from '../helpers/i18n'
const t = getKeyedTranslations("demo")


/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const DemoAreaWrapper = styled('div')(props => ({
  gridArea: '2 / 2 / 3 / 3',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '230px',
  color: props.color,
  fontSize: props.fontSize + 'px',
  lineHeight: props.fontSize + 'px',
  fontWeight: props.isBold && '600',
  textShadow: props.isShadow && '0 2px 1px rgba(0,0,0,0.4)',
  '@media screen and (max-width: 1200px)': {
    gridArea: '2 / 2 / 3 / 3',
    textAlign: 'center',
  },
}))

const TextWrapper = styled('div')({
  maxWidth: '500px',
})

/*----------------------------------------------------------
   Demo Area
----------------------------------------------------------*/

export const DemoArea = ({ children, ...rest }) => {
  return (
    <DemoAreaWrapper {...rest}>
      <TextWrapper>{t("placeholder")}</TextWrapper>
    </DemoAreaWrapper>
  )
}
