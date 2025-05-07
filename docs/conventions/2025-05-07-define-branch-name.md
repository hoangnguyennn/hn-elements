# Quy ước đặt tên branch

- tác giả: hoangnguyennn

## Bối cảnh

Trong một dự án, việc đặt tên branch cần rõ ràng và nhất quán để:

- Dễ dàng nhận diện mục đích của nhánh (tính năng mới, sửa lỗi, refactor, ...).
- Tránh xung đột với các nhánh khác, đặc biệt trong các dự án lớn.
- Hỗ trợ việc theo dõi tiến độ và quản lý nhánh trong các công cụ như GitLab, GitHub, Bitbucket.
- Tương thích với CI/CD pipelines và giúp việc merge dễ dàng hơn.

## Quy tắc đặt tên

- **LUÔN** bắt đầu tên branch bằng type/ theo quy ước về loại thay đổi (`feat`, `fix`, `docs`, `refactor`, `test`, `chore`, ...).
- **LUÔN** sử dụng kebab-case cho toàn bộ tên branch, không có dấu cách.
- **LUÔN** dùng mô tả ngắn gọn sau dấu gạch nối để chỉ rõ mục đích hoặc phạm vi thay đổi.

## Cấu trúc

```txt
<type>/<scope>-<short-description>
```

## Các `type` phổ biến

| Type       | Ý nghĩa                                                             |
| ---------- | ------------------------------------------------------------------- |
| `feat`     | Thêm tính năng mới                                                  |
| `fix`      | Sửa lỗi                                                             |
| `refactor` | Thay đổi code không ảnh hưởng đến logic tính năng hoặc bug          |
| `style`    | Thay đổi định dạng (dấu cách, thụt đầu dòng, không ảnh hưởng logic) |
| `docs`     | Cập nhật tài liệu (README, comment, storybook, ...)                 |
| `test`     | Thêm hoặc sửa test                                                  |
| `chore`    | Thay đổi lặt vặt (cập nhật dependency, cấu hình, ...)               |
| `build`    | Thay đổi liên quan tới build system hoặc package                    |
| `ci`       | Cập nhật cấu hình CI/CD                                             |

## Ví dụ

Tên branch đúng chuẩn

```txt
feat/button-loading
```

```txt
fix/rating-color-bug
```

```txt
docs/guide-props-format
```

```txt
refactor/calendar-utils
```

```txt
chore/update-eslint-config
```

Tên branch không đúng chuẩn

```txt
new-feature         // Không rõ mục đích của tính năng mới
bugfix              // Mơ hồ, thiếu thông tin về lỗi cụ thể
test1               // Tên không có ý nghĩa, thiếu mô tả
feature-button      // Không theo chuẩn `feat/` và thiếu mô tả cụ thể
```

## Lưu ý

- **Scope** có thể là tên của component, module, hoặc tính năng cụ thể (ví dụ: button, rating, calendar, input, modal, ...). Nếu không có scope rõ ràng, có thể bỏ qua phần này.
- **Short-description** nên mô tả ngắn gọn nhưng đủ rõ ràng về thay đổi trong nhánh (dùng kebab-case).
- **Không sử dụng dấu cách** trong tên branch, thay vào đó dùng dấu gạch nối.
