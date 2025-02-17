<template>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body items-center text-center">
      <div
        class="cursor-pointer hover:scale-105 transition-all duration-200 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
        @click="handleClick">
        <img src="@/assets/wevDeveloper.gif" alt="webDeveloper" class="noSelectAndDrag w-96 h-96 object-contain" />
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
