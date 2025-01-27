<template>
  <hn-field
    class="hn-textarea"
    :label="label"
    :size="size"
    :hint="hint"
    :error="error"
    :disabled="disabled"
  >
    <div class="hn-field--wrapper hn-textarea--wrapper" :data-focus="focus">
      <textarea
        v-bind="$attrs"
        v-model="modelValue"
        class="hn-field--input hn-textarea--input"
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
        <span>{{ modelValue?.length }}</span>
        <span>{{ maxLength ? `/${maxLength}` : '' }}</span>
      </p>
    </template>
  </hn-field>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HnField from '@hn/components/field'
import { TextareaEmits, TextareaProps } from './textarea'

defineOptions({ name: 'HnTextarea', inheritAttrs: false })

const modelValue = defineModel<string>()

defineEmits<TextareaEmits>()

withDefaults(defineProps<TextareaProps>(), {
  minRows: 1
})

const focus = ref(false)
</script>
