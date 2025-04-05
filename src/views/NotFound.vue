<script setup lang="ts">
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full text-center space-y-8">
      <h1 class="text-9xl font-extrabold text-gray-900 dark:text-white">404</h1>
      <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Page Not Found</h2>
      <p class="text-gray-600 dark:text-gray-300">The page you are looking for does not exist</p>
      <div>
        <button
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          @click="goHome"
        >
          Go Home
        </button>
      </div>
    </div>
  </div>
</template>
