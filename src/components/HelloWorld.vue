<template>
  <h1>{{ props.msg }}</h1>

</template>

<script>
import { reactive, defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {type: String}
  },
  setup(props) {
    const state = reactive({ count: 0 })

    return {
      state,
      props
    }
  }
})
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>