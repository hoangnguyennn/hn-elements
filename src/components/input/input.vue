<template>
  <div
    class="hn-input"
    :data-size="size"
    :data-error="!!error || !!$slots.error"
    :data-disabled="disabled"
  >
    <template v-if="label || !!$slots.label">
      <label v-if="label" class="hn-input--label">{{ label }}</label>
      <slot v-else name="label"></slot>
    </template>

    <div
      class="hn-input--wrapper"
      :data-focus="focus"
      :data-clear="clearable"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      <input
        v-bind="$attrs"
        v-model="modelValue"
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

    <div class="hn-input--details" v-if="error || hint || !!$slots.error">
      <span v-if="error" class="hn-input--error">{{ error }}</span>
      <span v-else-if="!!$slots.error" class="hn-input--error">
        <slot name="error"></slot>
      </span>
      <span v-else-if="hint" class="hn-input--hint">{{ hint }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import HnIcon from '../icon'
import { IcoClear, IcoEyeClosed, IcoEyeOpen } from '../../assets/icons'
import { NOOP } from '../../utils'
import { InputSlots, InputEmits, InputProps } from './input'

defineOptions({ name: 'HnInput' })

defineSlots<InputSlots>()
const emit = defineEmits<InputEmits>()

const modelValue = defineModel<string>()

const props = withDefaults(defineProps<InputProps>(), {
  size: 'normal'
})

const focus = ref(false)
const hover = ref(false)
const showPassword = ref(true)

const inputType = computed(() =>
  props.password && showPassword.value ? 'password' : 'text'
)

const handleClear = () => {
  modelValue.value = ''
  emit('clear')
  emit('change', '')
}
</script>
