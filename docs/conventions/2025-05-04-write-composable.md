# Viết composable trong Vue

- tác giả: hoangnguyennn

## Bối cảnh

Trong quá trình phát triển ứng dụng sử dụng Composition API, việc trừu tượng hoá logic thành các composable giúp tái sử dụng dễ dàng và cải thiện khả năng tổ chức mã nguồn. Tuy nhiên, nếu không tuân theo các quy tắc cụ thể, composable có thể gây ra các lỗi không rõ ràng như component không cập nhật, khó debug hoặc gây hiểu nhầm trong cách sử dụng.

## Quy tắc

- Nếu composable return một giá trị, giá trị đó phải là reactive (`ref`, `reactive`, `computed`).
- Nếu composable return một hàm, thì không yêu cầu phải reactive.
- Phải viết JSDoc rõ ràng về chức năng của composable, các tham số (argument) và giá trị trả về (return values).

## Ví dụ

```ts
// popover.vue
const props = withDefaults(defineProps<PopoverProps>(), {
  arrow: false,
  placement: 'bottom-start'
})

provide<PopoverContext>(POPOVER_KEY, {
  arrow: computed(() => props.arrow),
  placement: computed(() => props.placement)
})
```

Component `hn-popover` cung cấp `arrow` và `placement` ở dạng computed prop.

```ts
// usePopover.ts
export const usePopover = (): PopoverContext => {
  const popover = inject<PopoverContext>(POPOVER_KEY)

  if (!popover) {
    throw new Error('usePopover phải được sử dụng bên trong hn-popover')
  }

  return popover
}
```

Tạo ra composable để lấy các giá trị mà `hn-popover` cung cấp.

```ts
// popover-content.vue
const { arrow, placement } = usePopover()
```

Sử dụng các prop bằng cách gọi composable `usePopover`.
