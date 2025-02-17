<template>
  <main class="min-h-screen bg-base-200 p-4">
    <div class="container mx-auto flex flex-col gap-4">
      <TheHeader />
      <TheScore />

      <div class="flex gap-4">
        <div class="w-1/4">
          <BoostsBar />
        </div>

        <div class="w-2/4">
          <ClickingSpace />
        </div>

        <div class="w-1/4">
          <UpgradesBar />
        </div>
      </div>

      <TheFooter />
    </div>
  </main>
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import ClickingSpace from "./components/ClickingSpace.vue";
import BoostsBar from "./components/BoostsBar.vue";
import UpgradesBar from "./components/UpgradesBar.vue";
import TheScore from "./components/TheScore.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

</script>
