<template>
  <div class="relative">
    <button class="btn btn-outline gap-2 w-full" @click="handleActivate" @mouseenter="showTooltip = true"
      @mouseleave="showTooltip = false" :disabled="isOnCooldown" :class="{ 'btn-success': isActive }">
      <Icon :icon="icon" class="w-6 h-6" />
      <div class="flex-1 flex justify-between items-center">
        <span>{{ name }}</span>
        <div class="flex items-center gap-2">
          <span class="badge badge-secondary">${{ formatCost(cost) }}</span>
          <span v-if="timeLeft > 0" class="badge badge-success">{{ timeLeft }}s</span>
          <span v-else-if="cooldownLeft > 0" class="badge badge-warning">{{ cooldownLeft }}s</span>
          <span v-else class="badge badge-accent">{{ duration }}s</span>
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
// TODO - ukazatel na cas, ukazatel na cooldown, poradny ukazatel na aktivni boosty, neaktivni styl kdyz nemam penize

import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import { useGameStore } from '@/stores/gameStore'

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
const store = useGameStore()
const showTooltip = ref(false)

const boost = computed(() => store.activeBoosts[props.name])
const now = computed(() => Date.now())

const isActive = computed(() => {
  return boost.value?.endTime && boost.value.endTime > now.value
})

const isOnCooldown = computed(() => {
  return !!(boost.value?.cooldownEndTime && boost.value.cooldownEndTime > now.value)
})

const timeLeft = computed(() => {
  if (!boost.value?.endTime) return 0
  return Math.max(0, Math.ceil((boost.value.endTime - now.value) / 1000))
})

const cooldownLeft = computed(() => {
  if (!boost.value?.cooldownEndTime) return 0
  return Math.max(0, Math.ceil((boost.value.cooldownEndTime - now.value) / 1000))
})

const formatDuration = (value: number) => {
  return value.toString()
}

const formatCost = (value: number) => {
  return new Intl.NumberFormat('en-US').format(value)
}

const handleActivate = () => {
  store.activateBoost(
    props.name,
    props.multiplier,
    props.duration,
    props.cooldown,
    props.cost
  )
}
</script>
