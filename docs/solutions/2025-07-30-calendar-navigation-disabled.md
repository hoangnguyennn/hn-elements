# Calendar Navigation Buttons Disabled State

## Vấn đề

Khi truyền `minDate` vào component `hn-calendar`, button di chuyển sang tháng trước vẫn hoạt động ngay cả khi đã đạt tới giới hạn `minDate`.

```vue
<hn-calendar :minDate="new Date()" />
```

## Nguyên nhân

Component `calendar.vue` không kiểm tra giới hạn `minDate` và `maxDate` khi xử lý các button điều hướng (prev/next). Các button này luôn cho phép di chuyển mà không quan tâm đến giới hạn đã được thiết lập.

## Giải pháp

### 1. Thêm computed properties để kiểm tra trạng thái disabled

Thêm hai computed properties `isPrevDisabled` và `isNextDisabled` vào component `calendar.vue`:

```typescript
/** Kiểm tra button prev có bị vô hiệu hóa không */
const isPrevDisabled = computed(() => {
  if (activePane.value === 'day') {
    // Kiểm tra tháng trước có vượt quá minDate không
    const prevMonth = activeDate.value.subtract(1, 'month')
    return internalMinDate.value && prevMonth.isBefore(internalMinDate.value, 'month')
  }

  if (activePane.value === 'month') {
    // Kiểm tra năm trước có vượt quá minDate không
    const prevYear = activeDate.value.subtract(1, 'year')
    return internalMinDate.value && prevYear.isBefore(internalMinDate.value, 'year')
  }

  if (activePane.value === 'year') {
    // Kiểm tra thập kỷ trước có vượt quá minDate không
    const prevDecade = activeDate.value.subtract(10, 'year')
    return internalMinDate.value && prevDecade.isBefore(internalMinDate.value, 'year')
  }

  return false
})

/** Kiểm tra button next có bị vô hiệu hóa không */
const isNextDisabled = computed(() => {
  if (activePane.value === 'day') {
    // Kiểm tra tháng sau có vượt quá maxDate không
    const nextMonth = activeDate.value.add(1, 'month')
    return internalMaxDate.value && nextMonth.isAfter(internalMaxDate.value, 'month')
  }

  if (activePane.value === 'month') {
    // Kiểm tra năm sau có vượt quá maxDate không
    const nextYear = activeDate.value.add(1, 'year')
    return internalMaxDate.value && nextYear.isAfter(internalMaxDate.value, 'year')
  }

  if (activePane.value === 'year') {
    // Kiểm tra thập kỷ sau có vượt quá maxDate không
    const nextDecade = activeDate.value.add(10, 'year')
    return internalMaxDate.value && nextDecade.isAfter(internalMaxDate.value, 'year')
  }

  return false
})
```

### 2. Cập nhật template để áp dụng disabled state

Thêm thuộc tính `:disabled` vào các button navigation:

```vue
<button
  class="hn-calendar--header-action left"
  aria-label="Prev"
  :disabled="isPrevDisabled"
  @click.prevent="handlePrevClick"
>
  <ico-arrow-left />
</button>

<button
  class="hn-calendar--header-action right"
  aria-label="Next"
  :disabled="isNextDisabled"
  @click.prevent="handleNextClick"
>
  <ico-arrow-right />
</button>
```

### 3. Cập nhật event handlers để kiểm tra trạng thái disabled

Thêm kiểm tra trạng thái disabled trước khi thực hiện di chuyển:

```typescript
const handlePrevClick = (): void => {
  if (isPrevDisabled.value) return
  // ... existing logic
}

const handleNextClick = (): void => {
  if (isNextDisabled.value) return
  // ... existing logic
}
```

### 4. Thêm CSS styles cho trạng thái disabled

Thêm styles cho trạng thái disabled trong `calendar.scss`:

```scss
.hn-calendar--header-action {
  // ... existing styles

  &:disabled {
    color: $color-disabled;
    cursor: not-allowed;

    &:hover {
      background-color: transparent;
    }
  }
}
```

### 5. Thêm test cases

Thêm các test cases để kiểm tra trạng thái disabled:

```typescript
it('Khi đang hiển thị bảng chọn ngày và đạt tới minDate, button prev sẽ bị disabled', () => {
  const minDate = new Date(2025, 0, 1) // 2025-01-01
  render(HnCalendar, { props: { minDate } })

  const prevButton = screen.getByRole('button', { name: 'Prev' })
  expect(prevButton).toBeDisabled()
})

it('Khi đang hiển thị bảng chọn ngày và đạt tới maxDate, button next sẽ bị disabled', () => {
  const maxDate = new Date(2025, 0, 31) // 2025-01-31
  render(HnCalendar, { props: { maxDate } })

  const nextButton = screen.getByRole('button', { name: 'Next' })
  expect(nextButton).toBeDisabled()
})
```

## Kết quả

- Button "Prev" sẽ bị vô hiệu hóa khi đạt tới `minDate`
- Button "Next" sẽ bị vô hiệu hóa khi đạt tới `maxDate`
- Logic hoạt động cho tất cả các pane (day, month, year)
- UI hiển thị trạng thái disabled rõ ràng với màu sắc và cursor phù hợp
- Test coverage đầy đủ cho các trường hợp

## Files đã thay đổi

- `src/components/calendar/calendar.vue`
- `src/assets/styles/calendar.scss`
- `src/components/calendar/index.test.ts`
