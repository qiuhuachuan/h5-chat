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
			<VantButton text="发送" round class="client-button"></VantButton>
		</div>
	</div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import VantField from 'vant/lib/field'
import VantButton from 'vant/lib/button'

export default defineComponent({
	name: 'ChatFooter',
	components: {
		VantField,
		VantButton
	},
	setup() {
		const message = ref('')

		return {
			message
		}
	}
})
</script>

<style lang="less" scoped>
.chat-footer-outer {
	// margin-top: auto;
	z-index: 999;
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
	.chat-footer-inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.client-input {
			flex-basis: 1;
			margin: 5px;
			border-radius: 22px;
			max-height: 80px;
			overflow-y: visible;
		}
		.client-button {
			font-size: 14px;
			color: #000;
			width: 100px;
			margin: 5px;
			background-color: #eebf52;
		}
	}
}
</style>