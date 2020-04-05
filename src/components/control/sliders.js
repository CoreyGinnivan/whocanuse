import React from 'react'
import styled from '@emotion/styled'

export const SlidersWrapper = styled('div')({
  display: 'flex',
  width: '100%',
  marginTop: '10px',
  flexDirection: 'column',
})

const SliderHue = styled.input({
  display: 'block',
  width: '100%',
  height: '10px',
  borderRadius: '10px',
  appearance: 'none',
  background:
    'linear-gradient(90deg, #FF0000 0%, #FFFF00 21%, #00FF00 35%, #00FFFF 50%, #0000FF 67%, #FF00FF 87%, #FF0000 100%)',
  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)',
  marginBottom: '14px',
  '&:focus': {
    outline: 0,
    boxShadow: '0px 0px 0px 4px rgba(0,0,0,0.1)',
  },
  '&::-webkit-slider-thumb': {
    appearance: 'none',
    width: '14px',
    height: '14px',
    borderRadius: '20px',
    background: 'transparent',
    cursor: 'pointer',
    border: '2px solid #FFFFFF',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
  },
  '&::-moz-range-thumb': {
    appearance: 'none',
    width: '14px',
    height: '14px',
    borderRadius: '20px',
    background: 'transparent',
    cursor: 'pointer',
    border: '2px solid #FFFFFF',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
  },
})

const SliderSaturation = styled.input({
  display: 'block',
  width: '100%',
  height: '10px',
  borderRadius: '10px',
  appearance: 'none',
  background: 'linear-gradient(90deg, #A7A8A8 0%, #5EAFFE 100%)',
  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)',
  marginBottom: '14px',
  '&:focus': {
    outline: 0,
    boxShadow: '0px 0px 0px 4px rgba(0,0,0,0.1)',
  },
  '&::-webkit-slider-thumb': {
    appearance: 'none',
    width: '14px',
    height: '14px',
    borderRadius: '20px',
    background: 'transparent',
    cursor: 'pointer',
    border: '2px solid #FFFFFF',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
  },
  '&::-moz-range-thumb': {
    appearance: 'none',
    width: '14px',
    height: '14px',
    borderRadius: '20px',
    background: 'transparent',
    cursor: 'pointer',
    border: '2px solid #FFFFFF',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
  },
})

const SliderLightness = styled.input({
  display: 'block',
  width: '100%',
  height: '10px',
  borderRadius: '10px',
  appearance: 'none',
  background: 'linear-gradient(90deg, #000000 0%, #066AC6 34%, #FFFFFF 100%)',
  boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.2)',
  '&:focus': {
    outline: 0,
    boxShadow: '0px 0px 0px 4px rgba(0,0,0,0.1)',
  },
  '&::-webkit-slider-thumb': {
    appearance: 'none',
    width: '14px',
    height: '14px',
    borderRadius: '20px',
    background: 'transparent',
    cursor: 'pointer',
    border: '2px solid #FFFFFF',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
  },
  '&::-moz-range-thumb': {
    appearance: 'none',
    width: '14px',
    height: '14px',
    borderRadius: '20px',
    background: 'transparent',
    cursor: 'pointer',
    border: '2px solid #FFFFFF',
    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
  },
})

export const Sliders = () => {
  return (
    <SlidersWrapper>
      <SliderHue
        type="range"
        property="hue"
        min="10"
        max="60"
        datatype="number"
        mv-mode="edit"
        aria-label="Hue"
      />
      <SliderSaturation
        type="range"
        property="saturation"
        min="10"
        max="60"
        datatype="number"
        mv-mode="edit"
        aria-label="Saturation"
      />
      <SliderLightness
        type="range"
        property="lightness"
        min="10"
        max="60"
        datatype="number"
        mv-mode="edit"
        aria-label="Lightness"
      />
    </SlidersWrapper>
  )
}
