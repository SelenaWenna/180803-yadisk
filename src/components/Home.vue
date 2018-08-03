<template lang="pug">
	div
		div
			token(v-if="!$store.getters.getToken")
			list(v-if="$store.getters.getToken")
			//-div {{ $route.path }}
			router-view
</template>

<script>
	import Token from "./Token";
	import List from "./List";
	
	export default {
		components: {
			Token,
			List
		},
	}	
</script>