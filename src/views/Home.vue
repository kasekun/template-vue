<script setup lang="ts">
  import { useUserStore } from '../stores/user'

  const userStore = useUserStore()
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4">
    <div class="max-w-md w-full space-y-8">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Welcome to Nimbus</h1>
        <p class="mt-2 text-gray-600 dark:text-gray-300">Your modern web application</p>
      </div>
      <div class="mt-8">
        <div v-if="userStore.isAuthenticated" class="space-y-4">
          <p class="text-xl">Welcome, {{ userStore.currentUser?.email }}</p>
          <button
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            @click="userStore.logout"
          >
            Sign Out
          </button>
        </div>
        <div v-else class="space-y-4">
          <router-link
            to="/login"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </router-link>
          <router-link
            to="/register"
            class="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
