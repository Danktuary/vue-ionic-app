import Vue from 'vue'
import Ionic from '@ionic/vue'
import App from './App.vue'
import router from './router/index.js'
import '@ionic/core/css/ionic.bundle.css'
import './assets/css/ionic-variables.css'

Vue.use(Ionic)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
