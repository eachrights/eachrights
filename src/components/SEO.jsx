import { Helmet } from 'react-helmet-async'

const SITE = 'https://www.eachrights.or.ke'

export default function SEO({ title, description, path = '/' }) {
  const fullTitle = title
    ? `${title} | EACHRights`
    : 'EACHRights | East African Centre for Human Rights'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${SITE}${path}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${SITE}${path}`} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}