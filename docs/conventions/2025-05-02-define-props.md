# Định nghĩa các prop

- tác giả: hoangnguyennn

## Bối cảnh

- Trong quá trình phát triển thư viện UI, đôi khi các prop như `type`, `value`, `disabled`, ... đã tồn tại trong các type có sẵn như `HTMLAttributes` hoặc `ButtonHTMLAttributes`. Tuy nhiên, **việc lấy các type trực tiếp từ các định nghĩa này có thể tiềm ẩn rủi ro**:
  - Có thể bị ảnh hưởng bởi thay đổi từ package `vue`, hoặc các package khác (nếu có) gây ra các bug ngầm.
  - Không thể mô tả rõ ràng ý nghĩa, phạm vi sử dụng, hay là giá trị mặc định của prop đó.
  - Khó bảo trì và gây khó hiểu khi đọc code.

Vì vậy, ta cần định nghĩa lại rõ ràng từng prop để:

- Chủ động kiểm soát API component.
- Giao tiếp tốt hơn với người sử dụng thông qua mô tả.
- Đảm bảo khả năng tương thích ngược (backward compatibility) khi các thư viện bên ngoài thay đổi.

## Quy tắc định nghĩa

- **KHÔNG** sử dụng trực tiếp các type từ `HTMLAttributes` và các interface con của nó như `ButtonHTMLAttributes`, ...
- **LUÔN** định nghĩa lại các prop một cách rõ ràng.
- **LUÔN** mô tả bằng JSDoc để ghi rõ ý nghĩa, giá trị cho phép và giá trị mặc định nếu có.

## Ví dụ

Cách mô tả chuẩn

```ts
type ButtonProps = {
  /** Loại button. */
  type?: 'button' | 'submit' | 'reset'
}
```

Cách mô tả không nên dùng

**Ví dụ 1:**

```ts
type ButtonProps = {
  // định nghĩa của các prop khác
} & ButtonHTMLAttributes
```

Lý do không nên dùng:

- Không biết rõ được các prop từ `ButtonHTMLAttributes` có những gì.

**Ví dụ 2:**

```ts
type ButtonProps = {
  // định nghĩa của các prop khác
} & Pick<ButtonHTMLAttributes, 'type'>
```

Lý do không nên dùng:

- Không mô tả được chức năng và giá trị mặc định (nếu có).

**Ví dụ 3:**

```ts
type ButtonProps = {
  /** Loại button. */
  type?: ButtonHTMLAttributes['type']
}
```

Lý do không nên dùng:

- Không kiểm soát được nếu thư viện bên ngoài cập nhật type.
