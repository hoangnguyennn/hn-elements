import { FORWARD_REF_KEY, useForwardRefDireactive, type ForwardRefContext } from '@hn/composables/useForwardRef'
import { isObject, NOOP } from '@hn/utils'
import { cloneVNode, defineComponent, Fragment, h, inject, withDirectives, type VNode } from 'vue'

export const OnlyChild = defineComponent({
  name: 'HnOnlyChild',
  setup(_, { slots, attrs }) {
    return () => {
      const forwardRefContext = inject<ForwardRefContext | undefined>(FORWARD_REF_KEY, undefined)
      const forwardRefDireactive = useForwardRefDireactive(forwardRefContext?.setForwardRef ?? NOOP)

      const defaultSlot = slots.default?.(attrs)
      if (!defaultSlot) return null

      if (defaultSlot.length > 1) {
        throw new Error('hn-only-child yêu cầu chỉ có 1 con')
      }

      const firstValidNode = firstValidChild(defaultSlot)
      if (!firstValidNode) return null

      return withDirectives(cloneVNode(firstValidNode, attrs), [[forwardRefDireactive]])
    }
  }
})

/**
 * Tìm ra node con hợp lệ của một node.
 *
 * @param node Node cha.
 *
 * @returns Node con.
 */
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

/**
 * Tạo VNode từ string.
 *
 * @param string String.
 *
 * @returns VNode.
 */
function wrapTextContent(string: string | VNode): VNode {
  return h('span', {}, string)
}
