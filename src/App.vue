<template>
	<div id="app">
		<ion-app>
			<ion-menu menu-id="side-nav" content-id="app-layout">
				<ion-header>
					<ion-toolbar>
						<ion-title>Menu</ion-title>
					</ion-toolbar>
				</ion-header>
				<ion-content>
					<ion-list>
						<ion-menu-toggle menu="side-nav">
							<ion-item button @click="goTo('index')">
								<ion-icon slot="start" name="home" />
								<ion-label>Home</ion-label>
							</ion-item>
						</ion-menu-toggle>
						<ion-menu-toggle menu="side-nav">
							<ion-item button @click="goTo('about')">
								<ion-icon slot="start" name="star" />
								<ion-label>About</ion-label>
							</ion-item>
						</ion-menu-toggle>
					</ion-list>
				</ion-content>
			</ion-menu>
			<ion-vue-router id="app-layout" />
		</ion-app>
	</div>
</template>

<script>
export default {
	methods: {
		goTo(name) {
			if (this.$route.name === name) return
			return this.$router.push({ name })
		},
	},
}
</script>

<style lang="stylus">
#app
	font-family: 'Avenir', Helvetica, Arial, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	text-align: center
	color: #2c3e50
	margin-top: 60px
</style>
