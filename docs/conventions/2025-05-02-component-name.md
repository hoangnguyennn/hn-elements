# Quy ước đặt tên component

- tác giả: hoangnguyennn

## Bối cảnh

Trong một thư viện UI, việc đặt tên component cần được nhất quán để:

- Tránh xung đột với các thẻ HTML và các component bên ngoài.
- Dễ dàng nhận diện trong Vue Devtools, log và mã nguồn.
- Tương thích tốt với SFC và in-dom template.
- Hỗ trợ các tool như auto-import, IDE, ...

## Quy tắc đặt tên

- **LUÔN** khai báo `defineOptions({ name })` cho component.
- **LUÔN** đặt tên component theo `PascalCase`, bắt đầu bằng tiền tố `Hn`.
- **LUÔN** export component bằng tên PascalCase.
- **LUÔN** sử dụng component ở template bằng `kebab-case` (cho các hướng dân - storybook).

## Ví dụ

Cách đặt tên chuẩn

```vue
<script setup lang="ts">
// components/button/button.vue
defineOptions({ name: 'HnButton' })
</script>
```

```ts
// components/button/index.ts
export { default as HnButton } from './button.vue'
```

```vue
<template>
  <hn-button>Click me</hn-button>
</template>

<script setup lang="ts">
// app.vue
import { HnButton } from './components/button'
</script>
```

Cách đặt tên không nên dùng

**Ví dụ**

```ts
defineOptions({
  name: 'button' // trùng tên với thẻ HTML, không có tiền tố `Hn`
})
```

```vue
<template>
  <!-- dùng PascalCase trong template -->
  <HnButton>Click me</HnButton>
</template>
```

Lý do nên dùng `kebab-case`:

- Nhất quán giữa các thẻ HTML và component.
- Hoạt động ở mọi nơi, phù hợp để làm ví dụ và hướng dẫn sử dụng.
