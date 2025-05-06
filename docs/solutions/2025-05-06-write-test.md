# Hướng dẫn viết script kiểm thử

- tác giả: hoangnguyennn

## Bối cảnh

Trong quá trình phát triển ứng dụng Vue, việc kiểm thử (testing) các thành phần giao diện người dùng (UI components) là một phần quan trọng để đảm bảo ứng dụng hoạt động đúng đắn và ổn định. Hai thư viện phổ biến cho kiểm thử UI Vue là `@testing-library/vue` và `@vue/test-utils`. Cả hai đều cung cấp các công cụ để giúp việc viết test dễ dàng hơn, nhưng chúng có những khác biệt nhất định trong cách tiếp cận và các tính năng hỗ trợ.

## Nội dung cụ thể

### @testing-library/vue

`@testing-library/vue` là một thư viện được phát triển dựa trên nguyên lý của Testing Library, nhấn mạnh vào việc kiểm thử từ góc độ người dùng (user-centric testing). Nó giúp viết test đơn giản và dễ đọc, tập trung vào hành vi của ứng dụng thay vì chi tiết về cách thức hoạt động của nó.

**Ưu điểm**:

- **Tập trung vào hành vi người dùng**: Thư viện giúp mô phỏng hành vi thực tế của người dùng, giúp kiểm tra các tương tác với ứng dụng (click, nhập liệu, điều hướng...).
- **Gần gũi với thực tế**: Tests không kiểm tra các chi tiết về cách thức hoạt động của component mà thay vào đó là cách người dùng sẽ tương tác với ứng dụng.
- **Tính tương thích cao**: Được thiết kế để hoạt động tốt với các công cụ và thư viện kiểm thử khác như Jest, Mocha.

**Nhược điểm**:

- **Khó kiểm tra các chi tiết kỹ thuật**: Vì tập trung vào hành vi người dùng, việc kiểm tra các chi tiết bên trong component (như kiểm tra state, props) có thể không dễ dàng.
- **Tùy chỉnh hạn chế**: Không hỗ trợ một số tính năng tùy chỉnh nâng cao như `@vue/test-utils`.

### @vue/test-utils

`@vue/test-utils` là thư viện chính thức của Vue, cung cấp API để kiểm thử các component Vue. Nó cho phép kiểm tra cả hành vi của người dùng và chi tiết về cách thức hoạt động bên trong component.

**Ưu điểm**:

- **Hỗ trợ kiểm tra chi tiết**: Dễ dàng kiểm tra các state, props, lifecycle hooks của component.
- **Tính tùy chỉnh cao**: Cung cấp các công cụ mạnh mẽ để tùy chỉnh việc kiểm thử, như mount component với các options khác nhau, mock các hàm hoặc module.
- **Cộng đồng lớn và tài liệu đầy đủ**: Là thư viện chính thức của Vue nên được hỗ trợ mạnh mẽ và có nhiều tài liệu, ví dụ.

**Nhược điểm**:

- **Cách tiếp cận ít chú trọng vào hành vi người dùng**: Thư viện chủ yếu kiểm tra các chi tiết kỹ thuật của component hơn là cách người dùng tương tác với chúng.
- **Cảm giác "gần gũi" với mã nguồn**: Cách tiếp cận có thể khiến test trở nên phức tạp và dễ dàng dẫn đến việc viết test không phù hợp với thực tế sử dụng.

## Kết luận

> The more your tests resemble the way your software is used, the more confidence they can give you.

Tạm dịch là: "Các bài kiểm thử càng mô phỏng sát cách người dùng thực sự sử dụng phần mềm thì bạn càng có thể yên tâm về độ tin cậy của phần mềm đó."

Với triết lý của `@testing-library/vue` ở trên, tôi quyết định chọn `@testing-library/vue` cho các bài test vì tôi ưu tiên kiểm tra hành vi người dùng trong ứng dụng, giúp viết các bài kiểm tra dễ đọc và dễ bảo trì.

