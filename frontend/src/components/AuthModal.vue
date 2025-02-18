<template>
  <dialog :class="{ 'modal': true, 'modal-open': modelValue }">
    <div class="modal-box">
      <h3 class="font-bold text-lg mb-4">Sign In</h3>
      <div class="flex flex-col gap-4">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email" v-model="email" placeholder="email@example.com" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" v-model="password" placeholder="••••••••" class="input input-bordered" />
        </div>
      </div>
      <div class="modal-action">
        <button class="btn" @click="handleClose">Cancel</button>
        <button class="btn btn-primary" @click="handleSignIn">Sign In</button>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop" @click="handleClose">
      <button>close</button>
    </form>
  </dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'sign-in', data: { email: string; password: string; rememberMe: boolean }): void
}>()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)

const handleClose = () => {
  emit('update:modelValue', false)
}

const handleSignIn = () => {
  emit('sign-in', {
    email: email.value,
    password: password.value,
    rememberMe: rememberMe.value
  })
  handleClose()
}
</script>
