<template>
  <div class="stats shadow bg-base-100 w-full">
    <div class="stat">
      <div class="stat-title">Current Balance</div>
      <div class="stat-value">${{ score }}</div>
      <div class="stat-desc">per click: $1</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/gameStore'
import { storeToRefs } from 'pinia'

const store = useGameStore()
const { score } = storeToRefs(store)
</script>
