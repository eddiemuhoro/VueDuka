<script setup>
import PaymentForm from '@/components/payments/PaymentForm.vue'
import { ref, computed, onMounted } from 'vue'
const products = ref([])
const isPaymentFormOpen = ref(false)
const togglePaymentForm = () => {
  isPaymentFormOpen.value = true
}
const fetchProducts = async () => {
  try {
    const response = await fetch('/products.json')
    const data = await response.json()
    products.value = data.slice(0, 5) // Display only the first 5 products
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

onMounted(() => {
  fetchProducts()
})

const totalPrice = computed(() => {
  return products.value.reduce((total, product) => total + product.price, 0)
})

const removeFromCart = (index) => {
  products.value.splice(index, 1)
}
</script>
<template>
  <div class="product-cart">
    <h2 class="cart-title">Shopping Cart</h2>
    <ul class="cart-items">
      <li v-for="(product, index) in products" :key="index" class="cart-item">
        <section class="item-info">
          <div class="item-image">
            <img :src="`https://picsum.photos/200/200?random=${product.id}`" alt="Product Image" />
          </div>
          <div class="item-details">
            <span class="item-name">{{ product.title }}</span>
            <span class="item-price">{{ product.price }} Ksh</span>
          </div>
        </section>
        <button class="remove-button" @click="removeFromCart(index)">Remove</button>
      </li>
    </ul>
    <div class="cart-total">
      <p>Total:</p>
      <p class="total-price">{{ totalPrice }} Ksh</p>
    </div>
    <button v-if="!isPaymentFormOpen" class="checkout-button" @click="togglePaymentForm">
      Checkout
    </button>
    <PaymentForm v-if="isPaymentFormOpen" :items="products" />
  </div>
</template>

<style scoped>
.product-cart {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.cart-title {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.item-image {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  margin-right: 15px;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}
.cart-items {
  list-style: none;
  padding: 0;
  margin: 0;
}
.item-info {
  display: flex;

  align-items: center;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.item-details {
  display: flex;
  flex-direction: column;
}

.item-name {
  font-size: 1rem;
  font-weight: bold;
}

.item-price {
  font-size: 0.9rem;
}

.remove-button {
  padding: 5px 10px;
  font-size: 0.9rem;
  background-color: #e74c3c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-button:hover {
  background-color: #c0392b;
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 10px 15px;
  border-top: 1px solid #ddd;
  font-size: 1.2rem;
  font-weight: bold;
}

.total-price {
  color: #27ae60;
}

.checkout-button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
</style>
