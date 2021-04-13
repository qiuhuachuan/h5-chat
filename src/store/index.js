import { createStore } from 'vuex'

export default createStore({
	state: {
		history: [
			{
        id: 1,
        question: '你理想爱情是什么样子的？',
        owner: 'chatbot'
      },
      {
        id: 2,
        content: '一屋二人三餐四季',
        owner: 'client'
      }
		]
	},
	getters: {},
	mutations: {},
	actions: {},
	modules: {}
})