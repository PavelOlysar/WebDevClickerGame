<template>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Boosts</h2>
      <div class="flex flex-col gap-2">
        <BoostCard v-for="boost in boosts" :key="boost.name" v-bind="boost" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BoostCard from './BoostCard.vue'

const boosts = ref([
  {
    name: 'Coffee',
    description: 'A cup of coffee doubles your clicking power',
    icon: 'mdi:coffee',
    duration: 30,
    multiplier: 2,
    cooldown: 60,
    cost: 100
  },
  {
    name: 'Energy Drink',
    description: 'An energy drink triples your clicking power',
    icon: 'mdi:bottle-tonic',
    duration: 20,
    multiplier: 3,
    cooldown: 120,
    cost: 250
  },
  {
    name: 'Stack Overflow',
    description: 'Find the perfect solution',
    icon: 'mdi:stack-overflow',
    duration: 15,
    multiplier: 5,
    cooldown: 300,
    cost: 1000
  }
])
</script>
