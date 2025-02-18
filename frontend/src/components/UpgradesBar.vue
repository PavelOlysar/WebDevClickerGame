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
import { Icon } from '@iconify/vue'
import UpgradeCard from './UpgradeCard.vue'

const upgrades = ref([
  {
    name: 'HTML',
    description: 'description...',
    icon: 'logos:html-5',
    cost: 10,
    owned: 0,
    power: 1
  },
  {
    name: 'CSS',
    description: 'description...',
    icon: 'logos:css-3',
    cost: 50,
    owned: 0,
    power: 5
  },
  {
    name: 'JavaScript',
    description: 'description...',
    icon: 'logos:javascript',
    cost: 250,
    owned: 0,
    power: 25
  }
])
</script>
