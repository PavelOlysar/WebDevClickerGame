<template>
  <div class="relative">
    <button class="btn btn-outline gap-2 w-full" @click="handleActivate" @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false">
      <Icon :icon="icon" class="w-6 h-6" />
      <div class="flex-1 flex justify-between items-center">
        <span>{{ name }}</span>
        <div class="flex items-center gap-2">
          <span class="badge badge-secondary">{{ formatCost(cost) }}</span>
          <span class="badge badge-accent">{{ formatDuration(duration) }}s</span>
          <span class="badge badge-primary">x{{ multiplier }}</span>
        </div>
      </div>
    </button>

    <div v-if="showTooltip" class="absolute z-10 w-64 p-4 bg-base-200 shadow-xl rounded-box -top-2 left-full ml-2">
      <h3 class="font-bold mb-2">{{ name }}</h3>
      <p class="text-sm">{{ description }}</p>
      <div class="text-xs mt-2 opacity-70">
        Cost: {{ formatCost(cost) }}
        <br>
        Multiplier: x{{ multiplier }} for {{ duration }}s
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
  duration: number
  multiplier: number
  cooldown: number
  cost: number
}

const props = defineProps<Props>()

const showTooltip = ref(false)

const formatDuration = (value: number) => {
  return value.toString()
}

const formatCost = (value: number) => {
  return new Intl.NumberFormat('en-US').format(value)
}

const handleActivate = () => {
  // Implement boost activation logic
  console.log(`Activating ${props.name} boost`)
}
</script>
