<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="btn btn-success">Home</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
