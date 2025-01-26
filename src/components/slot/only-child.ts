import {
  cloneVNode,
  defineComponent,
  Fragment,
  h,
  inject,
  VNode,
  withDirectives
} from 'vue'
import {
  FORWARD_REF_KEY,
  ForwardRefContext,
  useForwardRefDireactive
} from '../../composables/useForwardRef'
import { isObject, NOOP } from '../../utils'

export const OnlyChild = defineComponent({
  name: 'HnOnlyChild',
  setup(_, { slots, attrs }) {
    return () => {
      const forwardRefContext = inject<ForwardRefContext>(FORWARD_REF_KEY)
      const forwardRefDireactive = useForwardRefDireactive(
        forwardRefContext?.setForwardRef ?? NOOP
      )

      const defaultSlot = slots.default?.(attrs)
      if (!defaultSlot) return null

      if (defaultSlot.length > 1) {
        throw new Error('hn-only-child yêu cầu chỉ có 1 con')
      }

      const firstValidNode = firstValidChild(defaultSlot)
      if (!firstValidNode) return null

      return withDirectives(cloneVNode(firstValidNode, attrs), [
        [forwardRefDireactive]
      ])
    }
  }
})

function firstValidChild(node: VNode[] | undefined): VNode | null {
  if (!node) return null
  const children = node as VNode[]
  for (const child of children) {
    if (isObject(child)) {
      switch (child.type) {
        case Comment:
          continue
        case Text:
          return wrapTextContent(child)
        case Fragment:
          return firstValidChild(child.children as VNode[])
        default:
          return child
      }
    }
    return wrapTextContent(child)
  }
  return null
}

function wrapTextContent(string: string | VNode) {
  return h('span', {}, string)
}
