<template>
  <div class="navbar bg-base-100 shadow-lg">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl font-bold">Dev Clicker</a>
    </div>
    <div class="gap-4 px-2">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span class="hidden md:inline ml-2">Theme</span>
        </label>
        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li v-for="theme in themes" :key="theme">
            <a @click="changeTheme(theme)" :class="{ 'active': currentTheme === theme }">
              {{ theme }}
            </a>
          </li>
        </ul>
      </div>
      <button class="btn btn-primary" @click="showAuthModal = true">Sign In</button>
    </div>

    <AuthModal v-model="showAuthModal" @sign-in="handleSignIn" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AuthModal from './AuthModal.vue'

const themes = ['dark', 'light', 'cyberpunk', 'synthwave', 'valentine']
const currentTheme = ref('dark')

const changeTheme = (theme: string) => {
  currentTheme.value = theme
  document.documentElement.setAttribute('data-theme', theme)
}

const showAuthModal = ref(false)

const handleSignIn = () => {
  // Implement sign in logic
  console.log('Signing in with:', { email: email.value, password: password.value })
  showAuthModal.value = false
}
</script>
