<script setup>
import Auth from './pages/Auth.vue';
import Dashboard from './pages/Dashboard.vue';
import Nav from './components/Nav.vue'


</script>

<template>

  <v-app>
    <v-container>
      <v-btn>Click Me</v-btn>

      <v-card class="mt-4" width="500">
        <v-card-title>Hello Vuetify</v-card-title>
        <v-card-text>
          If you can see this card, Vuetify is working.
        </v-card-text>
      </v-card>
    </v-container>
  </v-app>

  <Auth/>

  <Dashboard/>

  <Nav/>
</template>
