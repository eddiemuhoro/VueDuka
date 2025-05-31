<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const cartCount = ref(0)

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  cartCount.value = cart.length
}

function handleCartUpdated() {
  updateCartCount()
}

onMounted(() => {
  updateCartCount()
  window.addEventListener('cart-updated', handleCartUpdated)
})

onUnmounted(() => {
  window.removeEventListener('cart-updated', handleCartUpdated)
})
</script>

<template>
  <div class="top-bar">
    <div class="contact-info">
      <i class="pi pi-phone"></i>
      <p>+254 3475934</p>
    </div>
    <RouterLink to="/" class="company-logo">
      <img src="../assets/logo.svg" alt="Logo" class="logo" />
    </RouterLink>
    <nav class="nav-bar">
      <ul class="nav-links">
        <li>
          <RouterLink to="/cart">
            <i class="pi pi-shopping-cart"></i>
            <span class="cart-count">{{ cartCount }}</span>
          </RouterLink>
        </li>
        <li>
          <a href="#"> <i class="pi pi-user"></i></a>
        </li>
        <li class="contact-us"><a href="#">Contact Us</a></li>
      </ul>
    </nav>
  </div>

  <hr class="divider" />
</template>

<style scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.contact-info {
  color: var(--color-text);
  display: flex;
  align-items: center;
  gap: 10px;
}
.company-logo {
  display: flex;
  align-items: center;
}
.logo {
  width: 40px;
  height: auto;
}
.nav-bar {
  display: flex;
  align-items: center;
}
.nav-links {
  list-style: none;
  display: flex;
  align-items: center;

  gap: 20px;
}
.nav-links li {
  font-size: 14px;
  position: relative;
}

.nav-links a {
  text-decoration: none;
  color: var(--color-text);
}

.nav-links a:hover {
  color: var(--color-text-hover);
}

.contact-us {
  background-color: var(--vt-c-indigo);
  padding: 5px 10px;
  border-radius: 20px;
}

.contact-us a {
  color: var(--vt-c-white-soft);
  font-weight: bold;
}
.contact-us a:hover {
  color: var(--vt-c-white);
}
.divider {
  border: 1px solid var(--color-divider);
  margin: 0;
}
.cart-count {
  position: absolute;
  top: -5px;
  right: -10px;
  color: var(--color-text);
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
}
</style>
