// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
//require('~/css/main.css')
import DefaultLayout from '~/layouts/Default.vue'
import Card from '~/components/Card.vue'
import BigCard from '~/components/BigCard.vue'
import XCards from '~/components/XCards.vue'
import DeckList from '~/components/DeckList.vue'

import VueDisqus from 'vue-disqus'
import Comments from '~/components/Comments.vue'
import 'prismjs/themes/prism-tomorrow.css'

export default function (Vue, {
  router,
  head,
  isClient
}) {
  //window.bus = new Vue({})
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Card', Card)
  Vue.component('BigCard', BigCard)
  Vue.component('XCards', XCards)
  Vue.component('DeckList', DeckList)
  Vue.use(VueDisqus)
  Vue.component('Comments', Comments)
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800,900'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Lato:400,600,700,800,900'
  }),
  
}