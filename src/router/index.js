import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
import routes from './routes.js'

Vue.use(IonicVueRouter)

const router = new IonicVueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
