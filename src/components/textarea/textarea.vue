<template>
  <hn-field class="hn-textarea" :label="label" :size="size" :hint="hint" :error="error" :disabled="disabled">
    <div class="hn-field--wrapper hn-textarea--wrapper" :data-focus="focus">
      <textarea
        v-bind="$attrs"
        v-model="modelValue"
        class="hn-field--input hn-textarea--input"
        :placeholder="placeholder"
        :disabled="disabled"
        :maxlength="maxLength"
        :style="{
          maxHeight: maxRows ? `calc(1lh * ${maxRows})` : undefined,
          minHeight: minRows ? `calc(1lh * ${minRows})` : undefined
        }"
        @change="$emit('change', ($event.target as HTMLTextAreaElement)!.value)"
        @focus="focus = true"
        @blur="focus = false"
      ></textarea>
    </div>

    <template #detailRight v-if="showCounter">
      <p class="hn-textarea--counter">
        <span>{{ modelValue?.length ?? 0 }}</span>
        <span v-if="maxLength">{{ `/${maxLength}` }}</span>
      </p>
    </template>
  </hn-field>
</template>

<script setup lang="ts">
import { HnField } from '@hn/components/field'
import { ref } from 'vue'
import type { TextareaEmits, TextareaProps } from './textarea'

defineOptions({ name: 'HnTextarea', inheritAttrs: false })

const modelValue = defineModel<string>()

defineEmits<TextareaEmits>()

withDefaults(defineProps<TextareaProps>(), {
  size: 'normal',
  minRows: 1
})

const focus = ref(false)
</script>
