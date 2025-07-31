import type { ShallowRef } from 'vue'

type Args = {
  /** Ref của track. */
  trackRef: ShallowRef<HTMLElement | null>
}

type ReturnValue = {
  getValue: (x: number) => number
}

export const useSliderValue = ({ trackRef }: Args): ReturnValue => {
  const getValue = (x: number): number => {
    const trackElement = trackRef.value
    const trankRect = trackElement?.getBoundingClientRect()

    // NOTE: gán fallback value để tránh chia cho 0
    const trackWidth = trankRect?.width || 1
    const trackStart = trankRect?.left || 0

    const valueFromStart = x - trackStart
    const percent = (valueFromStart / trackWidth) * 100

    if (percent > 100) return 100
    if (percent < 0) return 0

    return Math.round(percent)
  }

  return { getValue }
}
