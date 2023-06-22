import { reactive, readonly } from 'vue'

const state  = reactive({
  message: 'hello'
})

const setMessage = function (payload) {
  state.message = payload
}

export default {
  state: readonly(state),
  setMessage
}

