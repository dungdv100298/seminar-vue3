<template>
  <div v-for="(item, index) in products" :key="index">
    {{ item.name }} / {{ item.size  }}
  </div>
  <div>  {{ messageCompute }}</div>
</template>

<script>
import useProduct from '@/hooks/useProduct'
import { inject, computed  } from 'vue'
export default {
  name: 'ProductExample',
  setup() {
    const message = inject('message')
    const { products, fetchAll } = useProduct()

    message.setMessage('Xin chao')
    
    const messageCompute = computed(() => {
      return message.state.message
    })

    fetchAll()

    return {
      products,
      messageCompute
    }
  }
}
</script>


