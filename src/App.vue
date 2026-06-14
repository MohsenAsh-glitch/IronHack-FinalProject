<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from './store/auth.js';
import Auth from './pages/Auth.vue';
import Dashboard from './pages/Dashboard.vue';
import Nav from './components/Nav.vue'
import { supabase } from './supabase.js';


const authStore = useAuthStore()

onMounted(() => {
  authStore.getUser()
})

onMounted(async () => {
  const { data, error } = await supabase.auth.getSession()

  console.log('SESSION:', data)
  console.log('ERROR:', error)
})

</script>

<template>

  <Auth v-if="!authStore.user" />
  <Dashboard v-else />

</template>
