<script setup>

import { useRoute } from 'vue-router'

const route = useRoute()

//console.log(route.path)

</script>

<template>

    <v-text-field
    label="Email"
    v-model="email"
    />

    <v-text-field
    label="Password"
    type="password"
    v-model="password"
    />

    <v-btn @click="login">
    Login
    </v-btn>

</template>