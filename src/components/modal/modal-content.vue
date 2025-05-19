<template>
  <div ref="modalContentRef" class="hn-modal--content">
    <div class="hn-modal--header">
      <slot name="header"></slot>
    </div>
    <div class="hn-modal--body">
      <slot name="body">
        <slot name="default"></slot>
      </slot>
    </div>
    <div class="hn-modal--footer">
      <slot name="footer">
        <hn-button v-if="showCancelButton" variant="secondary" @click="onCancel">{{ cancelText }}</hn-button>
        <hn-button @click="onSubmit">{{ okText }}</hn-button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { HnButton } from '@hn/components/button'
import { useClickOutside } from '@hn/composables/useClickOutside'
import { usePressEsc } from '@hn/composables/usePressEsc'
import { NOOP } from '@hn/utils'
import { useTemplateRef } from 'vue'
import { useModal } from './useModal'

defineOptions({ name: 'HnModalContent' })

const modalContentRef = useTemplateRef('modalContentRef')

const { cancelText, okText, showCancelButton, closeOnOutsidePress, closeOnEsc, onSubmit, onCancel } = useModal()

useClickOutside({ refs: modalContentRef, callback: closeOnOutsidePress.value ? onCancel : NOOP })
usePressEsc({ callback: closeOnEsc.value ? onCancel : NOOP })
</script>
