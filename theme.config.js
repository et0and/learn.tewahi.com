export default {
  github: 'https://github.com/et0and/learn.tewahi.com',
  docsRepositoryBase: 'https://github.com/et0and/learn.tewahi.com/blob/master',
  titleSuffix: ' – Te Wāhi Learn',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Learn</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        a Te Wāhi resource
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Learn: a Te Wāhi resource" />
      <meta name="og:description" content="Learn: a Te Wāhi resource" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://cdn.tewahi.me/og.png" />
      <meta name="twitter:site:domain" content="learn.tewahi.com" />
      <meta name="twitter:url" content="https://learn.tewahi.com" />
      <meta name="og:title" content="Learn: a Te Wāhi resource" />
      <meta name="og:image" content="https://cdn.tewahi.me/og.png" />
      <meta name="apple-mobile-web-app-title" content="Te Wāhi Learn" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: '',
  footerText: <>MIT {new Date().getFullYear()} © Te Wāhi Auaha</>,
  unstable_faviconGlyph: '👋',
}
