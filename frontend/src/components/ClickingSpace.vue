<template>
  <div class="cursor-pointer" @click="handleClick">
    <img src="@/assets/wevDeveloper.gif" alt="webDeveloper" class="noSelectAndDrag" />
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/gameStore'

const store = useGameStore()

const handleClick = () => {
  store.incrementScore()
}
</script>

<style scoped>
.noSelectAndDrag {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}
</style>
