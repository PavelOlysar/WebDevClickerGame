<template>
  <div class="card bg-base-100 shadow-xl cursor-pointer min-h-[400px] max-h-[600px] h-full" @click="handleClick">
    <div class="card-body items-center justify-center p-4 h-full">
      <div
        class="w-full max-w-2xl flex items-center justify-center relative hover:scale-105 transition-all duration-200 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        <img src="@/assets/wevDeveloper.gif" alt="webDeveloper" class="noSelectAndDrag w-full h-full object-contain" />
      </div>
    </div>
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
