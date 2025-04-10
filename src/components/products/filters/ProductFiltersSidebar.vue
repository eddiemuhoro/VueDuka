<script setup>
import { ref } from 'vue'
const props = defineProps({
  categories: {
    type: Array,
    required: true,
  },
})
const emit = defineEmits(['closeSidebar'])
const maxLimit = 23405
const minLimit = 300
const minPrice = ref(minLimit)
const maxPrice = ref(maxLimit)

// Ensure minPrice does not exceed maxPrice
const handleMinPriceChange = () => {
  if (minPrice.value > maxPrice.value - 100) {
    minPrice.value = maxPrice.value - 100 // Prevent overlap
  }
}

// Ensure maxPrice does not go below minPrice
const handleMaxPriceChange = () => {
  if (maxPrice.value < minPrice.value + 100) {
    maxPrice.value = minPrice.value + 100 // Prevent overlap
  }
}
</script>

<template>
  <div class="filter-options">
    <i class="pi pi-times" @click="$emit('closeSidebar')"></i>
    <label for="category">Category:</label>
    <select id="category">
      <option v-for="category in categories" :key="category" :value="category.toLowerCase()">
        {{ category }}
      </option>
    </select>

    <div class="filters-price-range">
      <p>{{ minPrice }} Ksh</p>
      <p>Ksh {{ maxPrice }} Ksh</p>
    </div>
    <div class="dual-range-slider">
      <input
        type="range"
        id="min-price"
        :min="minLimit"
        :max="maxLimit"
        v-model="minPrice"
        @input="handleMinPriceChange"
      />
      <input
        type="range"
        id="max-price"
        :min="minLimit"
        :max="maxLimit"
        v-model="maxPrice"
        @input="handleMaxPriceChange"
      />
    </div>
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

.filter-options i {
  cursor: pointer;
  font-size: 1rem;
  color: var(--color-text);
}

.filter-options label {
  font-size: 1.2rem;
}

.filter-options select {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--color-border);
}

.filters-price-range {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dual-range-slider {
  position: relative;
  width: 100%;
  height: 40px;
}

.dual-range-slider input[type='range'] {
  position: absolute;
  width: 100%;
  height: 5px;
  background: transparent;
  pointer-events: auto; /* Allow interaction with the sliders */
  -webkit-appearance: none;
}

.dual-range-slider input[type='range']::-webkit-slider-thumb {
  pointer-events: all; /* Allow interaction with the thumb */
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: var(--color-background);
  border-radius: 50%;
  cursor: pointer;
}

.dual-range-slider input[type='range']::-webkit-slider-runnable-track {
  height: 5px;
  background: var(--color-border);
  border-radius: 5px;
}

.dual-range-slider input[type='range']:focus {
  outline: none; /* Remove focus outline */
  box-shadow: 0 0 5px var(--color-border-hover); /* Add a focus effect */
}
</style>
