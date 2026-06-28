export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/studio/' },
    sitemap: 'https://globalpointpartners.com/sitemap.xml',
  }
}
