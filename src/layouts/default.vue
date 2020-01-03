<template>
	<ion-page>
		<ion-menu menu-id="side-nav" content-id="router-content">
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
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-menu-button menu="side-nav" />
				</ion-buttons>
				<ion-title>Ionic App</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<ion-vue-router id="router-content" />
		</ion-content>
	</ion-page>
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
