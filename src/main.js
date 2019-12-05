// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/main.css')
import DefaultLayout from '~/layouts/Default.vue'
import Card from '~/components/Card.vue'
import 'prismjs/themes/prism-tomorrow.css'

export default function (Vue, {
  router,
  head,
  isClient
}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Card', Card)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800,900'
  })
}