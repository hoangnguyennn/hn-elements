<template>
  <hn-field class="hn-input" :label="label" :size="size" :hint="hint" :error="error" :disabled="disabled" :id="fieldId">
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
        :id="inputId"
        :aria-describedby="ariaDescribedby"
        :aria-invalid="!!error"
        :aria-required="required"
        :aria-placeholder="placeholder"
        @change="$emit('change', ($event.target as HTMLInputElement)!.value)"
        @focus="focus = true"
        @blur="focus = false"
      />

      <hn-icon-button
        v-if="clearable && !disabled && (hover || focus) && modelValue"
        :as="IcoClear"
        class="hn-input--clear"
        :aria-label="clearAriaLabel"
        @click="handleClear"
        @mousedown.prevent="NOOP"
      />

      <hn-icon-button
        v-if="password"
        :as="passwordIcon"
        :aria-label="passwordAriaLabel"
        @click="showPassword = !showPassword"
        @mousedown.prevent="NOOP"
      />
    </div>
  </hn-field>
</template>

<script setup lang="ts">
import { IcoClear, IcoEyeClosed, IcoEyeOpen } from '@hn/assets/icons'
import { HnField } from '@hn/components/field'
import { HnIconButton } from '@hn/components/icon-button'
import { NOOP } from '@hn/utils'
import { computed, ref, useId } from 'vue'
import type { InputEmits, InputProps } from './input'

defineOptions({ name: 'HnInput', inheritAttrs: false })

const emit = defineEmits<InputEmits>()

const modelValue = defineModel<string>()

const props = withDefaults(defineProps<InputProps>(), {})

const focus = ref(false)
const hover = ref(false)
const showPassword = ref(true)

const fieldId = useId()
const inputId = computed(() => `hn-input-${fieldId}`)

const inputType = computed(() => (props.password && showPassword.value ? 'password' : 'text'))

const passwordIcon = computed(() => (showPassword.value ? IcoEyeClosed : IcoEyeOpen))

const ariaDescribedby = computed(() => {
  const ids = []
  if (props.error) ids.push(`hn-field-error-${fieldId}`)
  else if (props.hint) ids.push(`hn-field-hint-${fieldId}`)
  return ids.length > 0 ? ids.join(' ') : undefined
})

const clearAriaLabel = computed(() => props.clearAriaLabel || 'Xóa nội dung')
const passwordAriaLabel = computed(() =>
  showPassword.value ? props.hidePasswordAriaLabel || 'Ẩn mật khẩu' : props.showPasswordAriaLabel || 'Hiện mật khẩu'
)

const handleClear = (): void => {
  modelValue.value = ''
  emit('clear')
  emit('change', '')
}
</script>
