import Head from 'next/head'
import config from '../../config'

export default function SEO({ description, title, image }) {
  const siteTitle = config.title

  return (
    <Head>
      <title>{`${title} | ${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.twitter} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  )
}
