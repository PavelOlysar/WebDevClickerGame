import { defineStore } from 'pinia'

interface Upgrade {
  name: string
  owned: number
  power: number
  isAutoClick: boolean
}

interface Boost {
  name: string
  multiplier: number
  duration: number
  endTime: number | null
  cooldownEndTime: number | null
}

export const useGameStore = defineStore('game', {
  state: () => ({
    score: 0,
    clickPower: 1,
    upgrades: {} as Record<string, Upgrade>,
    lastTick: Date.now(),
    partialClicks: 0,
    totalFromClicks: 0,
    totalFromAutoClick: 0,
    activeBoosts: {} as Record<string, Boost>,
    clickMultiplier: 1,
  }),

  getters: {
    totalAutoClickRate(): number {
      return Object.values(this.upgrades)
        .filter((upgrade) => upgrade.isAutoClick)
        .reduce((total, upgrade) => total + upgrade.power * upgrade.owned, 0)
    },
    effectiveClickPower(): number {
      return this.clickPower * this.clickMultiplier
    },
  },

  actions: {
    incrementScore() {
      this.score += this.effectiveClickPower
      this.totalFromClicks += this.effectiveClickPower
    },

    purchaseUpgrade(name: string, power: number, cost: number, isAutoClick: boolean) {
      if (this.score < cost) return false

      this.score -= cost

      if (!this.upgrades[name]) {
        this.upgrades[name] = {
          name,
          owned: 0,
          power,
          isAutoClick,
        }
      }

      this.upgrades[name].owned++

      if (!isAutoClick) {
        this.clickPower += power
      }

      return true
    },

    activateBoost(
      name: string,
      multiplier: number,
      duration: number,
      cooldown: number,
      cost: number,
    ) {
      if (this.score < cost) return false

      const now = Date.now()
      const boost = this.activeBoosts[name]

      if (boost?.cooldownEndTime && boost.cooldownEndTime > now) return false

      this.score -= cost

      this.activeBoosts[name] = {
        name,
        multiplier,
        duration,
        endTime: now + duration * 1000,
        cooldownEndTime: now + cooldown * 1000,
      }

      this.updateMultiplier()
      return true
    },

    updateMultiplier() {
      const now = Date.now()
      let totalMultiplier = 1

      Object.entries(this.activeBoosts).forEach(([name, boost]) => {
        if (boost.endTime && boost.endTime > now) {
          totalMultiplier *= boost.multiplier
        } else if (boost.endTime && boost.endTime <= now) {
          boost.endTime = null
        }
      })

      this.clickMultiplier = totalMultiplier
    },

    tick() {
      const now = Date.now()
      const delta = (now - this.lastTick) / 1000
      this.lastTick = now

      Object.values(this.upgrades).forEach((upgrade: Upgrade) => {
        if (upgrade.isAutoClick) {
          this.partialClicks += upgrade.power * upgrade.owned * delta
        }
      })

      if (this.partialClicks >= 1) {
        const clicks = Math.floor(this.partialClicks)
        this.score += clicks
        this.totalFromAutoClick += clicks
        this.partialClicks -= clicks
      }

      this.updateMultiplier()
    },
  },
})
