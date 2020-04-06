import React from 'react'
import styled from '@emotion/styled'

const StyledAd = styled('div')({ display: 'flex' })

export const Ad = () => {
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

  return <StyledAd ref={ref} />
}
