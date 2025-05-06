<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="isOpen" class="hn-modal" :data-width="width">
        <hn-modal-content>
          <template #header>
            <slot name="header"></slot>
          </template>
          <template #body>
            <slot name="body"></slot>
          </template>
          <template #default>
            <slot name="default"></slot>
          </template>
          <template #footer>
            <slot name="footer"></slot>
          </template>
        </hn-modal-content>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useDebounce } from '@hn/composables/useDebounce'
import { provide, ref, toRefs, watch } from 'vue'
import type { ModalContext, ModalEmits, ModalProps, ModalSlots } from './modal'
import { MODAL_KEY } from './modal'
import HnModalContent from './modal-content.vue'

defineOptions({ name: 'HnModal' })

const modelValue = defineModel<boolean>()

const isOpen = ref(modelValue.value)

/**
 * NOTE: khi click button để mở modal, handler của sự kiện click sẽ bất đồng bộ, dẫn tới nó tự động đóng lại do có sử
 * dụng `useClickOutside`. Để tránh việc này nên tôi sử dụng `useDebounce` để delay việc mở modal (100ms).
 */
const updateIsOpen = useDebounce(() => (isOpen.value = modelValue.value), 100)

watch(
  modelValue,
  value => {
    updateIsOpen()
    if (!value) emit('close')
  },
  { flush: 'sync' }
)

const emit = defineEmits<ModalEmits>()

defineSlots<ModalSlots>()

const props = withDefaults(defineProps<ModalProps>(), {
  width: 'medium',
  okText: 'OK',
  cancelText: 'Cancel',
  showCancelButton: true,
  closeOnEsc: false,
  closeOnOutsidePress: false
})

const onCancel = (): void => {
  modelValue.value = false
  emit('cancel')
}

const onSubmit = (): void => {
  modelValue.value = false
  emit('submit')
}

provide<ModalContext>(MODAL_KEY, {
  ...toRefs(props),
  onSubmit,
  onCancel
})
</script>
