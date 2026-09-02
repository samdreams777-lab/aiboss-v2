import { useLang } from '@/i18n'

interface SeoProps {
  title?: string
  description?: string
  pathname?: string
}

export function Seo({ title, description, pathname = '/' }: SeoProps) {
  const { t } = useLang()

  const pageTitle = title || t.meta.indexTitle
  const pageDescription = description || t.meta.indexDescription

  const canonicalUrl = `https://aiboss.vn${pathname}`
  const alternateViUrl = pathname.startsWith('/en') ? pathname.replace('/en', '') : pathname
  const alternateEnUrl = pathname.startsWith('/en') ? pathname : `/en${pathname}`

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="AI B.O.S.S." />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />

      {/* Language alternates */}
      <link rel="alternate" hrefLang="vi" href={alternateViUrl} />
      <link rel="alternate" hrefLang="en" href={alternateEnUrl} />
      <link rel="alternate" hrefLang="x-default" href={alternateViUrl} />
    </>
  )
}
