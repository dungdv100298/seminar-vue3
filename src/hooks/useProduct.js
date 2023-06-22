import { fetchData } from '@/apis/product'
import { ref } from 'vue'

export default function() {
  const products = ref([]);

  const fetchAll =  async () => {
    products.value = await fetchData();
  }
  
  return {
    products,
    fetchAll
  }
}