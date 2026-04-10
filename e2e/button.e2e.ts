import { expect, test } from '@playwright/test'

// Story ids: HnButton -> 'hnbutton--cover'

test('click vào button hoạt động', async ({ page }) => {
  await page.goto('/iframe.html?id=hnbutton--cover')

  const button = page.getByRole('button', { name: 'Button' })
  await button.click()
  await expect(button).toBeVisible()
})

test('button disabled', async ({ page }) => {
  await page.goto('/iframe.html?id=hnbutton--disabled')

  const buttons = page.getByRole('button', { name: 'Button' })
  await expect(buttons.first()).toBeDisabled()
})
