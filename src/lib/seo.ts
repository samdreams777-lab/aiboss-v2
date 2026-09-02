/**
 * SEO utilities for AI B.O.S.S. V2
 */

export interface SeoMeta {
  title: string
  description: string
  pathname: string
  ogImage?: string
  noindex?: boolean
}

export const SITE_URL = 'https://aiboss.vn'
export const SITE_NAME = 'AI B.O.S.S.'

/**
 * Generate full URL from pathname
 */
export function buildUrl(pathname: string): string {
  return `${SITE_URL}${pathname}`
}

/**
 * All routes that should be indexed
 */
export const INDEXED_ROUTES = [
  '/',
  '/en/',
  '/solutions/',
  '/solutions/cafes/',
  '/solutions/restaurants/',
  '/solutions/beauty-spa/',
  '/solutions/dental-medical/',
  '/solutions/real-estate/',
  '/solutions/hospitality/',
  '/systems/',
  '/systems/website/',
  '/systems/qr-menu/',
  '/systems/ai-assistant/',
  '/systems/automation/',
  '/systems/analytics/',
  '/systems/loyalty/',
  '/work/',
  '/work/camon-coffee/',
  '/work/geum-cha/',
  '/work/seoul-korean-cuisine/',
  '/work/lerins-nook/',
  '/journey/',
  '/en/journey/',
  '/knowledge/',
  '/en/knowledge/',
  '/about/',
  '/en/about/',
  '/contact/',
  '/en/contact/',
]

/**
 * Routes that should NOT be indexed
 */
export const NOINDEX_ROUTES = [
  '/contact/', // Contact forms typically noindex
]
