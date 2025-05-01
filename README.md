## HnElements

Các element của Hn

## Mục tiêu

Dự án được xây dựng với mục tiêu chứng minh năng lực xây dựng component hệ thống và khả năng tái sử dụng UI, không tập trung vào thiết kế nguyên bản.
Hiện tại design sử dụng được lấy từ https://www.figma.com/community/file/1067847732339602315.

Trong tương lai, thư viện có thể hỗ trợ nhiều giao diện hơn và tích hợp với design system của riêng mình.

### Tạo component mới

```bash
# Chạy lệnh sau để tạo component mới
node tools/create-component/index.js -n COMPONENT_NAME

#
# Sau khi chạy xong, trong folder `src/components`
# sẽ có một folder tương ứng với tên component được truyền vào lệnh ở trên
#
# Ví dụ: node tools/create-component/index.js -n button
#
```

### Components

**Đã hoàn thành**

- [x] avatar
- [x] button
- [x] calendar
- [x] checkbox
- [x] collapse
- [x] date-picker
- [x] icon
- [x] icon-button
- [x] input
- [x] popover
- [x] progress
- [x] radio
- [x] rate
- [x] slider
- [x] switch
- [x] tabs
- [x] textarea

**Đang phát triển**

**Todo**

- [ ] badge
- [ ] breadcrumb
- [ ] combobox
- [ ] modal
- [ ] notification
- [ ] pagination
- [ ] select
- [ ] table
- [ ] tooltip
