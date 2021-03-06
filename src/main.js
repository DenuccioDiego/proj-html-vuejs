import Vue from 'vue'
import App from './App.vue'


import { library} from '@fortawesome/fontawesome-svg-core'
import { faClock, faSignal, faBars, faRocket, faCog, faShoppingBag, faThumbsUp, faFilm, faUserFriends, faImages, faArrowLeft, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faFacebook, faFontAwesome, faInstagram, faLinkedin, faTwitter,} from "@fortawesome/free-brands-svg-icons"
import { far, } from '@fortawesome/free-regular-svg-icons'

library.add(faStar)
library.add(faArrowRight)
library.add(faArrowLeft)
library.add(faThumbsUp)
library.add(faImages)
library.add(faFilm)
library.add(faUserFriends)
library.add(far)
library.add(faThumbsUp)
library.add(faShoppingBag)
library.add(faCog)
library.add(faRocket)
library.add(faBars)
library.add(faSignal)
library.add(faClock)
library.add(faFontAwesome)
library.add(faLinkedin)
library.add(faInstagram)
library.add(faFacebook)
library.add(faTwitter)

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
