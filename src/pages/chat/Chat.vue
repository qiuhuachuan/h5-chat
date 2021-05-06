<template>
  <div class="container">
    <div class="header"><ChatHeader></ChatHeader></div>

    <div id="mainBody" class="main"><ChatContent></ChatContent></div>

    <div class="footer"><ChatFooter></ChatFooter></div>
  </div>
</template>

<script>
import { defineComponent, onMounted, watch, nextTick } from 'vue'
import { useStore } from 'vuex'
import ChatHeader from './components/ChatHeader.vue'
import ChatContent from './components/ChatContent.vue'
import ChatFooter from './components/ChatFooter.vue'


export default defineComponent({
    name: 'Chat',
    components: {
        ChatHeader,
        ChatFooter,
        ChatContent
    },
    setup() {
      const store = useStore()
      const updateMainBody = () => {
        const mainDOM = document.getElementById('mainBody')
        mainDOM.scrollTop = mainDOM.scrollHeight;
      }
      onMounted(() => {
        console.log('Component is mounted!')
      })
      watch(
        store.state.history,
        updateMainBody,
        {flush: 'post'}
      )
    }
})
</script>

<style lang="less" scoped>
  .container {
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    .header {
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #eebf52;
      font-size: 20px;
      flex-shrink: 0;
    }
    .main {
      background-color: #eee;
      flex:1;
      width:100%;
      overflow: auto;
    }
    .footer {
      background-color: #ccc;
      font-size: 30px;
      flex-shrink: 0;
    }
  }
  
</style>