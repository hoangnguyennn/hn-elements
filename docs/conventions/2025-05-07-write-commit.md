# Quy ước đặt tên commit

- tác giả: hoangnguyennn

## Bối cảnh

Trong một thư viện UI, commit message cần rõ ràng và có cấu trúc thống nhất để:

- Dễ dàng đọc và hiểu lịch sử thay đổi.
- Hỗ trợ sinh changelog tự động nếu cần.
- Phân loại thay đổi để phục vụ kiểm tra, release, hoặc review code.
- Tương thích với công cụ CI/CD và quy trình làm việc chuyên nghiệp

## Quy tắc đặt tên

- **LUÔN** bắt đầu bằng `type(scope): message` theo định dạng [Conventional Commits](https://www.conventionalcommits.org/)
- **LUÔN** viết type bằng chữ thường.
- **LUÔN** viết mesage không viết hoa chữ cái đầu và không có dấu chấm ở cuối dòng đầu.
- **TUỲ CHỌN** thêm mô tả chi tiết ở body hoặc ghi chú breaking change ở phần footer.

## Cấu trúc

```txt
<type>(<scope>): <message>

[optional body]

[optional footer: BREAKING CHANGE, closes #...]
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

Commit đúng chuẩn

```txt
feat(button): add loading state
```

```txt
fix(rating): correct color when readonly
```

```txt
docs(button): add usage example to storybook
```

Commit không đúng chuẩn

```txt
Update button component     // Không có type và scope
Fix bug in rating.vue       // Viết hoa, thiếu cấu trúc chuẩn
button loading fix          // Thiếu type
```

## Lưu ý

- `scope` là tên component hoặc tên thư mục (ví dụ: `hn-button`, `hn-input`, ...)
- Có thể dùng nhiều dòng nếu cần mô tả thêm trong phần body (sau một dòng trống).
- `BREAKING CHANGE:` nên viết rõ lý do thay đổi ảnh hưởng behavior.

## Tài liệu tham khảo

- [Conventional Commits](https://www.conventionalcommits.org/)
