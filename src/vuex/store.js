import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto';

import axios from 'axios';

Vue.use(Vuex);

const url = {
	base: 'https://cloud-api.yandex.net',
	disk: '/v1/disk',
	files: '/v1/disk/resources',
};

export default new Vuex.Store({
	state: {
		path: "",
		token: localStorage.getItem('token'),
		list: [],
	},
	mutations: {
		changePath(state, payload) {
			state.path = payload;
		},
		changeToken(state, payload) {
			state.token = payload;
		},
		changeList(state, payload) {
			state.list = payload;
		}
	},
	actions: {
		changePath(context, payload) {
			axios.get(url.base+url.files, {
				params: {
					path: payload,
					client_id: "b7163631b23f423a8f0c97417424e2ea",
				},
				headers: {
					'Accept': 'application/json',
					'Authorization': 'OAuth ' + this.getters.getToken,
				}
			})
			.then( response => {
				context.commit('changePath', payload);
				context.commit('changeList', response.data._embedded.items);
			})
			.catch( error => {
				console.error(error);
			})

		},
		changeToken(context, payload) {
			// Если токен заполнен, то проверяем, проходит ли авторизация
			if (payload) {
				axios.get(url.base+url.disk, {
					params: {
						path: "/",
						client_id: "b7163631b23f423a8f0c97417424e2ea",
					},
					headers: {
						'Accept': 'application/json',
						'Authorization': 'OAuth ' + payload,
					}
				})
				.then( response => {
					localStorage.setItem('token', payload);
					context.commit('changeToken', payload);
				})
				.catch( error => {
					// Если авторизация не проходит, то считаем токен ошибочным, очищаем localStorage и state и выводим сообщение об ошибке в консоль
					localStorage.setItem('token', '');
					context.commit('changeToken', '');
					console.error(error);
				})
			// Если токен не заполнен, то очищаем localStorage и state
			} else {
				localStorage.setItem('token', '');
				context.commit('changeToken', '');
			}
		},
	},
	getters: {
		getPath: state => {
			return state.path;
		},
		getToken: state => {
			return state.token;
		},
		getList: state => {
			return state.list;
		},
	},
});