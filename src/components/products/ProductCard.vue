<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="product-card">
    <img :src="product.image" alt="Product Image" class="product-image" />
    <div class="product-details">
      <h2 class="product-title">{{ product.title }}</h2>
      <p class="product-price">Ksh{{ product.price.toFixed(2) }}</p>
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
@media (max-width: 1120px) {
  .product-card {
    width: 150px;
  }
}
</style>
