<template>
  <div class="relative">
    <button class="btn btn-outline gap-2 w-full" @click="handlePurchase" @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false" :disabled="store.score < currentCost">
      <Icon :icon="icon" class="w-6 h-6" />
      <div class="flex-1 flex justify-between items-center">
        <span>{{ name }}</span>
        <div class="flex items-center gap-2">
          <span class="text-sm opacity-70">({{ owned }})</span>
          <span class="badge badge-secondary">{{ formatCost(currentCost) }}</span>
        </div>
      </div>
    </button>

    <div v-if="showTooltip" class="absolute z-10 w-64 p-4 bg-base-200 shadow-xl rounded-box -top-2 left-full ml-2">
      <h3 class="font-bold mb-2">{{ name }}</h3>
      <p class="text-sm">{{ description }}</p>
      <div class="text-xs mt-2 opacity-70">
        <div>Power: +{{ power }}$ {{ isAutoClick ? 'per second' : 'per click' }}</div>
        <div>Owned: {{ owned }}</div>
        <div>Next cost: {{ formatCost(currentCost) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useGameStore } from '@/stores/gameStore'

interface Props {
  name: string
  description: string
  icon: string
  cost: number
  owned: number
  power: number
  isAutoClick: boolean
}

const props = defineProps<Props>()
const store = useGameStore()
const showTooltip = ref(false)

// Add computed property for owned count
const owned = computed(() => {
  return store.upgrades[props.name]?.owned || 0
})

// Add computed property for current cost
const currentCost = computed(() => {
  return Math.floor(props.cost * Math.pow(1.15, owned.value))
})

const formatCost = (value: number) => {
  return new Intl.NumberFormat('en-US').format(value)
}

const handlePurchase = () => {
  store.purchaseUpgrade(props.name, props.power, currentCost.value, props.isAutoClick)
}
</script>
