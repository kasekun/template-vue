<script setup lang="ts">
  import { useUserStore } from '../stores/user'
  import { Button } from '@/components/ui/button'

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
          <Button variant="default" class="w-full" @click="userStore.logout">Sign Out</Button>
        </div>
        <div v-else class="space-y-4">
          <Button variant="default" class="w-full" as-child>
            <router-link to="/login">Sign In</router-link>
          </Button>
          <Button variant="outline" class="w-full" as-child>
            <router-link to="/register">Register</router-link>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
