import CompletionPage from '@/components/payments/CompletionPage.vue'
import CartView from '@/views/CartView.vue'
import ProductsView from '@/views/ProductsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductsView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/completion',
      name: 'completion',
      component: CompletionPage,
    },
  ],
})

export default router
