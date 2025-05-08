<template>
  <form @submit.prevent="handleSubmit">
    <div id="payment-element"></div>
    <button type="submit" :disabled="isProcessing">
      {{ isProcessing ? 'Processing...' : 'Pay' }}
    </button>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { loadStripe } from '@stripe/stripe-js'

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})
const stripe = ref(null)
const elements = ref(null)
const isProcessing = ref(false)
const errorMessage = ref('')
onMounted(async () => {
  // Fetch the publishable key from your backend
  const configResponse = await fetch('http://localhost:5252/config')
  const { publishableKey } = await configResponse.json()

  stripe.value = await loadStripe(publishableKey)

  // Create PaymentIntent on the server
  const paymentIntentResponse = await fetch('http://localhost:5252/create-payment-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      items: props.items,
    }),
  })
  const { clientSecret } = await paymentIntentResponse.json()

  elements.value = stripe.value.elements({ clientSecret })
  const paymentElement = elements.value.create('payment')
  paymentElement.mount('#payment-element')
})

const handleSubmit = async () => {
  isProcessing.value = true
  const { error } = await stripe.value.confirmPayment({
    elements: elements.value,
    confirmParams: {
      //go to completion route '/completion'
      return_url: `${window.location.origin}/completion`,
    },
  })

  if (error) {
    errorMessage.value = error.message
    isProcessing.value = false
  }
}
</script>

<style>
.error {
  color: red;
}
</style>
