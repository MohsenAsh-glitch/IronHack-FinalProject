<script setup>
import { onMounted } from 'vue'
import { useTaskStore } from '../store/task'

const taskStore = useTaskStore()

onMounted(() => {
  taskStore.fetchTasks()
})
</script>

<template>
  <v-list>
    <v-list-item
      v-for="task in taskStore.tasks"
      :key="task.id"
    >
      {{ task.title }}
    </v-list-item>
  </v-list>
</template>