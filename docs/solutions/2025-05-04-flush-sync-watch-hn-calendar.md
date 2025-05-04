# Sử dụng `flush: 'sync'` trong `watch` để đảm bảo emit trước khi `hn-calendar` unmount

- tác giả: hoangnguyennn

## Bối cảnh

Trong component `hn-calendar`, khi người dùng chọn ngày, component sẽ emit 2 sự kiện:

- `update:modelValue` để cập nhật giá trị ra bên ngoài
- `change` để thông báo cho người dùng rằng đã chọn xong ngày và component có thể đóng lại (ví dụ trong trường hợp sử dụng nó trong `hn-date-picker`)

Tuy nhiên, khi chọn ngày thì component đã bị `unmounted` ngay sau khi emit `change`. Điều này khiến cho `watch(modelValue)` không kịp thực thi và không emit `update:modelValue`, dẫn tới là lỗi dữ liệu không được cập nhật đúng ra bên ngoài.

## Nội dung cụ thể

Giải pháp được lựa chọn là sử dụng `flush: 'sync'` trong watch như sau:

```ts
watch(modelValue, value => emit('update:modelValue', value?.toDate()), { flush: 'sync' })
```

Lý do:

- `flush: 'sync'` đảm bảo rằng `watch` chạy ngay lập tức khi `modelValue` thay đổi, trước khi component bị `unmount`.
- Giải pháp này giữ được tính tách biệt giữa logic cập nhật dữ liệu và logic xử lý sự kiện UI (`handleChangeDate`)

## Phương án không được chọn

**Giải pháp thay thế 1**: Chuyển logic `emit('update:modelValue')` vào `handleChangeDate`

Điều này vẫn đảm bảo rằng sự kiện `update:modelValue` xảy ra trước sự kiện `change`. Tuy nhiên, nó làm lẫn lộn giữa việc xử lý sự kiện, 1 hàm nhưng lại emit ra 2 sự kiện, gây chồng chéo logic.

**Giải pháp thay thế 2**: Dùng `computed` với `set/get` thay vì `ref` với `watch`

Dù hoạt động tốt và phản ứng ngay lập tức, nhưng làm thay đổi cách xử lý `modelValue` hiện tại. Ngoài ra, nó sẽ làm component không thể tương tác được nếu không truyền `v-model` vào component.
