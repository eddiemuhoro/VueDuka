<script setup>
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="filter-options">
    <label for="category">Category:</label>
    <select id="category">
      <option v-for="category in categories" :key="category" :value="category.toLowerCase()">
        {{ category }}
      </option>
    </select>

    <label for="price-range">Price Range:</label>
    <input type="range" id="price-range" min="0" max="100" />
  </div>
</template>

<style scoped>
.filters-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  text-align: center;
}

.filter-options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
