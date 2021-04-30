<template>
  <div class="chat-wrapper">
    <div class="header"><ChatHeader></ChatHeader></div>
    <div class="content"><ChatContent></ChatContent></div>
    <div class="footer"><ChatFooter></ChatFooter></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
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

    }
})
</script>

<style lang="less" scoped>
.chat-wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    height: 40px;
  }
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .footer {
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #eee;
  }
}
</style>