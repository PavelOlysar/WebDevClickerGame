<template>
  <div class="stats shadow bg-base-100 w-full">
    <div class="stat">
      <div class="stat-title">Current Balance</div>
      <div class="stat-value">${{ Math.floor(score) }}</div>
      <div class="flex flex-col gap-2 mt-2">
        <div class="stat-desc">
          <div>Per Click: ${{ effectiveClickPower }}</div>
          <div>Total: ${{ Math.floor(totalFromClicks) }}</div>
        </div>
        <div class="stat-desc">
          <div>Auto/s: ${{ totalAutoClickRate }}</div>
          <div>Total: ${{ Math.floor(totalFromAutoClick) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/gameStore'
import { storeToRefs } from 'pinia'

const store = useGameStore()
const { score, effectiveClickPower, totalAutoClickRate, totalFromClicks, totalFromAutoClick } = storeToRefs(store)
</script>
