import React from 'react'
import styled from '@emotion/styled'

const StyledAd = styled('div')`
  display: flex;
  grid-area: 6 / 1 / 7 / 4;
  justify-content: center;
  position: relative;
  max-width: 684px;
  width: 100%;
  justify-self: center;
  &:before {
    content:
      "If you'd like to help keep WhoCanUse maintained, please consider turning off your AdBlocker for us (it's cool if you don't want to, no pressure)";
    position: absolute;
    top: 0;
    display: flex;
    background-color: #f6f8fa;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    color: #8c8c8c;
    padding: 20px 40px;
    height: 90px;
  }
  @media screen and (max-width: 1200px) {
    max-width: 470px;
  }
}`

export const Ad = ({ children }) => {
  const ref = React.useRef(null)
  React.useEffect(() => {
    if (ref.current) {
      const script = document.createElement('script')
      script.id = '_carbonads_js'
      script.src =
        '//cdn.carbonads.com/carbon.js?serve=CE7DE2QU&placement=whocanusecom'
      script.async = true
      ref.current.appendChild(script)
    }
  }, [])

  return <StyledAd ref={ref}>{children}</StyledAd>
}
