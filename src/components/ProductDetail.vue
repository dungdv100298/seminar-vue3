<template>
  <div class="product">
    {{ data }}
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ProductDetail',
  async setup() {
      const data = ref(null);
      data.value = await fetchData();
      const color = ref('red');
      async function fetchData() {  
          return new Promise((resolve) => {
              setTimeout(() => resolve({
                name: 'Áo phông',
                size: 'XXL',
                color: 'Đen'
              }), 2000);
          });
      }
      return { data, color };
  },
}
</script>

<style>
.product {
  color: v-bind(color);
}
</style>


