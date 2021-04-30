import { createStore } from 'vuex'

export default createStore({
	state: {
		history: [],
    sendIsAvailable: true,
    predictLabel: -999,
    username: 'qiuhuachuan',
    labelName: null,
    counter: 1,
    status: 'selection',
    selectedOption: ''
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {}
})