<template lang="pug">
	div
		token(v-if="!token")
		div(v-if="token")
			b-breadcrumb(:items="breadcrumbs" v-if="breadcrumbs.length > 1")
			h3.prev(v-if="breadcrumbs[breadcrumbs.length-1]")
				router-link(:to="breadcrumbs[breadcrumbs.length-2].href" v-if="breadcrumbs[breadcrumbs.length-2]" target="_self")
					icons.prev-icon(iconName="icon-arrow_left" width="20" height="20" iconColor="#999999")
				span {{ breadcrumbs[breadcrumbs.length-1].text }}
			b-list-group
				b-list-group-item.item(v-for="item in current")
					router-link.item-line(:to="`/disk${convertPath(item.path)}`" target="_self"  v-if="item.type==='dir'" @click.prevent="")
						icons.item-preview(iconName="icon-folder" width="50" height="50" iconColor="#ffd200")
						span.item-about
							.item-about_name {{ item.name }}
							.item-about_size(v-if="item.size") {{ convertBytes(item.size) }}
					div.item-line(v-else)
						span.item-preview(:style="`background: url(${item.preview}) center center; background-size: cover;`")
						span.item-about
							.item-about_name {{ item.name }}
							.item-about_size(v-if="item.size") {{ convertBytes(item.size) }}
			button.btn.btn-link(@click="onGetList") Обновить список
</template>

<script>
	import Token from "./Token";
	import { mapGetters, mapActions } from 'vuex';

	export default {
		components: {
			Token,
		},
		data() {
			return {
				breadcrumbs: [],
			}
		},
		computed: {
			...mapGetters({
				token: 'getToken',
				getList: 'getList',
				path: 'getPath'
			}),
			current() {
				if (!this.path) {
					this.changePath("/"+this.$route.params[0]);
				}

				this.breadcrumbs = [];
				const breadcrumbsList = this.$route.params[0] ? ["/disk", ...this.$route.params[0].split('/')] : ["/disk"];

				for (var i = 0; i < breadcrumbsList.length; i++) {
					this.breadcrumbs.push({
						text: i === 0 ? "Файлы" : breadcrumbsList[i],
						href: i === 0 ? "/disk/" : breadcrumbsList.join('/').split('/', i+2).join('/')
					});
				}

				return this.getList;
			},
		},
		methods: {
			...mapActions(['changePath']),
			convertBytes(length) {
				let i = 0,
						type = ['б','Кб','Мб','Гб','Тб','Пб'];

				while((length / 1000 | 0) && i < type.length - 1) {
						length /= 1024;
						i++;
				}
				return length.toFixed(2) + ' ' + type[i];
			},
			convertPath(path) {
				return path.slice(5, path.length);
			},
			onGetList() {
				this.changePath(this.path);
			}
		},
		beforeRouteUpdate (to, from, next) {
			this.changePath("/"+to.params[0]);
			next();
		}
	}
</script>

<style>
	.list-group {
		text-align: left;
	}

	.list-group-item:focus,
	.list-group-item:hover {
		outline:  none;
	}

	.item:hover {
		transition: background-color 0.5s;
		background-color: #f8f8f8;
	}

	.item-line {
		width: 100%;
		display: inline-block;
	}

	.item-preview {
		width: 50px;
		height: 50px;
		overflow: hidden;
		display: inline-block;
		vertical-align: middle;
		margin-right: 20px;
	}

	.item-about {
		display: inline-block;
		vertical-align: middle;
	}

	.item-about_name {
		color: #2c3e50;
	}

	.item-about_size {
		color: #999;
		font-size: 0.8em;
	}

	.prev {
		width: 100%;
		padding-left: 20px;
    display: inline-block;
    text-align: left;
    margin-bottom: 15px;
		text-decoration: none;
		color: #2c3e50;
		transition: color 0.5s;
  }

  .prev a:hover {
		text-decoration: none;
		color: #2c3e50;
  }

	.prev-icon {
		margin-right: 15px;
		margin-left: 15px;
		transition: fill 0.5s;
	}

	.prev-icon:hover {
		fill: #2c3e50;
	}
</style>