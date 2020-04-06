import React from 'react'
import styled from '@emotion/styled'
import chroma from 'chroma-js'

export const SlidersWrapper = styled('div')({
  display: 'flex',
  width: '100%',
  marginTop: '10px',
  flexDirection: 'column',
})

const SliderHue = styled.input(
  {
    display: 'block',
    width: '100%',
    height: '10px',
    borderRadius: '10px',
    appearance: 'none',
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
      boxShadow:
        '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
    },
    '&::-moz-range-thumb': {
      appearance: 'none',
      width: '14px',
      height: '14px',
      borderRadius: '20px',
      background: 'transparent',
      cursor: 'pointer',
      border: '2px solid #FFFFFF',
      boxShadow:
        '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
    },
  },
  ({ min, max, saturation, lightness }) => ({
    background: `linear-gradient(to right, ${new Array(10)
      .fill(1)
      .map(
        (_, i, a) =>
          `hsl(${min +
            ((max - min) / a.length) * i}, ${saturation}%, ${lightness}%)`,
      )
      .join(', ')})`,
  }),
)

const SliderSaturation = styled.input(
  {
    display: 'block',
    width: '100%',
    height: '10px',
    borderRadius: '10px',
    appearance: 'none',
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
      boxShadow:
        '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
    },
    '&::-moz-range-thumb': {
      appearance: 'none',
      width: '14px',
      height: '14px',
      borderRadius: '20px',
      background: 'transparent',
      cursor: 'pointer',
      border: '2px solid #FFFFFF',
      boxShadow:
        '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
    },
  },
  ({ hue, lightness }) => ({
    background: `linear-gradient(to right, ${new Array(10)
      .fill(1)
      .map((_, i) => `hsl(${hue}, ${i * 10}%, ${lightness}%)`)
      .join(', ')})`,
  }),
)

const SliderLightness = styled.input(
  {
    display: 'block',
    width: '100%',
    height: '10px',
    borderRadius: '10px',
    appearance: 'none',
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
      boxShadow:
        '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
    },
    '&::-moz-range-thumb': {
      appearance: 'none',
      width: '14px',
      height: '14px',
      borderRadius: '20px',
      background: 'transparent',
      cursor: 'pointer',
      border: '2px solid #FFFFFF',
      boxShadow:
        '0 1px 4px 0 rgba(0,0,0,0.4), inset 0 1px 4px 0 rgba(0,0,0,0.4)',
    },
  },
  ({ min, max, hue }) => ({
    background: `linear-gradient(to right, ${new Array(10)
      .fill(1)
      .map(
        (_, i, a) => `hsl(${hue}, 0%, ${min + ((max - min) / a.length) * i}%)`,
      )
      .join(', ')})`,
  }),
)

export const Sliders = ({ hue, saturation, lightness, updateHex }) => {
  const hueValue = isNaN(hue) ? 0 : hue
  return (
    <SlidersWrapper>
      <SliderHue
        type="range"
        property="hue"
        datatype="number"
        mv-mode="edit"
        aria-label="Hue"
        onChange={e => {
          updateHex(
            chroma(e.currentTarget.value, saturation, lightness, 'hsl')
              .hex()
              .replace('#', ''),
          )
        }}
        value={hueValue}
        lightness={lightness * 100}
        saturation={saturation * 100}
        min={0}
        max={360}
      />
      <SliderSaturation
        type="range"
        property="saturation"
        datatype="number"
        mv-mode="edit"
        aria-label="Saturation"
        onChange={e => {
          updateHex(
            chroma(hue, e.currentTarget.value / 100, lightness, 'hsl')
              .hex()
              .replace('#', ''),
          )
        }}
        min={0}
        max={100}
        hue={hueValue}
        lightness={lightness * 100}
        value={saturation * 100}
      />
      <SliderLightness
        type="range"
        property="lightness"
        datatype="number"
        mv-mode="edit"
        aria-label="Lightness"
        onChange={e => {
          updateHex(
            chroma(hue, saturation, e.currentTarget.value / 100, 'hsl')
              .hex()
              .replace('#', ''),
          )
        }}
        min={0}
        max={100}
        hue={hueValue}
        value={lightness * 100}
      />
    </SlidersWrapper>
  )
}
