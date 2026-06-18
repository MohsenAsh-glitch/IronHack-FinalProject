<script setup>
import { onMounted } from 'vue'
import { useTaskStore } from '../store/task'
import { useAuthStore } from '../store/auth'

import NewTask from '../components/NewTask.vue'
import TaskItem from '../components/TaskItem.vue'
import AppHeader from '../components/AppHeader.vue'

const taskStore = useTaskStore()
const authStore = useAuthStore()

const logout = async () => {
  await authStore.signOut()
}

onMounted(async () => {
  await authStore.getUser()
  await taskStore.fetchTasks()
})
</script>

<template>
  <main class="app-page">
    <AppHeader/>

    <section class="dashboard-panel">
      <div class="progress-card">
        <div>
          <h2>Todo Done</h2>
          <p>keep it up</p>
        </div>

        <div class="progress-circle">
          {{ taskStore.tasks.filter(t => t.done).length }}/{{ taskStore.tasks.length }}
        </div>
      </div>

      <NewTask />

      <div class="task-list">
        <p v-if="taskStore.tasks.length === 0" class="empty-text">
          No tasks yet. Start small ✨
        </p>

        <TaskItem
          v-for="task in taskStore.tasks"
          :key="task.id"
          :task="task"
        />
      </div>
    </section>
  </main>
</template>