<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'

const authStore = useAuthStore()

const email = ref('')
const password = ref('')

const register = async () => {
  await authStore.signUp(email.value, password.value)
}
</script>

<template>
  <div class="auth-form">
    <v-text-field
      v-model="email"
      label="Email"
      variant="outlined"
      density="comfortable"
      class="auth-field"
      hide-details
    />

    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      variant="outlined"
      density="comfortable"
      class="auth-field"
      hide-details
    />

    <v-btn
      block
      class="auth-submit"
      @click="register"
    >
      Register
    </v-btn>
  </div>
</template>