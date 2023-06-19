<template>
  <div class="outer">
    <h3>Vue Teleport Example</h3>
    <div>
      <MyModal />
    </div>
</div>
</template>

<script>
import MyModal from '../components/MyModal'
export default {
  name: 'TeleportExample',
  components: {
    MyModal
  },
  setup() {

  }
}
</script>


