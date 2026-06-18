<script setup>
import { useAuthStore } from '../store/auth'

const authStore = useAuthStore()

const logout = async () => {
  await authStore.signOut()
}
</script>

<template>
  <nav class="top-nav">
    <div class="logo">
      Mohsen's <span>TODO APP</span>
    </div>

    <button class="logout-btn" @click="logout">
      Logout
    </button>
  </nav>
</template>