<template>
  <div class="card bg-base-100 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">Upgrades</h2>
      <div class="flex flex-col gap-2">
        <UpgradeCard v-for="upgrade in upgrades" :key="upgrade.name" v-bind="upgrade" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UpgradeCard from './UpgradeCard.vue'
import { useGameStore } from '@/stores/gameStore'

const store = useGameStore()

const upgrades = ref([
  {
    name: 'Coffee',
    description: 'Drink coffee to click faster (+1 per click)',
    icon: 'mdi:coffee',
    cost: 10,
    owned: 0,
    power: 1,
    isAutoClick: false
  },
  {
    name: 'Intern',
    description: 'Hire an intern to click for you (1 click per second)',
    icon: 'mdi:account',
    cost: 50,
    owned: 0,
    power: 1,
    isAutoClick: true
  },
  {
    name: 'IDE',
    description: 'Better tools, better clicks (+5 per click)',
    icon: 'mdi:microsoft-visual-studio-code',
    cost: 100,
    owned: 0,
    power: 5,
    isAutoClick: false
  },
  {
    name: 'Junior Dev',
    description: 'Hire a junior developer (5 clicks per second)',
    icon: 'mdi:account-tie',
    cost: 250,
    owned: 0,
    power: 5,
    isAutoClick: true
  }
])
</script>
