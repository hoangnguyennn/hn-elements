import { expect, test } from '@playwright/test'

// Story ids: HnInput -> 'hninput--cover'

test('nhập text vào input', async ({ page }) => {
  await page.goto('/iframe.html?id=hninput--cover')

  const input = page.getByRole('textbox')
  await input.click()
  await input.fill('test text')
  await expect(input).toHaveValue('test text')
})

test('clearable xóa nội dung', async ({ page }) => {
  await page.goto('/iframe.html?id=hninput--clearable')

  const input = page.getByRole('textbox')
  await input.fill('test')
  await input.hover()
  const clearBtn = page.getByRole('button', { name: /xóa nội dung/i })
  await clearBtn.click()
  await expect(input).toHaveValue('')
})

test('toggle password', async ({ page }) => {
  await page.goto('/iframe.html?id=hninput--password')

  const input = page.getByRole('textbox')
  const toggle = page.getByRole('button', { name: /ẩn mật khẩu/i })

  await expect(input).toHaveAttribute('type', 'password')
  await toggle.click()
  await expect(page.getByRole('button', { name: /hiện mật khẩu/i })).toBeVisible()
  await expect(input).toHaveAttribute('type', 'text')
})