Mặc dù `@vue/test-utils` có nhiều tính năng mạnh mẽ cho việc kiểm tra chi tiết của component, nhưng đối với dự án của tôi, việc viết test dễ hiểu và mô phỏng cách người dùng tương tác sẽ mang lại lợi ích lớn hơn.

## Hướng dẫn viết script sử dụng `@testing-library/vue`

**Mục tiêu**

Khi viết script theo hướng người dùng, chúng ta muốn mô phỏng hành vi thực tế của người dùng và kiểm tra các tương tác mà họ sẽ thực hiện trên giao diện người dùng (UI). Điều này bao gồm việc tương tác với các phần tử như button, input, form và các sự kiện khác.

**Các bước viết script theo hướng người dùng**

**1. Render component và xác nhận sự tồn tại của phần tử**

- Đảm bảo rằng các phần tử như button, form, hoặc các notification hiển thị đúng cách.

```ts
import { render, screen } from '@testing-library/vue'
import MyComponent from './components/MyComponent.vue'

test('hiển thị nút bấm "Gửi"', () => {
  render(MyComponent)
  expect(screen.getByRole('button', { name: 'Gửi' })).toBeInTheDocument()
})
```

**2. Mô phỏng hành vi người dùng**

- Sử dụng `userEvent` để mô phỏng hành vi như click, nhập vào input hoặc select.

```ts
import userEvent from '@testing-library/user-event'

test('click vào nút "Gửi"', async () => {
  render(MyComponent)
  const button = screen.getByRole('button', { name: 'Gửi' })
  await userEvent.click(button)
  expect(screen.getByText('Biểu mẫu đã được gửi')).toBeInTheDocument()
})
```

**3. Kiểm tra trạng thái thay đổi**

- Sau khi người dùng tương tác, kiểm tra trạng thái thay đổi trên UI, như thông báo, giá trị ô input hoặc điều hướng trang.

```ts
test('hiển thị thông báo khi form được gửi', async () => {
  render(MyComponent)
  await userEvent.click(screen.getByRole('button', { name: 'Gửi' }))
  expect(screen.getByText('Biểu mẫu đã được gửi')).toBeInTheDocument()
})
```

**4. Kiểm tra sự kiện (emit)**

- Nếu component phát ra sự kiện khi người dùng tương tác, mình cũng có thể kiểm tra sự kiện đó.

```ts
test('emit sự kiện "submit" khi nút "Gửi" được click', async () => {
  const { emitted } = render(MyComponent)
  await userEvent.click(screen.getByRole('button', { name: 'Gửi' }))
  expect(emitted().submit).toHaveLength(1)
})
```

**5. Kiểm tra class hoặc attribute của phần tử**

- Kiểm tra các class hoặc attribute của phần tử là cách tuyệt vời để xác minh rằng component đã hiển thị đúng với các prop được truyền vào.

_Ví dụ_: Kiểm tra xem một component có sử dụng class hoặc attribute đúng chưa khi truyền prop vào.

```ts
test('component có class "active" khi prop "isActive" là true', async () => {
  render(MyComponent, { props: { isActive: true } })
  const button = screen.getByRole('button', { name: 'Submit' })
  expect(button).toHaveClass('active')
})

test('input có attribute "disabled" khi prop "isDisabled" là true', async () => {
  render(MyComponent, { props: { isDisabled: true } })
  const input = screen.getByRole('textbox')
  expect(input).toHaveAttribute('disabled')
})

test('component hiển thị đúng giá trị prop "aria-label"', async () => {
  render(MyComponent, { props: { label: 'My label' } })
  const input = screen.getByRole('textbox')
  expect(input).toHaveAttribute('aria-label', 'My label')
})
```

Ở đây, mình có thể thấy rằng việc kiểm tra các class và attribute của phần tử sẽ giúp mình xác minh rằng UI đã được cập nhật đúng với giá trị prop được truyền vào, đồng thời giúp đảm bảo tính tương thích của các yếu tố UI với các tiêu chuẩn accessibility (như `aria-label`).
