<template>
  <hn-field
    class="hn-input"
    :label="label"
    :size="size"
    :hint="hint"
    :error="error"
    :disabled="disabled"
  >
    <div
      class="hn-field--wrapper hn-input--wrapper"
      :data-focus="focus"
      :data-clear="clearable"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      <input
        v-bind="$attrs"
        v-model="modelValue"
        class="hn-field--input hn-input--input"
        :type="inputType"
        :disabled="disabled"
        @change="$emit('change', ($event.target as HTMLInputElement)!.value)"
        @focus="focus = true"
        @blur="focus = false"
      />

      <hn-icon
        v-if="clearable && !disabled && (hover || focus) && modelValue"
        class="hn-input--clear"
        @click="handleClear"
        @mousedown.prevent="NOOP"
      >
        <ico-clear />
      </hn-icon>

      <hn-icon
        v-if="password"
        @click="showPassword = !showPassword"
        @mousedown.prevent="NOOP"
      >
        <ico-eye-closed v-if="showPassword" />
        <ico-eye-open v-else />
      </hn-icon>
    </div>
  </hn-field>
</template>

<script setup lang="ts">
import { IcoClear, IcoEyeClosed, IcoEyeOpen } from '@hn/assets/icons'
import HnField from '@hn/components/field'
import HnIcon from '@hn/components/icon'
import { NOOP } from '@hn/utils'
import { computed, ref } from 'vue'
import type { InputEmits, InputProps } from './input'

defineOptions({ name: 'HnInput', inheritAttrs: false })

const emit = defineEmits<InputEmits>()

const modelValue = defineModel<string>()

const props = withDefaults(defineProps<InputProps>(), {})

const focus = ref(false)
const hover = ref(false)
const showPassword = ref(true)

const inputType = computed(() =>
  props.password && showPassword.value ? 'password' : 'text'
)

const handleClear = (): void => {
  modelValue.value = ''
  emit('clear')
  emit('change', '')
}
</script>
