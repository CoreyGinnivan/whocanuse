import React, { Component } from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const BackgroundWrapper = styled('div')((props) => ({
  gridArea: '1 / 1 / 5 / 4',
  backgroundColor: props.background,
  boxShadow: 'inset 0px 0px 0px 1px rgba(0,0,0,0.1)',
  borderRadius: '10px',
  zIndex: '-1',
}))

/*----------------------------------------------------------
   Background Strip Component
----------------------------------------------------------*/

export const Background = ({ children, ...rest }) => {
  return <BackgroundWrapper {...rest}>{children}</BackgroundWrapper>
}
