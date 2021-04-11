<template>
  <Chat></Chat>
</template>

<script>
import { defineComponent } from 'vue'
import Chat from './pages/chat/Chat.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    Chat
  },
  setup() {}
})

</script>

<style scoped>

</style>