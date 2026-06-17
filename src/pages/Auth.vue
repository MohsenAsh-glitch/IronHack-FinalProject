<script setup>

import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { supabase } from '../supabase';
import { useAuthStore } from '../store/auth';


const route = useRoute()
const email = ref('')
const password = ref('')
const isLogIn = ref(true)

const authStore = useAuthStore()

onMounted(async()=>{
    await authStore.getUser()

    supabase.auth.onAuthStateChange((event, session) => {
        authStore.user = session?.user || null
    })
})

const login = async() => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
    })  

    if(error){
        console.log('login failed:', error.message)
        alert('User not found or wrong password!  PLEASE REGISTER!')
        return
    }

    console.log('Logged in:', data)
}

const register = async () => {
    const {data, error} = await supabase.auth.signUp({
        email: email.value,
        password: password.value
    })

    if(error){
        alert(error.message)
        return
    }

    console.log('Registered:', data)
}
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

    <v-btn @click="login" v-if="isLogIn">Login</v-btn>
    <v-btn @click="register" v-else>Register</v-btn>

    <p @click="isLogIn = !isLogIn">
        Switch to {{ isLogIn ? 'Register' : 'Login' }}
    </p>

</template>