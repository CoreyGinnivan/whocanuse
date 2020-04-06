import React from 'react'
import styled from '@emotion/styled'

const StyledAd = styled('div')`
  display: flex;
  grid-area: 6 / 1 / 7 / 4;
  justify-content: center;
  background-color: #f6f8fa;
  border-radius: 6px;
  position: relative;
  &:before {
    content:
      "If you want to help keep this site going, please consider turning off your AdBlocker (they're pretty good ones)";
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 14px;
    line-height: 20px;
    color: #8c8c8c;
    padding: 20px 110px;
    height: 90px;
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
