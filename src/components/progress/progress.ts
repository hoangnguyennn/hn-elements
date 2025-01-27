export type ProgressVariant = 'bar' | 'circle'

export type ProgressSize = 'normal' | 'small'

export type ProgressProps = {
  /** Biến thể của progress. */
  variant?: ProgressVariant
  /** Kích thước của progress. */
  size?: ProgressSize
  /** Phần trăm của progress. */
  percentage: number
  /** Chỉ ra rằng có hiển thị phần trăm hay không. */
  showPercentage?: boolean
}
