<script setup>
import { ref, computed } from 'vue'
const products = ref([
  { name: 'Product 1', price: 10 },
  { name: 'Product 2', price: 20 },
  { name: 'Product 3', price: 30 },
])

const totalPrice = computed(() => {
  return products.value.reduce((total, product) => total + product.price, 0)
})

const removeFromCart = (index) => {
  products.value.splice(index, 1)
}
</script>
<template>
  <div class="product-cart">
    <h2>Shopping Cart</h2>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        {{ product.name }} - {{ product.price }}$
        <button @click="removeFromCart(index)">Remove</button>
      </li>
    </ul>
    <p>Total: {{ totalPrice }}$</p>
  </div>
</template>
