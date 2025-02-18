<template>
  <footer class="footer footer-center p-4 bg-base-100 text-base-content">
    <div>
      <p>Copyright © {{ currentYear }} - Pavel Olyšar</p>
      <div>
        <a href="https://github.com/PavelOlysar" target="_blank" class="link link-hover">GitHub</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>
