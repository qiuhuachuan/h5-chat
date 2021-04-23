<template>
	<div class="chat-footer-outer van-hairline--top">
		<div class="chat-footer-inner">
			<VantField
				v-model="message"
				class="client-input"
				rows="1"
				autosize
				type="textarea"
				placeholder="请输入文本"
				input-align="left"
				maxlength="400"
			/>
			<VantButton text="发送" round class="client-button" @click="submitClientResponse" :disabled="store.state.sendIsAvailable"></VantButton>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import VantField from 'vant/lib/field'
import VantButton from 'vant/lib/button'
import axios from 'axios'

export default defineComponent({
	name: 'ChatFooter',
	components: {
		VantField,
		VantButton
	},
	setup() {
		const store = useStore()
		const message = ref('')

		const submitClientResponse = () => {
			const data = {
				owner: 'client',
				content: message.value
			}
			const dataToBeSended = {
				status: store.state.status,
				username: store.state.username,
				context: message.value,
				counter: store.state.counter
			}
			axios.post('http://172.16.75.126:8000/send-message', dataToBeSended).then(
				res => {
					console.log(res.data)
					store.state.history.push(data)
					message.value = ''
					store.state.history.push(res.data)
					store.state.counter += 1
				}
			)
			
		}
		return {
			store,
			message,
			submitClientResponse
		}
	}
})
</script>

<style lang="less" scoped>
.chat-footer-outer {
	.chat-footer-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.client-input {
			flex: 1;
			margin: 5px;
			border-radius: 22px;
			max-height: 100px;
			overflow-y: auto;
		}
		.client-button {
			font-size: 14px;
			color: #000;
			width: 80px;
			margin: 5px;
			background-color: #eebf52;
		}
	}
}
</style>