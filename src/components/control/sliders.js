import React from 'react'
import styled from '@emotion/styled'

export const SlidersWrapper = styled('div')({
  display: 'flex',
  width: '100%',
  marginTop: '10px',
  flexDirection: 'column',
})

export const Slider = styled.input({
  display: 'block',
  width: '100%',
  height: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 1px rgba(0, 0, 0, 0.5)',
  '& + &': {
    marginTop: '10px',
  },
})

export const Sliders = () => {
  return (
    <SlidersWrapper>
      <Slider
        type="range"
        property="hue"
        min="10"
        max="60"
        datatype="number"
        mv-mode="edit"
        aria-label="Hue"
      />
      <Slider
        type="range"
        property="lightness"
        min="10"
        max="60"
        datatype="number"
        mv-mode="edit"
        aria-label="Lightness"
      />
      <Slider
        type="range"
        property="saturation"
        min="10"
        max="60"
        datatype="number"
        mv-mode="edit"
        aria-label="Saturation"
      />
    </SlidersWrapper>
  )
}
