<template>
  <div class="relative">
    <button class="btn btn-outline gap-2 w-full" @click="handlePurchase" @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false">
      <Icon :icon="icon" class="w-6 h-6" />
      <div class="flex-1 flex justify-between items-center">
        <span>{{ name }}</span>
        <div class="flex items-center gap-2">
          <span class="text-sm opacity-70">({{ owned }})</span>
          <span class="badge badge-secondary">{{ formatCost(cost) }}</span>
        </div>
      </div>
    </button>

    <div v-if="showTooltip" class="absolute z-10 w-64 p-4 bg-base-200 shadow-xl rounded-box -top-2 left-full ml-2">
      <h3 class="font-bold mb-2">{{ name }}</h3>
      <p class="text-sm">{{ description }}</p>
      <div class="text-xs mt-2 opacity-70">
        Power: +{{ power }}$ per second
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

interface Props {
  name: string
  description: string
  icon: string
  cost: number
  owned: number
  power: number
}

const props = defineProps<Props>()

const showTooltip = ref(false)

const formatCost = (value: number) => {
  return new Intl.NumberFormat('en-US').format(value)
}

const handlePurchase = () => {
  // Implement purchase logic
  console.log(`Purchasing ${props.name}`)
}
</script>
