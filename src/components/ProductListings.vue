<script setup>
import ProductCard from './ProductCard.vue'
import ProductFilters from './ProductFilters.vue'

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'Description for Product 1',
    price: 19.99,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLC1WjjzNBURE0taQ2MihTKAvKSkqzNAQXBA&s',
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description for Product 2',
    price: 29.99,
    image: 'https://cdn.mafrservices.com/sys-master-root/h22/he8/26798560346142/120048_main.jpg',
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description for Product 3',
    price: 39.99,
    image:
      'https://d16zmt6hgq1jhj.cloudfront.net/product/13049/Kifaru%20Match%20Box%20300%20Sticks.jpg',
  },
  {
    id: 4,
    title: 'Product 4',
    description: 'Description for Product 4',
    price: 49.99,
    image: 'https://cdn.mafrservices.com/sys-master-root/h22/he8/26798560346142/120048_main.jpg',
  },
  {
    id: 5,
    title: 'Product 5',
    description: 'Description for Product 5',
    price: 59.99,
    image: 'https://cdn.mafrservices.com/sys-master-root/h22/he8/26798560346142/120048_main.jpg',
  },
  {
    id: 6,
    title: 'Product 6',
    description: 'Description for Product 6',
    price: 69.99,
    image: 'https://cdn.mafrservices.com/sys-master-root/h22/he8/26798560346142/120048_main.jpg',
  },
]
</script>

<template>
  <div class="product-listings">
    <ProductFilters />
    <section class="products">
      <div class="product-grid">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </section>
  </div>
</template>

<style scoped>
.product-listings {
  padding: 20px;
  display: flex;
}

.listings-title {
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
}
.product-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
}

@media (max-width: 768px) {
  .product-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
