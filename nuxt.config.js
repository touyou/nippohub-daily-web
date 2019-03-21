export default {
  mode: 'spa',
  generate: {
    dir: 'docs',
    fallback: '../404.html'
  },
  head: {
    title: 'NippoHub',
    meta: [
      {charset: 'utf-8'},
      {description: '日報管理サービス'},
      {property: 'og:type', content: 'website'},
      {property: 'og:title', content: 'NippoHub'},
      {property: 'og:description', content: '日報管理サービス'},
      {property: 'og:site_name', content: 'NippoHub'},
      {name: 'twitter:card', content: 'summary'},
      {name: 'twitter:creator', content: '@sasurai_usagi3'},
      {name: 'twitter:title', content: 'NippoHub'},
      {name: 'twitter:description', content: '日報管理サービス'}
    ]
  },
  css: [
    '@/assets/stylesheets/layout.css'
  ]
}
