<script setup>
import ProductListings from './components/products/ProductListings.vue'
import { RouterView } from 'vue-router'
import TopBar from './components/TopBar.vue'
import ThemeChanger from './utils/ThemeChanger.vue'
</script>
<template>
  <TopBar />
  <RouterView />
  <ThemeChanger />
</template>

<style scoped></style>
