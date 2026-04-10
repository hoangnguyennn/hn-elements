import { expect, test } from '@playwright/test'

// Story ids: HnCalendar -> 'hncalendar--cover'

test('điều hướng tháng prev/next', async ({ page }) => {
  await page.goto('/iframe.html?id=hncalendar--cover')

  const header = page.getByRole('button', { name: 'Chọn tháng' })
  const initial = await header.textContent()

  await page.getByRole('button', { name: 'Tháng trước' }).click()
  const afterPrev = await header.textContent()
  expect(afterPrev).not.toBe(initial)

  await page.getByRole('button', { name: 'Tháng sau' }).click()
  const afterNext = await header.textContent()
  expect(afterNext).not.toBe(afterPrev)
})

test('chọn ngày trong tháng hiện tại', async ({ page }) => {
  await page.goto('/iframe.html?id=hncalendar--cover')

  // Chọn ngày 15 nếu tồn tại
  const dayBtn = page.getByRole('button', { name: /15-\d{2}-\d{4}/ })
  await dayBtn.first().click()
  await expect(dayBtn.first()).toHaveClass(/active/)
})
