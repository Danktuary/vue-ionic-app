<template>
	<div id="app">
		<ion-app>
			<ion-menu menu-id="side-nav" content-id="router-content">
				<ion-header>
					<ion-toolbar>
						<ion-title>Menu</ion-title>
					</ion-toolbar>
				</ion-header>
				<ion-content>
					<ion-list>
						<ion-item button @click="goTo('home')">
							<ion-icon slot="start" name="home" />
							<ion-label>Home</ion-label>
						</ion-item>
						<ion-item button @click="goTo('about')">
							<ion-icon slot="start" name="star" />
							<ion-label>About</ion-label>
						</ion-item>
					</ion-list>
				</ion-content>
			</ion-menu>
			<ion-vue-router id="router-content" />
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
