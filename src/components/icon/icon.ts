import type { Component } from 'vue'

export type IconProps = {
  /** Chỉ định component được sử dụng trong icon. */
  as: string | Component
  /** Nhãn aria cho icon. */
  ariaLabel: string
  /** Chỉ ra rằng icon có ẩn khỏi screen reader hay không. */
  ariaHidden?: boolean
  /** Role của icon. */
  role?: string
}
