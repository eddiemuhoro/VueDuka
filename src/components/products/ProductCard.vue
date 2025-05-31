<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const cart = ref(JSON.parse(localStorage.getItem('cart')) || [])

const isInCart = computed(() => {
  return cart.value.some((item) => item.id === props.product.id)
})

const addToCart = (product) => {
  //add item clicked to local storage
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const existingProduct = cart.find((item) => item.id === product.id)
  if (existingProduct) {
    existingProduct.quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }
  localStorage.setItem('cart', JSON.stringify(cart))
  console.log('Product added to cart:', product)
  window.dispatchEvent(new Event('cart-updated'))
  alert('Product added to cart successfully!')
  // Emit an event to notify parent component if needed
  // emit('productAdded', product)
}
</script>

<template>
  <div class="product-card">
    <img
      :src="`https://picsum.photos/200/200?random=${product.id}`"
      alt="Product Image"
      class="product-image"
    />
    <div class="product-details">
      <h2 class="product-title">{{ product.name }}</h2>
      <p class="product-price">Ksh{{ product.price.toFixed(2) }}</p>
      <button @click="addToCart(product)" class="btn btn-primary" :disabled="isInCart">
        {{ isInCart ? 'In Cart' : '+' }}
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
.product-card {
  border-bottom: 1px solid #ccc;
  background-color: var(--color-background-soft);
  width: 150px;
}

.product-image {
  max-width: 100%;
  height: auto;
}

.product-details {
  padding: 0 10px;
}

.product-title {
  font-size: 15px;
}

.product-price {
  font-size: 13px;
  font-weight: 600;
}

.product-card:hover {
  background-color: var(--color-background);
}

.btn-primary {
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

@media (max-width: 1120px) {
  .product-card {
    width: 150px;
  }
}
</style>
