import { ShallowRef } from 'vue'

type UseSliderValueArgs = {
  /** Ref của track */
  trackRef: ShallowRef<HTMLElement | null>
}

export const useSliderValue = ({ trackRef }: UseSliderValueArgs) => {
  const getValue = (x: number) => {
    const trackElement = trackRef.value
    const trankRect = trackElement?.getBoundingClientRect()

    const trackWidth = trankRect?.width ?? 0
    const trackStart = trankRect?.left ?? 0

    const valueFromStart = x - trackStart
    const percent = (valueFromStart / trackWidth) * 100

    if (percent > 100) return 100
    if (percent < 0) return 0

    return Math.round(percent)
  }

  return { getValue }
}
