<template>
	<div class="chat-content">
		<div class="chatbot">
			
			<img :src="chatbotAvatar">
			<div class="form-table">
				<div class="details">预咨询</div>
				<VantField
					v-model="state.problem"
					class="text-problem"
					rows="1"
					type="textarea"
					placeholder="请用一句话描述你的问题（8~25字），必填"
					input-align="left"
					required
					maxlength="25"
				/>
				<VantField
						v-model="state.description"
						class="text-description"
						rows="1"
						type="textarea"
						placeholder="请详细描述问题(40~400字)，建议：【年龄-性别】【大致经过】【内心感受】【持续时间】"
						input-align="left"
						required
						maxlength="400"
					/>
				<div style="margin-top: 5px; width: auto;">
					<VantButton round block type="primary" @click="onSubmit(state)">
						提交
					</VantButton>
				</div>
			</div>
		</div>
		<div class="client">
			<img :src="clientAvatar">
			<div class="client-content">
				<div>Hi</div>
				<div>I am glad to talk to you.</div>
				<div>Hi</div>
				<div>I am glad to talk to you.</div>
				<div>Hi</div>
				<div>I am glad to talk to you.</div>
				<div>Hi</div>
				<div>I am glad to talk to you.</div>
				<div>Hi</div>
				<div>I am glad to talk to you.</div>
				<div>Hi</div>
				<div>I am glad to talk to you.</div>
				<div>Hi</div>
				<div>I am glad to talk to you.</div>
				<div>Hi</div>
				<div>I am glad to talk to you.</div>
				<div>Hi</div>
				<div>I am glad to talk to you.</div>
			</div>
		</div>
	</div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import VantField from 'vant/lib/field'
import VantButton from 'vant/lib/button'
export default defineComponent({
	name: 'ChatContent',
	components: {
		VantField,
		VantButton
	},
	setup() {
		const state = reactive({
			problem: '',
			description: ''
		})
		const messages = reactive({
			contents: [
				{
					content: 'hello',
					owner: 'chatbot'
				},
				{
					content: 'hi',
					owner: 'client'
				}
			]
		})
		const chatbotAvatar = 'images/1.png'
		const clientAvatar = 'images/2.png'
		const onSubmit = (state) => {
			console.log(state)
		}

		return {
			state,
			messages,
			chatbotAvatar,
			clientAvatar,
			onSubmit
		}
	}
})
</script>

<style lang="less" scoped>
.chat-content {
	height: inherit;
	margin-top: 40px;
	.chatbot {
		display: flex;
		flex-direction: row;
		padding: 5px;
		margin-right: 5px;
		img {
			margin: 5px;
			width: 40px;
			height: 40px;
			border-radius: 20px;
		}
		.form-table {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			.details {
				margin: 5px;
				margin-right: auto;
				white-space: pre-wrap;
				word-break: break-all;
				padding: 12px;
				font-size: 14px;
				text-align: right;
				flex: 1;
				background-color: #fff;
				border-top-right-radius: 16px;
				border-bottom-left-radius: 16px;
				border-bottom-right-radius: 16px;
			}
			.text-problem {
				margin: 5px;
				border-top-right-radius: 16px;
				border-bottom-left-radius: 16px;
				border-bottom-right-radius: 16px;
				max-height: 60px;
			}
			.text-description {
				margin: 5px;
				border-top-right-radius: 16px;
				border-bottom-left-radius: 16px;
				border-bottom-right-radius: 16px;
				max-height: 320px;
			}
		}
	}
	.client {
		display: flex;
		flex-direction: row-reverse;
		img {
			margin: 5px;
			width: 40px;
			height: 40px;
			border-radius: 20px;
		}
		.client-content {
			display: inline-flex;
			flex-flow: column wrap;
			div {
				margin: 5px;
				margin-left: auto;
				white-space: pre-wrap;
				word-break: break-all;
				padding: 12px;
				font-size: 14px;
				text-align: right;
				flex: 1;
				background-color: #fff;
				border-top-left-radius: 16px;
				border-bottom-left-radius: 16px;
				border-bottom-right-radius: 16px;
			}
		}
	}
}
</style>