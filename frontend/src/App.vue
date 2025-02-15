<template>
  <main class="w-full h-full flex flex-col items-center">
    <TheScore />
    <ClickingSpace />
    <BoostsBar />
    <UpgradesBar />
  </main>
</template>

<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import ClickingSpace from "./components/ClickingSpace.vue";
import BoostsBar from "./components/BoostsBar.vue";
import UpgradesBar from "./components/UpgradesBar.vue";
import TheScore from "./components/TheScore.vue";

</script>
