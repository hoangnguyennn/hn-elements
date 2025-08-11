import { expect, test } from '@playwright/test'

// Story ids: HnTextarea -> 'hntextarea--cover'

test('có thể nhập text vào textarea và phản ánh value', async ({ page }) => {
  await page.goto('/iframe.html?id=hntextarea--cover')

  const textarea = page.getByRole('textbox')
  await textarea.click()
  await textarea.fill('test text')
  await expect(textarea).toHaveValue('test text')
})

test('counter cập nhật khi nhập text', async ({ page }) => {
  // Dùng story Counter để có sẵn showCounter
  await page.goto('/iframe.html?id=hntextarea--counter')

  const textarea = page.getByRole('textbox')
  await textarea.click()
  await textarea.fill('hello')

  await expect(page.getByText('5')).toBeVisible()
})
