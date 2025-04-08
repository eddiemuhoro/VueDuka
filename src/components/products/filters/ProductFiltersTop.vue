<script setup>
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
})
const emit = defineEmits(['filterProducts'])
const handleInputChange = (event) => {
  const searchTerm = event.target.value
  emit('filterProducts', searchTerm)
}
</script>

<template>
  <setion class="product-filters">
    <button v-for="category in categories" :key="category" class="filter-button">
      {{ category }}
    </button>
  </setion>
  <section class="search-bar">
    <input
      @change="handleInputChange"
      type="text"
      placeholder="Search products..."
      class="search-input"
    />
    <i class="pi pi-bars"></i>
  </section>
</template>

<style scoped>
.product-filters {
  display: flex;
  overflow-x: auto;
  gap: 10px; /* Add spacing between buttons */
  padding: 10px; /* Add padding for better spacing */
  scrollbar-width: thin; /* For Firefox: thin scrollbar */
}

.filter-button {
  background-color: var(--color-background-soft);
  color: var(--color-text);
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  white-space: nowrap; /* Prevent text wrapping */
}

.filter-button:hover {
  background-color: var(--color-background);
  color: var(--color-text-hover);
}
.search-bar {
  display: flex;
  align-items: center;
  gap: 10px; /* Add spacing between input and icon */
  padding: 10px; /* Add padding for better spacing */
}
.search-bar i {
  font-size: 20px;
  color: var(--color-text);
  cursor: pointer;
}
.filter-button:hover {
  background-color: var(--color-background);
  color: var(--color-text-hover);
}
.search-input {
  width: 100%;
  padding: 7px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: var(--vt-c-input-background);
}
.search-input::placeholder {
  color: var(--color-placeholder);
  font-style: italic;
}
.search-input:focus {
  border-color: var(--color-border);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  outline: none;
}

@media (min-width: 728px) {
  .search-bar i {
    display: none; /* Hide the icon on smaller screens */
  }
}
</style>
