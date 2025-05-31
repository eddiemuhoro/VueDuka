<script setup>
import { ref, onMounted, computed } from 'vue'
import ProductCard from './ProductCard.vue'
import ProductFiltersSidebar from './filters/ProductFiltersSidebar.vue'
import ProductFiltersTop from './filters/ProductFiltersTop.vue'

const products = ref([])
const filteredProducts = ref([])
const uniqueCategories = ref([])

const currentPage = ref(1)
const productsPerPage = ref(15)

const fetchProducts = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/products/')
    const data = await response.json()
    console.log('Fetched products:', data.products)
    products.value = data.products
    filteredProducts.value = data.products
    const categories = data.products.map((product) => product.category) || []
    uniqueCategories.value = ['All', ...new Set(categories)]
  } catch (error) {
    console.error('Error fetching products:', error)
  }
}

const filterProducts = (searchTerm) => {
  console.log('Filtering products with search term:', searchTerm)
  if (!searchTerm) {
    return filteredProducts.value
  } else {
    filteredProducts.value = products.value.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }
}

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * productsPerPage.value
  const end = start + productsPerPage.value
  return filteredProducts.value.slice(start, end)
})

const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / productsPerPage.value)
})

const isSidebarVisible = ref(false)
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value
}
const closeSidebar = () => {
  isSidebarVisible.value = false
}

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div class="product-listings">
    <section :class="['product-filters', { show: isSidebarVisible }]">
      <ProductFiltersSidebar :categories="uniqueCategories" @closeSidebar="closeSidebar" />
    </section>
    <section class="products">
      <ProductFiltersTop
        :categories="uniqueCategories"
        @filterProducts="filterProducts"
        @toggleSidebar="toggleSidebar"
      />
      <div class="product-grid">
        <ProductCard
          v-for="product in paginatedProducts"
          :key="product.id"
          :product="product"
          @addToCart="addToCart"
        />
      </div>
      <div class="pagination">
        <button :disabled="currentPage === 1" @click="currentPage--">Previous</button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button :disabled="currentPage === totalPages" @click="currentPage++">Next</button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.product-filters {
  width: 15%;
}
.products {
  width: 80%;
}
.product-listings {
  padding: 20px;
  display: flex;
  gap: 20px;
}

.listings-title {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}
.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 10px;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.pagination button {
  padding: 5px 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
  cursor: pointer;
  border-radius: 5px;
}

.pagination button:disabled {
  background-color: #e0e0e0;
  cursor: not-allowed;
}

.pagination span {
  font-size: 1rem;
}
@media (max-width: 728px) {
  .product-filters {
    position: fixed;
    top: 0;
    right: 0;
    padding: 10px;
    width: 300px;
    height: 100%;
    background-color: var(--color-background);
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
  }

  .product-filters.show {
    transform: translateY(0);
  }
  .products {
    width: 100%;
  }
}
</style>
