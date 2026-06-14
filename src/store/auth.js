import { defineStore } from 'pinia'
import { supabase } from '../supabase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),

  actions: {
    async signUp(email, password) {
      const { error } = await supabase.auth.signUp({
        email,
        password
      })

      if (error) throw error
    },

    async signIn(email, password) {
      const { data, error } =
        await supabase.auth.signInWithPassword({
          email,
          password
        })

      if (error) throw error

      this.user = data.user
    },

    async signOut() {
      await supabase.auth.signOut()
      this.user = null
    },

    async getUser() {
      const {
        data: { user }
      } = await supabase.auth.getUser()

      this.user = user
    }
  }
})