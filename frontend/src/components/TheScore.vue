<template>
  <div class="score">
    Score: {{ score }}
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/gameStore'
import { storeToRefs } from 'pinia'

const store = useGameStore()
const { score } = storeToRefs(store)
</script>
