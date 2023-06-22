<template>
  <div>
    <h3>Vue Suspense Example</h3>
    <Suspense>
      <template #default>
        <ProductDetail />
      </template>
      <template #fallback>
        <div>Loading ...</div>
      </template>
    </Suspense>
  </div>
  <div>{{ messageCompute }}</div>
</template>

<script>
import ProductDetail from '../components/ProductDetail'
import { inject, computed  } from 'vue'
export default {
  name: 'SuspenseDemo',
  components: {
    ProductDetail
  },
  setup() {
    const message = inject('message')
    const messageCompute = computed(() => {
      return message.state.message
    })
    return {
      messageCompute
    }
  }
}
</script>


