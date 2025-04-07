<script setup>
import { ref } from 'vue'
import ProductCard from './ProductCard.vue'
import ProductFiltersSidebar from './filters/ProductFiltersSidebar.vue'
import ProductFiltersTop from './filters/ProductFiltersTop.vue'

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    category: 'Category 1',
    price: 19.99,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLC1WjjzNBURE0taQ2MihTKAvKSkqzNAQXBA&s',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
    category: 'Category 2',
    price: 29.99,
    image: 'https://cdn.mafrservices.com/sys-master-root/h22/he8/26798560346142/120048_main.jpg',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description for Product 3',
    category: 'Category 3',
    price: 39.99,
    image:
      'https://d16zmt6hgq1jhj.cloudfront.net/product/13049/Kifaru%20Match%20Box%20300%20Sticks.jpg',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description for Product 4',
    category: 'Category 4',
    price: 49.99,
    image: 'https://cdn.mafrservices.com/sys-master-root/h22/he8/26798560346142/120048_main.jpg',
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Description for Product 5',
    category: 'Category 5',
    price: 59.99,
    image: 'https://cdn.mafrservices.com/sys-master-root/h22/he8/26798560346142/120048_main.jpg',
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Description for Product 6',
    category: 'Category 6',
    price: 69.99,
    image: 'https://cdn.mafrservices.com/sys-master-root/h22/he8/26798560346142/120048_main.jpg',
  },
]
const categories = products.map((product) => product.category)
const uniqueCategories = ['All', ...new Set(categories)]

const filteredProducts = ref(products)
const filterProducts = (searchTerm) => {
  console.log('Filtering products with search term:', searchTerm)
  if (!searchTerm) {
    return filteredProducts.value
  } else {
    filteredProducts.value = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }
}
</script>

<template>
  <div class="product-listings">
    <section class="product-filters">
      <ProductFiltersSidebar :categories="uniqueCategories" />
    </section>
    <section class="products">
      <ProductFiltersTop :categories="uniqueCategories" :filterProducts="filterProducts" />
      <div class="product-grid">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>
    </section>
  </div>
</template>

<style scoped>
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

@media (max-width: 728px) {
  .product-filters {
    display: none;
  }
  .products {
    width: 100%;
  }
}
</style>
