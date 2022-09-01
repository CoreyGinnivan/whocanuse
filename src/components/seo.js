import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import config from '../../config'

export default function SEO({ title, background, foreground }) {
  const siteTitle = config.title

  const newFaviconUri = renderSVGToDataURI(
    foreground.color.hex(),
    background.color.hex(),
  )

  return (
    <Head>
      <title>{`${siteTitle || title}`}</title>
      <meta name="theme-color" content={background.color.hex() || '#fff'} />
      <meta
        name="description"
        content="A tool that brings attention and understanding to how color contrast can affect people with different visual impairments."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://whocanuse.com" />
      <meta property="og:title" content="WhoCanUse" />
      <meta
        property="og:image"
        content="https://whocanuse.com/whocanuse_banner.png"
      />
      <meta
        property="og:description"
        content="A tool that brings attention and understanding to how color contrast can affect people with different visual impairments."
      />
      <meta property="og:site_name" content={siteTitle || title} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:image"
        content="https://whocanuse.com/whocanuse_banner.png"
      />
      <meta property="twitter:creator" content="@CoreyGinnivan" />
      <meta property="twitter:title" content="WhoCanUse" />
      <meta
        property="twitter:description"
        content="A tool that brings attention and understanding to how color contrast can affect people with different visual impairments."
      />
      <link rel="icon" href="favicon.png" type="image/png" />
      <link rel="icon" href="favicon.ico" sizes="any" />
      <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      <link rel="icon" href={newFaviconUri} type="image/svg+xml" />
    </Head>
  )
}

function renderSVGToDataURI(frontColour = '#639', backColour = '#fff') {
  const svgString = encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
      <rect fill="${backColour}" stroke="#555" stroke-opacity="0.2" x="1" y="1" width="10" height="10" rx="2" ry="2" />
      <rect fill="${frontColour}" stroke="#555" stroke-opacity="0.2" x="5" y="5" width="10" height="10" rx="2" ry="2" />
    </svg>`
      .replace(/\r?\n|\r/gm, '')
      .trim(),
  )
  return `data:image/svg+xml;utf8,${svgString}`
}
