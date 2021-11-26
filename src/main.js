import Vue from 'vue'
import App from './App.vue'


import { library} from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faClock, faSignal, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faFacebook, faFontAwesome, faInstagram, faLinkedin, faTwitter,} from "@fortawesome/free-brands-svg-icons"

library.add(faBars)
library.add(faSignal)
library.add(faClock)
library.add(faUserSecret)
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
