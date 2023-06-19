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
</template>

<script>
import ProductDetail from '../components/ProductDetail'
export default {
  name: 'SuspenseDemo',
  components: {
    ProductDetail
  },
  setup() {

  }
}
</script>


