<template>
	<ion-card>
		<img src="../assets/logo.png" alt="Vue" />
		<ion-card-header>
			<ion-card-title>Title</ion-card-title>
			<ion-card-subtitle>Some subtitle text</ion-card-subtitle>
		</ion-card-header>
		<ion-card-content>
			<router-link to="/">
				Home
			</router-link> |
			<router-link to="/about">
				About
			</router-link>
		</ion-card-content>
	</ion-card>
</template>

<script>
export default {
	name: 'Home',
}
</script>
