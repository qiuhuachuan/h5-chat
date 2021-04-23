import { createStore } from 'vuex'

export default createStore({
	state: {
		history: [],
    sendIsAvailable: true,
    predictLabel: -999,
    username: 'qiuhuachuan',
    childProblem: null,
    labelName: null,
    status: 'intake-interview',
    counter: 1
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {}
})