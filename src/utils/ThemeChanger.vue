<script setup>
import { ref, watchEffect } from 'vue'

// Reactive variable to track the theme
const theme = ref(localStorage.getItem('theme') || 'light')

// Function to toggle the theme
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value) // Save the theme in localStorage
}

// Watch for theme changes and update the `data-theme` attribute
watchEffect(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
})
</script>

<template>
  <div>
    <button @click="toggleTheme">Switch to {{ theme === 'light' ? 'Dark' : 'Light' }} Theme</button>
    <slot />
  </div>
</template>
