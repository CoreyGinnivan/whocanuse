import React from 'react'
import ColorPicker from '@mapbox/react-colorpickr'
import styled from '@emotion/styled'

import '!!style-loader!css-loader!@mapbox/react-colorpickr/dist/colorpickr.css'

const ColourPickerWrapper = styled('div')({
  marginLeft: '40px',
})

export const ColourPicker = () => (
  <ColourPickerWrapper>
    <ColorPicker onChange={(e) => {}} />
  </ColourPickerWrapper>
)
