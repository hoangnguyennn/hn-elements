import type { IconProps } from './icon'

export const getIconProps = <T extends IconProps>(props: T): IconProps => {
  return {
    as: props.as,
    ariaLabel: props.ariaLabel,
    ariaHidden: props.ariaHidden,
    role: props.role
  }
}
