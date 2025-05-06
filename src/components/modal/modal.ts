import type { ToRefs, VNode } from 'vue'

export type ModalWidth = 'small' | 'medium' | 'large' | 'full' | 'auto'

export type ModalProps = {
  /**
   * Chiều rộng của modal.
   *
   * @default 'medium'
   */
  width?: ModalWidth
  /**
   * Nội dung của button submit.
   *
   * @default 'OK'
   */
  okText?: string
  /**
   * Nội dung của button cancel.
   *
   * @default 'Cancel'
   */
  cancelText?: string
  /**
   * Chỉ ra rằng có hiển thị button cancel không.
   *
   * @default true
   */
  showCancelButton?: boolean
  /**
   * Chỉ ra rằng modal sẽ đóng khi nhấn phím `Esc`.
   *
   * @default false
   */
  closeOnEsc?: boolean
  /**
   * Chỉ ra rằng modal sẽ đóng khi nhấp vào bên ngoài.
   *
   * @default false
   */
  closeOnOutsidePress?: boolean
}

export type ModalEmits = {
  /** Kích hoạt khi modal đóng. */
  close: []
  /** Kích hoạt khi click vào button submit. */
  submit: []
  /** Kích hoạt khi click vào button cancel. */
  cancel: []
}

export type ModalSlots = {
  /** Nội dung phần header của modal. */
  header?(): VNode
  /** Nội dung phần body của modal. */
  body?(): VNode
  /** Nội dung phần footer của modal. */
  footer?(): VNode
  /** Nội dung bên trong body của modal. */
  default?(): VNode
}

export const MODAL_KEY = Symbol('modal')

export type ModalContext = ToRefs<Required<ModalProps>> & {
  /** Handler khi click vào button submit. */
  onSubmit: () => void
  /** Handler khi click vào button cancel. */
  onCancel: () => void
}
