<template>
  <main class="h-screen bg-base-200 flex flex-col gap-4">
    <TheHeader />

    <div class="container mx-auto flex-1 flex flex-col gap-4">
      <div class="flex flex-col lg:flex-row gap-4 flex-1">
        <div class="w-full lg:w-1/3 order-2 lg:order-1 flex flex-col gap-4">
          <TheScore />
          <UpgradesBar />
        </div>
        <div class="w-full lg:w-2/3 order-1 lg:order-2">
          <ClickingSpace />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import ClickingSpace from "./components/ClickingSpace.vue";
import UpgradesBar from "./components/UpgradesBar.vue";
import TheScore from "./components/TheScore.vue";
import TheHeader from "./components/TheHeader.vue";
</script>
