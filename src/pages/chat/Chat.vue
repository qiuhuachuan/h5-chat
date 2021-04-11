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
// .chat-wrapper {
//   position: relative;
//   .header {
//     height: 40px;
//   }
//   .content {
//     height: 100%;
//   }
//   .footer {
//     // margin-top: auto;
//     position: fixed;
//     bottom: 10px;
//     left: 0;
//     right: 0;
//     height: 100px;
//     z-index: 1000;
//   }
// }
</style>