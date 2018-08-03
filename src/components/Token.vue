<template lang="pug">
	div
		form
			h5 Ваш авторизационный токен
			input.token.form-control(type="text" placeholder="Ваш OAuth-токен" v-model="inputToken")
			div
				a.btn.btn-link(target="_blank" href="https://oauth.yandex.ru/authorize?response_type=token&client_id=b7163631b23f423a8f0c97417424e2ea") Получить токен
				button.btn.btn-success(@click.prevent="changeToken(inputToken)") Применить
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		data() {
			return {
				inputToken: this.$store.getters.getToken,
			}
		},
		computed: {
			...mapGetters({
				token: 'getToken',
			}),
		},
		methods: {
			...mapActions(['changeToken']),
		},
	}
</script>

<style scoped>
	.token {
		width: 100%;
		max-width: 500px;
		display: inline-block;
		margin-top: 20px;
		margin-bottom: 20px;
	}
</style>