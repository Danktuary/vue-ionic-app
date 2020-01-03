import Vue from 'vue'
import Ionic from '@ionic/vue'
import App from './App.vue'
import router from './router/index.js'
import './registerServiceWorker.js'
import '@ionic/core/css/core.css'
import '@ionic/core/css/global.bundle.css'
import './assets/css/ionic-variables.css'

Vue.use(Ionic)

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')
