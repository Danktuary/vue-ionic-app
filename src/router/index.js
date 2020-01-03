import Vue from 'vue'
import { IonicVueRouter } from '@ionic/vue'
import routes from 'vue-auto-routing'
import { createRouterLayout } from 'vue-router-layout'

Vue.use(IonicVueRouter)

const RouterLayout = createRouterLayout(layout => {
	// eslint-disable-next-line prefer-template
	return import('@/layouts/' + layout + '.vue')
})

const router = new IonicVueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			component: RouterLayout,
			children: routes,
		},
	],
})

export default router
