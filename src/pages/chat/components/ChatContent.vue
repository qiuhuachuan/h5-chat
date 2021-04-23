<template>
	<div class="chat-content">
    <div class="chat-container">
      <div class="chatbot">
        <img :src="chatbotAvatar">
        <div class="chatbot-content">
          <div class="details">
参与“预咨询”，你可以获得什么？<br />
  • 如果你当前正在遭遇令你毫无头绪的困境，“预咨询”可以帮助你理清目前的困扰；<br />
  • 如果你现在情绪上有些困扰又无人诉说，“预咨询”可以给你情绪上的纾解和支持；<br />
  • 如果“心理咨询”对你来说还有些陌生，而你又对此怀有好奇，“预咨询”可以向你介绍有关心理咨询的知识，帮助你了解咨询；<br />
  • 如果想通过心理咨询帮助自己，但不知从何开始，“预咨询”结束后，可以为你推荐具备专业资质的心理咨询资源。
          </div>
          <VantField
            v-model="state.title"
            class="text-title"
            rows="1"
            type="textarea"
            placeholder="请用一句话描述你的问题（8~25字），必填"
            input-align="left"
            required
            maxlength="25"
            :disabled="afterSubmit"
          />
          <VantField
              v-model="state.content"
              class="text-content"
              rows="1"
              type="textarea"
              placeholder="请详细描述问题(40~400字)，建议：【年龄-性别】【大致经过】【内心感受】【持续时间】"
              input-align="left"
              required
              maxlength="400"
              :disabled="afterSubmit"
            />
          <div style="margin-top: 5px; width: auto;">
            <VantButton round block type="primary" @click="submitChiefProblem(state)">
              提交
            </VantButton>
          </div>
        </div>
      </div>
      <div :class="item.owner" v-for="item of store.state.history" :key="item.id">
        <img :src="item.owner == 'chatbot' ? chatbotAvatar : clientAvatar">
        <div :class="item.owner == 'chatbot' ? 'chatbot-content' : 'client-content'">
          <div class="details">{{ item.question || item.content }}</div>
          <div v-if="item.childProblems">
          <VantRadioGroup v-model="radioChecked">
            <VantRadio v-for="element of item.childProblems" :name="element.key" :key="element.key" @click="selectChildProblem(element.key)">{{ element.value }}</VantRadio>
          </VantRadioGroup>
        </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import VantField from 'vant/lib/field'
import VantButton from 'vant/lib/button'
import { RadioGroup as VantRadioGroup, Radio as VantRadio} from 'vant'
export default defineComponent({
	name: 'ChatContent',
	components: {
		VantField,
		VantButton,
    VantRadioGroup,
    VantRadio
	},
	setup() {
    const store = useStore()

		const state = reactive({
			title: '',
			content: ''
		})
    const radioChecked = ref('')
    const afterSubmit = ref(false)
		
		const chatbotAvatar = 'images/1.png'
		const clientAvatar = 'images/2.png'
    // 提交主诉问题
		const submitChiefProblem = (state) => {
			console.log(state)
      axios.post('http://172.16.75.126:8000/first-question', state).then(
        res => {
          afterSubmit.value = true
          console.log(res.data)
          store.state.history.push(res.data)
          store.state.predictLabel = res.data.predictLabel
          store.state.labelName = res.data.labelName
        }
      )
      // 本地模拟
      // axios.get('public/mock/firstQuestion.json').then(
      //   res => {
      //     console.log(res.data)
      //     afterSubmit.value = true
      //     store.state.history.push(res.data)
      //   }
      // )
		}

    const selectChildProblem = key => {
      const dataToBeSended = {
        pred_label: store.state.predictLabel,
        child_problem_index: key,
        username: store.state.username,
        context: state.title + state.content,
        label_name: store.state.labelName
      }
      console.log(dataToBeSended)
      axios.post('http://172.16.75.126:8000/select-child-problem', dataToBeSended).then(
        res => {
          console.log(res.data)
          store.state.history.push(res.data)
          store.state.sendIsAvailable = false
        }
      )
    }

		return {
      store,
			state,
      radioChecked,
      afterSubmit,
			chatbotAvatar,
			clientAvatar,
			submitChiefProblem,
      selectChildProblem
		}
	}
})
</script>

<style lang="less" scoped>
.chat-content {
  height: 100%;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  .chat-container {
    overflow-y: auto;
    .chatbot {
      display: flex;
      flex-direction: row;
      padding: 6px 30px 6px 6px;
      img {
        margin: 5px;
        width: 40px;
        height: 40px;
        border-radius: 20px;
      }
      .chatbot-content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        .details {
          max-width: 260px;
          margin: 5px;
          margin-right: auto;
          white-space: pre-wrap;
          word-break: break-all;
          padding: 12px;
          font-size: 14px;
          text-align: left;
          flex: 1;
          background-color: #fff;
          border-top-right-radius: 16px;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
        }
        .text-title {
          margin: 5px;
          border-top-right-radius: 16px;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          max-height: 60px;
        }
        .text-content {
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
          max-width: 250px;
          margin: 5px;
          margin-left: auto;
          white-space: pre-wrap;
          word-break: break-all;
          padding: 12px;
          font-size: 14px;
          text-align: left;
          flex: 1;
          background-color: #59b269;
          border-top-left-radius: 16px;
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
        }
      }
    }
  }
}
</style>